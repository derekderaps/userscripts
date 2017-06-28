// ==UserScript==
// @name         Move Harvest plugin to top of JIRA sidebar
// @namespace    tenderwolf
// @version      0.2
// @description  Moves the Harvest time tracking plugin to top of JIRA sidebar, where it used to be!
// @author       Derek "Hawkeye Tenderwolf" DeRaps
// @match        https://*.atlassian.net/*
// @grant        none
// ==/UserScript==

// ==OpenUserJS==
// @author derekderaps
// ==/OpenUserJS==

(function($) {
    'use strict';

    $('#com\\.strategery\\.plugins\\.harvest\\.jira-harvest-tracker__harvest-time-tracker').prependTo('#viewissuesidebar');
})(jQuery);
