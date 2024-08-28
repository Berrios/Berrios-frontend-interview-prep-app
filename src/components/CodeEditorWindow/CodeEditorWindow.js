import React from 'react';
import Editor from "@monaco-editor/react";

function CodeEditorWindow({ onChange, language, code, theme }) {
  const handleEditorChange = (value) => {
    onChange(value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={code}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default CodeEditorWindow;