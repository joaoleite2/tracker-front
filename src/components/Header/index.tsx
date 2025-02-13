import React from 'react'
import { HeaderContainer } from './style'

interface PropsType{
  title:string
}

const Header:React.FC<PropsType> = (props) => {
  return(
    <HeaderContainer>
      <h2>{props.title}</h2>
    </HeaderContainer>
  )
}

export default Header