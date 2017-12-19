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
  $scope.producttext;
  $scope.video;
  $scope.styleVideos = [];
  $scope.productVideos = [];
  $scope.theBestVideo = 'sMKoNBRZM1M';
  $scope.youtubeUrl = (id) => {
    return "https://www.youtube.com/embed/" + id;
  };
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
      $scope.video = videos.data.items[0];
      console.log($scope.video, 'video')
      console.log($scope.styleVideos)
    })
      .catch((err) => {
        console.log(err);
      });
  };
  $scope.titleSelect = (video) => {
    $scope.video = video;
   console.log($scope.video)
  };

  $scope.favorite = (video) => {
    console.log(video);
  },
  $scope.unlike = (video) => {
    console.log(video);
  }
});
