window.sanPhamController=function($scope, $http){
    $scope.listSanPham=[];
    $http.get("http://localhost:3000/Sanphams")
    .then(function(response){
        $scope.listSanPham=response.data;
    });


    $scope.onsubmit=function(){
        $http.post("http://localhost:3000/Sanphams",{
            id:$scope.id,
            name:$scope.name,
            price:$scope.price,
            slTon:$scope.slTon,
            voucher:$scope.voucher
        })
        .then(function(response){
            if(response.status===201){
                alert("them thanh cong");
                $location.path("./homeSanPham.html")
            }
        });
    };

    $scope.detail=function(id){
        $http.get("http://localhost:3000/Sanphams/"+id)
        .then(function(response){
            consoler.log(response);
            if(response.statusText==="ok"){
                $scope.id=response.data.id;
                $scope.name=response.data.name;
                $scope.price=response.data.price;
                $scope.slTon=response.data.slTon;
                $scope.voucher=response.data.voucher;
            }
        },
        function(errors){
            console.log(errors);
        },
        )
    };

    $scope.updateSanPham=function(){
        $http.put("http://localhost:3000/Sanphams/"+$scope.id,{
            id:$scope.id,
            name:$scope.name,
            price:$scope.price,
            slTon:$scope.slTon,
            voucher:$scope.voucher
        })
        .then(function(response){
            if(response.status===200){
                salert("update thanh cong");
            $location.path("./homeSanPham.html");
            }
        });
    };

    $scope.deleteSanPham=function(){
        $http.delete("http://localhost:3000/Sanphams/"+$scope.id,{

        })
        .then(function(response){
            if(response.status===200){
                alert("delete thanh cong");
                $location.path("./homeSanPham.html");
            }
        })
    };

}