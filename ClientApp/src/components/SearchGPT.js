import React, { Component } from "react";
import { BusinessFetchTable } from "./BusinessFetchTable";
//TODO:  build a model, controller, paths for New SearchGPT API, Create DB migrations & MVC
export class Create extends Component {
  static displayName = Create.name;

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      buttonType: "create",
    };
  }

  async formSubmissionHandler(e) {
    // e.preventDefault();
    console.log("Type: event.target.type.value: ", e.target.type.value);

    // Example POST method implementation:
    const response = await fetch("/api/businesses/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.businessName.value,
        type: e.target.type.value,
        yearsInBusiness: e.target.yearsInBusiness.value,
      }),
    });
    console.log("respone: ", response);
  }

  handleCreateClick = () => {
    // toggles form visibility
    this.state.formVisible
      ? this.setState({ formVisible: false })
      : this.setState({ formVisible: true });

    this.state.buttonType === "create"
      ? this.setState({ buttonType: "create" })
      : this.setState({ buttonType: "submit" });
  }

  render() {
    return (
      <div>
        <h1>Search</h1>

        <p>
          Enter in your query. 
        </p>
        {!this.state.formVisible ? (
          <button
            onClick={this.handleCreateClick}
          >
            Enter in your data
          </button>
        ) : (
          <>
            <h1>Your Data: </h1>

            <form onSubmit={this.formSubmissionHandler}>
              <label>
                {" "}
                Your Name:
                <br />
                <input type="text" name="businessName" />
              </label>
              <br />
              <label>
                Type:
                <br />
                <input type="text" name="type" />
              </label>
              <br />
              <label>
                Age
                <br />
                {/* // Describe yearsInBusiness (reaction)
    console.log("Type: event.target.type.value: ", e.target.type.value); */}
                <textarea name="yearsInBusiness" />
              </label>
              <br />
              <button
                // onClick={this.handleCreateClick}
                type="submit"
              >
                Submit
              </button>
            </form>
          </>
        )}

        <hr />
        <BusinessFetchTable />
      </div>
    );
  }
}
