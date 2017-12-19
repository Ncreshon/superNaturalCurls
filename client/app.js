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
App.controller('AppCtrl', ($scope, $sce, Search) => {
  
  $scope.producttext;
  $scope.video = { id: { videoId: 'N8XCXdmM9nM'}};
  $scope.test = 'https://www.youtube.com/embed/';
  $scope.trustSrc = function (src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.styleVideos = [];
  $scope.productVideos = [];
  $scope.productsubmit = () => {
    Search.productSearch($scope.producttext).then((videos) => {
      $scope.productVideos = videos.data.items;
    }).catch((err) => {
      console.log(err);
    });
  };
  $scope.stylesubmit = () => {
    Search.styleSearch($scope.styletext).then((videos) => {
      $scope.styleVideos = videos.data.items;
      $scope.video = videos.data.items[0];
    })
      .catch((err) => {
        console.log(err);
      });
  };
  $scope.titleSelect = (video) => {
    $scope.video = video;
  };
  

  $scope.favorite = (video) => {
    console.log(video);
  },
  $scope.unlike = (video) => {
    console.log(video);
  }
});
