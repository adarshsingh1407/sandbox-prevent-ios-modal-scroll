import "./styles.css";
import { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const rows = new Array(80).fill();
  return (
    <div className="App">
      <div className="lorem">
        {rows.map((_, index) => (
          <div key={index}>{index}</div>
        ))}
      </div>
      <button
        onClick={() => setModalVisible(true)}
        style={{ "font-size": "16px" }}
      >
        open drawer
      </button>
      {modalVisible && (
        <div className="drawer-root">
          <div
            className="drawer-mask"
            style={{
              position: "fixed",
              height: "100%",
              "background-color": "#00000073",
              inset: "0"
            }}
          />
          <div
            className="drawer"
            style={{
              "box-sizing": "border-box",
              position: "fixed",
              bottom: "0",
              height: "calc(100% - 64px)",
              width: "100%",
              background: "white",
              padding: "16px",
              display: "flex",
              "flex-direction": "column",
              "justify-content": "space-between"
            }}
          >
            <input placeholder="Search..." style={{ "font-size": "16px" }} />
            <button
              onClick={() => setModalVisible(false)}
              style={{ "font-size": "16px" }}
            >
              close drawer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
