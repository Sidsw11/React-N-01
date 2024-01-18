const appHeading = React.createElement ("h1",{id:"heading"},"Hare Krishna from App.js using CDN links");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(appHeading);

const example01 = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"H1 inside div 2 inside div1")));
const root01= ReactDOM.createRoot(document.getElementById("root"));
root01.render(example01);

const example02= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"sibling"},"Sibling_01"),React.createElement("h2",{id:"sibling"},"Sibling_02")]))
const root02 = ReactDOM.createRoot(document.getElementById("root"));
root02.render(example02);