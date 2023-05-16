import React, { Component } from 'react';
import { BusinessFetchTable } from './BusinessFetchTable';

export class Create extends Component {
  static displayName = Create.name;

  constructor(props) {
    super(props); 
  }

  async formSubmissionHandler(e){
    e.preventDefault();
    console.log("Type: event.target.type.value: ", e.target.type.value);

    // Example POST method implementation:
    const response = await fetch("/api/businesses/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        name: e.target.businessName.value, 
        type: e.target.type.value,  yearsInBusiness: e.target.yearsInBusiness.value })
    });
      console.log("respone: ", response);
  }

  render() {
    return (
      <div>
        <h1>Create</h1>

        <p>This is what it feels like to be accounted for by your environment on this journey.
        </p> 
        <h1>Data: </h1>

          <form onSubmit={this.formSubmissionHandler}>
            
      <label> Name:
          <br/>
          <input
            type='text'
            name='businessName' />
        </label>
        <br/>
        <label>Type:
          <br/>
          <input
            type='text'
            name='type' />
        </label>
        <br/>
        <label>Describe yearsInBusiness (reaction):
          <br/>
          <textarea
            name='yearsInBusiness' />
        </label>
        <br/>
        <button 
        type='submit'>
          Create
          </button>
      </form>
      <hr/>
      <BusinessFetchTable />
      </div>
    );
  }
}
