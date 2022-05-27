import {useState, useEffect} from "react";

let countF = 1;

export function Constans (props) {
    const [list, setList] = useState([{test: 1}]);
    useEffect(() => {
        console.log("Hello from UseEffect");
    }, [list]);


    // setTimeout(() => {
    //     setList([...list, {test: ++countF}],);
    // })
    
    return(
        <>
            <h2>{props.title}</h2>
            <ul>
                {list.map((item, index) => (<li key={index}>{item.test}</li>))}
            </ul>
        </>
    )
}
