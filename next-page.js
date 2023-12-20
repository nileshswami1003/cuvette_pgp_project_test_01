// var uScore = localStorage.getItem('computerCount');
// var cScore = localStorage.getItem('userCount');
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
    
    
    function storeCompScore(score){
        localStorage.setItem("computerCount",score);
    }
    
    function storeUserScore(score){
        localStorage.setItem("userCount",score);
    }
    
    // Retrieve the computer's score from local storage.
    function getCompScore() {
        return localStorage.getItem('computerCount') || 0;
    }
    
    // Retrieve the user's score from local storage.
    function getUserScore() {
        return localStorage.getItem('userCount') || 0;
    }
    
    function showScore(){
        document.getElementById("comp-score").innerText = getCompScore();
        document.getElementById("user-score").innerText = getUserScore();
    }
    
    // result page logic
    // =====================================================
    // get options from previous page
    var userOpt = localStorage.getItem("userOption");
    var compOpt = localStorage.getItem("computerOption");
    // var userCount = localStorage.getItem("userCount");
    // var computerCount = localStorage.getItem("computerCount");
    console.log("user : "+userOpt);
    console.log("comp : "+compOpt);
    
    // user win chances
    if(userOpt == "ROCK" && compOpt == "SCISSOR"){
        // rock win
        // rock count + 1
        // console.log(userOpt.toUpperCase()+" is winner");
        // USER WINNER
        storeUserScore(parseInt(getUserScore()) + 1);
        console.log("user count : "+getUserScore());

        var elem = document.createElement("img");
        elem.setAttribute("src", "images/"+userOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("left-side").appendChild(elem);
        elem = document.createElement("img");
        elem.setAttribute("src", "images/"+compOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("right-side").appendChild(elem);
        resultMsg = document.createElement("h1");
        resultMsg.innerText = "YOU WIN";
        document.getElementById("result-msg").appendChild(resultMsg);

        localStorage.removeItem("userOption");
        localStorage.removeItem("computerOption");
        
        showScore();

        // next button visibilty
        $(".next-btn").show();
    }
    else if(userOpt == "SCISSOR" && compOpt == "PAPPER"){
        // scissor win
        // scissor count + 1
        // console.log(userOpt.toUpperCase()+" is winner");
        // USER WINNER
        storeUserScore(parseInt(getUserScore()) + 1);
        console.log("user count : "+getUserScore());
        
        var elem = document.createElement("img");
        elem.setAttribute("src", "images/"+userOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("left-side").appendChild(elem);
        elem = document.createElement("img");
        elem.setAttribute("src", "images/"+compOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("right-side").appendChild(elem);
        resultMsg = document.createElement("h1");
        resultMsg.innerText = "YOU WIN";
        document.getElementById("result-msg").appendChild(resultMsg);

        localStorage.removeItem("userOption");
        localStorage.removeItem("computerOption");

        showScore();

        // next button visibilty
        $(".next-btn").show();
    }
    else if(userOpt == "PAPPER" && compOpt == "ROCK"){
        // papper win
        // papper count + 1
        // console.log(userOpt.toUpperCase()+" is winner");
        // USER WINNER
        storeUserScore(parseInt(getUserScore()) + 1);
        console.log("user count : "+getUserScore());
        
        var elem = document.createElement("img");
        elem.setAttribute("src", "images/"+userOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("left-side").appendChild(elem);
        elem = document.createElement("img");
        elem.setAttribute("src", "images/"+compOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("right-side").appendChild(elem);
        resultMsg = document.createElement("h1");
        resultMsg.innerText = "YOU WIN";
        document.getElementById("result-msg").appendChild(resultMsg);
        
        localStorage.removeItem("userOption");
        localStorage.removeItem("computerOption");

        showScore();

        // next button visibilty
        $(".next-btn").show();
    }
    //computer win chances
    else if(userOpt == "SCISSOR" && compOpt == "ROCK"){
        // rock win
        // rock count + 1
        // console.log(compOpt.toUpperCase()+" is winner");
        // COMPUTER WINNER
        storeCompScore(parseInt(getCompScore()) + 1);
        console.log("comp count : "+getCompScore());
        
        var elem = document.createElement("img");
        elem.setAttribute("src", "images/"+userOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("left-side").appendChild(elem);
        elem = document.createElement("img");
        elem.setAttribute("src", "images/"+compOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("right-side").appendChild(elem);
        resultMsg = document.createElement("h1");
        resultMsg.innerText = "YOU LOST";
        document.getElementById("result-msg").appendChild(resultMsg);

        localStorage.removeItem("userOption");
        localStorage.removeItem("computerOption");

        showScore();
    }
    else if(userOpt == "PAPPER" && compOpt == "SCISSOR"){
        // scissor win
        // scissor count + 1
        // console.log(compOpt.toUpperCase()+" is winner");
        // COMPUTER WINNER
        storeCompScore(parseInt(getCompScore()) + 1);
        console.log("comp count : "+getCompScore());
        
        var elem = document.createElement("img");
        elem.setAttribute("src", "images/"+userOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("left-side").appendChild(elem);
        elem = document.createElement("img");
        elem.setAttribute("src", "images/"+compOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("right-side").appendChild(elem);
        resultMsg = document.createElement("h1");
        resultMsg.innerText = "YOU LOST";
        document.getElementById("result-msg").appendChild(resultMsg);

        localStorage.removeItem("userOption");
        localStorage.removeItem("computerOption");

        showScore();
    }
    else if(userOpt == "ROCK" && compOpt == "PAPPER"){
        // papper win
        // papper count + 1
        // console.log(compOpt.toUpperCase()+" is winner");
        // COMPUTER WINNER
        storeCompScore(parseInt(getCompScore()) + 1);
        console.log("comp count : "+getCompScore());
        
        var elem = document.createElement("img");
        elem.setAttribute("src", "images/"+userOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("left-side").appendChild(elem);
        elem = document.createElement("img");
        elem.setAttribute("src", "images/"+compOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("right-side").appendChild(elem);
        resultMsg = document.createElement("h1");
        resultMsg.innerText = "YOU LOST";
        document.getElementById("result-msg").appendChild(resultMsg);

        localStorage.removeItem("userOption");
        localStorage.removeItem("computerOption");

        showScore();
    }
    else{
        console.log("ITS TIE");
        // IT'S TIE
        var elem = document.createElement("img");
        elem.setAttribute("src", "images/"+userOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("left-side").appendChild(elem);
        elem = document.createElement("img");
        elem.setAttribute("src", "images/"+compOpt.toLocaleLowerCase()+".png");
        elem.setAttribute("height", "130");
        elem.setAttribute("width", "130");
        document.getElementById("right-side").appendChild(elem);
        resultMsg = document.createElement("h1");
        resultMsg.innerText = "TIE UP";
        document.getElementById("result-msg").appendChild(resultMsg);

        localStorage.removeItem("userOption");
        localStorage.removeItem("computerOption");

        showScore();
    }
});
