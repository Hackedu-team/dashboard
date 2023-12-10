// React imports
import { BrowserRouter, Route, Routes } from "react-router-dom";


// Page style
import "./App.css";
import SearchPage from "./pages/SearchPage";
import GraphPage from "./pages/GraphPages";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<GraphPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/graph" element={<GraphPage />} />
          <Route path="*" element={<SearchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;










// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
