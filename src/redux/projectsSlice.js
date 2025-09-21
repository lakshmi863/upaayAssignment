import { createSlice } from '@reduxjs/toolkit';

// Helper function to get a date string like "YYYY-MM-DD"
const getDateString = (date) => date.toISOString().split('T')[0];

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const nextWeek = new Date(today);
nextWeek.setDate(nextWeek.getDate() + 7);

export const initialState = {
  currentProjectId: 'mobile-app',
  filters: {
    priority: 'all',
    date: 'all',
  },
  projects: {
    'mobile-app': {
      id: 'mobile-app',
      name: 'Mobile App',
      columnOrder: ['todo', 'in-progress', 'done'],
      columns: {
        'todo': { id: 'todo', title: 'To Do', taskIds: ['task-ma-1', 'task-ma-2'] },
        'in-progress': { id: 'in-progress', title: 'On Progress', taskIds: ['task-ma-3', 'task-ma-4', 'task-ma-5'] },
        'done': { id: 'done', title: 'Done', taskIds: ['task-ma-6'] },
      },
      tasks: {
        'task-ma-1': { id: 'task-ma-1', priority: 'Low', title: 'Brainstorming', content: "Brainstorming brings team members' diverse experience into play.", comments: 12, files: 0, previousPriority: null, dueDate: getDateString(today) },
        'task-ma-2': { id: 'task-ma-2', priority: 'High', title: 'Research', content: 'User research helps you to create an optimal product for users.', comments: 10, files: 3, previousPriority: null, dueDate: getDateString(today) },
        'task-ma-3': { id: 'task-ma-3', priority: 'High', title: 'Wireframes', content: 'Low fidelity wireframes include the most basic content and visuals.', comments: 10, files: 2, previousPriority: null, dueDate: getDateString(tomorrow) },
        'task-ma-4': { id: 'task-ma-4', priority: 'Low', title: 'Onboarding Illustrations', content: 'Create stylish illustrations for onboarding.', comments: 12, files: 0, previousPriority: null, dueDate: getDateString(tomorrow) },
        'task-ma-5': { id: 'task-ma-5', priority: 'Low', title: 'Moodboard', content: 'Create a moodboard for the new website design.', comments: 12, files: 0, previousPriority: null, dueDate: null },
        'task-ma-6': { id: 'task-ma-6', priority: 'Completed', title: 'Finalize App Design', content: 'It just needs to adapt the UI from what you did before.', comments: 12, files: 15, previousPriority: 'High', dueDate: null },
      },
    },
    'website-redesign': {
      id: 'website-redesign',
      name: 'Website Redesign',
      columnOrder: ['todo', 'in-progress', 'done'],
      columns: {
        'todo': { id: 'todo', title: 'To Do', taskIds: ['task-wr-2', 'task-wr-3'] },
        'in-progress': { id: 'in-progress', title: 'On Progress', taskIds: ['task-wr-1'] },
        'done': { id: 'done', title: 'Done', taskIds: ['task-wr-4'] },
      },
      tasks: {
        'task-wr-1': { id: 'task-wr-1', priority: 'High', title: 'Review Existing Website', content: 'Analyze the current site for UX and UI improvements.', comments: 8, files: 4, previousPriority: null, dueDate: getDateString(today) },
        'task-wr-2': { id: 'task-wr-2', priority: 'Low', title: 'Develop User Personas', content: 'Create detailed user personas for the target audience.', comments: 5, files: 1, previousPriority: null, dueDate: getDateString(tomorrow) },
        'task-wr-3': { id: 'task-wr-3', priority: 'High', title: 'Create Site Map', content: 'Outline the new structure and navigation flow.', comments: 15, files: 2, previousPriority: null, dueDate: getDateString(nextWeek) },
        'task-wr-4': { id: 'task-wr-4', priority: 'Completed', title: 'Finalize Color Palette', content: 'The new brand colors have been approved.', comments: 6, files: 3, previousPriority: 'Low', dueDate: null },
      },
    },
    'design-system': {
      id: 'design-system',
      name: 'Design System',
      columnOrder: ['todo', 'in-progress', 'done'],
      columns: {
        'todo': { id: 'todo', title: 'To Do', taskIds: ['task-ds-1', 'task-ds-2'] },
        'in-progress': { id: 'in-progress', title: 'On Progress', taskIds: [] },
        'done': { id: 'done', title: 'Done', taskIds: ['task-ds-3'] },
      },
      tasks: {
        'task-ds-1': { id: 'task-ds-1', priority: 'High', title: 'Define Typography', content: 'Select and document all font styles, sizes, and weights.', comments: 20, files: 5, previousPriority: null, dueDate: getDateString(tomorrow) },
        'task-ds-2': { id: 'task-ds-2', priority: 'High', title: 'Component Library', content: 'Build out the core set of reusable React components.', comments: 30, files: 10, previousPriority: null, dueDate: getDateString(nextWeek) },
        'task-ds-3': { id: 'task-ds-3', priority: 'Completed', title: 'Grid Layout Definition', content: 'The responsive grid system has been documented.', comments: 7, files: 1, previousPriority: 'High', dueDate: null },
      },
    },
    'wireframes': {
      id: 'wireframes',
      name: 'Wireframes',
      columnOrder: ['todo', 'in-progress', 'done'],
      columns: {
        'todo': { id: 'todo', title: 'To Do', taskIds: ['task-wf-2', 'task-wf-4'] },
        'in-progress': { id: 'in-progress', title: 'On Progress', taskIds: ['task-wf-1'] },
        'done': { id: 'done', title: 'Done', taskIds: ['task-wf-3'] },
      },
      tasks: {
        'task-wf-1': { id: 'task-wf-1', priority: 'Low', title: 'User Flow Diagram', content: 'Map out all user journeys and interactions.', comments: 11, files: 2, previousPriority: null, dueDate: getDateString(today) },
        'task-wf-2': { id: 'task-wf-2', priority: 'Low', title: 'Sketch Mobile Views', content: 'Create low-fidelity sketches for all mobile screens.', comments: 4, files: 0, previousPriority: null, dueDate: getDateString(nextWeek) },
        'task-wf-3': { id: 'task-wf-3', priority: 'Completed', title: 'Homepage Wireframe', content: 'The desktop homepage layout has been approved.', comments: 9, files: 1, previousPriority: 'High', dueDate: null },
        'task-wf-4': { id: 'task-wf-4', priority: 'High', title: 'Prototype Key Interactions', content: 'Build a clickable prototype in Figma or XD.', comments: 14, files: 1, previousPriority: null, dueDate: getDateString(nextWeek) },
      },
    }
  }
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setPriorityFilter: (state, action) => {
      state.filters.priority = action.payload;
    },
    setDateFilter: (state, action) => {
      state.filters.date = action.payload;
    },
    setCurrentProject: (state, action) => {
      state.currentProjectId = action.payload;
    },
    addTask: (state, action) => {
      const { projectId, columnId, taskData } = action.payload;
      const project = state.projects[projectId];
      if (project) {
        const newTaskId = `task-${Date.now()}`;
        const newTask = {
          id: newTaskId,
          priority: taskData.priority || 'Low',
          title: taskData.title,
          content: taskData.content,
          comments: 0,
          files: 0,
          previousPriority: null,
          dueDate: null,
        };
        project.tasks[newTaskId] = newTask;
        project.columns[columnId].taskIds.push(newTaskId);
      }
    },
    moveTask: (state, action) => {
      const { projectId, source, destination, draggableId } = action.payload;
      const project = state.projects[projectId];
      if (!project || !destination) return;

      if (source.droppableId === destination.droppableId && source.index === destination.index) {
        return;
      }
      
      const startColumn = project.columns[source.droppableId];
      const finishColumn = project.columns[destination.droppableId];

      if (startColumn === finishColumn) {
        const newTaskIds = Array.from(startColumn.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        project.columns[startColumn.id].taskIds = newTaskIds;
        return;
      }

      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);
      project.columns[startColumn.id].taskIds = startTaskIds;

      const finishTaskIds = Array.from(finishColumn.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      project.columns[finishColumn.id].taskIds = finishTaskIds;

      const task = project.tasks[draggableId];
      if (task) {
        if (destination.droppableId === 'done') {
          task.previousPriority = task.priority; 
          task.priority = 'Completed';
        } 
        else if (source.droppableId === 'done') {
          task.priority = task.previousPriority || 'Low'; 
          task.previousPriority = null;
        }
      }
    }
  },
});

export const { 
  setCurrentProject, 
  addTask, 
  moveTask, 
  setPriorityFilter,
  setDateFilter 
} = projectsSlice.actions;

export default projectsSlice.reducer;