import React from 'react'
import { ItemOfList, StyledLink, StyledListOfItems } from './style'
import { foldersMock } from '../../../../mock.tests'
import { useParams } from 'react-router'

interface PropsType {
  mockIndex:number
}

const ItemsOfFolders:React.FC<PropsType> = (props) => {
  const { mockIndex } = props
  const { id } = useParams()
  
  return(
    <StyledListOfItems>
      {foldersMock[mockIndex].item.map((item, index) => 
      <StyledLink to={`/component/${item.id}`} key={index}>
        <ItemOfList className={Number(id) === item.id ? 'actived' : ''}>{item.name}</ItemOfList>
      </StyledLink>
      )}
    </StyledListOfItems>
  )
}

export default ItemsOfFolders