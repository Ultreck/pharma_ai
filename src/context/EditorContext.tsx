import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Block {
  id: string;
  type: string;
  content: string;
}

interface EditorContextType {
  blocks: Block[];
  addBlock: (type: string) => void;
  updateBlock: (id: string, newContent: string) => void;
  reorderBlocks: (newBlocks: Block[]) => void;
  deleteBlock: (id: string) => void;
}

const EditorContext = createContext<EditorContextType>({
  blocks: [],
  addBlock: () => {},
  updateBlock: () => {},
  reorderBlocks: () => {},
  deleteBlock: () => {},
});

interface EditorProviderProps {
  children: React.ReactNode;
}

export const EditorProvider = ({ children }: EditorProviderProps) => {
  const [blocks, setBlocks] = useState<Block[]>([]);

interface AddBlock {
    (type: string): void;
}

const addBlock: AddBlock = (type) => {
    setBlocks((prev: Block[]) => [
        ...prev,
        { id: uuidv4(), type, content: "" }
    ]);
};

interface UpdateBlock {
    (id: string, newContent: string): void;
}

const updateBlock: UpdateBlock = (id, newContent) => {
    setBlocks((prev: Block[]) =>
        prev.map((block: Block) =>
            block.id === id ? { ...block, content: newContent } : block
        )
    );
};

interface ReorderBlocks {
    (newBlocks: Block[]): void;
}

const reorderBlocks: ReorderBlocks = (newBlocks) => setBlocks(newBlocks);

interface DeleteBlock {
    (id: string): void;
}

const deleteBlock: DeleteBlock = (id) =>
    setBlocks((prev: Block[]) => prev.filter((block: Block) => block.id !== id));

  return (
    <EditorContext.Provider
      value={{ blocks, addBlock, updateBlock, reorderBlocks, deleteBlock }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => useContext(EditorContext);
