import "./App.css";

import Titlebar from "./components/Titlebar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <Titlebar />
      <div className="body">
        <div className="sideBar">
          <Sidebar />
        </div>
        <Main />
      </div>
    </div>
  );
}

export default App;
