import styled from "styled-components";

export const FolderContainer = styled.div`
  user-select: none;
  padding: 1rem;
  border-radius: .5rem;
  &:hover{
    background-color: #1F1F1F;
  }
`

export const FolderItem = styled.div`
  cursor: pointer;
  display: flex;
  color: rgba(255, 255, 255, .6);
  align-items: center;
  gap: .1rem;
  &.actived{
    color: #fff;
  }
  #text{
    margin-left: .6rem;
    font-size: .9rem;
  }
`