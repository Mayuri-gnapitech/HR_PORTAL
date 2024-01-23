import './App.css';
import TimesheetComponent from './Components/Timesheet/timesheet';

function App() {
  return (
    <div className="App">
     < TimesheetComponent />
    </div>
  );
}

export default App;


// import './App.css';
// import TimesheetComponent from './Components/Timesheet/timesheet';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Sidebar from './Components/Sidebar.jsx';
// import Myprofile from './Pages/Myprofile';
// import Timesheet from './Pages/Timesheet';
// import Leave from './Pages/Leave';
// import Dashboard from './Pages/Dashboard';
// // import { Router } from 'react-router-dom/cjs/react-router-dom.min.js';

// function App() {
//   return (
//     // <div className="App">
//     //    <TimesheetComponent />
//     //   <Sidebar />
//     // </div>

//     <BrowserRouter>
//     <Sidebar>
//     <Routes>
//       <Route path="/Myprofile"element={<Myprofile />}/>
//       <Route path="/Timesheet"element={<Timesheet />}/>
//       <Route path="/Leave"element={<Leave />}/>
//       <Route path="/Dashboard"element={<Dashboard />}/>
//     </Routes>
//     </Sidebar>
//     </BrowserRouter>
//   );
// }

// export default App;

