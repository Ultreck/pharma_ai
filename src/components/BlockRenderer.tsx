import React from "react";
import { Block } from "../types/types";
import HeadingBlock from "./HeadingBlock";
import ParagraphBlock from "./ParagraphBlock";
import ImageBlock from "./ImageBlock";
import YouTubeBlock from "./YouTubeBlock";

const BlockRenderer: React.FC<{ block: Block }> = ({ block }) => {
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
