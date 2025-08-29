import React, { useState, useEffect } from 'react'
import { projects } from "../data/dataproject"
const ProfileProjects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  // const [activeProject, setActiveProject] = useState(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])



  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'web', label: 'Web', count: projects.filter(p => p.category === 'web').length },
    // { key: 'fullstack', label: 'Fullstack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'other', label: 'Other', count: projects.filter(p => p.category === 'other').length },
    // { key: 'data', label: '', count: projects.filter(p => p.category === 'data').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Selected projects showcasing my skills and technologies applied.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {filter.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {/* {project.liveUrl === "https://order-drink.42web.io/" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/20 backdrop-blur-sm text-white text-center py-2 px-4 rounded-lg hover:bg-white/30 transition-colors duration-300"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <button
                        onClick={() => setActiveProject(project)}
                        className="flex-1 bg-white/20 backdrop-blur-sm text-white text-center py-2 px-4 rounded-lg hover:bg-white/30 transition-colors duration-300"
                      >
                        Live Demo
                      </button>
                    )} */}
                  {project.liveUrl === "null" ? (
                      <button
                        onClick={() => alert("Live Demo has not been deployed yet. Please check the GitHub repository!")}
                        className="flex-1 bg-white/20 backdrop-blur-sm text-white text-center py-2 px-4 rounded-lg hover:bg-white/30 transition-colors duration-300"
                      >
                        Live Demo
                      </button>):(
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/20 backdrop-blur-sm text-white text-center py-2 px-4 rounded-lg hover:bg-white/30 transition-colors duration-300"
                      >
                        Live Demo
                      </a>
                    ) 
                    }
                  <a
                    href={project.githubUrl} 
                    target="_blank"
                    className="flex-1 bg-black/50 backdrop-blur-sm text-white text-center py-2 px-4 rounded-lg hover:bg-black/70 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less */}
        {filteredProjects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              {showAll ? "View Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>

      {/* Modal Live Demo */}
      {/* {activeProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 overflow-hidden"> */}
            {/* Header */}
            {/* <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
              <h3>{activeProject.title}</h3>
              <button
                onClick={() => setActiveProject(null)}
                className="text-red-400 hover:text-red-600"
              >
                ✕
              </button>
            </div> */}
            {/* Iframe nhúng project */}
            {/* <iframe
              src={activeProject.liveUrl}
              className="w-full h-[600px] border-0"
              title={activeProject.title}
            ></iframe>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default ProfileProjects
