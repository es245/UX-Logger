app.controller('main_controller', ['$scope', '$filter', function($scope, $filter) {

  angular.element(document).ready(function () {
    $scope.time_formats = [
      {name:'Day/Month/Year/Hour/Min/Sec', format:'dd MMM yyyy H:mm:ss'},
      {name:'Hour/Min/Sec/Day/Month/Year', format:'H:mm:ss dd MMM yyyy'},
      {name:'Hour/Minute/Second', format:'H:mm:ss'},
      {name:'Day/Month/Year', format:'dd MMM yyyy'}
    ];
  	$scope.entry = '';
    $scope.results = '';
    $scope.list = [];
    $scope.time_date_format = null;


    $scope.submitEntry = function(){
      $scope.date = new Date();
      current_time = $filter('date')($scope.date, $scope.time_date_format.format);
      if($scope.entry){
        $scope.list.push(this.entry);
        $scope.results += current_time + ': ' + $scope.entry + "\n";
        $scope.entry = '';
      }

    }

  });




}]);
