import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DraggableContainer = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-4 mb-4 bg-white border border-gray-300 rounded shadow-sm"
          style={{ ...provided.draggableProps.style }}
        >
          {item.content}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableContainer;
