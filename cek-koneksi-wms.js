// ==UserScript==
// @name         Cek Koneksi WMS
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Cek Koneksi untuk Auto Login WMS
// @author       Laksamadi Guko
// @match        *://*/*
// @grant        none
// ==/UserScript==

// script ini khusus untuk reaspberry pi yang digunakan untuk monitor autologin WMS, bukan untuk pc yang digunakan sehari hari.

window.onload=function(){

    setInterval(function() {
    ping('https://ssgoogle.com/').then(function(delta) {
        window.location.href = 'http://landing6.wifi.id/landing/';
    }).catch(function(err) {
        window.location.href = 'URL-LOGIN-WMS';
        //contoh url : https://welcome2.wifi.id/wms/?gw_id=WAG-D5-RKT&client_mac=18:a6:f7:1c:8a:17&wlan=SBKPS00359/TKL-W132151960-0001:KEMANGI%2041@WIFI.ID
        // sesuaikan URL-LOGIN-WMS dengan kondisi masing-masing
    });
    }, 5000);

}

// pingjs https://github.com/jdfreder/pingjs

(function (root, factory) { if (typeof define === 'function' && define.amd) { define([], factory); } else if (typeof module === 'object' && module.exports) { module.exports = factory(); } else { root.ping = factory(); }
}(this, function () {

    /**
     * Creates and loads an image element by url.
     * @param  {String} url
     * @return {Promise} promise that resolves to an image element or
     *                   fails to an Error.
     */
    function request_image(url) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() { resolve(img); };
            img.onerror = function() { reject(url); };
            img.src = url + '?random-no-cache=' + Math.floor((1 + Math.random()) * 0x10000).toString(16);
        });
    }

    /**
     * Pings a url.
     * @param  {String} url
     * @param  {Number} multiplier - optional, factor to adjust the ping by.  0.3 works well for HTTP servers.
     * @return {Promise} promise that resolves to a ping (ms, float).
     */
    function ping(url, multiplier) {
        return new Promise(function(resolve, reject) {
            var start = (new Date()).getTime();
            var response = function() {
                var delta = ((new Date()).getTime() - start);
                delta *= (multiplier || 1);
                resolve(delta);
            };
            request_image(url).then(response).catch(response);

            // Set a timeout for max-pings, 5s.
            setTimeout(function() { reject(Error('Timeout')); }, 5000);
        });
    }

    return ping;
}));
