import React from 'react';
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SearchForm from "./components/SearchForm";
import Wrapper from "./components/Wrapper";
import SearchResults from "./components/Dashboard";
import './App.css';

function App() {
  return (
    <div>
    <SearchForm />
      <Dashboard />
    </div>
  );
}

export default App;
