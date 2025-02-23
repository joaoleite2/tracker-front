import styled from "styled-components";

export const MoreOptionsDropDownContainer = styled.ul`
  position: absolute;
  right: 0rem;
  top: .6rem;
  z-index: 1;
  background-color: #1C1C1C;
  list-style: none;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-direction: column;
  user-select: none;
`

export const OptionItem = styled.li`
  display: flex;
  cursor: pointer;
  gap: .5rem;
  align-items: center;
  font-size: .85rem;
  color: rgba(255, 255, 255, .6);
  padding: 1rem 1.2rem;

  &:hover{
    background-color: #1F1F1F;
  }
`