function Button(){
    
    const styles = {
    backgroundColor:"hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
}
const handleclick =(e)=>{
alert('clickedd')
console.log(e.target.textContent = "Mathee Aramaa")
}

const handleclick2=(name)=>{
alert(`${name} clickked me`)
}
    return(
        <>
        <button onClick={handleclick} style={styles} className="button">Click me</button>
         <button onClick={()=>handleclick2("dii")} style={styles} className="button">btn2</button></>
    )
}

export default Button