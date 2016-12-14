/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// VERSION 1.0.1

// Listeners - Object to aid in setting and removing all kinds of event listeners to an object;
this.__defineGetter__('Listeners', function() { delete this.Listeners; Modules.load('utils/Listeners'); return Listeners; });

// Timers - Object to aid in setting, initializing and cancelling timers
this.__defineGetter__('Timers', function() { delete this.Timers; Modules.load('utils/Timers'); return Timers; });

// aSync() - lets me run aFunc asynchronously, basically it's a one shot timer with a delay of aDelay msec
this.aSync = function(aFunc, aDelay) { loadWindowTools(); return aSync(aFunc, aDelay); };

this.loadWindowTools = function() {
	delete this.aSync;
	delete this.loadWindowTools;
	Modules.load('utils/windowTools');
};
