

/*
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm Bhushan Chouhan from Maheshwar")
  )
);
===> this above code is creating React Element using proper Code React.


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/



// React.createElement will create an Object but when we render this Element into DOM then becomes a HTML Element and displyed into browser.

// React can be written without JSX as well, 
// JSX is a syntax extension for JavaScript that looks similar to XML or HTML.
// It allows us to write HTML-like code within JavaScript, making it easier to create and manage React components.
// JSX is not required to use React, but it makes the code more readable and easier to understand.
// JSX is transpiled to JavaScript using tools like Babel before being executed in the browser.
// Merge HTML and JavaScript togather => JSX
// ==> JSX is not HTML inside JavaScript 
// ===> JSX is HTML or XML like syntax inside JavaScript



---------
// JSX (transpiled before it reaches the JS Engine(browser) ) manages by PARCEL, and also more on this PARCEL dose not do transpilation by itself it gives this responsibility to the !!!!!!!.Babel.!!!!!!!
// Babel is package, nuild by PARCEL, which is used to transpile the code from JSX to JS.
// Babel is JS Compiler
//Babel not created by Facebook.
const jsxHeading = <h1 id="heading"> Namaste React Using JSX </h1>
// JSX => React.CreateElement => ReactElement- JS Object => HTMLElement(rendered).
// browser dose not understand JSX, this not pure JavaScript
// jsx not a pure javascript
// but React can understand JSX
//babel is aka transpiler
## working of babel => creates an AST (Abstract Syntax Tree) dose some tokinization then converted to react core systaxual what js Engine understang write?
// JSx uses camelCase that is the reason this is not HTML
## writing whole code inside the (just to lt babel know that where jsx start and ends if and only if you are using multiple lines)
//REACT Componenet
// two Ways
// react class based Componenet (uses js classes) OLD
// react functional Componenet (uses js funcitons) NEW 
// js function which return react element (transpiled to again by babel into the react core componenet) iut becomes functional component  
//

import React from "react";
import ReactDOM from "react-dom/client"; 


//React Element
const heading = (
    <h1 id="heading" className="head">
        Namastxce React Using JSX
    </h1>
);
console.log(heading);
const Title = () => (
    <h1 className="head" tabIndex="4">
        React using JSX
    </h1>
);

//React Funcitonal Component 
const HeadingComponent = () => (
    <div id="Container">
        <Title />
        {/* // component inside component -> component composition -> compisite component into one another */}

        <h1> Hello React Functional Component </h1>
    </div>
)

//shorthand
const HeadingShortHand = () => <h1 className="Headinging "> Hello shorthand</h1>


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>);

//// we can composite component into element and an element in component also into a varibale 
pracatice import React from "react";
import ReactDOM from "react-dom/client"; 

//React Element
const heading = (
    <h1 id="heading" className="head">
        Namastxce React Using JSX
    </h1>
);
console.log(heading);

const ele = <span>This is span</span>

const Title = () => (
    <div>
        <h2 className="head" tabIndex="4">
            { ele}
            React using JSX
        </h2>
        {heading}
    </div>
);

//React Funcitonal Component 
const HeadingComponent = () => (
    <div id="Container">
        <Title />
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


//jsx take cares of an injections attacks if any api get some suspecious data into our component or elmenet jsx will skip it 
how this works explain ?????????????????????????????????
// basically jsc will senitise any pice of code you passd in {} or an component but how ????? explain ?????