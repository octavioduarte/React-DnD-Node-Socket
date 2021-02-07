import { FC } from 'react'
import { MainStyled } from '../styled';
import { DroppableType } from '../types';
import { Droppable, Draggable } from 'react-beautiful-dnd'


type DroppableTablesProps = {
    droppableInfo: DroppableType
}

const DroppableTables: FC<DroppableTablesProps> = ({ droppableInfo }) => {
    const { cards, droppableId, title } = droppableInfo[0]

    return (
        <Droppable droppableId={droppableId.toString()}>
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={MainStyled.DroppableStyle(snapshot.isDraggingOver)}
                >
                    <MainStyled.TitleDroppable>{title}</MainStyled.TitleDroppable>
                    {cards.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
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
                                    {item.title}
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default DroppableTables