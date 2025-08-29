import React, { useState, useEffect } from 'react'
import { projects } from "../data/dataproject"
const ProfileStats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({  clients: 0, awards: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Animate counting up
      const finalCounts = {  clients: 8, awards: 2 }
      const duration = 2000
      const interval = 50
      const steps = duration / interval

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setCounts({
          projects: Math.floor(finalCounts.projects * progress),
          experience: Math.floor(finalCounts.experience * progress),
          clients: Math.floor(finalCounts.clients * progress),
          awards: Math.floor(finalCounts.awards * progress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounts(finalCounts)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isVisible])

    const stats = [
    { 
      label: 'Personal Projects', 
      value: projects.length, 
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', 
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      label: 'Technologies Learned', 
      value: counts.clients, 
      icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', 
      color: 'from-green-500 to-emerald-500' 
    },
    { 
      label: 'Certificates Earned',  
      value: counts.awards, 
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', 
      color: 'from-yellow-500 to-orange-500' 
    }
  ]


  return (
    <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d={stat.icon} clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                {stat.value}+
              </div>
              
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>

            {/* Hover effect border */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileStats 