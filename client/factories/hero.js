app.factory('heroFactory', function($http, $location){
  var factory = {}
  factory.hero = []

  factory.getAll = function(callback){
      $http.get('/hero/all').then(function(output){
          callback(output.data)
      })
  }

  factory.addHero = function(hero){
    $http.post('/hero/add', hero).then(function(output){
        factory.hero.push(output.data)
        // callback(output.data)
        $location.url('/dashboard')
    })
  }
  factory.likeHero = function(hero, callback){
      $http.post('/hero/like', hero).then(function(output){
          callback(output.data)
      })
  }
  factory.changeStat = function(hero, callback){
      $http.post('/hero/status', hero).then(function(output){
          callback(output.data)
      })
  }
  return factory
})