import ReactDOM from "react-dom"
import React from "react"
import Header from "./Header"
 

const App = ()=>{
  return <div>
   <Header/>
  </div>
}

// It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will run.

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(<App/>);

// In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
