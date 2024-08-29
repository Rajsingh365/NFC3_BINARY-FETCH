import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import MatchMakingSideBar from "./components/MatchMakingSideBar";
const App = () => {
  return (
    
    <div className="bg-gray-500">
      <Dashboard/>
     <MatchMakingSideBar/>
    </div>
  );
};

export default App;
