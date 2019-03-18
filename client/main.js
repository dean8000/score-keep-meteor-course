import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPositions} from './../imports/api/players.js';
import App from './../imports/ui/App.js';

Meteor.startup(() => {
  //call tracker autorun
  //create var called players, set = to query above players find fetch
  Tracker.autorun(() => {
      //console.log('Players List', Players.find().fetch());
      let players = Players.find({}, {sort: {score: -1, name: 1}}).fetch();
      let positionedPlayers = calculatePlayerPositions(players);
      let title = 'SkorKPR';
      let subTitle = 'created by: DK';

      //render players to the screen
      ReactDOM.render(<App title={title} players={positionedPlayers}/>,
        document.getElementById('app'));
  });
});
