import React, { Component } from 'react';

export class BusinessFetchTable extends Component {
  static displayName = BusinessFetchTable.name;

  constructor(props) {
    super(props);
    this.state = { businesses: [], loading: true };
  }

  componentDidMount() {
    this.populateBusinessData();
  }

  render() {
    return (
      <div>
        <h1>Data: </h1>
      <hr/>
      {!this.state.loading ? 
      ( <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Describe reaction:</th>
          </tr>
        </thead>
        <tbody>
          {this.state.businesses.map(business =>
            <tr key={business.businessId}>
              <td>{business.businessId}</td>
              <td>{business.name}</td>
              <td>{business.type}</td>
              <td>{business.description}</td>
            </tr>
          )}
        </tbody>
      </table>) : (<h1> "Is loading" </h1>)
      }
      </div>

      
    );
  }
  async populateBusinessData() {
    const response = await fetch('/api/businesses');
    const data = await response.json();
    console.log("data: ", data);
    this.setState({ businesses: data, loading: false });
  }

}
