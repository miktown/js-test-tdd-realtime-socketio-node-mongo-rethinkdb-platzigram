var page = require('page')

var main = document.getElementById('main-container')

page('/', function (ctx, next) {
  main.innerHTML = 'Home <a href="/signup">go signup</a>'
})

page('/signup', function (ctx, next) {
  main.innerHTML = 'Signup <a href="/">go home</a>'
})

page()
