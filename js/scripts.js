$(document).ready(function() {
  $("#address-form").submit(function(event) {
    var name = $("#form-name").val();
    var address = $("#form-address").val();
    var city = $("#form-city").val();
    var state = $("#inputState").val();

    console.log(name);
    $("#name").text(name);
    $("#address").text(address);
    $("#city").text(city);
    $("#state").text(state);

    event.preventDefault();
  });

  // $('#myModal').on('shown.bs.modal', function () {
  //   $('#myInput').trigger('focus')
  // })

  // $("#address-form").submit(function(event) {
  //   var person1Input = $("input#person1").val();
  //   var person2Input = $("input#person2").val();
  //   var animalInput= $("input#animal").val();
  //   var exclamationInput = $("input#exclamation").val();
  //   var verbInput = $("input#verb").val();
  //   var nounInput = $("input#noun").val();
  //
  //   $(".person1").text(person1Input);
  //   $(".person2").text(person2Input);
  //   $(".animal").text(animalInput);
  //   $(".exclamation").text(exclamationInput);
  //   $(".verb").text(verbInput);
  //   $(".noun").text(nounInput);
  //
  //   $("#story").show();
  //
  //   event.preventDefault();
  // });





});
