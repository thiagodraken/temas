# Building RESTful Web APIs with Node.js, Express, MongoDB and TypeScript

## Requirements

[NodeJS](https://nodejs.org/en/)

Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
```

Configuração de convesão typescript para javascript e configurações de servidor node usando mongoDB
https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-1-2-195bdaf129cf

instalação manual de certificado SSL
https://websiteforstudents.com/manually-install-the-latest-openssl-toolkit-on-ubuntu-16-04-18-04-lts/



## Getting Started

You should install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) on your local machine, or use other services such as [mLab](https://mlab.com/) or [Compose](https://www.compose.com/compare/mongodb)

After that, you will have to replace the mongoURL with your MongoDB address in *lib/app.ts*


Then install the dependencies

```
npm install
```

## Start the server

Run in development mode

```
npm run dev
```

Run in production mode 

```
npm run prod
```

*Reference from [Lynda.com](https://www.lynda.com/Node-js-tutorials/Next-steps/633869/671263-4.html)*
