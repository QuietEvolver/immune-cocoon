import React, { Component } from 'react';
import { BusinessFetchTable } from './BusinessFetchTable';

export class Create extends Component {
  static displayName = Create.name;

  constructor(props) {
    super(props);
    // this.state = { businesses: [], loading: true };
  }

  //   const theme = useContext(ThemeContext);

  //   // New if statement below!
  //   if (!theme) {
  //     throw new Error("ThemeContext must be used within a ThemeContext.Provider!");
  //   }
  //  // We create button styles.
  // const buttonStyles = { 
  //   backgroundColor: theme.buttonBackground, 
  // //   color: theme.textColor, 
  // // }

  // // We create input styles.
  // const inputStyles = { 
  //   backgroundColor: theme.inputBackground,
  //   color: theme.textColor, 
  // }

  // componentDidMount() {
  //   this.populateBusinessData();
  // }

  render() {
    return (
      <div>
        <h1>Create</h1>

        <p>This is what it feels like to be accounted for by your environment on this journey.
        </p> 
        <h1>Data: </h1>

          <form>
            {/* onSubmit={props.formSubmissionHandler} */}
      <label> Names:
          <br/>
          {/* We add input styles. */}
          <input
            // style={inputStyles}
            type='text'
            name='names' />
        </label>
        <br/>
        <label>Type:
          <br/>
          {/* We add input styles. */}
          <input
            // style={inputStyles}
            type='text'
            name='type' />
        </label>
        <br/>
        <label>Describe reaction:
          <br/>
          {/* We add input styles. */}
          <textarea
            // style={inputStyles}
            name='description' />
        </label>
        <br/>
        {/* We add button styles. */}
        <button 
        // style={buttonStyles}  
        type='submit'>
          {/* {props.buttonText} */}
          Create
          </button>
      </form>
      <hr/>
      <BusinessFetchTable />
      
      </div>

      
    );
  }
  // async populateBusinessData() {
  //   const response = await fetch('/api/businesses');
  //   const data = await response.json();
  //   console.log("data: ", data);
  //   this.setState({ business: data, loading: false });
  // }

}
