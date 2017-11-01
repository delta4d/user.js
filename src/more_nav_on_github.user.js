// ==UserScript==
// @name More Nav on Github
// @namespace https://github.com/delta4d
// @version 0.0.1
// @license MIT License
// @match https://github.com/*
// @run-at document-end
// @grant none
// ==/UserScript==

// jshint esversion: 6

'use strict';

var addNavItem = (() => {
    const nav = document.querySelector('[role="navigation"]');
    const cls = nav.firstElementChild.firstElementChild.className; // ul > li > a

    return (desc, addr) => {
        let a = document.createElement("a");
        a.setAttribute("class", cls);
        a.setAttribute("href", addr);
        a.innerText = desc;

        let item = document.createElement("li");
        item.appendChild(a);
        
        nav.appendChild(item);
    };
})();

addNavItem("Stars", "/stars");
addNavItem("Settings", "/settings");
