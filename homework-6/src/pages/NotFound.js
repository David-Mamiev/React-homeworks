import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <div className="App">
            <h1>PAGE NOT FOUND =(</h1>
            <p>Sorry, you need to go to <Link to="/"> home page </Link></p>
        </div>
    )
}