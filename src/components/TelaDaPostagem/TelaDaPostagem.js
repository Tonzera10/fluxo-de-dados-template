import React from 'react'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = ({url, descricao, titulo}) => {
  return (
    (url && descricao && titulo ? 
    <ContainerPostagem>
            <h1>{titulo}</h1>
            <Image src={url} alt='drone view'/>
            <Description>{descricao}</Description>
    </ContainerPostagem>
    :
    <ContainerPostagem>
            <h1>Grêmio Football Porto Alegrense</h1>
            <Image src={"https://i.pinimg.com/474x/22/4b/93/224b930d88f275dcf092540a07d2dc29.jpg"} alt='drone view'/>
            <Description>{"Tricolor dos Pampas"}</Description>
    </ContainerPostagem>
      )
  )
}

export default TelaDaPostagem