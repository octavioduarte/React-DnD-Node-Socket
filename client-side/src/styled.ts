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
    width: '300px'
})

const DraggableStyle = (_isDragging: boolean, draggableStyle: DraggingStyle | NotDraggingStyle | undefined) => ({
    backgroundColor: "#fff",
    borderRadius: "3px",
    boxShadow: "0 1px 0 rgb(9 30 66 / 25%)",
    cursor: "pointer",
    display: "flex",
    ...draggableStyle,
    height: 'auto',
    justifyContent: 'space-between',
    marginBottom: "15px",
    maxWidth: "300px",
    minHeight: "20px",
    padding: '20px 10px',
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

const ImageCard = styled.img`
    border-radius: 50%;
    flex-grow: 0;
    height: 45px;
    margin-top: 25px;
    margin-right: 8px;
    flex-shrink: 0;
    width: 45px;
`

const ContainerLoading = styled.div`
    margin: 150px auto 0;
`

const ImageError = styled.img`
    height: 180px;
`

const ContainerImageError = styled.div`
    display: grid;
    margin-top: 80px;
`

const TitleError = styled(TitleDroppable)`
    color: #fff;
    font-size: 12px;
    font-style: inherit;
    line-height: 1.2;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
`

const ContainerCardContent = styled.div`
    justify-content: space-between
`

const UserName = styled.p`
    color: #6b778c;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase
`

const TitleCard = styled(UserName)`
    color: #060110ad;
    font-size: 18px;
    font-weight: 300;
    text-transform: initial
`


export const MainStyled = {
    Container,
    ContainerCardContent,
    ContainerDnD,
    ContainerImageError,
    ContainerLoading,
    DraggableStyle,
    DroppableStyle,
    ImageCard,
    ImageError,
    TitleCard,
    TitleDroppable,
    TitleError,
    UserName
}