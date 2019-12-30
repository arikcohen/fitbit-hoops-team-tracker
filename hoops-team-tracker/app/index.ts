// reference the common classes

/// <reference path="../common/team.ts" />
/// <reference path="../common/player.ts" />

// helper modules
import { setup, next } from 'fitbit-views';
import * as deviceSettings from 'fitbit-fs-settings/app';

// different views
import viewIntro from './views/view-intro';
import viewTeamPick from './views/view-team-pick';
import viewScoring from './views/view-scoring';
import viewStats from './views/view-stats';

let teamList: Team[] = [];

// Initialize the views...
setup({
	'intro': viewIntro,
	'team-pick': viewTeamPick,
	'scoring': viewScoring,
	'stats': viewStats,
});

deviceSettings.initialize((data) => {
	console.warn(JSON.stringify(data));
});


// ... and goes to the intro screen
next('intro');