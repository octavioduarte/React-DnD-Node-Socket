import styled from 'styled-components'
import { DragDropContext, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd'


const Container = styled.div`
    text-align: center;
    margin-top: 90px;
`

const DroppableStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "#e8dbdb" : "#e8dbdb",
    padding: '15px 20px',
    width: 250
})

const DraggableStyle = (_isDragging: boolean, draggableStyle: DraggingStyle | NotDraggingStyle | undefined) => ({
    backgroundColor: "#fff",
    borderRadius: "3px",
    boxShadow: "0 1px 0 rgb(9 30 66 / 25%)",
    cursor: "pointer",
    display: "block",
    ...draggableStyle,
    height: '55px',
    marginBottom: "8px",
    maxWidth: "300px",
    minHeight: "20px",
    padding: '20px 0',
    textDecoration: "none",
});

const ContainerDnD = styled.div`
    padding: 15px 55px
`


export const MainStyled = {
    Container,
    ContainerDnD,
    DraggableStyle,
    DroppableStyle
}