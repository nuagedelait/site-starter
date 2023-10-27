This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The goal of this framework is to help getting up a nextJS & sanity website with a clean archictecture and true serverside rendering (powered by nextJS 14).

## Getting Started

Enter your sanity details into the .env file

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More on NextJS

App router is populated with exemples handliing any routes, or custom dynamics routes, all with metadata (default and loaded from sanity)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Learn More on Sanity

Sanity studio is embeded in this project for a selft hosting a customization

Desk is already prepared to use settings (create your own), managment (every except content) and content (pages and portfolio exemple)

[Go here for a step-by-step guide](https://www.sanity.io/docs/getting-started-with-sanity) on how to get up and running.

Check out [the docs](https://www.sanity.io/docs/sanity-studio) and start building.

## CMS

This project use a Page system to create any website project. Page can be managed :
- Directly in the code using the Page component
- Using a page schema in sanity
- Using any document in Sanity with a slug (and eventualy a title and description)

Soon I will add the pagebuilder sections exemple so you can manage your full website into Sanity.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
