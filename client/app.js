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

  favoriteSearch: video => $http({
    method: 'POST',
    url: '/favorite',
    headers: {
      'Content-Type': "application/json",
    },
    data: { video: video },
  }),
  unlikeSearch: video => $http({
    method: 'POST',
    url: '/unlike',
    headers: {
      'Content-Type': "application/json",
    },
    data: { video: video },
  }),
  
  upSearch: video => $http({
    method: 'POST',
    url: '/upvote',
    headers: {
      'Content-Type': "application/json",
    },
    data: { video: video },
  }),
  downSearch: video => $http({
    method: 'POST',
    url: '/downvote',
    headers: {
      'Content-Type': "application/json",
    },
    data: { video: video },
  }),
  getRated: () => $http({
    method: 'GET',
    url: '/rated',
  }),

}));
App.controller('AppCtrl', ($scope, $sce, Search) => {
  $scope.producttext;
  $scope.video = { id: { videoId: 'u7TiyPKBYL0' } };
  $scope.test = 'https://www.youtube.com/embed/';
  $scope.trustSrc = function (src) {
    return $sce.trustAsResourceUrl(src);
  };
  $scope.styleVideos = [];
  $scope.productVideos = [];
  $scope.rated = [];
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
  },
  $scope.dbtitleSelect = (video) => {
    console.log(video)
  },


  $scope.favorite = (video) => {
    Search.favoriteSearch(video)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  $scope.unlike = (video) => {
    Search.unlikeSearch(video)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };
  $scope.upvote = (video) => {
    Search.upSearch(video)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };
  $scope.downvote = (video) => {
    Search.downSearch(video)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };
  $scope.rated = () => {
   console.log('rated');
   Search.getRated().then(videos => {
     $scope.rated = videos.data;
     console.log($scope.rated)
   })
  };
});
