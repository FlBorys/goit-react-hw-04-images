import { ContactItem } from "./ContactItem";
import { StyledList ,StyledItem } from "./ContactIList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <StyledList>
            {contacts.map(({ id, name, number }) => (<StyledItem key={id}>
                <ContactItem is={id} name={name} number={number} onDelete={() => onDeleteContact(id)} /> </StyledItem>))}
        </StyledList>
    )
}