import './App.css'
import Sidebar from './component/Sidebar/Sidebar';
import MainDashboard from './component/MainDashboard/mainDashboard';


function App() {
  return (
    <div className="App">
     <div className="AppGlass ">
      <Sidebar/>
      <div>
       <MainDashboard/>
      </div>
      <div>
        3 Component
      </div>
     </div>
    </div>
  );
}

export default App;
