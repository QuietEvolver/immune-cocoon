import React, { Component } from 'react';

export class Delete extends Component {
  static displayName = Delete.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementDelete = this.incrementDelete.bind(this);
  }

  incrementDelete() {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
  }

  render() {
    return (
      <div>
        <h1>Count Me Out!</h1>

        <p>This is what it feels like to heal on this journey.
        </p>

        <p aria-live="polite"> <em>Simply, <strong> {this.state.currentCount} </strong> : Because <stong>*YOU* </stong>count</em> </p>

        <button className="btn btn-primary" onClick={this.incrementDelete}>Decrement: Because I healed</button>
      </div>
    );
  }
}
