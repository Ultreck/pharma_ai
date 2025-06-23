import BlockToolbar from "./BlockToolbar";
import BlockRenderer from "./BlockRenderer";
import { DragDropContext, Droppable, Draggable, DroppableProvided, DraggableProvided, DropResult } from "react-beautiful-dnd";
import { useEditor } from "../context/EditorContext";


const Editor = () => {
  const { blocks, reorderBlocks } = useEditor();

interface Block {
    id: string;
    type: string;
    content: any;
    // Add other block properties as needed
}

const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items: Block[] = Array.from(blocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    reorderBlocks(items);
};

  return (
    <div>
      <BlockToolbar />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="editor">
          {(provided: DroppableProvided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {blocks.map((block: Block, index: number) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided: DraggableProvided) => (
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
    </div>
  );
};

export default Editor;
