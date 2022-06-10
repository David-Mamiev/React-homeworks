import ContactItem from "./ContactItem";

export default function ListContacts({ filterList, state, onDelete, onChangeFirstName, onChangeLastName, onChangeNumber, onSubmit, modalActive, onClickEditButton }) {
    return (
        <ul className="phone-book">
            {filterList(state).map((contact) => {
                return <ContactItem
                    key={contact.id}
                    item={contact}
                    onDelete={onDelete}
                    onClickEditButton={onClickEditButton}
                />
            })}
        </ul>
    )
}