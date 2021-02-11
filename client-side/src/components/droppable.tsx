import { FC } from 'react'
import { MainStyled } from '../styled';
import { DroppableType } from '../types';
import { Droppable, Draggable } from 'react-beautiful-dnd'


type DroppableTablesProps = {
    droppableInfo: DroppableType
}

const DroppableTables: FC<DroppableTablesProps> = ({ droppableInfo }) => {
    const { cards, droppableId, title } = droppableInfo[0]

    const checkLengthText = (text: string): JSX.Element => <MainStyled.TitleCard>{text.length > 24 ? text.substring(0, 24) : text}</MainStyled.TitleCard>
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
                                    title={item.title}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={MainStyled.DraggableStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                    )}
                                >

                                    {checkLengthText(item.title)}
                                    <MainStyled.ContainerCardContent>
                                        <MainStyled.ImageCard src={item.cardIcon} />
                                        <MainStyled.UserName>{item.user}</MainStyled.UserName>
                                    </MainStyled.ContainerCardContent>
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