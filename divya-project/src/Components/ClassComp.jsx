// --------------------------------------------------------------------------------------------------------------->
// using setState to change the values in the html elements on dom

// import React, { Component } from 'react'

//  class ClassComp extends Component {
//     // using state in class component
//     state={name:"divya", age:23}
//     //changing the state using setState method
//     changeState =()=>{
//         this.setState(
//             {name:"Divyashree Mallarapu"}
//         )
//     }
//   render() {
//     return (
//       <div>
//       /*accessing the state using this keyword*/
//         <h1>I am {this.state.name}</h1>
//         <p>My age is {this.state.age}</p>
//       /*changing the state using button and onClick event*/
//         <button onClick={this.changeState}>Click To Change Name</button>
//       </div>
//     )
//   }
// }

// export default ClassComp

// --------------------------------------------------------------------------------------------------------------->
// subscribe or unsubscribed through content

// import React, { Component } from 'react'

// class ClassComp extends Component {
//    click =()=>{
//     this.setState(
//       {body:"Thank you for subscribing",button:"UnSubscribe"}
//     )
//   }

//   state={body:"Please subscribe to my channel",button:"Subscribe"}
//   render() {
//     return (
//       <div>
//         <h1>{this.state.body}</h1>
//         <button onClick={this.click}>{this.state.button}</button>
//       </div>
//     )
//   }
// }

// export default ClassComp

// --------------------------------------------------------------------------------------------------------------->
// Indian cricket team image passing and changing through states

// import React, { Component } from "react";

// class ClassComp extends Component {
//   India = () => {
//     this.setState(
//       { name: "This is Indain Cricket Team", img: "india.jpeg" }
//     );
//   };
//   Rcb = () => {
//     name: "This is Ipl Team - RCB", img: "rcb.jfif" });
//   };
//   Kholi = () => {
//     this.setState({
//       name: "This is Kholi - Indian Cricketer",
//       img: "kholi.jpg",
//     });
//   };
//   state = { name: "welcome to Indian cricket world", img: "welcome.jpg" };

//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <img src={this.state.img} alt="image loading......." /><br /><br />

//         <button onClick={this.India}>India</button>
//         <button onClick={this.Rcb}>RCB</button>
//         <button onClick={this.Kholi}>Kholi</button>
//       </div>
//     );
//   }
// }

// export default ClassComp;

// --------------------------------------------------------------------------------------------------------------->
//Subscribe or subscribed image

// import React, { Component } from "react";

// class ClassComp extends Component {
//   clicked = () => {
//     this.setState({ img: "subscribed.jpg", body: "Subscribed" });
//   };

//   state = { img: "subscribe.webp", body: "Subscribe" };
//   render() {
//     return (
//       <div>
//         <img src={this.state.img} alt="" />
//         <button onClick={this.clicked}>{this.state.body}</button>
//       </div>
//     );
//   }
// }

// export default ClassComp;

// --------------------------------------------------------------------------------------------------------------->
// Count Increment and Decrement, Reset

// import React, { Component } from 'react'

// class ClassComp extends Component {

//   increment = ()=>{
//     this.setState({count:this.state.count+1})
//   }

//   decrement = ()=>{
//     this.setState({count:this.state.count-1})
//   }
//   reset =()=>{
//     this.setState({count:0})
//   }

//   state={count:0}
//   render() {
//     return (
//       <div>
//         <h1>Count:{this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//         <button onClick={this.reset}>Reset</button>

//       </div>
//     )
//   }
// }

// export default ClassComp
// --------------------------------------------------------------------------------------------------------------->
// Toggle Text
// Toggle text between Welcome and Good Bye using state.
// Background Color Change
// Change background color from white to yellow on button click

// import React, { Component } from 'react'

// class ClassComp extends Component {
//     toggle=()=>{
//         this.setState({body:"Good Bye",bgc:"yellow",clr:"black"})
//     }
//     state={body:"Welcome",bgc:"black",clr:"white"}
//   render() {
//     return (
//       <div>
//         <h1 style={{backgroundColor:this.state.bgc,color:this.state.clr}}>{this.state.body}</h1>
//         <button onClick={this.toggle}>Toggle</button>
//       </div>
//     )
//   }
// }

// export default ClassComp
// --------------------------------------------------------------------------------------------------------------->
// Hide and Show Paragraph
// Hide/show paragraph using boolean state.

// import React, { Component } from 'react'

// class ClassComp extends Component {
//     hiding=()=>{

//         if(this.state.btn==="Show"){
//             return this.setState({para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, minima!",btn:"Hide"})
//         }
//         if(this.state.btn==="Hide"){
//             return this.setState({para:"",btn:"Show"})
//         }

//     }
//     state={para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, minima!",btn:"Hide"}
//   render() {
//     return (

//       <div>
//         <p>{this.state.para}</p>
//         <button onClick={this.hiding}>{this.state.btn}</button>
//       </div>

//     )
//   }
// }

// export default ClassComp
// --------------------------------------------------------------------------------------------------------------->
// import React, { Component } from 'react'

// class ClassComp extends Component {
//     updating=()=>{
//         this.setState({name:"Divyashree Mallarapu",status:"Your full name is updated"})
//     }
//     state={name:"Divya",status:""}
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h4>{this.state.status}</h4>
//         <button onClick={this.updating}>Update</button>
//       </div>
//     )
//   }
// }

// export default ClassComp
// --------------------------------------------------------------------------------------------------------------->
// Like Button
// Increase likes count every time button is clicked.
// import React, { Component } from 'react'

// class ClassComp extends Component {
//     count=()=>{
//         this.setState({count:this.state.count+1})
//     }
//     state={count:0}
//   render() {
//     return (
//       <div>
//         <h1>Likes:{this.state.count}</h1>
//         <button onClick={this.count}>Like</button>
//       </div>
//     )
//   }
// }

// export default ClassComp

// --------------------------------------------------------------------------------------------------------------->
// Input Field State
// Display typed input using state

// import React, { Component } from 'react'

// class ClassComp extends Component {

//     change=(data)=>{
//         this.setState({content:data.target.value})
//     }
//     submitted=()=>{
//         this.setState({sub:this.state.content})
//     }
//     state={content:'',sub:""}
//   render() {
//     return (

//       <div>
//         <input type="text" placeholder='Enter your name' value={this.state.content} onChange={this.change}/> <br /><br />
//         <button onClick={this.submitted}>Submit</button>
//         <h1>{this.state.sub}</h1>

//       </div>
//     )
//   }
// }

// export default ClassComp
// --------------------------------------------------------------------------------------------------------------->
// Multiple State Values
// Store name, age, and course. Update only age.

// import React, { Component } from "react";
// class ClassComp extends Component {
//   change = (data) => {
//     this.setState({ content: data.target.value });
//   };
//   update=()=>{
//     this.setState({age:this.state.content})
//   }

//   state = {
//     name: "Divyashree Mallarapu",
//     age: 22,
//     course: "BE in Artificail Intelligence and Machine Learning",
//     content: "",
//   };

//   render() {

//     return (
//       <div>
//         <h2>{this.state.name}</h2>
//         <h2>{this.state.age}</h2>
//         <h2>{this.state.course}</h2>
//          <input   type="text"  placeholder="Enter Age"  value={this.state.content} onChange={this.change}/>
//         <button onClick={this.update}>Update Age</button>
//       </div>
//     );
//   }
// }
// export default ClassComp;
// --------------------------------------------------------------------------------------------------------------->
// Even or Odd Checker
// Check whether number is even or odd.

// import React, {Component} from 'react'

// class ClassComp extends Component{

//     change=(data)=>{
//         if(data.target.value%2===0){
//         this.setState({value:data.target.value, content:"Even", body:"is"})
//         }else{
//         this.setState({value:data.target.value, content:"Odd", body:"is"})
//         }

//     }

//     state={content:"",value:""}
//     render(){
//         return (
//             <div>
//                 <input type="text" placeholder="Enter Number" value={this.state.value} onChange={this.change}  /><br /> <br />

//                 <h1>{this.state.value} {this.state.body} {this.state.content}</h1>
//             </div>
//         )
//     }
// }
// export default ClassComp
// --------------------------------------------------------------------------------------------------------------->
// Font Size Increase
// Increase font size on every click.

// import React, { Component } from 'react'

// class ClassComp extends Component {
//   size=()=>{
//     this.setState({font:this.state.font+1})
//   }

//   state={content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos molestias cupiditate deleniti officiis assumenda architecto, totam quasi saepe tenetur.",font:16}
//   render() {
//     return (
//       <div>
//         <p style={{fontSize:this.state.font}}>{this.state.content}</p>
//         <button onClick={this.size}>Click</button>
//       </div>
//     )
//   }
// }

// export default ClassComp
// --------------------------------------------------------------------------------------------------------------->
// Light ON / OFF
// Toggle light state.

// import React, { Component } from 'react'

// export class ClassComp extends Component {
// clicktoggle=()=>{
//     if(this.state.status=="BulbOFF")
//     this.setState({src:'bulboff.jfif',content:"Bulb is OFF",status:"BulbON"})
//    if(this.state.status=="BulbON")
//     this.setState({src:'bulbon.jfif',content:"Bulb is ON",status:"BulbOFF"})
// }

// state={src:"",content:"",status:"BulbOFF"}
//   render() {
//     return (
//       <div>
//         <img src={this.state.src} alt="" />
//         <h1>{this.state.content}</h1>
//         <button onClick={this.clicktoggle}>{this.state.status}</button>
//       </div>
//     )
//   }
// }

// export default ClassComp

// --------------------------------------------------------------------------------------------------------------->
// // Login / Logout Button
// // Toggle button text between Login and Logout.

// import React, { Component } from "react";

// class ClassComp extends Component {
//   click = () => {
//     if(this.state.content==="LogOFF"){
//         this.setState({body:"Logged IN", content: "LogIN" });
//     }
//     if(this.state.content==="LogIN"){
//         this.setState({body:"Logged Off", content: "LogOFF" });
//     }
//   };

//   state = {content:"LogIN" ,body:""};
//   render() {
//     return (
//       <div>
//         <h1>{this.state.body}</h1>
//         <button onClick={this.click}>{this.state.content}</button>
//       </div>
//     );
//   }
// }

// export default ClassComp;
// --------------------------------------------------------------------------------------------------------------->
// Character Counter
// Count number of characters typed

// import React, { Component } from 'react'

// class ClassComp extends Component {

//   count=(data)=>{
//         this.setState({Count:data.target.value.length, value:data.target.value})
//   }

//   state={value:"",Count:0}
//   render() {
//     return (
//       <div>
//         <input type="text" value={this.state.value} placeholder='Enter Character' onChange={this.count}/>
//         <h1>{this.state.Count}</h1>
//       </div>
//     )
//   }
// }

// export default ClassComp
// --------------------------------------------------------------------------------------------------------------->
// // Dynamic Greeting
// // Display greeting using input name.

// import React, { Component } from "react";

// class ClassComp extends Component {
//   changed = (data) => {
//     this.setState({ value: data.target.value });
//   };
//   click = () => {
//     this.setState({ content: this.state.value, wish: "Hello " });
//   };
//   state = { value: "", wish: "" };
//   render() {
//     return (
//       <div>
//         <input type="text" value={this.state.value} onChange={this.changed} />
//         <button onClick={this.click}>submit</button>
//         <h1>{this.state.wish}{this.state.content}</h1>
//       </div>
//     );
//   }
// }

// export default ClassComp;
// --------------------------------------------------------------------------------------------------------------->
// Array in State
// Store fruits array and add new fruit
// import React, { Component } from "react";

// class ClassComp extends Component {

// change=(data)=>{
// this.setState({value:data.target.value})
//   }

//   clicked=()=>{
//      this.setState({fruits:[
//        ...this.state.fruits,
//         this.state.value
//       ],
//       value: ""
//   })
//   }
//   state={fruits :["Apple", "Mango"],value:""}
//   render (){

//   return (
//     <div>
//       <h1>List of Available fruits</h1>
//       <ol>{
//        this.state.fruits.map((data, index) => {
//         return <li key={index}>{data}</li>
//       })
//       }</ol>

//       <input type="text" placeholder="Add fruit" value={this.state.value} onChange={this.change}/>
//       <button onClick={this.clicked}>Add Fruit</button>
//     </div>
//   );
//    }
// };

// export default ClassComp;
// --------------------------------------------------------------------------------------------------------------->
// // Todo List
// // Add todos dynamically using state array

// import React, { Component } from "react";

// class ClassComp extends Component {
//   WorkVal = (data) => {
//     this.setState({ work: data.target.value });
//   };

  
//   Timeval = (data) => {
//     this.setState({ Time: data.target.value });
//   };

//  addTodo=()=>{
//     this.setState({
//       todo:[
//         ...this.state.todo,
//         {
//           work:this.state.work,
//           Time:this.state.Time
//         }
//       ],

//       work:"",
//       Time:""
//     })

//   }

//   state = {
//     work: "",
//     Time: "",
//     todo: [],
//   };
//   render() {
//     return (
//       <div>
//         <h1>My To-Do List</h1>
//         <ol>
//           {this.state.todo.map((e, index) => {
//             return (<li key={index}>
//               {e.work}-{e.Time}
//             </li>)
//           })}
//         </ol>
//         <input
//           type="text"
//           placeholder="Add Work"
//           value={this.state.work}
//           onChange={this.WorkVal}
//         />

//         <input
//           type="text"
//           placeholder="Add Time"
//           value={this.state.Time}
//           onChange={this.Timeval}
//         />
//         <button onClick={this.addTodo}>Add To-Do</button>
//       </div>
//     );
//   }
// }

// export default ClassComp;

// --------------------------------------------------------------------------------------------------------------->      

// import React, { Component } from 'react'

// class ClassComp extends Component {

//   submit = () => {
//     this.setState({
//       disabled: true
//     })
//   }

//   state = {
//     disabled: false
//   }

//   render() {
//     return (
//       <div>

//         <button
//           onClick={this.submit}
//           disabled={this.state.disabled}
//         >
//           {this.state.disabled
//             ? "Button disabled"
//             : "Submit"}
//         </button>

//       </div>
//     )
//   }
// }

// export default ClassComp
