import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import InstagramModal from '../components/InstagramModal'

function Dashboard() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const storedData = localStorage.getItem('jiohotstar_user')
    if (storedData) {
      setUserData(JSON.parse(storedData))
    }
  }, [])

  const handleDownloadClick = () => {
    setShowModal(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('jiohotstar_user')
    navigate('/')
    window.location.reload()
  }

  if (!userData) {
    return null
  }

  return (
    <div className="dashboard-container">
      <div className="welcome-section">
        <h1>Welcome, <span className="user-name">{userData.name}</span>!</h1>
        <p>Thank you for joining JioHotstar Downloads Portal</p>
      </div>

      <div className="user-info">
        <h2>Your Information</h2>
        <div className="info-item">
          <span className="info-label">Name:</span>
          <span className="info-value">{userData.name}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Contact:</span>
          <span className="info-value">{userData.contact}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Email:</span>
          <span className="info-value">{userData.email}</span>
        </div>
      </div>

      <div className="download-section">
        <button 
          className="btn download-btn"
          onClick={handleDownloadClick}
        >
          Download JioHotstar
        </button>
        <button 
          className="btn logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {showModal && (
        <InstagramModal 
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default Dashboard
