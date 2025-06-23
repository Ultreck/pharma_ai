import React from "react";
import { useEditor } from "../context/EditorContext";
import { Block } from "../types/types";

const ImageBlock: React.FC<{ block: Block }> = ({ block }) => {
  const { updateBlock } = useEditor();

  return (
    <div>
      <input
        type="text"
        placeholder="Image URL"
        value={block.content}
        onChange={(e) => updateBlock(block.id, e.target.value)}
        className="w-full"
      />
      {block.content && (
        <img src={block.content} alt="block" className="mt-2 max-h-60" />
      )}
    </div>
  );
};

export default ImageBlock;
