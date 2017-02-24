var session = require('./../controllers/session.js')
var hero = require('./../controllers/hero.js')
module.exports = function(app){
    app.post('/login', function(req, res){
        session.login(req, res)
    })
    app.get('/checkUser', function(req, res){
        session.checkUser(req, res)
    })
    app.get('/logout', function(req, res){
        session.logout(req, res)
    })
    // HERO ROUTES
    app.post('/hero/add', function(req, res){
        hero.add(req, res)
    })
    app.get('/hero/all', function(req, res){
        hero.getAll(req, res)
    })
    app.post('/hero/like', function(req, res){
        hero.likeHero(req,res)
    })
    app.post('/hero/status', function(req, res){
        hero.changeStat(req,res)
    })
}