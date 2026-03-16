import {
  auth,
  db,
  ref,
  get,
  onAuthStateChanged,
  signOut,
} from "/assets/js/firebase.js";

const statusBadge = document.getElementById("statusBadge");
const refreshButton = document.getElementById("refreshStatus");
const logoutButton = document.getElementById("logout");

const renderStatus = (status) => {
  if (status === "approved") {
    statusBadge.textContent = "Status: aprovado ✅";
    window.location.href = "/dashboard";
    return;
  }

  if (status === "rejected") {
    statusBadge.textContent = "Status: recusado ❌";
    return;
  }

  statusBadge.textContent = "Status: aguardando aprovação ⏳";
};

const loadStatus = async (uid) => {
  const snapshot = await get(ref(db, `users/${uid}`));
  if (!snapshot.exists()) {
    statusBadge.textContent = "Perfil não encontrado. Entre novamente.";
    return;
  }
  renderStatus(snapshot.val().status);
};

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "/auth";
    return;
  }
  await loadStatus(user.uid);
});

refreshButton.addEventListener("click", async () => {
  const user = auth.currentUser;
  if (user) {
    await loadStatus(user.uid);
  }
});

logoutButton.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "/auth";
});
