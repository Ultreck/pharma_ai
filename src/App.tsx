import React from "react";
import { EditorProvider } from "./context/EditorContext";
import Editor from "./components/Editor";

const App: React.FC = () => {
  return (
    <EditorProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">PharmaIntel Block Editor</h1>
        <Editor />
      </div>
    </EditorProvider>
  );
};

export default App;
