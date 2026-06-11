import React from "react";
import "./App.css";
import Card from './Components/Card'

const App = () => {

const jobs = [
  {
    company: "Amazon",
    img: "https://images.unsplash.com/photo-1649734926695-1b1664e98842?w=500&auto=format&fit=crop&q=60",
    post: "AI Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    date: "5 days ago",
    pay: 120,
    loc: "Mumbai, India",
  },
  {
    company: "Google",
    img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    date: "2 days ago",
    pay: 150,
    loc: "Bangalore, India",
  },
  {
    company: "Microsoft",
    img: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=500&auto=format&fit=crop&q=60",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    date: "1 week ago",
    pay: 135,
    loc: "Hyderabad, India",
  },
  {
    company: "Meta",
    img: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=500&auto=format&fit=crop&q=60",
    post: "Computer Vision Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    date: "3 days ago",
    pay: 180,
    loc: "Pune, India",
  },
  {
    company: "Netflix",
    img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&auto=format&fit=crop&q=60",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    date: "6 days ago",
    pay: 140,
    loc: "Chennai, India",
  },
  {
    company: "Adobe",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500&auto=format&fit=crop&q=60",
    post: "Frontend Developer",
    tag1: "Hybrid",
    tag2: "Junior Level",
    date: "4 days ago",
    pay: 90,
    loc: "Noida, India",
  },
  {
    company: "Tesla",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&auto=format&fit=crop&q=60",
    post: "Deep Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    date: "1 day ago",
    pay: 200,
    loc: "Delhi, India",
  },
  {
    company: "Spotify",
    img: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=500&auto=format&fit=crop&q=60",
    post: "Data Analyst",
    tag1: "Remote",
    tag2: "Mid Level",
    date: "2 weeks ago",
    pay: 110,
    loc: "Kolkata, India",
  },
  {
    company: "Uber",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=500&auto=format&fit=crop&q=60",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    date: "5 days ago",
    pay: 100,
    loc: "Ahmedabad, India",
  },
  {
    company: "Airbnb",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=60",
    post: "Product Designer",
    tag1: "Hybrid",
    tag2: "Senior Level",
    date: "1 week ago",
    pay: 130,
    loc: "Bangalore, India",
  },
];


  return <div className="parent" >
   {jobs.map((e,i)=>{
    return <Card key={i} company={e.company} img={e.img} post={e.post} tag1={e.tag1} tag2={e.tag2} date={e.date} pay={e.pay} loc={e.loc}/> 
   })} 
  </div>
};

export default App;
