# Despliegue en producción (SystemX)

Guía para publicar sin exponer claves en GitHub.

---

## 1. Lo que NUNCA debes subir a Git

| Archivo        | Motivo                          |
|----------------|----------------------------------|
| `.env.local`   | Contiene tus claves reales       |
| `.env`         | Mismo riesgo                     |

Ya están en `.gitignore`. Solo sube `.env.example` (con placeholders).

---

## 2. EmailJS (formulario de contacto)

### Plantilla

Variables recomendadas en la plantilla:

- `{{from_name}}`
- `{{from_email}}`
- `{{reply_to}}`
- `{{message}}`

**To email:** `systemx218@gmail.com`  
**Reply to:** `{{reply_to}}`

### Dominios permitidos (EmailJS → Account → Security)

Añade:

- `http://localhost:5173`
- `https://sytemx.vercel.app`
- `https://sebzx1.github.io`

---

## 3. Vercel (principal) — https://sytemx.vercel.app

1. Conecta el repo en [vercel.com](https://vercel.com).
2. **Settings → Environment Variables** (Production):

   | Nombre | Valor |
   |--------|--------|
   | `VITE_EMAILJS_SERVICE_ID` | tu `service_...` |
   | `VITE_EMAILJS_TEMPLATE_ID` | tu `template_...` |
   | `VITE_EMAILJS_PUBLIC_KEY` | tu public key |

3. **Build:** usa `npm run build:vercel` (ya en `vercel.json`).
4. **Base path:** `/` (automático con variable `VERCEL` en el build).
5. Redeploy después de guardar las variables.

---

## 4. GitHub Pages — https://sebzx1.github.io/systemx/

### Secrets del repositorio

**GitHub → repo systemx → Settings → Secrets and variables → Actions → New repository secret**

Crea estos tres (mismos valores que en `.env.local`):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### Activar Pages

**Settings → Pages → Source:** `Deploy from a branch` → branch `gh-pages` → `/ (root)`.

Cada push a `master` o `main` ejecuta el workflow y publica.

---

## 5. Desarrollo local

```bash
cp .env.example .env.local
# Edita .env.local con tus claves reales
npm run dev
```

Abre: http://localhost:5173/systemx/

---

## 6. Subir cambios a Git

```bash
git add .
git status   # confirma que .env.local NO aparece
git commit -m "Configuración de producción"
git push origin master
```

---

## 7. Resumen de URLs

| Entorno | URL | Base |
|---------|-----|------|
| Local | http://localhost:5173/systemx/ | `/systemx/` |
| Vercel | https://sytemx.vercel.app/ | `/` |
| GitHub Pages | https://sebzx1.github.io/systemx/ | `/systemx/` |
