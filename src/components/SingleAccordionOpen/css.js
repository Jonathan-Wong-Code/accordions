import styled from "styled-components";

export const AccordionBody = styled.div`
  width: 100%;
  outline: none;
  border: 1px solid black;
`;

export const AccordionButton = styled.button`
  padding: 8px 16px;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: all 0.2s ease;
`;
