window.CreateSpCOntroler = function($scope,$http,$location){
    $scope.onsubmit = function(){
        $http.post("http://localhost:3000/Sanphams",{
            id:$scope.id,
            TenSp:$scope.TenSp,
            Gia:$scope.Gia,
            Soluongton:$scope.Soluongton,
            Giamgia:$scope.Giamgia
            
        })
        .then(function(response){
            if(response.status === 201){
                alert("Thêm thành công");
                $location.path("/home");
            }
        });
    };
    $scope.detail =function(id){
        $http.get("http://localhost:3000/Sanphams/"+id).then(function(response){
            console.log(response);
            if (response.statusText ==="OK"){
                $scope.id = response.data.id;
                $scope.TenSp=response.data.TenSp;
                $scope.Gia=response.data.Gia;
                $scope.Soluongton=response.data.Soluongton;
                $scope.Giamgia=response.data.Giamgia;
            }
        },
            function(errors){
                console.log(errors);
        },
      )
    }; 
    $scope.UpdateSanpham = function(){
        $http.put("http://localhost:3000/Sanphams/" + $scope.id,{
            id:$scope.id,
            TenSp:$scope.TenSp,
            Gia:$scope.Gia,
            Soluongton:$scope.Soluongton,
            Giamgia:$scope.Giamgia
            
        })
        .then(function(response){
            if(response.status === 200){
                alert("Update thành công");
                $location.path("/home");
            }
        });   
     };
     $scope.Deletes = function(){
        $http.delete("http://localhost:3000/Sanphams/" + $scope.id,{
            
        })
        .then(function(response){
            if(response.status === 200){
                alert("Update thành công");
                $location.path("/home");
            }
        });   
     };
     $scope.GetbyID = function(){
        $http.get("http://localhost:3000/Sanphams/"+id,{

        }).then(function(response){
            console.log(response)
        })
    };
    
}