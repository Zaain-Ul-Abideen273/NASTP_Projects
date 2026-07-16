import { useState } from "react";
import Modal from "./Modal";
import "./App.css"; // Import the CSS styles here!

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-container">
      <h1>Its Zain UL Abideen.MY Main Project</h1>
      <p>This layout is running inside the standard #root tag.</p>
      
      {/* Show Button */}
      <button className="open-btn" onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal ? (
        <Modal>
          {/* Backdrop Overlay */}
          <div className="modal-overlay">
            {/* White Modal Card */}
            <div className="modal-content">
              <h2>Hello from the Portal!</h2>
              <p>Step 5: Inspect me in DevTools! I live inside &lt;div id="modal"&gt;</p>
              
              {/* Close Button */}
              <button className="close-btn" onClick={() => setShowModal(false)}>
                Close Modal
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;