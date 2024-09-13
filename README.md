# Nuxt 3 Template project

Nuxt3 template project including :
- nuxt (https://nuxt.com/)
- tailwind (https://tailwindcss.nuxtjs.org/)
- dayjs (https://nuxt.com/modules/dayjs)
- nuxtUi (https://ui.nuxt.com/)
- i18n (https://i18n.nuxtjs.org/)

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install

```

Install `pnpm` for windows :
```bash
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```
Else
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
# or
wget -qO- https://get.pnpm.io/install.sh | sh -
``` 

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
