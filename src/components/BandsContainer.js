import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = bands => bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>{this.renderBands(this.props.bands)}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: bandId => dispatch({ type: 'DELETE_BAND', bandId})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
