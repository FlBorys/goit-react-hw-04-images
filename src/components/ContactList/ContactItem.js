import { ContactInfo, DeleteButton } from "./ContactItem.styled";

export const ContactItem = ({ name, number, onDelete }) => {
  return (
    <>
      <ContactInfo>{name} {number} </ContactInfo> <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </>
  );
}