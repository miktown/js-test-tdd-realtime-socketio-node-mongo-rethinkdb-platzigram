var yo = require('yo-yo')

module.exports = function (pic) {
  function render (picture) {
    return yo`<div class="card">
        <div class="card-image">
          <img class="activator" src="${picture.url}">
        </div>
        <div class="card-content">
          <a href="/user/${picture.user.username}" class="card-title">
            <img src="${picture.user.avatar}" class="avatar" />
            <span class="username">${picture.user.username}</span>
          </a>
          <small class="right time">Hace 1 día</small>
          <p>
            <a class="left" href="#" onclick=${like} ><i class="fa fa-heart-o" aria-hidden="true"></i></a>
            <span class="left likes">${picture.likes} me gusta</span>
          </p>
        </div>
      </div>`
  }

  function like () {
    pic.liked = true
    pic.likes += 1
    var newEl = render(pic)
    yo.update(el, newEl)
    return false
  }

  var el = render(pic)

  return el
}
