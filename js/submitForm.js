$(".submitBtn").on("click", function (e) {
    // e.preventDefault();
    //new FormData(document.querySelector('.formEl'))
    var valueToPost = new FormData(document.querySelector('.formEl'))
    // JSON.stringify({
    // first_name: $("#validationCustom01").val(),
    // last_name: $("#validationCustom02").val(),
    // gender: $("input[type='radio'][name='gender']:checked").val(),
    // birth_year: $("#selectField").val(),
    // address: $("#validationTextarea").val(),
    // city: $("#validationCustom04").val(),
  // });
  
  fetch(
    'php/post.php',
    {
      method: 'post',
      body: valueToPost
    }
  )

  .then(response => response.json())
  .then(result => alert(JSON.stringify(result)))
});



//   $.post(
//     "php/post.php",
//     {
//       html: valueToPost,
//     },
//     function (data) {
//       const paredResult = JSON.parse(data);
//       $(".contentWrapper").html(`
//     	 <div class="displayResult container col-12 d-flex flex-wrap justify-content-center">
//        	<h3 class="mb-5 col-12 d-flex justify-content-center text-center">Your messeage has been sent successfully!</h3>
//         <h4 class="mb-3 col-12 d-flex justify-content-center">Data submited:</h4>
//          <p class="col-12  d-flex justify-content-center">First name: ${paredResult.first_name}</p>
//          <p class="col-12  d-flex justify-content-center">Last name${paredResult.last_name}</p>
//          <p class="col-12  d-flex justify-content-center">Gender: ${paredResult.gender}</p>
//          <p class="col-12  d-flex justify-content-center">Year of birth${paredResult.birth_year}</p>
//          <p class="col-12  d-flex justify-content-center">Address: ${paredResult.address}</p>
//        		<p class="col-12  d-flex justify-content-center"> City: ${paredResult.city}</p>
//         </div>
//     `);
//     }
//   );
// });
