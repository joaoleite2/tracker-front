import React from 'react'
import Header from '../../components/Header'
import { useParams } from 'react-router'

const ItemOfFolderScreen:React.FC = () => {
  const { id } = useParams()
  
  return(
    <>
      <Header title={String(id)} />
    </>
  )
}

export default ItemOfFolderScreen