import React from "react";
import ReactDOM from "react-dom/client"; 

//React Element
const heading = (
    <h1 id="heading" className="head">
        Namastxce React Using JSX
    </h1>
);
console.log(heading);

const ele = <span>This is span</span>

const data = 1000;
const Title = () => (
    <div>
        <h2 className="head" tabIndex="4">
            { ele}
            React using JSX
            {data}
        </h2>
        {heading}
    </div>
);

//React Funcitonal Component 
const HeadingComponent = () => (
    <div id="Container">
        <Title />
        {Title()}
        <Title></Title>
        {/* can write any js code inside {} yohooo  */}
        {/* // component inside component -> component composition -> compisite component into one another */}
        <HeadingShortHand/>
        <h1> Hello React Functional Component </h1>
    </div>
)

//shorthand
const HeadingShortHand = () => <h1 className="Headinging "> Hello shorthand</h1>


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>);
