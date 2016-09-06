/**
 * Created by chenchen on 16/9/6.
 */
// Greeter.js
var config = require('./config.json');
var styles = require('./Greeter.css');
module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};