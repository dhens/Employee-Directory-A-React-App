import React from "react";

const EmployeeContext = React.createContext({
    userList: [],
    filterValue: ""
});

export default EmployeeContext;