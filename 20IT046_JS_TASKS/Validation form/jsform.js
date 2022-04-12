var attempt = 3; 
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "ABCD" && password == "ABCD#123") {
    alert("Login successfully");
    
  } else {
    attempt--;
    alert("Wrong I'd and Password.");
    alert("You have left " + attempt + " attempt;");
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      
    }
  }
}