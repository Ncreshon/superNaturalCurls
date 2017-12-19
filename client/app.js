const App = angular.module('App', []);


// App.factory('Search', ($http) => {

//   return {
//     searchVideos: (query) => {
//       return $http({
//         method: "GET",
//         url: "/search",
//         headers: { search: query}
//        }).then((videos) => {
//          $scope.videos = videos;
//        }).catch((err) => {
//          console.log(err)
//        })


//     },


//   }

// });



App.controller('AppCtrl', ($scope) => {
  $scope.styletext;
  $scope.producttext;
  $scope.productsubmit = () => {
    console.log($scope.producttext);
    // Search.searchVideos($scope.text);
  };
  $scope.stylesubmit = () => {
    console.log($scope.styletext);
    // Search.searchVideos($scope.text);
  };


});