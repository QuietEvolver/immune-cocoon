import React, { Component } from 'react';

export class Edit extends Component {
  static displayName = Edit.name;

  constructor(props) {
    super(props);
  //   this.state = { currentCount: 0 };
  //   this.incrementEdit = this.incrementEdit.bind(this);
  // }

  // incrementEdit() {
  //   this.setState({
  //     currentCount: this.state.currentCount + 1
  //   });
  }

  render() {
    return (
      <div>
        <h1>edit</h1>

        <p>This is what it feels like to edit on this journey.
        </p>
{/* 
        <p aria-live="polite"> <em>Simply, <strong> {this.state.currentCount} </strong> : Because <stong>*YOU* </stong>count</em> </p>

        <button className="btn btn-primary" onClick={this.incrementEdit}>Increment: Because I do</button> */}
      </div>
    );
  }
}
