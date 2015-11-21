angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.slider = [
    "img/banner/1.jpg",
    "img/banner/2.jpg",
    "img/banner/3.jpg"
  ];
    $scope.someclass = "get-in";
    $scope.list = false;
    $scope.menu = function (check) {
        if (check == true)
            $scope.someclass = "get-out";
        else
            $scope.someclass = "get-in";
        $scope.list = check; 
    };
})

.controller('FeatureCtrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
    })
    .controller('headerctrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
    })

;