import styled from "styled-components";

export const FolderContainer = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  gap: .1rem;
  user-select: none;
  padding: 1rem;
  border-radius: .5rem;
  transition: background .1s;
  #text{
    margin-left: .6rem;
    font-size: .9rem;
  }
  &:hover{
    background-color: #383838;
  }
`