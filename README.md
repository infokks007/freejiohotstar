# JioHotstar Downloads Portal

A full-stack web application for JioHotstar downloads with Instagram follow verification system.

## Features

### 1. Login/Registration Page
- User registration form with validation
- Required fields: Name, Contact (10-digit phone), Email
- Form validation with error messages
- Data persistence using localStorage
- Automatic redirect to dashboard after successful registration

### 2. Dashboard Page
- Personalized welcome message with user's name
- Display user information (name, contact, email)
- Download button for JioHotstar APK
- Logout functionality
- Responsive design for all devices

### 3. Instagram Follow Verification
- Modal popup before download
- Requires users to follow two Instagram accounts:
  - [@its_kks_07](https://www.instagram.com/its_kks_07/)
  - [@ajeet__kunwar](https://www.instagram.com/ajeet__kunwar/)
- Clickable Instagram links that open in new tabs
- Verification checkbox
- Error message: "Please Follow First" if user tries to skip
- Success message and automatic redirect to download link
- Download link: [JioHotstar Lifetime APK on MediaFire](https://www.mediafire.com/file/bzhtdgoyt4wu467/JioHotstar+[Lifetime].apk/file)

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Routing**: React Router DOM 6.20.0
- **Styling**: Custom CSS with responsive design
- **Data Storage**: localStorage (client-side)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jiohotstar-downloads
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
jiohotstar-downloads/
├── src/
│   ├── components/
│   │   └── InstagramModal.jsx    # Instagram follow verification modal
│   ├── pages/
│   │   ├── Login.jsx              # Login/Registration page
│   │   └── Dashboard.jsx          # User dashboard
│   ├── App.jsx                    # Main app component with routing
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # Documentation
```

## User Flow

1. **First Visit**: User lands on login page
2. **Registration**: User fills in name, contact, and email
3. **Validation**: Form validates all fields before submission
4. **Dashboard**: After successful registration, user is redirected to dashboard
5. **Download Action**: User clicks "Download JioHotstar" button
6. **Instagram Verification**: Modal appears requiring Instagram follows
7. **Follow Accounts**: User clicks links to follow both Instagram accounts
8. **Confirm**: User checks the verification box
9. **Download**: After verification, user is redirected to MediaFire download link

## Validation Rules

- **Name**: Required, minimum 2 characters
- **Contact**: Required, must be exactly 10 digits
- **Email**: Required, must be valid email format

## Features Details

### Form Validation
- Real-time validation on input change
- Clear error messages for each field
- Disabled submit button during submission
- Success feedback

### Data Persistence
- User data stored in localStorage
- Persists across page refreshes
- Automatic authentication check on app load

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface
- Smooth animations and transitions

### Instagram Verification
- Visual feedback when links are clicked
- Prevents download without verification
- User-friendly error messages
- Automatic redirect after verification

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security Considerations

- Client-side validation for user experience
- localStorage for data persistence (suitable for demo purposes)
- External links open in new tabs with security attributes
- No sensitive data collected

## Future Enhancements

- Backend API for user data storage
- Email verification
- OTP verification for contact number
- Real Instagram follow verification via API
- User dashboard with download history
- Admin panel for user management

## License

This project is for educational and demonstration purposes.
