async function generateNotes() {
  const topic = document.getElementById("topicInput").value;
  const output = document.getElementById("output");

  if (!topic) {
    output.innerHTML = "Please enter a topic.";
    return;
  }

  output.innerHTML = "Generating notes... ⏳";

  try {
    const response = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic }),
    });

    const data = await response.json();

    if (data.result) {
      output.innerHTML = `<pre>${data.result}</pre>`;
    } else {
      output.innerHTML = "Error generating notes.";
    }
  } catch (error) {
    output.innerHTML = "Server error. Make sure backend is running.";
  }
}