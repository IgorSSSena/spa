import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  display: grid;
  cursor: context-menu;
  justify-content: start;
  background: ${(props) => props.color};
  grid-template-columns: repeat(auto-fit, minmax(16.6666%, 6fr));
  width: 100%;
  :hover {
    background-color: #a9a9a9;
    cursor: context-menu;
    //border: #
  }
`;

export const DivInfo = styled.div`
  border: 1px solid #a9a9a9;
  display: flex;
  flex-direction: column;
  cursor: context-menu;
  justify-content: center;
`;

export const DivCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center !important;
  width: 100%;
  justify-content: center;
`;