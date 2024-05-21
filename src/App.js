import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import MainDashboard from "./component/MainDashboard/mainDashboard";
import RightSide from "./component/RightSide/RightSide";
import BottomNav from "./component/BottomNav/BottomNav";

function App() {
  return (
    <div className="App">
      <div className="AppGlass ">
        <Sidebar />
        <div>
          <MainDashboard />
        </div>
        <div>
          <RightSide />
        </div>
      </div>
      <div className="Nav">
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
