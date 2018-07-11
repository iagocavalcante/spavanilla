'use strict';

(function () {
  function init() {
    let router = new Router([
      new Route('home', 'home/home.html'),
      new Route('about', 'about/about.html')
    ])
  }
  init()
}())