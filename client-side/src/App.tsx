import { FC, useState } from 'react';
import { MainStyled } from './styled'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';



type ItemsList = {
  content: string;
  id: string;
}

const getData = (quantity: number) => Array.from({ length: quantity }, (_v, k) => k).map(k => ({
  id: `item-${k}`,
  content: `item ${k}`
}));

const App: FC = () => {
  const [items, setItems] = useState(getData(10))

  const reorder = (list: ItemsList[], startIndex: number, endIndex: number): ItemsList[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };


  const onDragEnd = (result: DropResult) => {

    if (!result.destination) {
      return;
    }

    const organizedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(organizedItems)
  }

  return (
    <>
      <h1>Hello</h1>
      <MainStyled.ContainerDnD>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={MainStyled.DroppableStyle(snapshot.isDraggingOver)}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={MainStyled.DraggableStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </MainStyled.ContainerDnD>
    </>
  )
}



export default App;
