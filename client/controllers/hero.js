app.controller('heroController', function($scope, heroFactory, $route){
    $scope.errors = []
    $scope.heroes = []

    heroFactory.getAll(function(data){
        $scope.heroes = data
        
    })

    $scope.addHero = function(id){
        $scope.errors = [];

        if(!$scope.newHero || !$scope.newHero.name || !$scope.newHero.power ){
            $scope.errors.push("Please fill out the forms!")
        }else if($scope.newHero.name.length < 3){
            $scope.errors.push("Names must be a minimun of 3 characters!")
            
        }else if($scope.newHero.power.length <3){
            $scope.errors.push("Power must be a minimun of 3 characters!")
        }else{
            $scope.newHero._id = id
            heroFactory.addHero($scope.newHero)
            $scope.newHero = {}
        }
    }

    $scope.likeHero = function(hero){
        heroFactory.likeHero(hero, function(data){
            $scope.hero = data.likes
            $route.reload()
        })
    }

    $scope.changeStat = function(hero){
        heroFactory.changeStat(hero, function(data){
            $route.reload()
        })
    }
    
})