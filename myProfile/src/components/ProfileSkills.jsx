import React, { useState, useEffect } from 'react'
 import { FaStar } from "react-icons/fa";
const ProfileSkills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible) {
  // Animate skills progress bars
  const skills = [
    { name: 'ReactJS', level: 65, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript (ES6+)', level: 65, color: 'from-yellow-400 to-orange-500' },
    { name: 'HTML5 & CSS3', level: 65, color: 'from-pink-500 to-red-500' },
    { name: 'Tailwind CSS / Bootstrap', level: 65, color: 'from-teal-500 to-green-500' },
    { name: 'State Management (Redux)', level: 50, color: 'from-purple-500 to-indigo-500' },
    { name: 'Version Control (Git, GitHub)', level: 60, color: 'from-gray-500 to-gray-700' },
    { name: 'TypeScript (Basic – learning)', level: 40, color: 'from-sky-500 to-blue-600' },
    { name: 'MongoDB (Basic)', level: 50, color: 'from-green-600 to-emerald-600' }
  ]

  let currentIndex = 0
  const interval = setInterval(() => {
    if (currentIndex < skills.length) {
      setAnimatedSkills(prev => [...prev, skills[currentIndex]])
      currentIndex++
    } else {
      clearInterval(interval)
    }
  }, 200)

  return () => clearInterval(interval)
}
  }, [isVisible])

  const otherSkills = [
  { name: 'MongoDB', icon: '🍃', level: 'Basic' },
  { name: 'Git/GitHub', icon: '📝', level: 'Intermediate' },
  { name: 'Bootstrap', icon: '🎀', level: 'Intermediate' },
  { name: 'Tailwind CSS', icon: '🌈', level: 'Intermediate' },
  { name: 'Figma', icon: '🎨', level: 'Intermediate' },
  { name: 'RESTful APIs', icon: '🔗', level: 'Intermediate' },
  { name: 'VS Code', icon: '💻', level: 'Advanced' }
]

  return (
    <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Front-end skills and tools I use to build modern and user-friendly web applications.
          </p>
        </div>

        {/* Main Skills + Additional Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Core Technologies */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
              Core Technologies
            </h3>

            <div className="space-y-6">
              {animatedSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Additional Skills */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-full"></div>
              Additional Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-white font-medium text-sm">{skill.name}</span>
                  </div>
                  <div className="text-gray-400 text-xs">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

          <div className='col-span-2 mt-8'>



  {/* Soft Skills */}
  <div className="bg-white/5 max-w-xl mx-auto w-full backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
    <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
      <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
      Soft Skills
    </h3>
    
    <div className="space-y-4">
      {[
        { name: 'Communication', level: 3, icon: '💬' },   
        { name: 'Problem Solving', level: 3, icon: '🧩' }, 
        { name: 'Time Management', level: 4, icon: '⏰' }, 
        { name: 'Adaptability', level: 4, icon: '🔄' },    
        { name: 'Creativity', level: 3, icon: '🎨' },      
        { name: 'Teamwork', level: 4, icon: '🤝' }, 
      ].map((skill) => (
        <div
          key={skill.name}
          className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
        >
          {/* Icon + Tên */}
          <div className="flex items-center gap-3">
            <span className="text-xl">{skill.icon}</span>
            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </div>

          {/* Hiển thị sao theo level */}
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={`transition-colors duration-300 ${
                  i < skill.level ? "text-yellow-400" : "text-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


        </div>
      </div>

  )
}

export default ProfileSkills 