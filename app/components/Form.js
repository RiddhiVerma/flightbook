import React from 'react';
import ControlPassengers from './ControlPassengers';
import ControlSelect from './ControlSelect';
import ControlRadio from './ControlRadio';
import ControlDate from './ControlDate';
import api from '../utils/api';


class Form extends React.Component {
	constructor(props) {
		super();
		this.state = {
		  airports: []
		};

		//this.updateLanguage = this.updateLanguage.bind(this);
	}

	componentDidMount() {
		//this.updateLanguage(this.state.selectedLanguage) //camelCase
		api.getAirportsList()
		.then(result => {
			this.setState({ airports: result });
		});
	}

	render() {
		return (
		  <div className="content">
		    <div className="form">
		    	<ControlSelect 
		    		data={this.state.airports} 
		    		label="From" 
		    		text="DUB, Dublin Airport" 
		    	/>
		    	<ControlSelect
		    		data={this.state.airports} 
		    		label="To" 
		    		text="MRS, Marseille Provence Airport" 
		    	/>
		    	<ControlDate />
		    	<ControlPassengers />
		    	<ControlRadio />

		    	<div className="control">
						<button className="btnSearch">Search Flights</button>
					</div>

		    </div>
		  </div>
		);
  	}
}

export default Form;