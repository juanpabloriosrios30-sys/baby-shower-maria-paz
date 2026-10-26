# Baby shower de María Paz

Invitación de Stefania y Juan Pablo. Domingo 6 de diciembre de 2026, 3:00 p. m. (Colombia), Caseta Comunal Santa Isabel, Dosquebradas.

## Probar en tu computador

Abre `index.html` con Chrome o Edge. No necesita npm, Node, PHP ni base de datos. Las fuentes de Google requieren internet; si no cargan se usan fuentes del sistema. La música empieza al abrir el sobre si está marcada la opción de sonido. Los deseos de los corazones son una interacción visual: no se envían ni se guardan como confirmaciones de asistencia.

## Publicar en GitHub Pages

1. Descomprime esta carpeta.
2. En GitHub crea un repositorio llamado `baby-shower-maria-paz`. Si usas GitHub Free, el repositorio debe ser público para usar Pages. La invitación y sus datos serán públicos al publicarlos.
3. Entra al repositorio y elige **Add file → Upload files**. Sube el CONTENIDO de la carpeta: `index.html`, `assets/`, `README.md`, `CREDITOS.md` y `.nojekyll` (este último puede estar oculto en tu explorador). También puedes usar Git si ya lo tienes configurado.
4. Confirma que `index.html` esté directamente en la raíz del repositorio, junto a `assets/`. No subas el ZIP como sustituto de los archivos.
5. Ve a **Settings → Pages → Build and deployment**.
6. En **Source** selecciona **Deploy from a branch**.
7. Selecciona la rama `main`, carpeta `/(root)` y pulsa **Save**.
8. Espera a que termine la publicación. GitHub mostrará el enlace en Pages, normalmente `https://TU_USUARIO.github.io/baby-shower-maria-paz/`.
9. Prueba el sobre, música, calendario y ubicación desde tu celular.

## Conectar un dominio de GoDaddy

No se necesita hosting adicional de GoDaddy: GitHub Pages aloja esta página. Sigue estas instrucciones si deseas dedicar el dominio completo a la invitación. Si ya tiene otro sitio, usa un subdominio como `babyshower.tudominio.com` para conservarlo.

### Dominio completo (tudominio.com)

1. En **GitHub → repositorio → Settings → Pages → Custom domain**, escribe tu dominio real, sin `https://` y sin rutas. Pulsa **Save**. GitHub creará un archivo `CNAME`; consérvalo en futuras actualizaciones del repositorio. No se incluye uno en esta carpeta porque todavía no conocemos tu dominio.
2. Si los servidores de nombres del dominio son de GoDaddy, entra en **GoDaddy → Dominios → tu dominio → DNS / Administrar DNS**. Si los DNS se administran en otro proveedor, modifica los registros allí.
3. Configura los siguientes registros para un dominio dedicado a esta invitación:

| Tipo | Nombre | Valor |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | TU_USUARIO.github.io |

`TU_USUARIO` es tu usuario de GitHub. El CNAME no lleva `https://`, ni el nombre del repositorio. Usa el TTL predeterminado.

4. Para este sitio dedicado, reemplaza los registros de estacionamiento o de la web anterior que entren en conflicto en `@` y `www`. Si hay registros AAAA antiguos de otro hosting, también deben revisarse. Conserva los registros de correo MX y TXT. No cambies los servidores de nombres solo para seguir esta guía.
5. Espera a que GitHub valide los DNS; la propagación puede tardar hasta 24 horas. Luego activa **Enforce HTTPS** cuando esté disponible. La emisión del certificado puede tomar tiempo adicional.
6. Comprueba tu dominio desde el celular con datos móviles y abre el botón de ubicación.

### Si prefieres un subdominio

En GitHub, usa por ejemplo `babyshower.tudominio.com` como **Custom domain**. En GoDaddy agrega solamente `CNAME`, nombre `babyshower`, valor `TU_USUARIO.github.io`. Deja intactos los registros de la web principal. Activa HTTPS cuando GitHub termine la validación.

## Qué puedes editar

- `index.html`: nombres, textos, lugar y enlace a Google Maps.
- `assets/styles.css`: colores, tipografías, tamaños y distribución.
- `assets/invitation.js`: música, apertura, corazones, cuenta regresiva y evento de calendario.
- `assets/osita.webp`: imagen de la osita.

La fecha aparece tanto en el HTML como en la cuenta regresiva y el calendario de `invitation.js`; si cambia el evento, actualiza los tres. El calendario guarda la hora de inicio y no inventa una hora de finalización.

La invitación no incluye RSVP por WhatsApp porque falta el número de contacto. El `noindex` pide a los buscadores no indexar; no protege el acceso a una página pública.

## Documentación oficial

- Publicación: https://docs.github.com/en/pages/quickstart
- Dominio personalizado e IP: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- HTTPS: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
- DNS GoDaddy: https://www.godaddy.com/es/help/agregar-un-registro-cname-19236
