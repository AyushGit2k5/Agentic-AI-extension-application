// SUMMARIZE BUTTON
// =========================

document
  .getElementById("summarizeBtn")

  .addEventListener(
    "click",
    async () => {

      const resultDiv =
        document.getElementById("result");

      const [tab] =
        await chrome.tabs.query({

          active: true,
          currentWindow: true
        });

      chrome.tabs.sendMessage(

        tab.id,

        {
          action: "extractText"
        },

        async (response) => {

          // =========================
          // CONTENT SCRIPT CHECKS
          // =========================

          if (!response) {

            resultDiv.innerHTML = `
              <div class="summary-box">
                No response from content script.
              </div>
            `;

            return;
          }

          if (response.error) {

            resultDiv.innerHTML = `
              <div class="summary-box">
                ${response.error}
              </div>
            `;

            return;
          }

          resultDiv.innerHTML = `
            <div class="summary-box">
              Summarizing...
            </div>
          `;

          try {

            const res = await fetch(
              "http://localhost:5000/summarize",
              {

                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({

                  pageText:
                    response.text,

                  pageTitle:
                    response.title,

                  pageUrl:
                    response.url
                })
              }
            );

            const data =
              await res.json();


            // =========================
            // BACKEND ERROR CHECK
            // =========================

            if (data.error) {

              resultDiv.innerHTML = `
                <div class="summary-box">
                  ${data.error}
                </div>
              `;

              return;
            }


            // =========================
            // SAFETY CHECK
            // =========================

            if (!data.summary) {

              resultDiv.innerHTML = `
                <div class="summary-box">
                  No summary returned.
                </div>
              `;

              return;
            }

            resultDiv.innerHTML = `
              <div class="summary-box">
                ${data.summary
                  .replace(/\n/g, "<br>")
                  .replace(
                    /\*\*(.*?)\*\*/g,
                    "<b>$1</b>"
                  )}
              </div>
            `;

          } catch (error) {

            resultDiv.innerHTML = `
              <div class="summary-box">
                ${error.message}
              </div>
            `;
          }
        }
      );
    }
  );


// =========================
// RESEARCH BUTTON
// =========================

document
  .getElementById("researchBtn")

  .addEventListener(
    "click",
    async () => {

      const resultDiv =
        document.getElementById("result");

      const goal =
        document
          .getElementById("goalInput")
          .value;

      const [tab] =
        await chrome.tabs.query({

          active: true,
          currentWindow: true
        });

      chrome.tabs.sendMessage(

        tab.id,

        {
          action: "extractText"
        },

        async (response) => {

          // =========================
          // CONTENT SCRIPT CHECKS
          // =========================

          if (!response) {

            resultDiv.innerHTML = `
              <div class="summary-box">
                No response from content script.
              </div>
            `;

            return;
          }

          if (response.error) {

            resultDiv.innerHTML = `
              <div class="summary-box">
                ${response.error}
              </div>
            `;

            return;
          }

          resultDiv.innerHTML = `
            <div class="summary-box">
              AI Agent researching...
            </div>
          `;

          try {

            const res = await fetch(
              "http://localhost:5000/research",
              {

                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({

                  goal,

                  pageText:
                    response.text,

                  pageTitle:
                    response.title,

                  pageUrl:
                    response.url
                })
              }
            );

            const data =
              await res.json();


            // =========================
            // BACKEND ERROR CHECK
            // =========================

            if (data.error) {

              resultDiv.innerHTML = `
                <div class="summary-box">
                  ${data.error}
                </div>
              `;

              return;
            }


            // =========================
            // SAFETY CHECK
            // =========================

            if (!data.finalAnswer) {

              resultDiv.innerHTML = `
                <div class="summary-box">
                  No research result returned.
                </div>
              `;

              return;
            }

            resultDiv.innerHTML = `
              <div class="summary-box">
                ${data.finalAnswer
                  .replace(/\n/g, "<br>")
                  .replace(
                    /\*\*(.*?)\*\*/g,
                    "<b>$1</b>"
                  )}
              </div>
            `;

          } catch (error) {

            resultDiv.innerHTML = `
              <div class="summary-box">
                ${error.message}
              </div>
            `;
          }
        }
      );
    }
  );