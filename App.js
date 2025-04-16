/*
<div id="parent">
    <div id="child">
        <div>

        </div>
    </div>
</div>
ReactElement is an Object  => further then it will be converted to HTML thata browser understands
*/


const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "I'm an h1 tag")
        // there can be multiple childer but again you have to mentioned them in an array for example" [React.createElement("",{}, ""), React.createElement("",{}, ""), React.createElement("",{}, "") ]
    )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); 


// const heading = React.createElement(
//     'h1',
//     {id: "heading", xyz: "abc"},
//     'Hello Wrold From React');
// // {} plae where we give the attributes 
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); 