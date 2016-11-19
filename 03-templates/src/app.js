import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import playerDetails from './data/player-details.json'
import playersTpl from './templates/players.hbs'
import contactTpl from './templates/contact.hbs'
import notFoundTpl from './templates/not-found.hbs'

const $app = $('#app')

function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}

function players(ctx) {
  let player = playerDetails[ctx.params.player]
  $app.html(playersTpl(player))
}

function notFound() {
  $app.html(notFoundTpl())
}

router('/', index)
router('/players/:player', players)
router('/contact', contact)
router('*', notFound)
router()
