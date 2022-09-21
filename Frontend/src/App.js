import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import { Login } from './Login/Login';
import { Dashboard } from './Dashboard/Dashboard';
import { Download } from './Download/Download';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="dashboard" exact element={<Dashboard />} />
          <Route path="download" exact element={<Download />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
  // <div className="App">
  //   <Login />
  // </div>
}

export default App;
