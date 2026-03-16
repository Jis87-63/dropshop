# DropPrime Platform

Plataforma de dropshipping com design refinado e fluxo de aprovação:

- `/` Landing page premium.
- `/auth` Login e cadastro com Firebase Authentication.
- `/aprovacao-pendente` Tela de status de aprovação em tempo real.
- `/dashboard` Área liberada para usuários aprovados.

## Firebase já configurado

As credenciais estão em `assets/js/firebase.js` e usam:

- Firebase Auth
- Firebase Realtime Database

## Deploy

- **Vercel:** arquivo `vercel.json` pronto.
- **Firebase Hosting:** `firebase.json` + `.firebaserc` prontos.
- **Render:** `render.yaml` pronto para static site.

## Rodar local

```bash
python3 -m http.server 4173
```

Abra `http://localhost:4173`.
