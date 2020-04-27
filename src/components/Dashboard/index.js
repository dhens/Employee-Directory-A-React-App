import React, { Component } from "react";
import SearchBar from "../SearchForm";
import Navbar from "../Navbar";

class Dashboard extends Component {
    // Setting initial component state
    state = {
        name: '',
        username: '',
        phone: 0

    };

    handleInputChange = event => {
        // Getting value of name of filter search bar which triggers change
        let filterVal = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: filterVal
        });
    };


    render() {
        return (
            <div className="container">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
            </div>
        )
    }
}

export default Dashboard;