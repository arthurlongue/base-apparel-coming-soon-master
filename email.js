function email() {
  var email = document.querySelector("input")

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    document.getElementById("wrong-email").style.display = "none"
    document.getElementById("error").style.display = "none"
    alert("Check your inbox in a few minutes.")
  } else {
    document.getElementById("wrong-email").style.display = "block"
    document.getElementById("error").style.display = "block"
  }
}
