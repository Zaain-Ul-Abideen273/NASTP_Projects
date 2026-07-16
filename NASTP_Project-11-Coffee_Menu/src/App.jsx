import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Main Application Tree</h1>
      
      {/* Step 3: THE BUTTON TO SHOW/OPEN THE POPUP */}
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal ? (
        <Modal>
          <div style={{ border: "2px solid black", padding: "20px", marginTop: "20px" }}>
            <h2>Hello! I am a Portal Modal.</h2>
            <p>Step 5: Inspect me in DevTools! I live inside &lt;div id="modal"&gt;</p>
            
            {/* Step 4: THE BUTTON TO HIDE/CLOSE THE POPUP */}
            <button onClick={() => setShowModal(false)}>Close Modal</button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;