import React from "react";
import { useEditor } from "../context/EditorContext";
import { Block } from "../types/types";

const YouTubeBlock: React.FC<{ block: Block }> = ({ block }) => {
  const { updateBlock } = useEditor();

  const getEmbedUrl = (url: string): string => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="YouTube Video URL"
        value={block.content}
        onChange={(e) => updateBlock(block.id, e.target.value)}
        className="w-full"
      />
      {block.content && (
        <iframe
          className="w-full h-64 mt-2"
          src={getEmbedUrl(block.content)}
          title="YouTube Video"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default YouTubeBlock;
