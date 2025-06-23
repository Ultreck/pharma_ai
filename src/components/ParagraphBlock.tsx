import React from "react";
import { useEditor } from "../context/EditorContext";
import { Block } from "../types/types";

const ParagraphBlock: React.FC<{ block: Block }> = ({ block }) => {
  const { updateBlock } = useEditor();

  return (
    <textarea
      value={block.content}
      onChange={(e) => updateBlock(block.id, e.target.value)}
      className="w-full resize-none"
      placeholder="Write something..."
    />
  );
};

export default ParagraphBlock;
