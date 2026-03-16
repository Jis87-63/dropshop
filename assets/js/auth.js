import {
  auth,
  db,
  ref,
  set,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "/assets/js/firebase.js";

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const form = document.getElementById("authForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submitButton");
const message = document.getElementById("authMessage");

let isLoginMode = true;
nameInput.style.display = "none";

const setMode = (loginMode) => {
  isLoginMode = loginMode;
  loginTab.classList.toggle("active", loginMode);
  registerTab.classList.toggle("active", !loginMode);
  nameInput.style.display = loginMode ? "none" : "block";
  nameInput.required = !loginMode;
  submitButton.textContent = loginMode ? "Entrar" : "Criar conta";
  message.textContent = "";
};

loginTab.addEventListener("click", () => setMode(true));
registerTab.addEventListener("click", () => setMode(false));

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const name = nameInput.value.trim();

  try {
    if (isLoginMode) {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const uid = result.user.uid;
      window.location.href = `/aprovacao-pendente?uid=${uid}`;
      return;
    }

    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (name) {
      await updateProfile(result.user, { displayName: name });
    }

    await set(ref(db, `users/${result.user.uid}`), {
      uid: result.user.uid,
      name: name || "Usuário",
      email,
      status: "pending",
      createdAt: Date.now(),
    });

    window.location.href = `/aprovacao-pendente?uid=${result.user.uid}`;
  } catch (error) {
    message.textContent = `Erro: ${error.message}`;
  }
});
