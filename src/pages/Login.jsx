import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required'
    } else if (!/^\d{10}$/.test(formData.contact.trim())) {
      newErrors.contact = 'Contact must be a valid 10-digit phone number'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Email must be a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      const userData = {
        name: formData.name.trim(),
        contact: formData.contact.trim(),
        email: formData.email.trim(),
        registeredAt: new Date().toISOString()
      }

      localStorage.setItem('jiohotstar_user', JSON.stringify(userData))
      setIsAuthenticated(true)
      setIsSubmitting(false)
      navigate('/dashboard')
    }, 500)
  }

  return (
    <div className="container">
      <div className="card">
        <div className="logo">
          <h1>JioHotstar</h1>
          <p>Download Portal</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter 10-digit phone number"
              className={errors.contact ? 'error' : ''}
              maxLength="10"
            />
            {errors.contact && <div className="error-message">{errors.contact}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <button 
            type="submit" 
            className="btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
