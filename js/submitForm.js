$(".submitBtn").on("click", function () {
  $.post(
    "demo_test_post.asp",
    {
      firstName: $("#validationCustom04").val(),
      lastName: $("#validationCustom04").val(),
      gender: $("input[type='radio'][name='radio-stacked']:checked").val(),
      address: $("#validationCustom04").val(),
      state: $("#validationCustom04").val(),
    },
    function (data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    }
  );
});
