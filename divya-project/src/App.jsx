// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Login from "./Components/Login";
// import Class from "./Class";
// import Usestate from "./Components/Usestate";
// import  FetchDataList from "./Components/FetchDataList"
// import FetchDataTable from "./Components/FetchDataTable";
// import Signup from "./Components/Signup";

import FetchProducts from "./Components/FetchProducts";



const App = () => {
  return (

   <FetchProducts/>

    // <FetchDataTable/>
  //  <FetchDataList/>
    
    // <Class/>
    // <Usestate/>

    // <BrowserRouter>
    // <Routes>
    //   <Route path = '/' element={<Login/>}/>
    //   <Route path = '/Signup' element ={<Signup/>}/>
    //   <Route path = '/home' element={<Home/>}/>
    //   <Route path ='/about' element = {<About/>}/>
    //   <Route path ='/contact' element ={<Contact/>}/>
    // </Routes>    
    // </BrowserRouter>
  );
};

export default App;
