import styled from "styled-components";
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const StyledField = styled(Field)`
width: 200px;
  padding: 10px 18px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const LabelTitle = styled.label`
color: #4CAF50;
font-weight: bold;
`;

export const AddButton = styled.button`
  width: 200px;
  background-color: #4CAF50;
  color: white;
  padding: 12px 18px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
