import ContactItem from "./ContactItem";

export default function ListContacts({ filterList, state, onDelete, onChangeFirstName, onChangeLastName, onChangeNumber, onSubmit, modalActive, onClickEditButton }) {
    return (
        <ul className="phone-book">
            {filterList(state).map((contact) => (
                <ContactItem
                    key={contact.id}
                    item={contact}
                    onDelete={onDelete}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeNumber={onChangeNumber}
                    onSubmit={onSubmit}
                    modalActive={modalActive}
                    onClickEditButton={onClickEditButton}
                />
            ))}
        </ul>
    )
}