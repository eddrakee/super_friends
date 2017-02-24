var mongoose = require('mongoose')
var Hero = mongoose.model('Hero')
var User = mongoose.model("User")

module.exports = function(){
    return{
        add: function(req, res){
            var hero = new Hero({name:req.body.name, power:req.body.power, _user:req.body._id, status:true})
            hero.save(function(err, data){
                User.findOne({_id: req.body._id}, function(err, user){
                    user._hero.push(data._id)
                    user.save(function(err, userData){
                        res.json(data)
                    })
                })
            })
        },
        getAll: function(req, res){
            Hero.find({})
            .populate('_user')
            .exec(function(err, heroes){
                var all = []
                var active = [];
                var inactive = [];
                for(var i = 0; i< heroes.length; i ++){
                    if (heroes[i].status == true){
                        active.push(heroes[i])
                    }
                    else{
                        inactive.push(heroes[i])
                    }
                }
                all.push(active);
                all.push(inactive);
                res.json(all);
                console.log(all)
                // res.json(heroes)
            })
        },
        likeHero: function(req, res){
            Hero.findById({_id: req.body._id}, function(err, hero){
                hero.likes +=1;
                hero.save(function(err){
                    res.json(hero)
                })
            })
        },
        changeStat: function(req, res){
            Hero.findById({_id:req.body._id}, function(err, hero){
                if (err){
                    alert("Something went wrong!")
                }
                else{
                    if(hero.status == true){
                    hero.status = false;
                    hero.save(function(err){
                    res.json(hero)
                        })
                    }
                    else{
                        if(hero.status == false){
                            hero.status = true;
                            hero.save(function(err){
                                res.json(hero)
                            })
                        }
                    }

                }
            })
        }
    }
}()