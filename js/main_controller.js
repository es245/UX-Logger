app.controller('main_controller', ['$scope', function($scope) {

  angular.element(document).ready(function () {

  	$scope.entry = '';
    $scope.results = '';
    $scope.list = [];

    $scope.submitEntry = function(){
      if($scope.entry){
        $scope.list.push(this.entry);
        //alert($scope.results);
        $scope.results += $scope.entry + "\n";
        $scope.entry = '';
      }
    }

  });




}]);
