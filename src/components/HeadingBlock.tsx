import React from "react";
import { useEditor } from "../context/EditorContext";
import { Block } from "../types/types";

const HeadingBlock: React.FC<{ block: Block }> = ({ block }) => {
  const { updateBlock } = useEditor();

  return (
    <input
      type="text"
      value={block.content}
      onChange={(e) => updateBlock(block.id, e.target.value)}
      className="text-xl font-bold w-full"
      placeholder="Heading..."
    />
  );
};

export default HeadingBlock;
