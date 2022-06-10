export default function Header() {
    return (
        <div className="container">
            <div className="header">
            <div className="header__name-block">
                <h1 className="header__title">Contacts Book</h1>
                <p className="header__name">made by David</p>
            </div>
            <a
                href="https://github.com/David-Mamiev"
                rel="noreferrer"
                target="_blank"
                className="header__link"
            >
                My GitHub Account
            </a>
            </div>
        </div>
    )
}