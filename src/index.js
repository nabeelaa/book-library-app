import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //render react component
import './index.css';
import Library from "./Library"
// import App from './App';
// import * as serviceWorker from './serviceWorker';

let bookList = [
    { "title": "The Sun Also Rise", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "Harry Potter", "author": "J. K Rowling", "pages": 540 },
    { "title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 },
    { "title": "White Teeth", "author": "Zadie Smith", "pages": 480 }
]

//render component
ReactDOM.render(
    <Library books={bookList} />,
    // <FavoriteColorForm />,
    document.getElementById('root')
)

// store data
// let skiData = {
//     total: 50,
//     powder: 20,
//     backcountry: 10,
//     goal: 100
// }

// const getPercent = decimal => {
//     return decimal * 100 + '%'
// }
// const calcGoalProgress = (total, goal) => {
//     return getPercent(total/goal)
// }

// const SkiDayCounter = ({total, powder, backcountry, goal}) => {
//     return (
//         <section>
//             <div>
//                 <p>Total Days : {total}</p>
//             </div>
//             <div>
//                 <p>Powder Days : {powder}</p>
//             </div>
//             <div>
//                 <p>Backcountry Days : {backcountry}</p>
//             </div>
//             <div>
//                 <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
//             </div>
//         </section>
//     )
// }

// //render component
// ReactDOM.render(
//     <SkiDayCounter
//     total = {skiData.total}
//     powder ={skiData.powder}
//     backcountry = {skiData.backcountry}
//     goal = {skiData.goal}
//     />,
//      document.getElementById('root')
//  )



// create component
// class SkiDayCounter extends Component {
//     getPercent = decimal => {
//         return decimal * 100 + '%'
//     }
//     calcGoalProgress = (total, goal) => {
//         return this.getPercent(total/goal)
//     }

//     render(){
//         const {total, powder, backcountry, goal} = this.props
//         return (
//         <section>
//             <div>
//                 <p>Total Days : {total}</p>
//             </div>
//             <div>
//                 <p>Powder Days : {powder}</p>
//             </div>
//             <div>
//                 <p>Backcountry Days : {backcountry}</p>
//             </div>
//             <div>
//                 <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
//             </div>
//         </section>
//         )
//     }
// }


// create component
// class Message extends React.Component {
//     render (){
//         return (
//             <div>
//                 <h1>Hello Everyone </h1>
//             </div>
//         )
//     }
// }

// create component
// class Message extends React.Component {
//     render (){
//         console.log(this.props)
//         return (
//             <div>
//                 <h1 style={{color: this.props.color}}>
//                 {this.props.msg} 
//                 </h1>
//                 <p>I'll check back in {this.props.minutes} minutes</p>
//             </div>
//         )
//     }
// }

// var style = {
//     backgroundColor: 'Orange',
//     color: 'white',
//     fontFamily: 'Arial'
// }

// react element
// const title = React.createElement(
//     'ul',
//     {id: 'title', className: 'header', style: style},
//     'Hello World'
// )

// const title = React.createElement(
//     'ul',
//     {id: 'title', className: 'header', style: style},
//     React.createElement(
//         'li',
//         {},
//         'item on our list'
//     )
// )

// JSX - use HTML tags
// ReactDOM.render(
//     <div style = {style}><h1>Hello World</h1>
//     <p>We're glad you're here!</p>
//     </div>,
//     document.getElementById('root')
// )

// //render component
// ReactDOM.render(
//    <Message color="blue" msg="how are you?" minutes={5}/>,
//     document.getElementById('root')
// )