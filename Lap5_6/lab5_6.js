var app = angular.module("myapp", ["ngRoute"])
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/home", { templateUrl: "./home.html", controller: getAoController })
        .when("/sanpham", { templateUrl: "./sanpham.html", controller: getAoController })
        .otherwise({ redirectTo: "/index.html" });
});

window.getAoController = function ($scope, $http) {
    $scope.AddSp = function () {
        $http.post("http://localhost:3000/ao", {
            id: $scope.id,
            name: $scope.name,
            price: $scope.price,
            color: $scope.color,
            type: $scope.type
        }).then(function (reponse) {
            if (reponse.status === 201) {
                alert("Success");
                // $location.path("/home")
            }
        })
    };
    $scope.listAo = [];
    $http.get("http://localhost:3000/ao").then(function (response) {
        $scope.listAo = response.data;
    });
    $scope.detail = function (id) {
        $http.get("http://localhost:3000/ao/" + id).then(function (response) {
            console.log(response);
            if (response.statusText === "OK") {
                $scope.id = response.data.id;
                $scope.name = response.data.name;
                $scope.price = response.data.price;
                $scope.color = response.data.color;
                $scope.type = response.data.type;
            }
        },
            function (errors) {
                console.log(errors);
            }
        )
    };
    $scope.UpdateSp = function () {
        $http.put("http://localhost:3000/ao/"+$scope.id, {
            id: $scope.id,
            name: $scope.name,
            price: $scope.price,
            color: $scope.color,
            type: $scope.type
        }).then(function (reponse) {
            if (reponse.status === 200) {
                alert("Update OK");
            }
        })
    };
    $scope.DeleteSp = function () {
        $http.delete("http://localhost:3000/ao/"+$scope.id, {
        }).then(function (reponse) {
            if (reponse.status === 200) {
                alert("Delete OK");
            }
        })
    };
    $scope.getById =function (id) {
        
        $http.get("http://localhost:3000/ao/"+id).then(function (response) {

               console.log(response.data);
               $scope.id = response.data.id;
               $scope.name = response.data.name;
               $scope.price = response.data.price;
               $scope.color = response.data.color;
               $scope.type = response.data.type;
        });
    }


    // window.AddAoController = function ($scope, $http, $location) {
    //     $scope.AddSp = function () {
    //         $http.post("http://localhost:3000/ao", {
    //             id: $scope.id,
    //             name: $scope.name,
    //             price: $scope.price,
    //             color: $scope.color,
    //             type: $scope.type
    //         }).then(function (reponse) {
    //             if (reponse.status === 201) {
    //                 alert("Success");
    //                 $location.path("/sanpham")
    //             }
    //         })
    //     };
}