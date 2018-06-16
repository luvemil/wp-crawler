var cheerio = require('cheerio');
var _ = require('underscore');
var path = require('path');
var fse = require('fs-extra');

var Module = (function() {

  var urlToOption = function(url) {
    return {
      uri: url,
      transform: function(body) {
        return cheerio.load(body);
      }
    }
  };

  var parseToc = function(cheerio_dom) {
    var a_tags = cheerio_dom('.entry-content a');
    var urls = _.map(a_tags, (tag) => { return tag.attribs.href; } );
    return urls.slice(0, urls.length - 2);
  };

  var downloadURL = function(url, outdir) {
    outfile = path.basename(url)
    outfilepath = path.join(outdir,outfile)
    var rp.get(url).then((html) => {
      return fse.outputFile(outfilepath, html);
    }
  }

  return {
    downloadURL: downloadURL,
    parseToc: parseToc,
    urlToOption: urlToOption,
  }
})();

module.exports = Module;
