/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Practice3/Practice3/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});