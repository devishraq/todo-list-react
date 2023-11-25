import React, { useRef, useState } from "react";

const App = () => {
 const [input, setInput] = useState("");
 const [data, setData] = useState([]);
 const inputRef = useRef(null);
 const handleCLick = () => {
  input.length > 0
   ? setData((prevData) => [...prevData, input])
   : console.log("No Data");

  setInput("");
 };
 const handleKeyPress = (event) => {
  event.key == "Enter"
   ? setData((prevData) => [...prevData, input])
   : console.log("No Data");
 };

 return (
  <>
   <h1>Todo App</h1>
   <div className='flex'>
    <input
     ref={inputRef}
     type='text'
     value={input}
     onChange={(value) => setInput(value.target.value)}
     onKeyDown={handleKeyPress}
    />
    <button onClick={handleCLick}>add</button>
   </div>
   <div>
    {data.map((data, key) => {
     return <li key={key}>{data}</li>;
    })}
   </div>
  </>
 );
};

export default App;
