let toggleShowPass = document.getElementsByClassName("toggle-pass")[0];
toggleShowPass.addEventListener("click", (e) => {
  e.target.classList.toggle("fa-eye-slash")
  e.target.classList.toggle("fa-sharp")
  e.target.classList.toggle("fa-eye")
  e.target.parentElement.children[1].type === "password" 
  ? e.target.parentElement.children[1].type = "text" 
  : e.target.parentElement.children[1].type === "text" 
  ? e.target.parentElement.children[1].type = "password"
  : ""
  ; 
})