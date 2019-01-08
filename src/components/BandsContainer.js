import React, { Component } from "react";
import BandInput from "./BandInput";
import Band from "./Band";
import { connect } from "react-redux";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.props.bands.map(band => {
          return (
            <ul>
              <Band delete={this.props.delete} band={band} />
            </ul>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band }),
  delete: bandId => dispatch({ type: "DELETE_BAND", bandId })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);
