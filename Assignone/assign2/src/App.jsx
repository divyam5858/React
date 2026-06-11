import React, { useState } from "react";

function App() {
  // Q1
  const [count, setCount] = useState(0);

  // Q2
  const [decCount, setDecCount] = useState(10);

  // Q3
  const [resetCount, setResetCount] = useState(0);

  // Q4
  const [text, setText] = useState("Welcome");

  // Q5
  const [bgColor, setBgColor] = useState("white");

  // Q6
  const [show, setShow] = useState(true);

  // Q7
  const [name, setName] = useState("Raj");

  // Q8
  const [likes, setLikes] = useState(0);

  // Q9
  const [input, setInput] = useState("");

  // Q10
  const [student, setStudent] = useState({
    name: "Divyashree M",
    age: 22,
    course: "AIML",
  });

  // Q11
  const [number, setNumber] = useState("");

  // Q12
  const [fontSize, setFontSize] = useState(16);

  // Q13
  const [light, setLight] = useState(false);

  // Q14
  const [login, setLogin] = useState(true);

  // Q15
  const [charText, setCharText] = useState("");

  // Q16
  const [celsius, setCelsius] = useState("");

  // Q17
  const [userName, setUserName] = useState("");

  // Q18
  const [fruits, setFruits] = useState(["Apple", "Mango"]);

  // Q19
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Q20
  const [disabled, setDisabled] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React useState Practice</h1>

      {/* Q1 */}
      <h3>Q1 Counter App</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <hr />

      {/* Q2 */}
      <h3>Q2 Decrease Counter</h3>
      <p>Count: {decCount}</p>
      <button onClick={() => setDecCount(decCount - 1)}>Decrement</button>

      <hr />

      {/* Q3 */}
      <h3>Q3 Reset Counter</h3>
      <p>Count: {resetCount}</p>
      <button onClick={() => setResetCount(resetCount + 1)}>
        Increment
      </button>
      <button onClick={() => setResetCount(0)}>Reset</button>

      <hr />

      {/* Q4 */}
      <h3>Q4 Toggle Text</h3>
      <p>{text}</p>
      <button
        onClick={() =>
          setText(text === "Welcome" ? "Good Bye" : "Welcome")
        }
      >
        Toggle
      </button>

      <hr />

      {/* Q5 */}
      <h3>Q5 Background Color Change</h3>
      <div
        style={{
          backgroundColor: bgColor,
          padding: "20px",
          border: "1px solid black",
        }}
      >
        Color Box
      </div>
      <button onClick={() => setBgColor("yellow")}>
        Change Color
      </button>

      <hr />

      {/* Q6 */}
      <h3>Q6 Hide/Show Paragraph</h3>
      {show && <p>This paragraph is visible.</p>}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      <hr />

      {/* Q7 */}
      <h3>Q7 Student Name Display</h3>
      <p>{name}</p>
      <button onClick={() => setName("Kumar")}>
        Update Name
      </button>

      <hr />

      {/* Q8 */}
      <h3>Q8 Like Button</h3>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>

      <hr />

      {/* Q9 */}
      <h3>Q9 Input Field State</h3>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input}</p>

      <hr />

      {/* Q10 */}
      <h3>Q10 Multiple State Values</h3>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>

      <button
        onClick={() =>
          setStudent({ ...student, age: 25 })
        }
      >
        Update Age
      </button>

      <hr />

      {/* Q11 */}
      <h3>Q11 Even or Odd Checker</h3>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>
        {number &&
          (number % 2 === 0 ? "Even" : "Odd")}
      </p>

      <hr />

      {/* Q12 */}
      <h3>Q12 Font Size Increase</h3>
      <p style={{ fontSize: `${fontSize}px` }}>
        Increase My Size
      </p>
      <button
        onClick={() => setFontSize(fontSize + 2)}
      >
        Increase
      </button>

      <hr />

      {/* Q13 */}
      <h3>Q13 Light ON/OFF</h3>
      <p>{light ? "Light ON" : "Light OFF"}</p>
      <button onClick={() => setLight(!light)}>
        Toggle
      </button>

      <hr />

      {/* Q14 */}
      <h3>Q14 Login/Logout</h3>
      <button onClick={() => setLogin(!login)}>
        {login ? "Login" : "Logout"}
      </button>

      <hr />

      {/* Q15 */}
      <h3>Q15 Character Counter</h3>
      <input
        type="text"
        onChange={(e) => setCharText(e.target.value)}
      />
      <p>{charText.length} Characters</p>

      <hr />

      {/* Q16 */}
      <h3>Q16 Temperature Converter</h3>
      <input
        type="number"
        placeholder="Celsius"
        onChange={(e) => setCelsius(e.target.value)}
      />
      <p>
        Fahrenheit:
        {celsius !== ""
          ? (celsius * 9) / 5 + 32
          : ""}
      </p>

      <hr />

      {/* Q17 */}
      <h3>Q17 Dynamic Greeting</h3>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>Hello {userName}</p>

      <hr />

      {/* Q18 */}
      <h3>Q18 Array in State</h3>
      <p>{fruits.join(", ")}</p>
      <button
        onClick={() =>
          setFruits([...fruits, "Banana"])
        }
      >
        Add Banana
      </button>

      <hr />

      {/* Q19 */}
      <h3>Q19 Todo List</h3>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, todo]);
          setTodo("");
        }}
      >
        Add Todo
      </button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr />

      {/* Q20 */}
      <h3>Q20 Disable Button After Click</h3>
      <button
        disabled={disabled}
        onClick={() => setDisabled(true)}
      >
        Submit
      </button>
    </div>
  );
}

export default App;