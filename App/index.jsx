import React from 'react';
import ReactDOM from 'react-dom'; // attaches react app to html5
import './index.css'; // styling for body

const options = {
  brandName: '',
  imgHeaderSrc: '',
  articles: [
    {title: "title1", text: "What ou should use our product"},
    {title: "title1", text: "What ou should use our product"},
    {title: "title1", text: "What ou should use our product"}
  ]
}

function App () {
  return <div>React Express Lite</div>
}

//what this looks like not using a compiler. Add the React.createElement line and pass in 3 things
// function App (props){
//   return <div>Hello {props.name}</div>
// }

//for all React elements, can only have one element, not two...so must wrap in ONE element like a <main> tag
function App (props) {
  return (
    <main>
      <nav>
        <a>{propers.brandName})</a>
        </nav>

        <img src = {props.imgHeaderSrc} />
    </main>
)}


//code loop through the array of objects using a helper function
//if you want to use another function inside another component, create a utilities.jsx file and export the code in there. Then import the code where you want to use it. ex. import {functionName} from './utilities'

// import {functionName} from './utilities' //ES6 syntax
// var renderArticles = require('./utilties').renderArticles; //ES5 syntax

const renderArticles = (articles) =>{
  articles.map((article) => {
    return (
      <article>
    )
  })
}




ReactDOM.render(<App brandName={options.brandName} imgHeaderSrc={options.imgHeaderSrc} articles={options.articles}/>, document.querySelector('.app'));
