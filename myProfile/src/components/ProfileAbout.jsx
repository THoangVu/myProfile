import React, { useState, useEffect } from 'react'

const ProfileAbout = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600)
    return () => clearTimeout(timer)
  }, [])

  // const experiences = [
  //   {
  //     year: '2023 - Present',
  //     title: 'Senior Full Stack Developer',
  //     company: 'TechCorp Vietnam',
  //     description: 'Leading development team, architecting scalable solutions, mentoring junior developers.',
  //     skills: ['React', 'Node.js', 'AWS', 'MongoDB']
  //   },
  //   {
  //     year: '2021 - 2023',
  //     title: 'Full Stack Developer',
  //     company: 'Digital Solutions Co.',
  //     description: 'Developed web applications, worked with modern frameworks, collaborated with design team.',
  //     skills: ['Vue.js', 'Express.js', 'PostgreSQL', 'Docker']
  //   },
  //   {
  //     year: '2019 - 2021',
  //     title: 'Frontend Developer',
  //     company: 'WebStudio',
  //     description: 'Created responsive user interfaces, optimized performance, implemented modern UI/UX.',
  //     skills: ['HTML/CSS', 'JavaScript', 'React', 'Sass']
  //   }
  // ]

  return (
    <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Objective
          </h2>
          <p className="text-xl text-gray-300 max-w-7xl mx-auto leading-relaxed text-justify">
            I am a Software Engineering graduate passionate about Frontend Development,
            with strong skills in ReactJS, JavaScript, and modern frameworks. 
            My goal is to build scalable, user-friendly applications while continuously growing as a professional 
            and contributing effectively in collaborative environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ">
          {/* Left Column - Personal Info */}
          <div className="space-y-8 h-full ">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
                Personal Information
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Full Name', value: 'Trần Hoàng Vũ' },
                  { label: 'Age', value: '22/05/2025' },
                  { label: 'Location', value: 'Võ Văn Ngân, Thủ Đức, Hồ Chí Minh' },
                  { label: 'Email', value: 'tranhoangvu2205@gmail.com' },
                  { label: 'Phone', value: '0394442841' },
                  { label: 'Languages', value: 'Vietnamese' }
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400 font-medium">{item.label}:</span>
                    <span className="text-white font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column - Education + Certificates */}
          <div className="space-y-8 h-full flex flex-col">
            {/* Education */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 flex-1">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-full"></div>
                Education
              </h3>
              <div className="space-y-4"> 
                <div className="border-l-4 border-blue-400 pl-4"> 
                <h4 className="text-white font-semibold">Sai Gon University</h4> 
                <p className="text-gray-400">Bachelor of Engineering in Information Technology – Software Engineering</p> 
                <p className="text-gray-500 text-sm">2020 - 2025</p> </div>
              </div>
            </div>
            {/* Certificates */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 flex-1">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
                Certificates
              </h3>
              <div className="space-y-4 ">
                <div className='space-x-8 flex flex-row items-center'>
                  <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="text-white font-semibold">VSTEP B1</h4>
                  <p className="text-gray-400">Issued by Đại Học Sài Gòn</p>
                  <p className="text-gray-500 text-sm">2024</p>
                </div>
                <div className="border-l-[1px] border-gray-400 pl-1 h-8 "></div>
                <div className="">
                  <h4 className="text-white font-semibold">TOEIC 455</h4>
                  <p className="text-gray-400">Issued by IIG Vietnam</p>
                  <p className="text-gray-500 text-sm">2024</p>
                </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Right Column - Experience Timeline */}
          {/* <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
                Work Experience
              </h3>
              
              <div className="relative"> */}
                {/* Timeline line */}
                {/* <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-emerald-500"></div>
                
                {experiences.map((exp) => (
                  <div key={exp.year} className="relative mb-8 last:mb-0"> */}
                    {/* Timeline dot */}
                    {/* <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-slate-900 transform -translate-x-1/2"></div>
                    
                    <div className="ml-8">
                      <div className="text-sm text-green-400 font-semibold mb-1">{exp.year}</div>
                      <h4 className="text-white font-semibold text-lg mb-1">{exp.title}</h4>
                      <div className="text-gray-400 font-medium mb-2">{exp.company}</div>
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{exp.description}</p> */}
                      
                      {/* Skills tags */}
                      {/* <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-green-400/20 text-green-300 text-xs rounded-full border border-green-400/30 hover:bg-green-400/30 transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ProfileAbout 