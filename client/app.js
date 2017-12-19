const App = angular.module('App', []);


App.factory('Search',  $http => ({
  styleSearch: query => $http({
    method: 'GET',
    url: '/styles',
    headers: { search: query },
  }).then( (videos) => {
    console.log(videos.data)
    // $scope.styleVideos = videos.data
  })
  .catch((err) => {
    console.log(err);
  }),

  productSearch: query => $http({
    method: 'GET',
    url: '/products',
    headers: { search: query },
    }).then( videos => {
      $scope.productVideos = videos;
    }).catch( err => {
      console.log(err);
  }),
  



}));


App.controller('AppCtrl', ($scope, Search) => {
  $scope.styletext;
  $scope.styleVideos = [];
  $scope.productVideos = [];
  $scope.producttext;
  $scope.productsubmit = () => {
    Search.productSearch($scope.producttext);
  };
  $scope.stylesubmit = () => {
    Search.styleSearch($scope.styletext);
  };


});
