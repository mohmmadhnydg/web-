function validateForm() {
  let x = document.forms[0]["usernmae"].value;
  let y = document.forms[0]["password"].value;
  if (x == "" || y == "") {
    document.getElementById("text").innerHTML =
      "*Please enter the password and username";
    return false;
  }
}
console.log("output")

