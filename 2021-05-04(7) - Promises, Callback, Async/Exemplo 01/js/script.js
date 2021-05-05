// 1° solução: usando callback
// $(document).ready( function() {
//     $("#btnView").click(function(){
//       console.log("Hello World!");
//       resolve();
//     });
//   });

//   function resolve() {
//     console.log("Fim!");
//   }

// 2° solução: usando promise
$(document).ready(function () {
  $("#btnView").click(function () {
    var $obj = new Promise((resolve) => {
      // Colocar aqui o processamento assíncrono.
      console.log("Hello World!");
      resolve();
    });
    $obj.then(() => console.log("Fim"));
  });
});