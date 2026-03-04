# UCaldas Auth (resumen rápido)

App Expo con login Auth0 + Google y restricción por dominio institucional.

## Requisitos
- Node.js 18+
- npm
- Expo Go (pruebas rápidas)

## Inicio en 5 pasos
1. Clonar e instalar:
  ```bash
  git clone https://github.com/YanethM/oauth0-uniconnnect.git
  cd oauth0-uniconnnect
  npm i
  ```
2. Crear entorno:
  ```bash
  cp .env.example .env
  ```
3. Completar `.env` con tu `AUTH0_DOMAIN`, `AUTH0_CLIENT_ID` y demás variables.
4. Configurar Auth0 (app tipo **Native**):
  - Allowed Callback URLs: `https://auth.expo.io/@usuario/ucaldas-auth,com.ucaldas.estudiantes://auth0-callback`
  - Allowed Logout URLs: `com.ucaldas.estudiantes://logout`
5. Ejecutar:
  ```bash
  npx expo start -c
  ```

## Nota importante
- Para Android, si Expo Go falla al volver del login, usa build nativo:
  ```bash
  npx expo run:android
  npm run start:devclient
  ```
