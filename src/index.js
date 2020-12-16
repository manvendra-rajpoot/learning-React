import React from 'react';
import ReactDOM from 'react-dom';

//JSX RULES --->
//return single element, div/section/article or fragment, 
//use camelCase for html attribute, className instead for class
//close every element
//formatting

function Greeting(){
  return (
    <React.Fragment>
      <h1>This is Manvendra Rajpoot</h1>
      <div className="app">
        <h5>Hi I am  Manvendra</h5>
      </div>
    </React.Fragment>
  )
}



ReactDOM.render(<Greeting/>, document.getElementById('root'));