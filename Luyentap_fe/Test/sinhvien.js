window.SinhVienController = function ($scope, $http) {
    $scope.listSinhVien = [];
    $http.get("http://localhost:3000/SinhViens").then(
      function (response) {
        $scope.listSinhVien = response.data;
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  };