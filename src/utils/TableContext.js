import React from "react";

const TableContext = React.createContext({
    userList: [],
    filterValue: ""
});

export default TableContext;