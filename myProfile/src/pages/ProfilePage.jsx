import React, { useState, useEffect } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ProfileStats from '../components/ProfileStats'
import ProfileAbout from '../components/ProfileAbout'
import ProfileSkills from '../components/ProfileSkills'
import ProfileProjects from '../components/ProfileProjects'
import ProfileContact from '../components/ProfileContact'

const ProfilePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Hiệu ứng fade in khi component mount
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <ProfileHeader />
        
        {/* Profile Stats */}
        <ProfileStats />
        
        {/* Profile About */}
        <ProfileAbout />
        
        {/* Profile Skills */}
        <ProfileSkills />
        
        {/* Profile Projects */}
        <ProfileProjects />
        
        {/* Profile Contact */}
        <ProfileContact />
      </div>
    </div>
  )
}

export default ProfilePage 