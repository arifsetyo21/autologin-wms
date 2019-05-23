// ==UserScript==
// @name         Auto Login WMS
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Auto Login WMS
// @author       Laksamadi Guko
// @match        *://welcome2.wifi.id/wms/*
// @grant        none
// ==/UserScript==

var username = "USERNAME-WMS";
var password = "PASSWORD-WMS";
document.getElementById("username").value = username;
document.getElementById("password").value = password;

function ClickClass(classname){
    var i;
    var el = document.getElementsByClassName(classname);
    if(el){
        for (i = 0; i < (el.length); i++) {
            el[i].click();
        }
    }
}

ClickClass("button-lg")
