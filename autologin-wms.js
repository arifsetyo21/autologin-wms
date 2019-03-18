// ==UserScript==
// @name         Auto Login WMS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Autologin WMS
// @author       Laksamadi Guko
// @match        *://welcome2.wifi.id/wms/*
// @grant        none
// ==/UserScript==

window.onload=function(){
  setInterval(autoLogin,100);
}

function autoLogin(){
  var username = "USERNAME-WMS";
  var password = "PASSWORD-WMS";
  document.getElementById("username").value = username;
  document.getElementById("password").value = password;
  if(document.getElementsByClassName("button-lg").length>0){
  document.getElementsByClassName("button-lg")[0].click();
}
}
