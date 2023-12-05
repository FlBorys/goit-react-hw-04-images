import { ButtonDiv, OnButton } from "./Button.styled"

export function Button({ onClick }) {

    return (
    <ButtonDiv>
<OnButton type='button' onClick={onClick}> Load more</OnButton> 
</ButtonDiv>)
}