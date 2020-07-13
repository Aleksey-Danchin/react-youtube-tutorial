import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Clock extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: "Текущее время",
      date: new Date,
      counter: 0
    }

    setInterval(() => {
      this.setState((state, props) => ({
        date: new Date,
        counter: state.counter + 1
      }))
    }, 1000)
  }

  render () {
    return (
      <div>
        <p>{this.state.title}</p>
        <p>{this.state.counter}</p>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

// function Clock () {
//   const [state, setState] = useState({
//     title: "Текущее время",
//     date: new Date
//   })

//   setInterval(() => setState({
//     title: "Текущее время",
//     date: new Date
//   }))

//   return (
//     <div>
//       <p>{state.title}</p>
//       <p>{state.date.toLocaleTimeString()}</p>
//     </div>
//   )
// }


ReactDOM.render(
  <Clock />,
  document.querySelector('#root')
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
