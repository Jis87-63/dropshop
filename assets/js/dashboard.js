import { auth, signOut, onAuthStateChanged } from "/assets/js/firebase.js";

const logoutButton = document.getElementById("logout");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "/auth";
  }
});

logoutButton.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "/auth";
});
