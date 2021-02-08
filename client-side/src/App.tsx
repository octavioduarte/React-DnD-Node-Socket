import { FC, Fragment, useEffect, useState } from 'react';
import { MainStyled } from './styled';
import { DroppableType, DraggableType } from './types';
import { Droppable as Tables } from './mock/fake-data'
import DroppableTables from './components/droppable'
import { DragDropContext, DraggableLocation, DropResult } from 'react-beautiful-dnd';
import { socketConnection } from './socketConnection'


const App: FC = () => {
  const [columns, setColumns] = useState<DroppableType[]>([])
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




  useEffect(() => {
    if (Tables && !columns.length) {
      setColumns(Tables)
    }
  }, [columns])


  useEffect(() => {
    socketConnection.on('connect', () => {
      console.log('connection established')
    })
  }, [])




  return (
    <>
      <MainStyled.TitleApp>Joblins</MainStyled.TitleApp>
      <MainStyled.ContainerDnD>
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.length ?
            columns.map((droppable, key) => (
              <Fragment key={key}>
                <DroppableTables
                  droppableInfo={droppable}
                />
              </Fragment>
            ))
            : <h1>Carregando dados ...</h1>}
        </DragDropContext>
      </MainStyled.ContainerDnD>
    </>
  )
}



export default App;
