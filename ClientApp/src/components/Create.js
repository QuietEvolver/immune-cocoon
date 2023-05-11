import React, { Component } from 'react';

export class Create extends Component {
  static displayName = Create.name;

  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  // }

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
  // TRY TO USE A HOOK HERE: 
  // componentDidMount() {
  //   this.populateUserData();
  // }

  // static renderUsersTable(users) {
  //   return (
  //     <table className='table table-striped' aria-labelledby="tabelLabel">
  //       <thead>
  //         <tr>
  //           <th>ID</th>
  //           <th>Name</th>
  //           <th>Type</th>
  //           <th>description</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {users.map(user =>
  //           <tr key={user.id}>
  //             <td>{user.id}</td>
  //             <td>{user.name}</td>
  //             <td>{user.type}</td>
  //             <td>{user.description}</td>
  //           </tr>
  //         )}
  //       </tbody>
  //     </table>
  //   );
  // }
  }

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
{/* //         <form id="newSneak">
//         <input type="text" placeholder="name" name="name" id="sneakName">
//         <input type="text" placeholder="color" name="color" id="sneakColor">
//         <input type="text" placeholder="owner" name="owner" id="sneakOwner">
//         <button>Submit!</button>
//     </form>
//     <h2>All Sneakers:</h2> */}
    {/* <ul id="sneakList"></ul>

//         <p aria-live="polite"> <em>Simply, <strong> {this.state.currentCount} </strong> : Because <stong>*YOU* </stong>count</em> </p>

//         <button className="btn btn-primary" onClick={this.incrementCounter}>Increment: Because I do</button> */}
        </div>
    );
  }
}
