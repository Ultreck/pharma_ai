export type BlockType = "heading" | "paragraph" | "image" | "youtube";

export interface Block {
  id: string;
  type: BlockType;
  content: string;
}
