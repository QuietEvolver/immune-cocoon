// import React, { Component } from 'react';
// //BusinessFetchData aka User Fetch Data 
// export class UserFetchTable extends Component {
//   static displayName = UserFetchTable.name;

//   constructor(props) {
//     super(props);
//     this.state = { users: [], loading: true };
//   }

//   componentDidMount() {
//     this.populateUserData();
//   }

//   render() {
//     return (
//       <div>
//         <h1>Data: </h1>
//       <hr/>
//       {!this.state.loading ? 
//       ( <table className='table table-striped' aria-labelledby="tabelLabel">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Type</th>
//             <th>Describe reaction</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.state.users.map(user =>
//             <tr key={user.userId}>
//               <td>{user.userId}</td>
//               <td>{user.name}</td>
//               <td>{user.type}</td>
//               <td>{user.yearsInUser}</td>
//             </tr>
//           )}
//         </tbody>
//       </table>) : (<h1> "Is loading" </h1>)
//       }
//       </div>

      
//     );
//   }
//   async populateUserData() {
//     const response = await fetch('/api/users');
//     const data = await response.json();
//     console.log("data: ", data);
//     this.setState({ users: data, loading: false });
//   }

// }
