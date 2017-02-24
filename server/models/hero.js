var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HeroSchema = new Schema({
    name:{type:String, required:true},
    power:{type:String, required:true},
    status:{type:Boolean, default:true},
    likes: {type:Number, default:0},
    _user: {type:Schema.Types.ObjectId, ref:'User'}
}, {timestamps: true})

mongoose.model('Hero', HeroSchema);