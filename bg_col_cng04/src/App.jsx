import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive"); // Default color

  return (
    
    <div className="h-screen w-screen text-center"
      style={{ backgroundColor: color }}>
        <h1 className="text-amber-900">Background Color Changer</h1>
      <div className="bg-amber-400 text-center rounded-full" >
        <button
          className="rounded-full m-3"
          onClick={() => setColor("red")}
        >RED</button>

        <button
          className="rounded-full m-3"
          onClick={() => setColor("blue")
          }>BLUE</button>

        <button
          className="rounded-full m-3"
          onClick={() => setColor("green"
          )}>GREEN</button>

        <button
          className="rounded-full m-3"
          onClick={() => setColor("yellow"
          )}>YELLOW</button>
        <button
          className="rounded-full m-3"
          onClick={() => setColor("greenyellow"
          )}>GREENYELLOW</button>
        <button
          className="rounded-full m-3"
          onClick={() => setColor("skyblue"
          )}>SKYBLUE</button>


      </div>
    </div>
  );
}

export default App;
