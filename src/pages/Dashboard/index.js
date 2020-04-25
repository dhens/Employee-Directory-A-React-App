import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import Navbar from "../../components/Navbar";
// import { parseEmployee } from '../../utils/EmployeeParser';
import TableContext from "../../utils/TableContext";

const Employees = () => {
    const [tableState, setTableState] = useState({
        userList: [],
        filterValue: ""
    });

    const [filter, setFilter] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        document.title = 'Dashboard = Employees'
        setTableState({
            userList: ['ass']
        })
    })

    const handleInputChange = event => {
        setFilter(event.target.value);
      };
    
      const handleFormSubmit = event => {
        event.preventDefault();
      };
    

    return (
        <TableContext.Provider value={tableState}>
            <div>
            <h1>{tableState}</h1>
            </div>
        </TableContext.Provider>
    )
}