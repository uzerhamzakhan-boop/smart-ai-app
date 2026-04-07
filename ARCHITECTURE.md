# ARCHITECTURE — AI Document Q&A App

## Overview
This app is a simple AI-powered Q&A system that answers questions based on a local JSON document dataset.

It is built using Next.js with a single API route and a simple frontend chat interface.

---

## Tech Stack

### Frontend
- Next.js (React)
- TypeScript (optional)
- Simple UI (input + response box)

### Backend
- Next.js API Routes
- One endpoint: /api/ask

### Data
- Local JSON file (no database)
- Stored in: /src/data/documents.json

### AI Layer
- OpenAI API
- Sends JSON context + user question
- Returns generated answer

---

## Folder Structure (FINAL DESIGN)

src/
  app/
    page.tsx              # Main UI page
  api/
    ask/route.ts          # AI question endpoint
  lib/
    ai.ts                 # OpenAI logic
    data.ts               # Loads JSON data
  data/
    documents.json        # Knowledge base
  components/
    ChatBox.tsx           # Input component
    AnswerBox.tsx         # Output display

tests/
PRD.md
ISSUES.md
ARCHITECTURE.md

---

## Data Flow

1. User types a question in UI
2. Frontend sends request to /api/ask
3. API loads JSON documents
4. API sends:
   - user question
   - JSON context
   - to OpenAI
5. OpenAI returns answer
6. UI displays response

---

## Key Design Decisions

### 1. No database
We use JSON to keep the system simple and fast for MVP.

### 2. Single API route
Keeps backend minimal and easy to debug.

### 3. Stateless design
No user sessions or authentication.

### 4. Local-first data
Everything runs from local files before deployment.

---

## Constraints (IMPORTANT)

- No login system
- No multi-user system
- No database
- No vector database (Pinecone, etc.)
- No complex backend

---

## Future Improvements (NOT IN MVP)

- Add embeddings for better search
- Add file upload system
- Add streaming AI responses
- Add caching layer