import React, { Component } from 'react'
import Band from './Band'
import BandInput from './BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  // renderBands() {
  //   this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} key={band.id} band={band}/>)
  // }

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} key={band.id} band={band}/>)}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })


const mapDispatchToProps = dispatch => ({
    addBand: name => dispatch({ type: 'ADD_BAND', name}),
    deleteBand: id => dispatch({ type: 'DELETE_BAND', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
