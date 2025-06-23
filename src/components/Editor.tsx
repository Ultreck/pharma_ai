import React from "react";
import BlockToolbar from "./BlockToolbar";
import BlockRenderer from "./BlockRenderer";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useEditor } from "../context/EditorContext";
// import { Block } from "../types/types";

const Editor: React.FC = () => {
  const { blocks, reorderBlocks } = useEditor();

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reordered = Array.from(blocks);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    reorderBlocks(reordered);
  };

  return (
    <>
      <BlockToolbar />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="editor">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {blocks.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided) => (
                    <div
                      className="bg-white p-3 my-2 rounded shadow"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <BlockRenderer block={block} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Editor;
