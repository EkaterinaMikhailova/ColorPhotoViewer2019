import React from 'react'
import PropTypes from 'prop-types'

/**
 * The props supported by the `Filtres` component
 *
 * @typedef {Object} Filtres~propTypes
 * @property {function} updateFilter - call parent function to change current filter
 */

/**
 * This class is designed to display buttons with filters.
 */
class Filtres extends React.Component {
  /** * @type {Filtres~propTypes} */ propTypes = {
    updateFilter: PropTypes.func
  }
  render () {
    return (
      <div id='dg'>
        <table className='table'>
          <tbody >
            <tr>
              <th>
                <div className='tilt' >
                  <button id='normal'  onClick={() => { this.props.updateFilter('normal') }}>
                    <img src='DSFilterTileNormal.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt' >
                  <button  id='amaro'  onClick={()=> { this.props.updateFilter('amaro') }}>
                    <img src='DSFilterTileAmaro.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt' >
                  <button id='brannan' onClick={() => { this.props.updateFilter('brannan') }}>
                    <img src='DSFilterTileBrannan.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='earlybird' onClick={() => { this.props.updateFilter('earlybird') }}>
                    <img src='DSFilterTileEarlybird.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='hefe' onClick={() => { this.props.updateFilter('hefe') }}>
                    <img src='DSFilterTileHefe.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='hudson' onClick={() => { this.props.updateFilter('hudson') }}>
                    <img src='DSFilterTileHudson.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='inkwell' onClick={() => { this.props.updateFilter('inkwell') }}>
                    <img src='DSFilterTileInkwell.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='lokofi' onClick={() => { this.props.updateFilter('lokofi') }}>
                    <img src='DSFilterTileLomoFi.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='lordkelvin' onClick={() => { this.props.updateFilter('lordkelvin') }}>
                    <img src='DSFilterTileLordKelvin.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='rise' onClick={() => { this.props.updateFilter('rise') }}>
                    <img src='DSFilterTileRise.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='sierra' onClick={() => { this.props.updateFilter('sierra') }}>
                    <img src='DSFilterTileSierra.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='toaster' onClick={() => { this.props.updateFilter('toaster') }}>
                    <img src='DSFilterTileToaster.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='valencia' onClick={() => { this.props.updateFilter('valencia') }}>
                    <img src='DSFilterTileValencia.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='walden' onClick={() => { this.props.updateFilter('walden') }}>
                    <img src='DSFilterTileWalden.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='xproII' onClick={() => { this.props.updateFilter('xproII') }}>
                    <img src='DSFilterTileXpro2.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='f1977' onClick={() => { this.props.updateFilter('f1977') }}>
                    <img src='DSFilterTile1977.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='nashville' onClick={() => { this.props.updateFilter('nashville') }}>
                    <img src='DSFilterTileNashville.png' width='80px' height='80px' alt=''/></button>
                </div>
              </th>
              <th>
                <div className='tilt'>
                  <button id='sutro' onClick={() => { this.props.updateFilter('sutro') }}>
                    <img src='DSFilterTileSutro.png' width='80px' height='80px' alt=''/></button>
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
