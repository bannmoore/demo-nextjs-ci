# Demo: NextJS / Sequelize Postgres / Cypress w/ CI

[![Build Status](https://travis-ci.org/bannmoore/demo-nextjs-ci.svg?branch=master)](https://travis-ci.org/bannmoore/demo-nextjs-ci) [![bannmoore](https://circleci.com/gh/bannmoore/demo-nextjs-ci.svg?style=svg)](https://app.circleci.com/pipelines/github/bannmoore/demo-nextjs-ci)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

Set up the database:

```sh
npm install
docker-compose up -d
npm run db:setup
```

Run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run the cypress tests:

```sh
npm run cypress:open
# or
npm run cypress:run
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
