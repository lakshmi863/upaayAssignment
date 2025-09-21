import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriorityFilter, setDateFilter } from '../redux/projectsSlice';
import { FiEdit2, FiLink, FiPlus, FiShare2, FiFilter, FiCalendar } from 'react-icons/fi';
import { BsGrid3X3Gap, BsList } from 'react-icons/bs';

const BoardHeader = ({ projectName }) => {
  const dispatch = useDispatch();

  // THE DEFINITIVE FIX:
  // We will safely select the filters from the Redux state.
  // If `state.projects.filters` does not exist for any reason during a render,
  // we will use a default object `{ priority: 'all', date: 'all' }` instead.
  // This COMPLETELY prevents the crash.
  const filters = useSelector((state) => state.projects.filters) || { priority: 'all', date: 'all' };

  const handlePriorityChange = (e) => {
    dispatch(setPriorityFilter(e.target.value));
  };

  const handleDateFilterToggle = () => {
    const newDateFilter = filters.date === 'today' ? 'all' : 'today';
    dispatch(setDateFilter(newDateFilter));
  };

  return (
    <div className="p-4 md:p-8 pb-0">
      {/* Top section: Title and Invite/Share buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-text-dark">{projectName}</h1>
          <button className="text-brand-purple p-1.5 rounded-lg hover:bg-purple-100">
            <FiEdit2 size={20} />
          </button>
          <button className="text-brand-purple p-1.5 rounded-lg hover:bg-purple-100">
            <FiLink size={20} />
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-brand-purple font-medium">
            <FiPlus />
            <span>Invite</span>
          </button>
          <div className="flex -space-x-2">
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=10" alt="User 1"/>
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=11" alt="User 2"/>
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=12" alt="User 3"/>
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-2 ring-white bg-red-100 text-red-600 font-bold text-sm">+2</span>
          </div>
        </div>
      </div>

      {/* Bottom section: Filter and Date buttons */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
            <div className="relative">
              <FiFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                value={filters.priority} // This is now safe to read
                onChange={handlePriorityChange}
                className="pl-9 pr-4 py-2 appearance-none text-text-gray-light rounded-lg border border-neutral-border hover:bg-gray-50 bg-transparent focus:outline-none"
              >
                <option value="all">Filter</option>
                <option value="Low">Low Priority</option>
                <option value="High">High Priority</option>
              </select>
            </div>

            <button
              onClick={handleDateFilterToggle}
              className={`flex items-center gap-2 text-text-gray-light p-2 rounded-lg border border-neutral-border hover:bg-gray-50 ${filters.date === 'today' ? 'bg-purple-100 !text-brand-purple' : ''}`} // This is also now safe
            >
              <FiCalendar />
              <span>Today</span>
            </button>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-text-gray-light p-2 rounded-lg border border-neutral-border hover:bg-gray-50">
            <FiShare2 />
            <span>Share</span>
          </button>
          <div className="h-7 w-px bg-neutral-border"></div>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-brand-purple text-white rounded-lg">
                <BsGrid3X3Gap size={20}/>
            </button>
            <button className="p-2 text-text-gray-light hover:bg-gray-50 rounded-lg">
                <BsList size={20}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardHeader;