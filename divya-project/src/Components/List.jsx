// ------------------------------------------------------------------------------------------------------------------------------->
// displaying list 
// import React from 'react'

// let List = () => {
//     let students=["divya","adarsh","boomi","gamya","sahasra","joshi"]
//   return (
//     <div>
//         <ul>
//             {students.map((x,index)=>{
//                 return <li key={index}>{x}</li>
//             })}
//         </ul>      
//     </div>
//   )
// }

// export default List

// ------------------------------------------------------------------------------------------------------------------------------->
// displaying objects
// import React from 'react'

// let List = () => {
//     let students =[{id:1,name:"divya",course:"mern"},{id:2,name:"bhuvana",course:"python"},{id:3,name:"shwetha",course:"java"},{id:4,name:"roshan",course:"aiml"},{id:5,name:"afnan",course:"pfs"},{id:6,name:"boomi",course:"jfs"}]
//   return (
//     <div>
//       <ul>
//         {students.map((x)=>{
//             return <li key={x.id}>{x.name}-{x.course}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default List;

// ------------------------------------------------------------------------------------------------------------------------------->
// displaying even and odd number list
// import React from 'react'

// let List = () => {
//     let num = [1,2,3,4,5,6,7,8,9]
//   return (
//     <div>
//         <h1>even numbers</h1>
//         {num.map((x, index)=>{
//             if(x%2==0){
//                 return <li key={index}>{x}</li>
//             }
//         })
//         }
//         <h1>odd numbers</h1>
//         {
//             num.map((x, index)=>{
//             if(x%2!=0){
//                 return <li key={index}>{x}</li>
//             }
//         })
//         }
      
//     </div>
//   )
// }

// export default List

// ------------------------------------------------------------------------------------------------------------------------------->
// displaying pass or fail studnts from the marks
// let List = () => {
//     let students =[{id:1,name:"divya",course:"mern", marks:65},{id:2,name:"bhuvana",course:"python", marks:46},{id:3,name:"shwetha",course:"java", marks:67},{id:4,name:"roshan",course:"aiml", marks:58},{id:5,name:"afnan",course:"pfs", marks:89},{id:6,name:"boomi",course:"jfs", marks:92},{id:7,name:"hopless",course:"mern", marks:15}]
//   return (
//      <div>
//       <ul>
//         <h1>Passed Students</h1>
//         {students.map((x, index)=>{
//             if (x.marks>=35){
//                 return <li key={index}>{x.name}</li>
//             }
//         })}
//         <h1>Failed Students</h1>
//         {students.map((x, index)=>{
//             if (x.marks<35){
//                 return <li key={index}>{x.name}</li>
//             }
//         })}
//       </ul>
//     </div>
//   )
// }

// export default List;