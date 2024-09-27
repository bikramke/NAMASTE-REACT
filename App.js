const parent=React.createElement("div", {id:"parent"}, 
    [React.createElement("div",{id:"child"}, [React.createElement("h1",{}, "i am a h1 tag")
,React.createElement("h2",{}, "i am tag h2")]),

React.createElement("div",{id:"child"}, [React.createElement("h1",{}, "i am a h3 tag")
    ,React.createElement("h2",{}, "i am tag h4")]),

]);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

 