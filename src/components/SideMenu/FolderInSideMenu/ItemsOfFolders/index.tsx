import React from 'react'
import { ItemOfList, StyledListOfItems } from './style'
import { foldersMock } from '../../../../mock.tests'

interface PropsType {
  mockIndex:number
}

const ItemsOfFolders:React.FC<PropsType> = (props) => {
  const { mockIndex } = props  
  
  return(
    <StyledListOfItems>
      {foldersMock[mockIndex].item.map((item, index) => 
        <ItemOfList key={index}>{item.name}</ItemOfList>
      )}
    </StyledListOfItems>
  )
}

export default ItemsOfFolders