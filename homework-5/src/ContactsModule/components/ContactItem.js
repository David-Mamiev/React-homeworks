export default function ContactItem(props) {
    return(
        <li className="phone-book__item">
            <div className="phone-book__left">
                <div className="phone-book__image"></div>
                <div className="phone-book__text-block">
                    <h5 className="phone-book__name">{props.item.name}</h5>
                    <p className="phone-book__number">{props.item.number}</p>
                </div>
            </div>
            <div className="phone-book__right">
                <div className="phone-book__change">✍️</div>
                <div className="phone-book__delete">🗑</div>
            </div>
        </li>
    )
}