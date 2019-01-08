import React, { Component } from "react";
import uuid from "uuid";
class BandInput extends Component {
  state = {
    bandName: ""
  };

  handleOnChange(event) {
    this.setState({
      bandName: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const band = { name: this.state.bandName, id: uuid() };
    this.props.addBand(band);
    this.setState({
      bandName: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.bandName}
            onChange={event => this.handleOnChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
