import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players.js';

export default class DisplayPlayer extends React.Component {
    render() {

      let itemClassName = `item item--position-${this.props.player.rank}`

      return (
        <div className={itemClassName} key={this.props.player._id}>
          <div className="player">
            <div>
              <h3 className="player__name">{this.props.player.name}</h3>
              <p className="player__stats">
                {this.props.player.position} Place : 
                {this.props.player.score} Points.
              </p>
            </div>
            <div className="player__actions">
              <button className="button button--round" onClick={() => {
                Players.update(this.props.player._id, {$inc: {score : 1}});
              }}>+1</button>
              <button className="button button--round" onClick={() => {
                Players.update(this.props.player._id, {$inc: {score : -1}});
              }}>-1</button>
              <button className="button button--round" onClick={() =>
                Players.remove(this.props.player._id)}>X</button>
            </div>
          </div>
        </div>
      )
  }
}

DisplayPlayer.propTypes = {
  player: PropTypes.object.isRequired
};
