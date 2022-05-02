import { Nav } from "./Nav";

export function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="header__block">
                <h6 className="header__logo">LOGO</h6>
                <Nav></Nav>
                </div>
            </div>
        </header>
    );
}
