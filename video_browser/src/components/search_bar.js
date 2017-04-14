// state is plain javascript object that is used to record and react to user events. 
// each class has its own state, upon change will re-render (so will children)
// functional components do not have state, only class based
// constructor is a funciton that all js classes have. 
// we pass properties we want to record to state. 
// controlled field (or controlled input) : a form element who's value is set by the state. 
// downwards data flow - only most parent component should be responsible for fetching data. 
import React, { Component } from 'react'; 

class SearchBar extends Component {
	constructor(props) {
		super(props); 
		this.state = { term: '' }
	}


	render() {
		return (
			 <div className="search-bar">
			 	<input 
			 		onChange={event => this.onInputChange(event.target.value)} 
			 	 	value={this.state.term} />
			 </div>
		 )
	}

	onInputChange(term){
		this.setState({term}); 
		this.props.onSearchTermChange(term); 
	}

	
	

}; 

export default SearchBar; 