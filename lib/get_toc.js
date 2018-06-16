var tools = require('./tools');
var rp = require('request-promise');
var _ = require('underscore');

var Module = (function() {
  var getToc = function(url, outdir = './pages') {
    var opt = tools.urlToOption(url);
    rp.get(opt)
      .then(tools.parseToc)
    // CONTINUE: apply tools.downloadURL to the list returned by the previous promise, and retry if something fails
  };
})();

module.exports = Module;
