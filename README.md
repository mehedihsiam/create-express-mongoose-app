# create-express-mongoose-app

A CLI tool to quickly bootstrap a production-grade Express.js + MongoDB/Mongoose project with TypeScript.

## Features

- 🚀 **Quick Setup** - Create a new project in seconds
- 📦 **Package Manager Support** - Choose npm, yarn, or pnpm
- 🔒 **Security First** - Includes Helmet, CORS, rate limiting
- 📝 **TypeScript** - Strict mode enabled by default
- 🛡️ **Error Handling** - Centralized error middleware with standardized responses
- 📊 **Logging** - Winston logger with file rotation
- ✅ **Validation** - Joi schema validation
- 🗄️ **Database Ready** - MongoDB/Mongoose with connection retry logic
- 🏥 **Health Checks** - Built-in /health and /ready endpoints

## Installation

```bash
npm install -g create-express-mongoose-app
```

Or use npx without installation:

```bash
npx create-express-mongoose-app
```

## Usage

Run the CLI:

```bash
create-express-mongoose-app
```

Or with npx:

```bash
npx create-express-mongoose-app
```

The CLI will ask for:

1. **Project Name** - The name of your project directory
2. **Package Manager** - Choose between npm, yarn, or pnpm

## What's Included

The generated project includes:

### Core Features

- Express.js server with TypeScript
- MongoDB/Mongoose integration
- Centralized error handling
- API response wrapper class
- Async error handling
- Winston logging with file rotation
- Joi validation framework
- Security middleware stack (helmet, CORS, rate-limit)
- Request ID tracking
- Health check endpoints

### Project Structure

```
src/
├── config/           # Configuration
├── middleware/       # Express middleware
├── modules/          # Feature modules
├── utils/            # Utility functions
├── app.ts            # Express app setup
├── index.ts          # Entry point
└── server.ts         # Server startup
```

### Generated Files

- `.env.example` - Environment variables template
- `package.json` - Dependencies configured
- `tsconfig.json` - TypeScript configuration
- `.gitignore` - Git ignore rules
- `README.md` - Project documentation

## Quick Start After Generation

```bash
# 1. Navigate to project
cd my-express-app

# 2. Set up environment variables
cp .env.example .env

# 3. Configure MongoDB URI in .env
# MONGODB_URI=mongodb://localhost:27017/your-db-name

# 4. Start development server
npm run dev

# 5. Build for production
npm run build
npm start
```

## Environment Variables

The `.env.example` file includes all available configuration options:

- `NODE_ENV` - Application environment
- `PORT` - Server port
- `MONGODB_URI` - MongoDB connection string
- `API_PREFIX` - API route prefix
- `LOG_LEVEL` - Logging level
- `CORS_ORIGIN` - CORS origin
- And more...

## API Examples

### Success Response

```json
{
  "status": "success",
  "data": {...},
  "message": "Retrieved successfully"
}
```

### Error Response

```json
{
  "status": "error",
  "message": "Validation failed",
  "errors": {...},
  "statusCode": 422
}
```

## Troubleshooting

### Template Clone Failed

- Ensure you have internet access
- Check if the template repository is accessible
- Verify the repository name is correct

### Dependencies Installation Failed

- Ensure you have Node.js >= 16.0.0 installed
- Try running the package manager command manually
- Check for permission issues

### MongoDB Connection Failed

- Ensure MongoDB is running
- Verify `MONGODB_URI` in `.env` is correct
- Check MongoDB connection permissions

## Support

For issues, questions, or suggestions, please visit the template repository:

https://github.com/mehedihsiam/express-mongo-starter

## License

MIT

## Author

Your Name

---

Built with ❤️ for developers
