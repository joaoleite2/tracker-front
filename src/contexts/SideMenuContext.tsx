import React, { createContext, useState } from 'react'

interface SideMenuContextInterface {
  activeds:number[]
  setActiveds:React.Dispatch<React.SetStateAction<number[]>>
  refresh:boolean
  setRefresh:React.Dispatch<React.SetStateAction<boolean>>
  openDropdownItemId:number
  setOpenDropdownItemId:React.Dispatch<React.SetStateAction<number>>
  createFile:{folderId:number, fileName:string}
  setCreateFile:React.Dispatch<React.SetStateAction<{folderId:number, fileName:string}>>
}

export const SideMenuContext = createContext<SideMenuContextInterface>({
  activeds:[],
  setActiveds:() => {},
  refresh:false,
  setRefresh:() => {},
  openDropdownItemId:0,
  setOpenDropdownItemId:() => {},
  createFile:{fileName:'',folderId:0},
  setCreateFile:() => {}
})

export const SideMenuProvider:React.FC<any> = ({children}) => {
  const [ activeds, setActiveds ] = useState<number[]>([])
  const [ refresh, setRefresh ] = useState<boolean>(false)
  const [ openDropdownItemId, setOpenDropdownItemId ] = useState<number>(0)
  const [ createFile, setCreateFile ] = useState<{folderId:number, fileName:string}>({fileName:'',folderId:0})

  return(
    <SideMenuContext.Provider
      value={{
        refresh,
        setRefresh,
        activeds,
        setActiveds,
        openDropdownItemId,
        setOpenDropdownItemId,
        createFile,
        setCreateFile
      }}
    >
      {children}
    </SideMenuContext.Provider>
  )
}