import { FC } from 'react'
import rickErrorImage from '../images/rick_error.png'
import { MainStyled } from '../styled'


const ErrorTemplate: FC = () => (
    <MainStyled.ContainerImageError>
        <MainStyled.ImageError src={rickErrorImage} alt="Error image with Rick from Rick and Morty" />
        <MainStyled.TitleError>Ocorreu um erro</MainStyled.TitleError>
    </MainStyled.ContainerImageError>
)

export default ErrorTemplate