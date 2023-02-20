window.createSanPhamController=function($scope, $http, $location){
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
                $location.path("/homeSanPham");
            }
        });
    };

    $scope.detail=function(id){
        $http.get("http://localhost:3000/Sanphams/"+id)
        .then(function(response){
            if(response.statusText==="ok"){
                $scope.id=response.data.id;
                $scope.name=response.data.name;
                $scope.price=response.data.price;
                $scope.slTon=response.data.slTon;
                $scope.voucher=response.data.voucher;
            }
        },
        function(errors){
            console.log(error);
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
                alert("update thanh cong");
                $location.path("/homeSanPham");
            }
        });
    };

    $scope.deleteSanPham=function(){
        $http.delete("http://localhost:3000/Sanphams/"+$scope.id,{

        })
        .then(function(response){
            if(response.status===200){
                alert("delete thanh cong");
                $location.path("/homeSanPham");
            }
        })
    };

    $scope.GetbyID=function(){
        $http.get("http://localhost:3000/Sanphams/"+id,{

        })
        .then(function(response){
            console.log(response);
        })
    };
}