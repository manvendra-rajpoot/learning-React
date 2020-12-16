import React from 'react';
import ReactDOM from 'react-dom';

//stateless fuctional component
//always return something
// function Greeting(){
//   return (
//     <div>
//       <h1>This is Manvendra Rajpoot</h1>
//     </div>
//   )
// }

const  Greeting = () => {
  return React.createElement('div',{},React.createElement('h1',{},'This is Manu!'));
};

ReactDOM.render(<Greeting/>, document.getElementById('root'));