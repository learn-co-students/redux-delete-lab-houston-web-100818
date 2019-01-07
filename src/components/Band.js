import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>
          {this.props.band.text} <button onClick={() => this.props.deleteBand(this.props.band.id)} >X</button>
        </li>
      </div>
    );
  }
};

export default Band;
