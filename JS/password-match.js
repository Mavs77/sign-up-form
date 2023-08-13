function validatePassword() {
  const newPassword = document.querySelector(".password").value; 
  const confirmPassword = document.querySelector(".confirm-password").value; 

  if (newPassword !== confirmPassword) {
    alert("Psswords do not match. Please re-enter."); 
    return false; 
  }
}