# ChatBot Fullstack AI

## Overview
This project is an AI-powered internal company assistant that answers employees' questions using internal documentation. It utilizes a Retrieval-Augmented Generation (RAG) approach with OpenAI's API and a vector database (Qdrant) for efficient information retrieval.

## What's Built
- Authentication for Admin and Employee roles.
- Document upload and processing pipeline.
- Chat API for querying the assistant.
- Redis caching for performance optimization.
- Streaming responses using Server-Sent Events (SSE).

## How to Run
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```
   DATABASE_URL=your_postgresql_connection_string
   REDIS_URL=your_redis_connection_string
   QDRANT_URL=your_qdrant_connection_string
   OPENAI_API_KEY=your_openai_api_key
   ```
4. Start the application:
   ```bash
   npm run start
   ```

## API Documentation
### POST /chat
- **Request Body:**
  ```json
  { "message": "How do I deploy backend service?" }
  ```
- **Response:**
  ```json
  { "answer": "...", "sources": ["Deployment Guide.pdf", "Page 8"] }
  ```

### GET /search?q=deployment
- **Response:**
  ```json
  [ { "chunk": "...", "document": "..." } ]
  ```

## Environment Variables
- `DATABASE_URL`: PostgreSQL connection string.
- `REDIS_URL`: Redis connection string.
- `QDRANT_URL`: Qdrant connection string.
- `OPENAI_API_KEY`: OpenAI API key.