import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Droppable } from '@hello-pangea/dnd';
import { addTask } from '../redux/projectsSlice';
import TaskCard from './TaskCard';
import AddTaskModal from './AddTaskModal';
import { FiPlus } from 'react-icons/fi';

const TaskColumn = ({ column, tasks, projectId }) => { // Accept projectId
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const columnStyles = {
    'To Do': { color: 'brand-purple', dotColor: 'bg-purple-500' },
    'On Progress': { color: 'brand-orange', dotColor: 'bg-yellow-500' },
    'Done': { color: 'brand-green', dotColor: 'bg-green-500' },
  };

  const style = columnStyles[column.title] || {};

  const handleAddTask = (taskData) => {
    // Include projectId when dispatching the action
    dispatch(addTask({ projectId, columnId: column.id, taskData }));
  };

  return (
    <div className="bg-neutral-bg p-4 rounded-2xl w-full flex-shrink-0 flex flex-col">
      <div className={`flex justify-between items-center mb-4 pb-4 border-b-4 border-${style.color}`}>
        <div className='flex items-center gap-2'>
            <span className={`w-2 h-2 ${style.dotColor} rounded-full`}></span>
            <span className="font-medium text-text-dark">{column.title}</span>
            <span className="ml-2 bg-gray-200 text-text-dark text-xs font-semibold px-2.5 py-1 rounded-full">{tasks.length}</span>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="grid place-content-center w-6 h-6 bg-brand-purple bg-opacity-20 rounded-md text-brand-purple"
        >
          <FiPlus />
        </button>
      </div>
      
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`space-y-4 flex-grow transition-colors duration-200 ${snapshot.isDraggingOver ? 'bg-purple-50' : ''}`}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <AddTaskModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
        columnId={column.id}
      />
    </div>
  );
};

export default TaskColumn;