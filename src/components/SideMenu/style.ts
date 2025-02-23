import styled from "styled-components";

export const SideContainer = styled.div`
  background-color: #1C1C1C;
  width: 20rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const FoldersNavigation = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction:column;
  gap: 1rem;
  flex: 1;
  overflow: hidden;
`

export const SideMenuTitle = styled.h2`
  color: #fff;
`

export const CreateFolder = styled.div`
  color:rgba(255, 255, 255, .6);
  font-size: 1.2rem;
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, .6);
  width: 100%;
  gap: 1rem;
  padding: 0 .2rem;
  padding-bottom: .5rem;
`

export const FoldersDivContainer = styled.div`
  overflow-y: auto;
  flex: 1;
  max-height: 100%;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    transition: background 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`
