chrome.runtime.onMessage.addListener(

  (request, sender, sendResponse) => {

    if (request.action === "extractText") {

      try {

        const pageText =
          document.body.innerText;

        const pageTitle =
          document.title;

        const pageUrl =
          window.location.href;

        sendResponse({

          text: pageText,

          title: pageTitle,

          url: pageUrl
        });

      } catch (error) {

        sendResponse({
          error: error.message
        });
      }
    }

    return true;
  }
);