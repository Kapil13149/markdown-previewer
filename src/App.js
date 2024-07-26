import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./App.css";

const defaultMarkdown = `
# Heading 1
## Heading 2
[This is a link](https://www.example.com)
\`inline code\`

\`\`\`
code block
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked(defaultMarkdown);
  }, []);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
    document.getElementById("preview").innerHTML = marked(event.target.value);
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="editor-container">
        <textarea id="editor" value={markdown} onChange={handleChange} />
      </div>
      <div id="preview" className="preview" />
    </div>
  );
}

export default App;
