This project is set up to use TypeScript.

There are two parts to this project, the backend and the frontend. Everything related to the backend you can find in the `backend` directory. The other is the Next.js frontend.

## Getting Started

First, make sure to have the right credentials set up.

Start off by running the below to get all the dependencies
```bash
npm install
# or
yarn install
```

Also, make sure you have nodemon installed. If not, install it like this:
```bash
 yarn global add nodemon
```

Run the `backend` development server (the commands should be performed in different tabs in the terminal):

```bash
# watches for changes and generates JS output from TS files in the dist folder
npm run watch
# runs the development with nodemon
npm run dev
# or
yarn watch
yarn dev
```

With the right credentials set up this will start the backend development server at port :5000. You can edit this API interface in the backend/api folder.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
