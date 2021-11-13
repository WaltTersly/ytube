import React from "react";

class SearchBar extends React.Component{

    state = {text: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        // callback from parent component
        this.props.onFormSubmit(this.state.text);
    }

    render(){
        return(
            <div className= " search-bar ui segment"> 
               <form onSubmit={this.onFormSubmit} className= "ui form">
                <div className="field">
                    <label> Video Search </label>
                    <input type= "text" value={this.state.text} onChange = {(event) => {this.setState({ text: event.target.value})}} />
                </div>
               </form> 
            </div>
        );
    }
}

export default SearchBar;