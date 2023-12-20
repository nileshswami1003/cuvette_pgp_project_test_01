// RULES ==============================================
$(document).ready(function() {
    $("#btn-rules").click(function(e) {
        e.preventDefault();
      $(".img-rules").fadeToggle();
    });
    $(".img-rules").click(function(e) {
        e.preventDefault();
      $(".img-rules").fadeToggle();
    });

    document.getElementById("comp-score").innerText = localStorage.getItem('computerCount');
    document.getElementById("user-score").innerText = localStorage.getItem('userCount');
    

    // result page logic
    // =====================================================
    // computer option selected by randonly
    // ==================================================
    const myArray = ['ROCK', 'SCISSOR', 'PAPPER'];
    
    
    // console.log("RANDOM : "+randomElement);
    // ==================================================

    $("#img-rock").click(function(e){
      // store rock in local storage
      e.preventDefault();
      const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
      localStorage.setItem("userOption","ROCK");
      localStorage.setItem("computerOption",randomElement);

      console.log("user : "+localStorage.getItem("userOption"));
      console.log("comp : "+localStorage.getItem("computerOption"));
      
      window.location.href = "next-page.html";
    });

    $("#img-scissor").click(function(e){
      // store rock in local storage
      e.preventDefault();
      const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
      localStorage.setItem("userOption","SCISSOR");
      localStorage.setItem("computerOption",randomElement);

      console.log("user : "+localStorage.getItem("userOption"));
      console.log("comp : "+localStorage.getItem("computerOption"));

      window.location.href = "next-page.html";
    });

    $("#img-papper").click(function(e){
      // store rock in local storage
      e.preventDefault();
      const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
      localStorage.setItem("userOption","PAPPER");
      localStorage.setItem("computerOption",randomElement);

      console.log("user : "+localStorage.getItem("userOption"));
      console.log("comp : "+localStorage.getItem("computerOption"));

      window.location.href = "next-page.html";
    });
    
});
