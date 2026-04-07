# PRODUCT REQUIREMENTS DOCUMENT

## App Name
AI Document Q&A App

## Goal
Allow users to upload or load JSON documents and ask questions. The AI returns answers based only on that data.

---

## Features (MVP)

### 1. Load JSON data
- App reads local JSON file
- Data contains documents

### 2. Ask questions
- User types a question
- AI responds using document context

### 3. Simple UI
- Input box
- Answer display

### 4. API route
- One backend endpoint:
  /api/ask

---

## Architecture

Frontend:
- Next.js (React UI)

Backend:
- Next.js API route

Data:
- Local JSON file (no database)

AI:
- OpenAI API (context-based answers)

---

## NOT INCLUDED (IMPORTANT)

- No login system
- No multi-user system
- No database
- No authentication
- No vector DB (Pinecone, etc.)

---

## Success Criteria

- User can ask questions
- AI answers using JSON data only
- Works locally and deploys on Vercel