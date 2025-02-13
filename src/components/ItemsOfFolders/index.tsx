import React from 'react'
import { ItemOfList, StyledListOfItems } from './style'

const ItemsOfFolders:React.FC = () => {
  return(
    <StyledListOfItems>
      <ItemOfList>Curso</ItemOfList>
      <ItemOfList>Testes</ItemOfList>
      <ItemOfList>Provas</ItemOfList>
      <ItemOfList>Provastestando 123</ItemOfList>
    </StyledListOfItems>
  )
}

export default ItemsOfFolders