# Racing Game

## TODO:
[x] Change int age for Date
[x] Make a custom validator for age for 15 for Today

# How to start

1. Install Nest CLI: The command line utility for Nest projects
2. Create new projecct
3. Understand the directory structure and typical parts


## Rules

- Using Conventional naming in commits
- Always try return type in TypeScript

## Standards for return codes

| **200 - 299** | **Suceess**
|----------:|---------
| 200 | OK
| 201 | Created
| 204 | No Content
| **300 - 399** | **Redirects**
| 301 | Moved permanently
| 302 | Found |
| 304 | Not modified
| **400 - 499** | **Client error**
| 400 | Bad Request 
| 401 | Unathorized 
| 403 | Forbidden 
| 404 | Not Found 
| 405 | Method Not Alloed 
| **500 - 599** | **Server Error**
| 500 | Intenal Server Error  
| 502 | Bad Gatweay  
| 503 | Service Unvailable  
| 504 |Gateway Timeout  


## Future

- Specialize to write tests

## How Udemy can helps?

- Look on Q&A, current lection and ask the question
- Also many videos has many resources like state of the project on GitHub

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

### Theory how our backend workds 

#### Frontend

 - JavaScript in the Browser
 - Using DOM
 - HTML & CSS
 - Frontend frameworks like React, Vue, Angular, Svelte

#### Backend

 - JavaScript in the OS (Application server)
 - Using Node.js
 - Building HTTP Servers
 - Interacting with databases
 - Backend frameworks like Express, Fastify (NestJS is using of Fastify), NestJS


#### NestJS Advantages

- Well organized code
- Modular design
- Modern using Typescript with Decorators
- Feature rich
- Rest APIs
- GraphQL
- Queues
- Intragrated with ORMs
- Authehtification
- Data validation
- Logging


Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
