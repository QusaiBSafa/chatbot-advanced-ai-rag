# Infrastructure Overview
The application consists of a NestJS backend, PostgreSQL database, Redis for caching, and Qdrant for vector storage. The frontend is built with React and communicates with the backend via REST API.

## Data Models
- **Users:** Stores user information and roles (Admin, Employee).
- **Documents:** Information about uploaded documents and their versions.
- **Chunks:** Text chunks extracted from documents for retrieval.
- **Conversations:** Stores conversation history for users.

## API Design
- **POST /chat:** Handles user queries and returns answers based on document retrieval.
- **GET /search:** Allows searching for documents without AI assistance.

## Key Decisions
- Using Redis for caching to improve response time and reduce LLM costs.
- Implementing a streaming response mechanism for better user experience.