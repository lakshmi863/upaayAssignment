import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const AddTaskModal = ({ isOpen, onClose, onAddTask, columnId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState('Low');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title) {
        alert("Title is required!");
        return;
    }
    // Call the function passed from the parent to actually add the task
    onAddTask({ title, content, priority });
    
    // Reset form and close modal
    setTitle('');
    setContent('');
    setPriority('Low');
    onClose();
  };

  return (
    // Modal Backdrop
    <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
        onClick={onClose} // Close modal if you click outside the content
    >
      {/* Modal Content */}
      <div 
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative"
        onClick={e => e.stopPropagation()} // Prevent clicks inside the modal from closing it
      >
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <FiX size={24} />
        </button>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input 
              type="text" 
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea 
              id="content" 
              rows="3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
            ></textarea>
          </div>
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
            <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
            >
                <option>Low</option>
                <option>High</option>
            </select>
          </div>
          
          <button 
            onClick={handleSubmit}
            className="w-full bg-brand-purple text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;