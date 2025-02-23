import styled from "styled-components";

export const SideContainer = styled.div`
  background-color: #1C1C1C;
  width: 20rem;
  height: 100%;
`

export const FoldersNavigation = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction:column;
  gap: .2rem;
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

export const InputData = styled.input`
  flex: 1;
  outline: none;
  border: none;
  height: 1.8rem;
  padding: 0 .5rem;
  border-radius: .3rem;
  background-color: #282828;
  color: #fff;
  visibility: hidden;
  
  &.visible{
    visibility: visible;
  }
`