import React from 'react';
import "./style.css"

const SearchForm = props => {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="filter">Filter by Name:</label>
                <input
                    value={props.search}
                    onChance={props.handleInputChange}
                    name="term"
                    list="term"
                    type="text"
                    className="form-control"
                    placeholder="John Smith"
                    id="term"
                    />
            </div>
        </form>
    )
}

export default SearchForm;