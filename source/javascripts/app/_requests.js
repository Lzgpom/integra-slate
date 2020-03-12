//= require ../lib/_jquery
;(function () {
  'use strict';

  $("#request_select").change(function () {
    let id = $(this).find("option:selected").attr("id");

    console.log(id);
  });

})();
