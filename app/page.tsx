"use client"
import { useState } from "react"
import Rockstar from '../components/Rockstar'
import Meta from '../components/Meta'
import Paramount from '../components/Paramount'
import UMG from '../components/UMG'
import Qulinary from '../components/Qulinary'



type View = 'home' | 'rockstar' | 'meta' | 'paramount' | 'umg' | 'qulinary'

export default function Page() {
  const [currentView, setCurrentView] = useState<View>('home')

  const renderContent = () => {
    switch (currentView) {
      case 'rockstar': return <Rockstar />
      case 'meta': return <Meta />
      case 'paramount': return <Paramount />
      case 'umg': return <UMG />
      case 'qulinary': return <Qulinary />
      default:
        return (
          <div className="flex items-center justify-center min-h-screen">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold">My Dream Tech Jobs</h1>
            <p>Explore five companies I’d love to work for and how I match with each role.</p>
            <p>Use the navigation buttons above to view each one.</p>
          </div>
        </div>
        
        )
    }
  }

  return (
    <div>
  <nav className="flex justify-center flex-wrap gap-6 mb-8 border-b pb-4">
    {['home', 'rockstar', 'meta', 'paramount', 'umg', 'qulinary'].map(view => (
    <button
    key={view}
    onClick={() => setCurrentView(view as View)}
    className={`navBtns ${currentView === view ? 'navBtns-active' : 'navBtns-inactive'}`}
  >
    {view === 'home' ? 'Home' : view}
  </button>
  

    ))}
  </nav>

  {renderContent()}
</div>

  )
}