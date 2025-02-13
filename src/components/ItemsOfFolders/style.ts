import styled from "styled-components";

export const StyledListOfItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: .8rem;
  padding: .8rem 2.4rem;
  margin-left: .5rem;
  margin-top: .2rem;
  border-left: 1px solid rgba(255, 255, 255, .2);
`

export const ItemOfList = styled.li`
  cursor: pointer;
  color: rgba(255, 255, 255, .6);
`