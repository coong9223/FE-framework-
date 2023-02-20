window.dongVatController = function($scope, $http){
    $scope.listDongVat=[];
    $http.get("http://localhost:3000/dongVat")
    .then(function(response){
        $scope.listDongVat=response.data;
    });

    //lay data
    $scope.detail=function(id){
        $http.get("http://localhost:3000/dongVat/"+id)
        .then(function(response){
            console.log(response);
            if(response.statusText==="OK"){
                $scope.id=response.data.id,
                $scope.ten=response.data.ten,
                $scope.canNang=response.data.canNang,
                $scope.loai=response.data.loai,
                $scope.gioiTinh=response.data.gioiTinh
            }
        },
        function(errors){
            console.log(errors);
        },
        )
    };

    //them data
    $scope.onsubmit=function(){
        $http.post("http://localhost:3000/dongVat",{
            id: $scope.id,
            ten: $scope,ten,
            canNang: $scope.canNang,
            loai: $scope.loai,
            gioiTinh: $scope.gioiTinh
        })
        .then(function(response){
            if(response.status===201){
                alert("them thanh cong");
                $location.path("/homeDongVat");
            }
        })
    };

    //update data
    $scope.updateDongVat=function(){
        $http.put("http://localhost:3000/dongVat/"+$scope.id,{
            id: $scope.id,
            ten: $scope,ten,
            canNang: $scope.canNang,
            loai: $scope.loai,
            gioiTinh: $scope.gioiTinh
        })
        .then(function(response){
            if(response.status===200){
                alert("update thanh cong");
                $location.path("/homeDongVat");
            }
        });
    };

    //delete data
    $scope.deleteDongVat=function(){
        $http.delete("http://localhost:3000/dongVat/"+$scope.id,{

        })
        .then(function(response){
            if(response.status===200){
                alert("delete thanh cong");
                $location.path("/homeDongVat");
            }
        })
    };
}