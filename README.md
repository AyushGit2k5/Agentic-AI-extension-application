Agentic AI Browser Research Assistant

An autonomous AI-powered Chrome Extension that can summarize webpages, perform deep web research, and answer user queries using LLM reasoning and real-time search.

Built using Chrome Extension APIs, Node.js, Groq LLMs, and Tavily Search API.

Features
AI-powered webpage summarization
Deep research agent with real-time web search
Extracts webpage content automatically
Uses LLM reasoning to answer questions
Cloud-hosted backend deployment using Render
Chrome Extension frontend with responsive UI
Autonomous multi-step workflow:
extract page content
search web
analyze context
generate final response
Why This Is Agentic AI

Unlike a normal chatbot or static summarizer, this system performs autonomous multi-step actions:

Understands the user's goal
Extracts webpage context
Decides when external research is needed
Searches the web using Tavily
Combines webpage knowledge + external research
Generates contextual final answers

This creates an agent-like workflow rather than a single LLM prompt-response interaction.

Tech Stack
Frontend
Chrome Extension (Manifest V3)
HTML
CSS
JavaScript
Backend
Node.js
Express.js
AI & APIs
Groq API (LLaMA 3)
Tavily Search API
Deployment
Render Cloud Hosting
GitHub
System Architecture
User Query
     ↓
Chrome Extension Popup
     ↓
Content Extraction Agent
     ↓
Node.js Backend API
     ↓
Research Agent (Tavily Search)
     ↓
Reasoning Agent (Groq LLM)
     ↓
Final AI Response
Example Capabilities
Webpage Summarization
Summarizes articles
Extracts key points
Reduces long-form content into concise insights
Deep Research

Example:

"Who is the UFC lightweight champion?"

The system:

searches the web
gathers relevant information
reasons over findings
returns an accurate contextual answer
Project Structure
AI-Web-Agent/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   ├── content.js
│   └── styles.css
│
└── README.md
Installation
Clone Repository
git clone https://github.com/AyushGit2k5/Agentic-AI-extension-application.git
Backend Setup
cd backend
npm install

Create .env

GROQ_API_KEY=your_key_here
TAVILY_API_KEY=your_key_here
PORT=5000

Run backend:

node server.js
Chrome Extension Setup
Open Chrome
Go to:
chrome://extensions
Enable Developer Mode
Click "Load unpacked"
Select the extension folder
Deployment

Backend deployed using Render:

Node.js Web Service
Environment variables configured securely
Public cloud endpoint connected to extension frontend
Future Improvements
Multi-agent orchestration
Memory and conversation persistence
Autonomous browsing workflows
PDF/document understanding
Voice interaction
Citation generation
Vector database integration (RAG)
Multi-page research chains
