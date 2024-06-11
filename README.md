# Nuxt 3 Minimal Starter (Thumbs up test for Formula.Monks)

For checking the site. visit (https://thumbs-up-monks.vercel.app/)

## Installation

### Requirements for running on localhost

- NodeJS v21.7.1 or lts/iron (v20.13.1)
- pnpm 8.76

### Environment Variables

Create an `.env` file at root of the project with the keys attached via email as txt file `(env.txt)`:

### Instructions

1. Clone repository:

```bash
git clone (https://github.com/Danjavia/thumbs-up-monks)
cd thumbs-up-monks
pnpm install
pnpm dev
```

After go to (http://localhost:3000/)
   
### Install via docker

1. Be sure to copy .env file at root of the project before build

2. Build the image

```bash
docker build -t thumbs-up-monks .
```

3. Run container

```bash
docker run -p 3000:3000 thumbs-up-monks
```

After go to (http://localhost:3000/)

### How to Deploy to vercel

to deploy via vercel, instal `vercel-cli` following the next steps (https://vercel.com/docs/cli/deploying-from-cli).

With `vercel-cli` installed, run `vercel --prod`