import { Paragraph } from "./Paragraph";

export function Main() {
    return (
        <section className="main">
            <div className="container">
                <h1 className="main__title">This is main title!</h1>
                <div className="main__text">
                <Paragraph></Paragraph>
                <Paragraph></Paragraph>
                <Paragraph></Paragraph>
                </div>    
            </div>

        </section>
    )
}