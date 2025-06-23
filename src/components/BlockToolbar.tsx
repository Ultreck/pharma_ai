import React from "react";
import { useEditor } from "../context/EditorContext";

const BlockToolbar: React.FC = () => {
  const { addBlock } = useEditor();

  return (
    <div className="flex gap-2 mb-4">
      <button onClick={() => addBlock("heading")} className="btn">Heading</button>
      <button onClick={() => addBlock("paragraph")} className="btn">Paragraph</button>
      <button onClick={() => addBlock("image")} className="btn">Image</button>
      <button onClick={() => addBlock("youtube")} className="btn">YouTube</button>
    </div>
  );
};

export default BlockToolbar;
