import { FC } from 'react'
import { MainStyled } from '../styled';
import { DroppableType } from '../types';
import { Droppable, Draggable } from 'react-beautiful-dnd'


type DroppableTablesProps = {
    droppableInfo: DroppableType
}

const DroppableTables: FC<DroppableTablesProps> = ({ droppableInfo }) => {
    const { cards, droppableId, title } = droppableInfo[0]

    const checkLengthText = (text: string): string => text.length > 18 ? text.substring(0, 18) : text
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
                                    {checkLengthText(item.title)}
                                    <MainStyled.ImageCard src={item.cardIcon} />

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