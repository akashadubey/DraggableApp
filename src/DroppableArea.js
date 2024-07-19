// src/DroppableArea.js
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DraggableContainer from './DraggableContainer';

const DroppableArea = ({ droppableId, items }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="p-4 w-full min-h-[200px] bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center"
        >
          {items.map((item, index) => (
            <DraggableContainer key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableArea;
