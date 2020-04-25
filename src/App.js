import React from 'react';
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import SearchBar from "./components/SearchBar";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
    </div>
  );
}

export default App;
