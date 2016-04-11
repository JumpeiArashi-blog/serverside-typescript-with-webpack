'use strict';

const Nightmare = require('nightmare');

class HtmlContent {
  constructor(url) {
    this.url = url;
  }

  getContent() {
    new Nightmare()
      .goto(this.url)
      .wait(5000)
      .evaluate(() => {
        return document.querySeoector('body').innerHTML;
      })
      .end()
      .then((result) => {
        return result;
      });
  }
}

module.exports = HtmlContent;
