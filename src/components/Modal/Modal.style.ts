import styled from "styled-components";

export const StyledModal = styled.div`
  width: 350px;
  min-height: 200px;
  max-height: 715px;
  padding: 20px 30px;
  background-color: white;
  border-radius: 10px;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledInput = styled.input`
  outline: none;
  background: transparent;
  border: transparent;
  font-size: 18px;
  border-bottom: 1px solid #1976d2;
  padding: 10px 0 5px;
  width: 100%;
`;
