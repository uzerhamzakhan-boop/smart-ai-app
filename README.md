1. Overview

This is a simple AI-powered chatbot web application built using Next.js and the OpenAI API.
It allows users to send messages and receive intelligent responses in real time through a chat interface.

The app works as a prompt-based conversational AI assistant, similar to ChatGPT, but lightweight and custom-built for learning and demonstration purposes.

2. Project Goal

To build a responsive AI chatbot where:

Users can enter messages (prompts)
AI generates contextual responses using OpenAI API
Chat interface displays a smooth conversation flow
System runs without database or authentication for simplicity

3. Features (MVP)
 Chat Interface
Simple chat UI (user + AI messages)
Input box to send prompts
Scrollable conversation history
AI Responses
Uses OpenAI API to generate responses
Context-aware replies based on user input
⚡ Backend API

Single API endpoint:

/api/ask
Handles communication with OpenAI
 Lightweight Design
No database
No authentication
No user accounts
Fully frontend-state based chat history

4. Tech Stack
Frontend
Next.js (React)
CSS / Tailwind CSS (optional)
Backend
Next.js API Routes
AI Engine
OpenAI GPT Model API

- How It Works
User types a message in the chat box
Frontend sends request to /api/ask
Backend forwards request to OpenAI API
OpenAI generates a response
Response is sent back to frontend
Chat UI updates with AI reply
