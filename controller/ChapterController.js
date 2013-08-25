/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true,  laxcomma : true,
*/


Guidebook.controller('ChaptersController',
  function ($scope, $location, $routeParams, ChapterModel, NoteModel) {
    var chapters = ChapterModel.getChapters();
    for (var i=0; i<chapters.length; i++) {
      chapters[i].notes = NoteModel.getNotesForChapter(chapters[i].id);
    }
    $scope.chapters = chapters;
    $scope.selectedChapterId = $routeParams.chapterId;
    $scope.onDelete = function(noteId) {
      var confirmDelete = confirm('Are you sure you want to delete this note?');
      if (confirmDelete) {
        $location.path('/deleteNote/' + $routeParams.chapterId + '/' + noteId);
      }
    };
  }
);
