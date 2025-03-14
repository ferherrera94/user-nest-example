```markdown
# User NestJS API

A simple NestJS API for managing users with PostgreSQL and TypeORM. This project demonstrates how to build a RESTful API with NestJS, including dependency injection, database integration, and testing with Jest.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- RESTful API for user management
- PostgreSQL integration via TypeORM
- Dependency injection with NestJS
- Environment-based configuration using `@nestjs/config`
- Unit testing with Jest

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/) (or Docker to run a PostgreSQL container)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/user-nest-example.git
   cd user-nest-example
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Configuration

1. **Environment Variables:**

   Create a `.env` file in the root directory with the following content (adjust values as needed):

   ```dotenv
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=password
   DB_DATABASE=testdb
   DB_SYNC=false
   ```

2. **TypeORM Configuration:**

   This project uses dynamic configuration via `TypeOrmModule.forRootAsync` in `app.module.ts`, so your database settings are loaded from the environment.

## Running the Application

Start the application in development mode:

```bash
npm run start:dev
```

The server will run on [http://localhost:3000](http://localhost:3000).

## Running Tests

The project uses Jest for unit testing. To run tests:

```bash
npm run test
```

For watch mode:

```bash
npm run test:watch
```

For coverage:

```bash
npm run test:cov
```

## Project Structure

```
user-nest-example/
├── src/
│   ├── app.module.ts          # Root module
│   ├── main.ts                # Entry point
│   └── user/                  # User module
│       ├── user.controller.ts # API endpoints for users
│       ├── user.entity.ts     # User entity (TypeORM model)
│       ├── user.service.ts    # Business logic for user operations
│       └── user.module.ts     # Module definition for the user feature
├── migrations/                # Database migration files (if applicable)
├── .env                       # Environment configuration file
├── package.json
├── tsconfig.json
└── README.md
```

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.
```

