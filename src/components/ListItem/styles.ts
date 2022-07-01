import styled from "styled-components";

type ListContainerProps = {
  done: boolean;
};

export const ListItemContainer = styled.div(
  ({ done }: ListContainerProps) =>
    `
    margin: 0 auto;
    display: flex;
    background: #423a6f;
    padding: 0.625rem;
    border-radius: 0.625rem;
    margin-bottom: 0.625rem;
    align-items: center;
    max-width:980px;
    border: 1px solid #423a6f;
    
  
    input {
      width: 1.5625rem;
      height: 1.5625rem;
      margin-right: 0.3125rem;
    }
  
    label {
      color: #ccc;
      text-decoration: ${done ? "line-through" : "initial"};
      font-family: sans-serif;
    }`
);
