$(document).ready(function() {
  $("form#booking").submit(function(event) {
    var result = "success";
    $("#success").window.location.assign("file:///Users/Guest/Desktop/booking/success.html");
    // $("#divide-output").after(result);
    event.preventDefault();
  });
});
