import styled from "styled-components";

export const AddAreaContainer = styled.div`
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  max-width: 980px;
  .plusButton {
    margin-right: 5px;
  }
  .addNewTaskInput {
    border: 0px;
    background: transparent;
    font-size: 1.5rem;
  }
  .addNewTaskInput:focus {
  }
`;
