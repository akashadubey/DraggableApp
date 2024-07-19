// src/App.js
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DroppableArea from './DroppableArea';

const initialItemsArea1 = [
  { id: 'item-1', content: 'Item 1' },
  { id: 'item-2', content: 'Item 2' },
];

const initialItemsArea2 = [
  { id: 'item-3', content: 'Item 3' },
  { id: 'item-4', content: 'Item 4' },
];

const App = () => {
  const [itemsArea1, setItemsArea1] = useState(initialItemsArea1);
  const [itemsArea2, setItemsArea2] = useState(initialItemsArea2);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If no destination, exit
    if (!destination) {
      return;
    }

    // Determine source and destination areas
    const sourceDroppableId = source.droppableId;
    const destinationDroppableId = destination.droppableId;

    // Moving within the same area
    if (sourceDroppableId === destinationDroppableId) {
      const items = sourceDroppableId === 'droppable-area-1' ? itemsArea1 : itemsArea2;
      const setItems = sourceDroppableId === 'droppable-area-1' ? setItemsArea1 : setItemsArea2;

      const reorderedItems = Array.from(items);
      const [movedItem] = reorderedItems.splice(source.index, 1);
      reorderedItems.splice(destination.index, 0, movedItem);

      setItems(reorderedItems);
    } else {
      // Moving between different areas
      const sourceItems = sourceDroppableId === 'droppable-area-1' ? itemsArea1 : itemsArea2;
      const setSourceItems = sourceDroppableId === 'droppable-area-1' ? setItemsArea1 : setItemsArea2;

      const destinationItems = destinationDroppableId === 'droppable-area-1' ? itemsArea1 : itemsArea2;
      const setDestinationItems = destinationDroppableId === 'droppable-area-1' ? setItemsArea1 : setItemsArea2;

      const sourceClone = Array.from(sourceItems);
      const destinationClone = Array.from(destinationItems);

      const [movedItem] = sourceClone.splice(source.index, 1);
      destinationClone.splice(destination.index, 0, movedItem);

      setSourceItems(sourceClone);
      setDestinationItems(destinationClone);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-around items-start h-screen p-4 bg-gray-50">
        <DroppableArea droppableId="droppable-area-1" items={itemsArea1} />
        <DroppableArea droppableId="droppable-area-2" items={itemsArea2} />
      </div>
    </DragDropContext>
  );
};

export default App;
