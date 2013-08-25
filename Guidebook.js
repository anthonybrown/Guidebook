/*jslint            browser : true,   continue : true,
  devel  : true,     indent : 2,       maxerr  : 50,
  newcap : true,      nomen : true,   plusplus : true,
  regexp : true,     sloppy : true,       vars : false,
  white  : true,   laxcomma: true
*/
/*global angular, $, _*/

var guidebookConfig = function ($routeProvider) {
  "use strict";
  $routeProvider
    .when('/', {
        controller: 'ChaptersController'
      , templateUrl: 'view/chapters.html'
    })
    .when('/chapter/:chapterId', {
        controller: 'ChaptersController'
      , templateUrl: 'view/chapters.html'
    })
    .when('/addNote/:chapterId', {
        controller: 'AddNoteController'
      , templateUrl: 'view/addNote.html'
    })
    .when('/deleteNote/:chapterId/:noteId', {
        controller: 'DeleteNoteController'
      , templateUrl: 'view/addNote.html'
    })
   ;
};
var Guidebook = angular.module('Guidebook', []).config(guidebookConfig);
