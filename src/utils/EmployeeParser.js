const fs = require("fs");

const parseEmployee = employees => {
    fs.readFile(employees, (err, data) => {
        if (err) { throw err; }
        console.log(data);
        return data;
    });
}

module.exports = parseEmployee;
