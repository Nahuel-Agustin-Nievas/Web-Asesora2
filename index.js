window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})


// $(document).ready(function(){
//     $(document).click(
//       function(){
//         $("#hamburguer").removeClass("navbar navbar-expand-lg bg-light");
//       }
//     );
//   });




  // // Look for .hamburger
  // var hamburger = document.querySelector(".hamburger");
  // // On click
  // hamburger.addEventListener("click", function() {
  //   // Toggle class "is-active"
  //   hamburger.classList.toggle("is-active");
  //   // Do something else, like open/close menu
  // });




  function sendMail(){
    
      var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        msg: document.getElementById("msg").value,
        
      };
  
  const serviceID = "service_j54fxnl";
  const templateID = "template_zcmn47c";
  const msgenviado = document.getElementById("msgenviado");
  
  emailjs.send(serviceID, templateID, params)
  .then(
    res =>{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("msg").value = "";
      console.log(res);
      msgenviado.style.display = 'block';
      
    })
   
  .catch(err=>console.log(err));
    }


  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("form")
      .addEventListener("submit", validarFormulario);
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    let nombre = document.getElementById("name").value;
    if (nombre.length == 0) {
      alert('Por favor complete el campo "Nombre"');
      return;
    }
  
    let email = document.getElementById("email").value;
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      alert("Debe dejar un mail válido");
      return;
    }
  
    let comentario = document.getElementById("msg").value;
    if (comentario.length < 6) {
      alert("Debe dejar un comentario");
      return;
    }
  
    // this.submit();

    sendMail();

  
  
    
  }







