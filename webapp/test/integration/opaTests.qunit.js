/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Practice4/Practice4/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
