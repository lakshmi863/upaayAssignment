import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from '@hello-pangea/dnd';
import { moveTask } from '../redux/projectsSlice';
import TaskColumn from './TaskColumn';
import BoardHeader from './BoardHeader';

// Helper function to get today's date in YYYY-MM-DD format
const getTodayDateString = () => new Date().toISOString().split('T')[0];

const KanbanBoard = () => {
  const dispatch = useDispatch();
  const { projects, currentProjectId, filters } = useSelector((state) => state.projects);
  const currentProject = projects?.[currentProjectId];
  const todayDateString = getTodayDateString();

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    dispatch(moveTask({ projectId: currentProjectId, source, destination, draggableId }));
  };

  if (!currentProject) {
    return <div className="p-8 text-center font-medium">Select a project to view its board.</div>;
  }

  return (
    <div className="flex-1 flex flex-col">
      <BoardHeader projectName={currentProject.name} />
      
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="p-4 md:p-8 pt-0 flex-1">
          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {currentProject.columnOrder.map(columnId => {
              const column = currentProject.columns[columnId];
              
              if (!column || !column.taskIds) {
                return null;
              }

              const tasksForColumn = column.taskIds.reduce((acc, taskId) => {
                const task = currentProject.tasks[taskId];
                
                // Final, definitive safety check
                if (task) {
                  // If `filters` is undefined for a moment, this || operator will save it
                  const safeFilters = filters || { priority: 'all', date: 'all' };
                  
                  const priorityMatch = safeFilters.priority === 'all' || task.priority === safeFilters.priority;
                  const dateMatch = safeFilters.date !== 'today' || task.dueDate === todayDateString;

                  if (priorityMatch && dateMatch) {
                    acc.push(task);
                  }
                }
                return acc;
              }, []);

              return (
                <TaskColumn
                  key={column.id}
                  column={column}
                  tasks={tasksForColumn}
                  projectId={currentProjectId}
                />
              );
            })}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;