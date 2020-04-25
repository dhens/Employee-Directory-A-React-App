import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchForm";
import Navbar from "../../components/Navbar";
// import { parseEmployee } from '../../utils/EmployeeParser';
import EmployeeContext from "../../utils/EmployeeContext";

const EmployeeSearch = () => {
    const [tableState, setTableState] = useState({
        userList: [],
        filterValue: ""
    });

    const [filter, setFilter] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        document.title = 'Dashboard - Employees';
        if (!filter) { return; }
        setTableState({
            userList: ['ass'],
            filterValue: "test"
        })
    })

    const handleInputChange = event => {
        setFilter(event.target.value);
      };
    
      const handleFormSubmit = event => {
        event.preventDefault();
      };
    

    return (
        <EmployeeContext.Provider value={tableState}>
            <div>
            <h1>{tableState}</h1>
            </div>
        </EmployeeContext.Provider>
    )
}

export default EmployeeSearch;