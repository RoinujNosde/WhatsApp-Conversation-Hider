// ==UserScript==
// @name         WhatsApp Conversation Hider
// @namespace    https://roinujnosde.me
// @version      0.1
// @description  Hides the conversation tab when ESC is pressed
// @author       RoinujNosde
// @match        https://web.whatsapp.com/
// @icon         https://web.whatsapp.com/favicon.ico
// @grant        none
// @run-at       document-idle
// @license MIT
// ==/UserScript==
 
(function() {
    'use strict';
 
    var openConvoClassName = "_3xTHG";
    var connectingClassName = "_2dfCc";
    var moreOptionsButtonClassName = "_26lC3";
    var closeConvoClassName = "_2oldI dJxPU";
 
    function closeConversation() {
        var elements = document.getElementsByClassName(openConvoClassName);
        if (elements.length == 0) {
            console.debug("Couldn't find an open conversation");
            return false;
        }
        console.debug("Conversation open");
 
        document.getElementsByClassName(moreOptionsButtonClassName)[4].click();
        setTimeout(function() {
            document.getElementsByClassName(closeConvoClassName)[2].click()
        }, 1);
 
        return true;
    }
 
    function checkIfConnected() {
        return document.getElementsByClassName(connectingClassName).length == 0;
    }
 
    function addListener() {
        if (!checkIfConnected()) {
            setTimeout(addListener, 1000);
            return;
        }
 
        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
                console.debug("Esc pressed");
                if (closeConversation()) {
                    event.preventDefault();
                }
            }
        });
    }
 
    addListener();
})();