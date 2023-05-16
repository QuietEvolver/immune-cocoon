import React, { Component } from 'react';
import {Edit} from "./Edit";

export class BusinessFetchTable extends Component {
  static displayName = BusinessFetchTable.name;
  

  constructor(props) {
    super(props);
    this.state = {
      businesses: [], 
      selectedBusiness: null, 
      loading: true 
    };  
    console.log ("selectedBusiness", this.state.selectedBusiness)
  }

  componentDidMount() {
    this.populateBusinessData();
  }

  render() {
    console.log ("selectedBusiness", this.state.selectedBusiness)
    return (
      <div>
        <h1>Business Data: </h1>
      <hr/>
      {!this.state.loading ? 
      (
        <>
        {this.state.selectedBusiness ?  (<Edit propsSelectedBusiness = {this.props.selectedBusiness} />) : (<table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Years in Business</th>
          </tr>
        </thead>
        <tbody>
          {this.state.businesses.map(business =>
            <tr onClick={ () => this.setState({selectedBusiness: business})} 
            key={business.businessId}>
              <td>{business.businessId}</td>
              <td>{business.name}</td>
              <td>{business.type}</td>
              <td>{business.yearsInBusiness}</td>
            </tr>
          )}
        </tbody>
      </table>) 
      }</>
        ) : (<h1> "Is loading" </h1>)
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
