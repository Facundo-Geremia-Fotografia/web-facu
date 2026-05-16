# Web Facu

Proyecto reorganizado para gestionar el portfolio mediante archivos JSON por sección.

Estructura relevante:
- `sections/` — JSON por sección (hero, about, portfolio, services, contact).
- `images/` — Guarda tus fotografías aquí y referencia rutas relativas en los JSON.

- Subcarpetas: ahora hay subcarpetas por categoría en `images/` (ej: `retratos/`, `eventos/`, `urbano/`, `naturaleza/`, `paisajes/`, `byn/`).

Cómo editar:
- `sections/hero.json`: cambia `title`, `subtitle`, `background` y `cta`.
- `sections/about.json`: edita `html` para el contenido "Sobre mí".
- `sections/portfolio.json`: agrega categorías e items. Cada item debe tener `src`, `alt` y `category`.
- `sections/services.json` y `sections/contact.json`: edita `html`.

Notas:
- `script.js` carga y renderiza automáticamente los JSON.
- Para añadir fotos locales, copia archivos a la subcarpeta correspondiente dentro de `images/` y usa la ruta en `sections/portfolio.json`.
- Ya creé subcarpetas de ejemplo con imágenes SVG de muestra.

Si quieres, ordeno las imágenes de ejemplo en subcarpetas ahora.

## Editor local (admin/) — cómo funciona y cómo recuperarlo

He añadido una pequeña app Node para gestión local de `sections/*.json` e imágenes. Esta herramienta queda en `admin/` y está ignorada por Git (`.gitignore`) para que no se suba al repositorio remoto.

Por qué: la app permite editar y subir archivos directamente en tu copia local del proyecto. Cuando estés conforme, haces `git add` / `git commit` / `git push` desde tu repositorio local para publicar los cambios.

Cómo usarla:
1. Abre una terminal en la raíz del proyecto.
2. Entra a la carpeta `admin` y instala dependencias:

```bash
cd admin
npm install
```

3. Inicia el servidor local:

```bash
npm start
```

4. Abre en el navegador: `http://localhost:3000`.

Funciones principales:
- Cargar/editar/guardar `sections/*.json` desde la UI.
- Subir imágenes a `images/<categoria>/` directamente desde la UI.

Seguridad y recuperación:
- `admin/` está en `.gitignore` para que no se publique accidentalmente.
- Si pierdes la carpeta `admin/`, puedes reconstruirla con los archivos: `admin/server.js`, `admin/package.json`, `admin/public/*`. Estos están documentados aquí; guarda una copia fuera del repo si lo prefieres.

Si quieres que guarde automáticamente los cambios en el repo (commits automáticos), puedo añadir un script que haga commits locales — avísame si lo deseas.
He añadido soporte para crear commits locales desde la UI del admin. Instrucciones rápidas:

- En la UI (http://localhost:3000) rellena el campo "Mensaje de commit" y pulsa "Crear commit local".
- Esto ejecuta `git add sections images` y `git commit -m "mensaje"` en tu copia local del repo.

Advertencias:
- El endpoint de commit no hace `git push`. Los commits quedan en tu repositorio local; realiza `git push` manualmente cuando estés listo.
 - El endpoint de commit no hace `git push`. Los commits quedan en tu repositorio local; realiza `git push` manualmente cuando estés listo.

Push desde la UI:
- Ahora la UI del admin incluye una sección "Push remoto" que permite ejecutar `git push <remote> <branch>` desde tu máquina local.
- Si no indicas `branch`, la herramienta usará la rama actual del repo.

Advertencias importantes sobre `git push` desde la UI:
- El servidor local ejecuta `git push` con las credenciales configuradas en tu máquina (SSH o HTTPS). Asegúrate de tener acceso configurado.
- Esta acción hace un push real al remoto y puede afectar el repositorio remoto. Úsalo sólo cuando estés seguro.
- Asegúrate de no tener cambios no deseados en `sections/` o `images/` antes de crear el commit.
