import { Component } from "react";
import { nanoid } from "nanoid";
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledField, LabelTitle, AddButton } from "./ContactForm.styled";

const FormSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').required('Required'),
    number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Please use the format 111-22-33').required('Required'),
});

export class ContactForm extends Component {

    nameId = nanoid();
    telephoneId = nanoid();

  render() {
      const { onAdd } = this.props;
        return (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
    }}
    validationSchema={FormSchema}
      onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
      }}
    >
      <StyledForm>
        <LabelTitle>Name</LabelTitle>
        <StyledField id={this.nameId} name="name" placeholder="Jane" />
        <ErrorMessage name="name" />

        <LabelTitle>Number</LabelTitle>
        <StyledField id={this.telephoneId} name="number" placeholder="111-22-33" />
        <ErrorMessage name="number" />        
        
        <AddButton type="submit">Add contact</AddButton>
      </StyledForm>
    </Formik>
  </div>
        )
    }
}