import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { HiOutlineChatAlt2, HiOutlinePaperClip } from 'react-icons/hi';
import { FiMoreHorizontal } from 'react-icons/fi';

const TaskCard = ({ task, index }) => {
  const getPriorityClasses = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-priority-high-bg text-priority-high-text';
      case 'Completed':
         return 'bg-priority-completed-bg text-priority-completed-text';
      default: // Low
        return 'bg-priority-low-bg text-priority-low-text';
    }
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-neutral-white p-4 rounded-xl border border-gray-100 space-y-3 cursor-grab ${snapshot.isDragging ? 'shadow-lg' : ''}`}
        >
          <div className="flex justify-between items-center">
            <span className={`px-2 py-1 text-xs font-medium rounded-md ${getPriorityClasses(task.priority)}`}>
              {task.priority}
            </span>
            <button className="text-text-gray-light"><FiMoreHorizontal className="w-5 h-5"/></button>
          </div>
          <div>
            <h3 className="font-bold text-lg text-text-dark">{task.title}</h3>
            <p className="text-sm text-text-gray-light mt-1">{task.content}</p>
          </div>
          <div className="flex justify-between items-center text-sm text-text-gray-light">
            <div className="flex -space-x-2">
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=1" alt=""/>
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=2" alt=""/>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <HiOutlineChatAlt2 className="w-4 h-4"/>
                <span>{task.comments} Comments</span>
              </span>
              <span className="flex items-center space-x-1">
                <HiOutlinePaperClip className="w-4 h-4"/>
                <span>{task.files} files</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;