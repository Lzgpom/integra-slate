//= require ../lib/_jquery
'use strict';

function request_select() {
  let value = document.getElementById("request_select").value;

  let request_options = document.getElementsByClassName("request_option");
  for (let i = 0; i < request_options.length; i++) {
    request_options[i].style.display = "none";
  }

  document.getElementById(value).style.display = "block";
}

