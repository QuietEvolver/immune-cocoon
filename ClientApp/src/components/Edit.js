import React, { Component } from 'react';

export class Edit extends Component {
  static displayName = Edit.name;

  // constructor(props) {
  //   super(props); 
  // }
 formSubmissionHandler = async (e) =>   {
    // e.preventDefault();
    console.log("Type: event.target.type.value: ", e.target.type.value);

    // Example PUT method implementation:
    const response = await fetch(`/api/businesses/${this.props.propsSelectedBusiness.businessId}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        businessId: this.props.propsSelectedBusiness.businessId, 
        name: e.target.businessName.value , 
        type: e.target.type.value,  yearsInBusiness: e.target.yearsInBusiness.value })
    });
      console.log("respone: ", response);
  }

  render() {
    console.log ("propsselectedBusiness", this.props.propsSelectedBusiness.businessId);
    return (
      <div>
        <h1>Edit</h1>
        <p aria-live="polite"> This is what it feels like to edit on this journey.
        </p>
        <h1>Data: </h1>

          <form onSubmit={this.formSubmissionHandler}>
      <label> Name:
          <br/>
          <input
            type='text'
            name='businessName'
            placeholder= {this.props.propsSelectedBusiness.name} />
        </label>
        <br/>
        <label>Type:
          <br/>
          <input
            type='text'
            name='type' 
            placeholder= {this.props.propsSelectedBusiness.type}/>
        </label>
        <br/>
        <label>Describe yearsInBusiness (reaction):
          <br/>
          <textarea
            name='yearsInBusiness'
            placeholder= {this.props.propsSelectedBusiness.yearsInBusiness} />
        </label>
        <br/>
        <button 
        type='submit'>
          Update Edit
          </button>
      <hr/>
      </form>
      </div>
    );
  }
}
