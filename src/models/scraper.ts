'use strict';

import Nightmare = require('nightmare');

default export class HtmlContent {
  constructor(public url:string) {
    this.url = url;
  }

  getContent() {
    new Nightmare()
      .goto(this.url)
      .wait(5000)
      .evaluate(() => {
        return document.querySelector('body').innerHTML;
      })
      .end()
      .then((result) => {
        return result;
      });
  }
}
