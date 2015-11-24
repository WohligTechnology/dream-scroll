// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

        .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })

    .state('blog', {
        url: "/blog",
        templateUrl: "views/template.html",
        controller: 'BlogCtrl'
    })

    $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function ($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});


//
//firstapp.directive("minHeight", function($window) {
//    return function(scope, element, attrs) {
//        console.log(element);
//        var minheight = '';
//        var minheight = $(window).height();
//        console.log(minheight);
//        element.css({
//            "min-height": minheight + "px"
//        });
//    };
//});

firstapp.directive('fullPage', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element); 
        }
    };
});
