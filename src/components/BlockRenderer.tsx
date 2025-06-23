import React from "react";
import HeadingBlock from "./HeadingBlock";
import ParagraphBlock from "./ParagraphBlock";
import ImageBlock from "./ImageBlock";
import YouTubeBlock from "./YouTubeBlock";

type Block = 
  | { type: "heading"; [key: string]: any }
  | { type: "paragraph"; [key: string]: any }
  | { type: "image"; [key: string]: any }
  | { type: "youtube"; [key: string]: any };

interface BlockRendererProps {
  block: Block;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  switch (block.type) {
    case "heading":
      return <HeadingBlock block={block} />;
    case "paragraph":
      return <ParagraphBlock block={block} />;
    case "image":
      return <ImageBlock block={block} />;
    case "youtube":
      return <YouTubeBlock block={block} />;
    default:
      return null;
  }
};

export default BlockRenderer;
