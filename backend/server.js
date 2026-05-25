import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import axios from "axios";

dotenv.config();
console.log("GROQ KEY:", process.env.GROQ_API_KEY);
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});


// =========================
// BASIC SUMMARIZER ROUTE
// =========================

app.post("/summarize", async (req, res) => {

  try {

    const {
      pageText,
      pageTitle,
      pageUrl
    } = req.body;

    const cleanedText =
      pageText.slice(0, 5000);

    const prompt = `
You are an AI assistant.

Summarize this webpage clearly.

TITLE:
${pageTitle}

URL:
${pageUrl}

CONTENT:
${cleanedText}
`;

    const completion =
      await groq.chat.completions.create({

        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: prompt
          }
        ],

        temperature: 0.4
      });

    const summary =
      completion.choices[0].message.content;

    res.json({
      summary
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: error.message
    });
  }
});


// =========================
// SEARCH TOOL
// =========================

async function searchWeb(query) {

  try {

    const response = await axios.post(
      "https://api.tavily.com/search",
      {

        api_key:
          process.env.TAVILY_API_KEY,

        query,

        search_depth: "basic",

        max_results: 3
      }
    );

    return response.data.results;

  } catch (error) {

    console.error(
      "TAVILY ERROR:",
      error.message
    );

    return [];
  }
}


// =========================
// AGENT PROMPT
// =========================

const AGENT_PROMPT = `

You are an autonomous AI research agent.

Your goal is to complete the user's research request.

You may:
- search the web
- analyze information
- compare findings
- synthesize conclusions

IMPORTANT:
Prefer concluding within 2 searches maximum.

If you genuinely need more information,
return ONLY valid JSON:

{
  "tool": "search_web",
  "query": "your search"
}

If you already have enough information,
return ONLY valid JSON:

{
  "final_answer": "your final answer"
}

Never explain your reasoning.


Never output markdown.

Only output valid JSON.
Prefer concluding within 2-3 searches maximum.
`;


// =========================
// AGENTIC RESEARCH ROUTE
// =========================

app.post("/research", async (req, res) => {

  try {

    const {
      goal,
      pageText,
      pageTitle,
      pageUrl
    } = req.body;

    const cleanedText =
      pageText.slice(0, 5000);

    let messages = [

      {
        role: "system",
        content: AGENT_PROMPT
      },

      {
        role: "user",

        content: `
GOAL:
${goal}

CURRENT WEBPAGE:

TITLE:
${pageTitle}

URL:
${pageUrl}

CONTENT:
${cleanedText}
`
      }
    ];


    // =========================
    // AGENT LOOP
    // =========================

    for (let i = 0; i < 3; i++) {

      console.log(
        `AGENT ITERATION: ${i + 1}`
      );

      const completion =
        await groq.chat.completions.create({

          model: "llama-3.3-70b-versatile",

          messages,

          temperature: 0.2
        });

      const content =
        completion.choices[0]
        .message.content;

      console.log(
        "AGENT RESPONSE:"
      );

      console.log(content);

      let parsed;

      try {

        parsed = JSON.parse(content);

      } catch {

        console.log(
          "JSON PARSE FAILED"
        );

        return res.json({
          finalAnswer: content
        });
      }


      // =========================
      // FINAL ANSWER
      // =========================

      if (parsed.final_answer) {

        return res.json({

          finalAnswer:
            parsed.final_answer
        });
      }


      // =========================
      // SEARCH TOOL
      // =========================

      if (
        parsed.tool === "search_web"
      ) {

        console.log(
          "SEARCHING:",
          parsed.query
        );

        const results =
          await searchWeb(parsed.query);

        messages.push({

          role: "assistant",

          content
        });

        messages.push({

          role: "user",

          content: `
SEARCH RESULTS:

${JSON.stringify(results, null, 2)}

If you already have enough information,
return final_answer.

Do NOT continue searching forever.
`
        });
      }
    }


    // =========================
    // MAX ITERATIONS
    // =========================

    res.json({

      finalAnswer:
        "Agent stopped after maximum iterations."
    });

  } catch (error) {

    console.error(
      "SERVER ERROR:",
      error
    );

    res.status(500).json({

      error: error.message
    });
  }
});


// =========================
// ROOT TEST ROUTE
// =========================

app.get("/", (req, res) => {

  res.send(
    "AI Web Agent Backend Running"
  );
});


// =========================
// START SERVER
// =========================

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});