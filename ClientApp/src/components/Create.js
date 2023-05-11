import React, { Component } from 'react';

export class Create extends Component {
  static displayName = Create.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCreate = this.incrementCreate.bind(this);
  }

  incrementCreate() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Count Me In!</h1>

        <p>This is what it feels like to be incrementally accounted for by your environment.
        Have you and your child walking hand-in-hand on this journey.
        </p>

        <p aria-live="polite"> <em>Simply, <strong> {this.state.currentCount} </strong> : Because <stong>*YOU* </stong>count</em> </p>

        <button className="btn btn-primary" onClick={this.incrementCreate}>Increment: Because I do</button>
      </div>
    );
  }
}
