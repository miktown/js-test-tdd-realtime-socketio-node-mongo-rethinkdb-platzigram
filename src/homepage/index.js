var page = require('page')
var empty = require('empty-element')

page('/', function (ctx, next) {
  var main = document.getElementById('main-container')
  empty(main).innerHTML = 'Home <a href="/signup">go signup</a>'
})
