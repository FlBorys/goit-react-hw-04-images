import styled from "styled-components";

export const FilterContainer = styled.div`
display: flex;
gap: 10px;
`;

export const FilterLabel = styled.label`
color: #4CAF50;
`;

export const FilterInput = styled.input`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const FilterButton = styled.button`
  background-color: #f5ff00;
  color: black;
  border: none;
  border-radius: 4px;
  &: hover {
  background-color: #ff7700;}
`;