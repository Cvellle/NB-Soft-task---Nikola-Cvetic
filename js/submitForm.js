$(".submitBtn").on("click", function () {
  let valueToPost = JSON.stringify({
    firstName: $("#validationCustom04").val(),
    lastName: $("#validationCustom04").val(),
    gender: $("input[type='radio'][name='radio-stacked']:checked").val(),
    address: $("#validationCustom04").val(),
    state: $("#validationCustom04").val(),
  });
  $.post(
    "/echo/html/",
    {
      html: valueToPost,
    },
    function (data) {
      alert(JSON.parse(data).gender);
    }
  );
});
