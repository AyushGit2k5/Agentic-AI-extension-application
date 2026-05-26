# Agentic AI Browser Research Assistant

<p align="center">
  <b>An autonomous AI-powered Chrome Extension for webpage summarization and deep web research.</b>
</p>

<p align="center">
  Built using Chrome Extension APIs, Node.js, Groq LLMs, and Tavily Search API.
</p>

---

<h2>🚀 Features</h2>

<ul>
  <li>AI-powered webpage summarization</li>
  <li>Deep research agent with real-time web search</li>
  <li>Automatic webpage content extraction</li>
  <li>LLM-based reasoning and response generation</li>
  <li>Cloud-hosted backend deployment using Render</li>
  <li>Responsive Chrome Extension UI</li>
  <li>Autonomous multi-step agent workflow</li>
</ul>

---

<h2>🧠 Why This Is Agentic AI</h2>

<p>
Unlike a normal chatbot or static summarizer, this system performs autonomous multi-step actions:
</p>

<ol>
  <li>Understands the user’s goal</li>
  <li>Extracts webpage context</li>
  <li>Decides when external research is required</li>
  <li>Searches the web using Tavily</li>
  <li>Combines webpage knowledge with external research</li>
  <li>Generates a contextual final answer using an LLM</li>
</ol>

<p>
This creates an <b>agent-like workflow</b> rather than a simple single-prompt chatbot interaction.
</p>

---

<h2>🛠 Tech Stack</h2>

<h3>Frontend</h3>

<ul>
  <li>Chrome Extension (Manifest V3)</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h3>Backend</h3>

<ul>
  <li>Node.js</li>
  <li>Express.js</li>
</ul>

<h3>AI & APIs</h3>

<ul>
  <li>Groq API (LLaMA 3)</li>
  <li>Tavily Search API</li>
</ul>

<h3>Deployment</h3>

<ul>
  <li>Render Cloud Hosting</li>
  <li>GitHub</li>
</ul>

---

<h2>🏗 System Architecture</h2>

<pre>
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
</pre>

---

<h2>📌 Example Capabilities</h2>

<h3>Webpage Summarization</h3>

<ul>
  <li>Summarizes articles and webpages</li>
  <li>Extracts key points</li>
  <li>Condenses long-form content into concise insights</li>
</ul>

<h3>Deep Research</h3>

<p><b>Example Query:</b></p>

<pre>
Who is the UFC lightweight champion?
</pre>

<p>The system:</p>

<ul>
  <li>Searches the web</li>
  <li>Collects relevant information</li>
  <li>Reasons over findings</li>
  <li>Returns a contextual answer</li>
</ul>

---

<h2>📂 Project Structure</h2>

<pre>
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
</pre>

---

<h2>⚙ Installation</h2>

<h3>1. Clone Repository</h3>

<pre>
git clone https://github.com/AyushGit2k5/Agentic-AI-extension-application.git
</pre>

---

<h3>2. Backend Setup</h3>

<pre>
cd backend
npm install
</pre>

<p>Create a <code>.env</code> file:</p>

<pre>
GROQ_API_KEY=your_key_here
TAVILY_API_KEY=your_key_here
PORT=5000
</pre>

<p>Run backend:</p>

<pre>
node server.js
</pre>

---

<h3>3. Chrome Extension Setup</h3>

<ol>
  <li>Open Chrome</li>
  <li>Go to:
    <pre>chrome://extensions</pre>
  </li>
  <li>Enable <b>Developer Mode</b></li>
  <li>Click <b>Load unpacked</b></li>
  <li>Select the <code>extension</code> folder</li>
</ol>

---

<h2>☁ Deployment</h2>

<p>
The backend is deployed using <b>Render</b> cloud hosting.
</p>

<ul>
  <li>Node.js Web Service</li>
  <li>Environment variables configured securely</li>
  <li>Public API endpoint connected to Chrome Extension frontend</li>
</ul>

---

<h2>🔮 Future Improvements</h2>

<ul>
  <li>Multi-agent orchestration</li>
  <li>Conversation memory</li>
  <li>Autonomous browsing workflows</li>
  <li>PDF and document understanding</li>
  <li>Voice interaction</li>
  <li>Citation generation</li>
  <li>Vector database integration (RAG)</li>
  <li>Multi-page research chains</li>
</ul>

---

<h2>📸 Screenshots</h2>

<h3>Chrome Extension UI</h3>

<p>Add screenshot here</p>

<h3>Deep Research Example</h3>

<p>Add screenshot here</p>

<h3>Summarization Example</h3>

<p>Add screenshot here</p>

---

<h2>👨‍💻 Author</h2>

<p>
<b>Ayush Onkar</b><br>
Bachelor of Artificial Intelligence — UTS
</p>

<p><b>Key Interests:</b></p>

<ul>
  <li>Agentic AI</li>
  <li>LLM Applications</li>
  <li>NLP</li>
  <li>AI Systems</li>
  <li>Autonomous Workflows</li>
</ul>

<p>
GitHub:<br>
https://github.com/AyushGit2k5
</p>
