import React from 'react'
import PropTypes from 'prop-types'

class Filtres extends React.Component {
  propTypes = {
    updateFilter: PropTypes.func
  }
  render () {
    return (
      <div id='dg'>
        <table className='table'>
          <tbody >
            <tr>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('normal') }}>
                    <img src='DSFilterTileNormal.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('amaro') }}>
                    <img src='DSFilterTileAmaro.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('brannan') }}>
                    <img src='DSFilterTileBrannan.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('earlybird') }}>
                    <img src='DSFilterTileEarlybird.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('hefe') }}>
                    <img src='DSFilterTileHefe.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('hudson') }}>
                    <img src='DSFilterTileHudson.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('inkwell') }}>
                    <img src='DSFilterTileInkwell.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('lokofi') }}>
                    <img src='DSFilterTileLomoFi.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('lordkelvin') }}>
                    <img src='DSFilterTileLordKelvin.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('rise') }}>
                    <img src='DSFilterTileRise.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('sierra') }}>
                    <img src='DSFilterTileSierra.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('toaster') }}>
                    <img src='DSFilterTileToaster.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('valencia') }}>
                    <img src='DSFilterTileValencia.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('walden') }}>
                    <img src='DSFilterTileWalden.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='fiol' onClick={() => { this.props.updateFilter('xproII') }}>
                    <img src='DSFilterTileXpro2.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
            </tr>
          </tbody >
        </table>
      </div>
    )
  }
}

export default Filtres
