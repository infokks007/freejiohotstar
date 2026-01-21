import { useState } from 'react'

function InstagramModal({ onClose }) {
  const [isVerified, setIsVerified] = useState(false)
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [linkClicks, setLinkClicks] = useState({ link1: false, link2: false })

  const instagramLinks = [
    {
      id: 'link1',
      url: 'https://www.instagram.com/its_kks_07/',
      username: '@its_kks_07'
    },
    {
      id: 'link2',
      url: 'https://www.instagram.com/ajeet__kunwar/',
      username: '@ajeet__kunwar'
    }
  ]

  const handleLinkClick = (linkId) => {
    setLinkClicks(prev => ({
      ...prev,
      [linkId]: true
    }))
  }

  const handleVerify = () => {
    if (!isVerified) {
      setShowError(true)
      setShowSuccess(false)
      setTimeout(() => {
        setShowError(false)
      }, 3000)
      return
    }

    setShowSuccess(true)
    setShowError(false)

    setTimeout(() => {
      window.open('https://www.mediafire.com/file/bzhtdgoyt4wu467/JioHotstar+[Lifetime].apk/file', '_blank')
      onClose()
    }, 1500)
  }

  const bothLinksClicked = linkClicks.link1 && linkClicks.link2

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>🎉 Almost There!</h2>
        
        <div className="modal-content">
          <p>
            To download JioHotstar, please follow these two Instagram accounts.
            This helps us grow our community!
          </p>

          <div className="instagram-links">
            {instagramLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
                onClick={() => handleLinkClick(link.id)}
              >
                <span>📸 Follow {link.username}</span>
                <span className="arrow">→</span>
              </a>
            ))}
          </div>

          <div className="verification-checkbox">
            <input
              type="checkbox"
              id="verify-checkbox"
              checked={isVerified}
              onChange={(e) => setIsVerified(e.target.checked)}
            />
            <label htmlFor="verify-checkbox">
              I have followed both Instagram accounts
            </label>
          </div>

          {showError && (
            <div className="modal-error">
              ⚠️ Please Follow First
            </div>
          )}

          {showSuccess && (
            <div className="success-message">
              ✓ Thank you! Redirecting to download...
            </div>
          )}

          {bothLinksClicked && !isVerified && (
            <div className="success-message">
              ✓ Great! Now check the box to confirm you&apos;ve followed both accounts
            </div>
          )}
        </div>

        <div className="modal-buttons">
          <button
            className="modal-btn modal-btn-secondary"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="modal-btn modal-btn-primary"
            onClick={handleVerify}
            disabled={showSuccess}
          >
            {showSuccess ? 'Verified!' : 'Verify & Download'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default InstagramModal
