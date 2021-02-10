import { FC } from 'react'
import { MainStyled } from '../styled'
import ReactLoading from "react-loading";



const LoadingTemplate: FC = () =>
(
    <MainStyled.ContainerLoading>
        <ReactLoading type={'spin'} />
    </MainStyled.ContainerLoading>
)

export default LoadingTemplate
