import React, { Component } from 'react';
import {Edit} from "./Edit";

export class BusinessClientFetchTable extends Component {
  static displayName = BusinessClientFetchTable.name;
  

  constructor(props) {
    super(props);
    this.state = {
      businessClients: [], 
      selectedBusinessClient: null, 
      loading: true 
    };  
    console.log ("selectedBusinessClient", this.state.selectedBusinessClient)
  }

  componentDidMount() {
    this.populateBusinessClientData();
  }

  render() {
    console.log ("selectedBusinessClient", this.state.selectedBusinessClient)
    return (
      <div>
        <h1>Business Customer Client Data: </h1>
      <hr/>
      {!this.state.loading ? 
      (
        <>
        {this.state.selectedBusinessClient ?  (<Edit propsSelectedBusinessClient = {this.state.selectedBusinessClient} />) : (<table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Number of Allergies</th>
            {/* <th>Notes</th> */}
          </tr>
        </thead>
        <tbody>
          {this.state.businessClients.map(businessClient =>
            <tr onClick={ () => this.setState({selectedBusinessClient: businessClient})} 
            key={businessClient.businessClientId}>
              <td>{businessClient.businessClientId}</td>
              <td>{businessClient.name}</td>
              <td>{businessClient.type}</td>
              <td>{businessClient.yearsInBusiness}</td>
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
  async populateBusinessClientData() {
    const response = await fetch('/api/businessClients');
    const data = await response.json();
    console.log("data: ", data);
    this.setState({ businessClients: data, loading: false });
  }

}
