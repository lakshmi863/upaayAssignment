import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProject } from '../redux/projectsSlice';
import { FiHome, FiMessageSquare, FiClipboard, FiUsers, FiSettings, FiPlus } from 'react-icons/fi';
import { GoLightBulb } from "react-icons/go";


const Sidebar = () => {
  const dispatch = useDispatch();
  const { projects, currentProjectId } = useSelector((state) => state.projects);

  const projectList = Object.values(projects);

  const handleProjectClick = (projectId) => {
    dispatch(setCurrentProject(projectId));
  };

  const navLinks = [
    { icon: <FiHome />, name: 'Home' },
    { icon: <FiMessageSquare />, name: 'Messages' },
    { icon: <FiClipboard />, name: 'Tasks' },
    { icon: <FiUsers />, name: 'Members' },
    { icon: <FiSettings />, name: 'Settings' },
  ];
  
  const projectColors = {
    'mobile-app': 'bg-green-500',
    'website-redesign': 'bg-orange-500',
    'design-system': 'bg-indigo-300',
    'wireframes': 'bg-blue-500',
  };

  return (
    <aside className="w-[250px] bg-neutral-white border-r border-neutral-border p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-10">
            {/* SVG Logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#5030E5"/>
                <path d="M12 6C9.24 6 7 8.24 7 11C7 13.76 9.24 16 12 16C14.76 16 17 13.76 17 11C17 8.24 14.76 6 12 6ZM12 14C10.34 14 9 12.66 9 11C9 9.34 10.34 8 12 8C13.66 8 15 9.34 15 11C15 12.66 13.66 14 12 14Z" fill="#5030E5"/>
            </svg>
            <h1 className="text-xl font-bold text-text-dark">Project M.</h1>
        </div>

        {/* --- MODIFICATION FROM <a> to <button> --- */}
        <nav className="flex flex-col gap-4 border-b border-neutral-border pb-6">
          {navLinks.map((link) => (
            <button 
              type="button" 
              key={link.name} 
              className="flex items-center gap-3 text-text-gray-light font-medium hover:text-text-dark text-left"
            >
              {React.cloneElement(link.icon, { className: "w-6 h-6" })}
              <span>{link.name}</span>
            </button>
          ))}
        </nav>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xs font-bold text-text-gray-light uppercase">My Projects</h2>
            <button><FiPlus className="w-4 h-4 text-text-gray-light" /></button>
          </div>
          <div className="flex flex-col gap-3">
            {projectList.map((project) => (
              <button 
                key={project.id} 
                onClick={() => handleProjectClick(project.id)}
                className={`flex items-center justify-between p-2 rounded-md text-left w-full ${project.id === currentProjectId ? 'bg-brand-purple bg-opacity-10 font-bold' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${projectColors[project.id] || 'bg-gray-400'}`}></span>
                  <span className="text-text-dark">{project.name}</span>
                </div>
                {project.id === currentProjectId && <span className="text-text-dark font-black">...</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-6 bg-neutral-bg rounded-2xl text-center">
          <div className="relative w-16 h-16 flex items-center justify-center -mt-12 mb-2">
            <div className="absolute inset-0 bg-yellow-300 rounded-full opacity-30 blur-lg"></div>
            <div className="relative bg-neutral-bg rounded-full p-2">
                <GoLightBulb className="w-8 h-8 text-yellow-500"/>
            </div>
          </div>
          <h3 className="font-medium text-sm text-text-dark">Thoughts Time</h3>
          <p className="text-xs text-text-gray-light my-2">We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
          <button className="w-full py-2 bg-neutral-white font-medium rounded-lg mt-2">Write a message</button>
      </div>
    </aside>
  );
};

export default Sidebar;