# React Vite Login

<p align="center">
<a href="https://resume.varandrew.com/"><img src="https://img.shields.io/badge/blog-@varandrew-blue.svg?style=social" alt="Blog"></a>
<a href="https://github.com/varandrew/react-vite-login"><img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Status"></a>
<a href="https://github.com/varandrew/react-vite-login"><img src="https://img.shields.io/github/license/varandrew/react-vite-login" alt="License"></a>
<a href="https://github.com/varandrew/react-vite-login"><img src="https://img.shields.io/npm/v/npm.svg" alt="Version"></a>
<a href="https://reactjs.org/"><img src="https://img.shields.io/badge/framework-react-orange.svg" alt="Framework"></a>
<a href="https://reactjs.org/"><img src="https://img.shields.io/badge/lanuage-typescript-blue.svg" alt="Lanuage"></a>
</p>

> This is a [ReactJS](https://reactjs.org) +  [Vite](https://vitejs.dev) boilerplate to be used with [Tailwindcss](https://tailwindcss.com).


## What is inside?

This project uses many tools like:

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)

## Screenshots

### Login Page
<img src="https://github.com/varandrew/react-vite-login/blob/master/screenshots/iphone_login.png" width="365" height="619"/> <img src="https://github.com/varandrew/react-vite-login/blob/master/screenshots/pc_login.png" width="1200" height="1176"/>

### Two-factor authentication Page
<img src="https://github.com/varandrew/react-vite-login/blob/master/screenshots/iphone_tfa.png" width="365" height="619"/> <img src="https://github.com/varandrew/Petrichor-Music/blob/master/screenshot/pc_tfa.png" width="1200" height="1176"/>

## Project Layout
```bash
.
├── screenshots
│   ├── iphone_login.png
│   ├── iphone_tfa.png
│   ├── pc_login.png
│   └── pc_tfa.png
├── scripts
│   └── build.mjs
├── src
│   ├── assets
│   │   ├── icons
│   │   └── images
│   │       ├── iPhone_banner@2x.png
│   │       ├── iPhone_banner@3x.png
│   │       ├── iphone_emall@2x.png
│   │       ├── iphone_emall@3x.png
│   │       ├── iphone_password@2x.png
│   │       ├── iphone_password@3x.png
│   │       ├── iphone_tx.png
│   │       ├── pc_banner.png
│   │       ├── pc_email.png
│   │       ├── pc_password.png
│   │       └── pc_tx.png
│   ├── common
│   │   ├── fonts
│   │   └── styles
│   │       ├── index.css
│   │       └── reset.css
│   ├── components
│   │   ├── Button
│   │   │   └── index.tsx
│   │   ├── Icons
│   │   │   ├── Minus.tsx
│   │   │   ├── Plus.tsx
│   │   │   ├── SoundFilling.tsx
│   │   │   ├── SoundMute.tsx
│   │   │   └── index.ts
│   │   ├── Input
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   └── Widget
│   │       └── Copyright.tsx
│   ├── constants
│   ├── hooks
│   │   └── useDrag.ts
│   ├── layouts
│   ├── pages
│   │   ├── Home
│   │   │   └── index.tsx
│   │   ├── Loading
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   ├── Login
│   │   │   ├── index.module.scss
│   │   │   └── index.tsx
│   │   └── App.tsx
│   ├── public
│   │   └── favicon.svg
│   ├── routers
│   │   ├── index.tsx
│   │   └── route-config.ts
│   ├── services
│   │   ├── api
│   │   │   ├── login.ts
│   │   │   └── test.http
│   │   ├── config.ts
│   │   └── request.ts
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── index.ts
│   ├── index.tsx
│   └── vite-env.d.ts
├── Dockerfile
├── LICENSE
├── README.md
├── index.html
├── jest.config.js
├── nginx.conf
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts

27 directories, 57 files
```

## Getting Started

### Install

Install dependencies.

```bash
pnpm install
```

Serve with hot reload at http://localhost:4500.

```bash
pnpm run dev
```

### Lint

```bash
pnpm run lint
```

### Build

```bash
pnpm run build
```

### Test

```bash
pnpm run test
```

## License

This project is licensed under the MIT License.
