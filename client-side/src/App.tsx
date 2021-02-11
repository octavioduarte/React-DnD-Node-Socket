import { get } from './api/index'
import { MainStyled } from './styled';
import DroppableView from './components/droppable'
import LoadingTemplate from './components/loadingGif'
import ErrorTemplate from './components/errorTemplate'
import { FC, useEffect, useState } from 'react';
import { DroppableType, DraggableType, RequestStatus } from './types';
import { DragDropContext, DraggableLocation, DropResult } from 'react-beautiful-dnd';
import { socketConnection } from './socketConnection'


const App: FC = () => {
  const [columns, setColumns] = useState<DroppableType[]>([])
  const [statusRequest, setStatusRequest] = useState<RequestStatus>(RequestStatus.fetching)
  
  const reorder = (list: DraggableType[], startIndex: number, endIndex: number): DraggableType[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };


  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;


    const cardsFromColumnSource: DraggableType[] = columns[sInd][0].cards;
    const cardsFromColumnDestination: DraggableType[] = columns[dInd][0].cards;

    if (sInd === dInd) {
      const items = reorder(cardsFromColumnSource, source.index, destination.index);
      const newState = [...columns];
      newState[sInd][0].cards = items;
      setColumns(newState);
    } else {
      const result = move(cardsFromColumnSource, cardsFromColumnDestination, source, destination);
      const newState = [...columns];
      newState[sInd][0].cards = result[sInd];
      newState[dInd][0].cards = result[dInd];

      setColumns(newState.filter((group) => group.length));
    }
    socketConnection.emit('update card position', columns)
  }


  const move = (source: DraggableType[], destination: DraggableType[], droppableSource: DraggableLocation, droppableDestination: DraggableLocation) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {
      [droppableSource.droppableId]: sourceClone,
      [droppableDestination.droppableId]: destClone
    };

    return result;
  };


  const fetchTasks = async () => {
    setStatusRequest(RequestStatus.fetching)
    const { data } = await get({ url: '/tasks/get' })
    const { tasks, success } = data;
    if (success) {
      const formattedData = tasks.map((task: any) => {
        return [{
          cards: task.cards,
          droppableId: task.droppableId,
          title: task.title
        }]
      })
      setColumns(formattedData)
      setStatusRequest(RequestStatus.success)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])


  socketConnection.on('event updates cards', (cardsPosition: any) => {
    setColumns(cardsPosition)
  })


  const renderContent = (): JSX.Element | JSX.Element[] => {
    if (statusRequest === RequestStatus.success) {
      return columns.map((droppable, key) => (
        <DroppableView droppableInfo={droppable} key={key} />
      ))
    } else if (statusRequest === RequestStatus.fetching) {
      return <LoadingTemplate />
    }
    return <ErrorTemplate />
  }


  return (
    <MainStyled.ContainerDnD>
      <DragDropContext onDragEnd={onDragEnd}>
        {renderContent()}
      </DragDropContext>
    </MainStyled.ContainerDnD>
  )
}



export default App;
