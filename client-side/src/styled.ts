import styled from 'styled-components'
import { DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd'


const Container = styled.div`
    text-align: center;
    margin-top: 90px;
`

const DroppableStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "#6a9cad" : "#32535f",
    borderRadius: '15px',
    margin: '0 25px',
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
    height: 'auto',
    marginBottom: "8px",
    maxWidth: "300px",
    minHeight: "20px",
    padding: '20px 0',
    textDecoration: "none",
});

const ContainerDnD = styled.div`
    display: flex; 
    justify-content: center;
    margin: 20px 0;
`

const TitleDroppable = styled.p`
    color: #fff;
    font-size: 20px;
    font-style: inherit;
    line-height: 1.2;
    font-weight: 500;
    margin: 10px 0 15px;
    text-align: left;
    text-transform: uppercase;
    `

const TitleApp = styled.h3`
    color: #fff;
    font-size: 30px;
    text-trasnform: uppercase;
` 


export const MainStyled = {
    Container,
    ContainerDnD,
    DraggableStyle,
    DroppableStyle,
    TitleApp,
    TitleDroppable
}