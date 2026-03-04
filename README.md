# UCaldas Auth (Expo + Auth0 + Google)

Aplicación móvil con Expo para inicio de sesión con Auth0 (conexión Google) y validación de dominio institucional.

## Requisitos

- Node.js 18+
- npm
- Expo CLI (se usa con `npx expo ...`)
- Android Studio (para Android nativo) y/o Xcode (para iOS)

## 1) Clonar e instalar

```bash
git clone https://github.com/YanethM/oauth0-uniconnnect.git
cd oauth0-uniconnnect
npm install
```

## 2) Configurar entorno

Crea tu archivo `.env` a partir de la plantilla:

```bash
cp .env.example .env
```

Luego edita `.env` con tus credenciales de Auth0/Google.

## 3) Configuración mínima en Auth0

En tu aplicación **Native** de Auth0:

- Allowed Callback URLs:
  - `https://auth.expo.io/@yaneth.mejiar/ucaldas-auth`
  - `com.ucaldas.estudiantes://auth0-callback`
- Allowed Logout URLs:
  - `com.ucaldas.estudiantes://logout`

> Si cambias `owner`, `slug` o `scheme` en `app.json`, también debes actualizar estas URLs en Auth0.

## 4) Ejecutar proyecto

### Expo Go

```bash
npx expo start -c
```

### Android nativo (recomendado para evitar problemas de callback en Expo Go)

```bash
npx expo run:android
npm run start:devclient
```

### iOS nativo

```bash
npx expo run:ios
npm run start:devclient
```

## Scripts disponibles

- `npm run start`
- `npm run start:devclient`
- `npm run start:lan`
- `npm run start:tunnel`
- `npm run start:localhost`
- `npm run android`
- `npm run ios`
- `npm run web`

## Notas para estudiantes

- No subas tu archivo `.env` al repositorio.
- Usa `.env.example` como referencia de variables obligatorias.
- El login acepta solo correos del dominio configurado en `EXPO_PUBLIC_ALLOWED_DOMAIN`.
