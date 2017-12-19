const App = angular.module('App', []);


App.factory('Search', $http => ({
  styleSearch: query => $http({
    method: 'GET',
    url: '/styles',
    headers: { search: query },
  }),

  productSearch: query => $http({
    method: 'GET',
    url: '/products',
    headers: { search: query },
  }),
}));
App.controller('AppCtrl', ($scope, Search) => {
  $scope.styletext;
  this.producttext;
  $scope.styleVideos = [];
  $scope.productVideos = [];
  $scope.productsubmit = () => {
    Search.productSearch($scope.producttext).then((videos) => {
      $scope.productVideos = videos.data.items;
      console.log($scope.productVideos);
    }).catch((err) => {
      console.log(err);
    });
  };
  $scope.stylesubmit = () => {
    Search.styleSearch($scope.styletext).then((videos) => {
      $scope.styleVideos = videos.data.items;
      console.log($scope.styleVideos)
    })
      .catch((err) => {
        console.log(err);
      });
  };
});
