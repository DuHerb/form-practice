$(document).ready(function() {
  console.log("koko");
  $("#address-form").submit(function(event) {
    event.preventDefault();
    var name = $("#form-name").val().toUpperCase().replace("I", "YOU");
    console.log(name);
    $("#secret").text(name);
  });
});
