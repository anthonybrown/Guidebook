/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true,  laxcomma : true,
*/
/*global Guidebook */

Guidebook.controller('AddNoteController',
  function ($scope, $location, $routeParams, NoteModel) {
    "use strict";
    var chapterId = $routeParams.chapterId;
    $scope.cancel = function() {
      $location.path('/chapter/' + chapterId);
    };
    $scope.createNote = function() {
      NoteModel.addNote(chapterId, $scope.note.content);
      $location.path('/chapter/' + chapterId);
    };
  }
);

Guidebook.controller('DeleteNoteController',
  function ($scope, $location, $routeParams, NoteModel) {
    'use strict';
    var chapterId = $routeParams.chapterId;
    NoteModel.deleteNote(chapterId, $routeParams.noteId);
    $scope.selectedChapterId = chapterId;
    $location.path('/chapter/' + chapterId);
  }
);

