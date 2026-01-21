# Testing Guide

This guide provides step-by-step instructions for testing the JioHotstar Downloads Portal.

## Prerequisites

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Open your browser to `http://localhost:3000`

---

## Test Scenarios

### Scenario 1: First-Time User Registration

**Steps:**
1. Navigate to `http://localhost:3000`
2. Verify you see the login/registration form
3. Leave all fields empty and click "Submit"
4. **Expected**: Error messages appear for all fields
5. Fill in Name with "A" (1 character)
6. **Expected**: Error "Name must be at least 2 characters"
7. Fill in Name with "John Doe"
8. Fill in Contact with "123" (less than 10 digits)
9. **Expected**: Error "Contact must be a valid 10-digit phone number"
10. Fill in Contact with "1234567890"
11. Fill in Email with "invalid-email"
12. **Expected**: Error "Email must be a valid email address"
13. Fill in Email with "john@example.com"
14. Click "Submit"
15. **Expected**: Button shows "Submitting..." then redirects to dashboard

**Success Criteria:**
- ✅ All validation errors display correctly
- ✅ Form accepts valid input
- ✅ Redirect happens after submission
- ✅ No console errors

---

### Scenario 2: Dashboard Display

**Prerequisites:** Complete Scenario 1

**Steps:**
1. After registration, verify you're on the dashboard (`/dashboard`)
2. **Expected**: See "Welcome, John Doe!" message
3. **Expected**: See user information card with:
   - Name: John Doe
   - Contact: 1234567890
   - Email: john@example.com
4. **Expected**: See green "Download JioHotstar" button
5. **Expected**: See red "Logout" button

**Success Criteria:**
- ✅ Welcome message displays correct name
- ✅ All user information displays correctly
- ✅ Both buttons are visible and styled correctly
- ✅ Layout is responsive

---

### Scenario 3: Instagram Verification Modal

**Prerequisites:** Complete Scenario 2

**Steps:**
1. On dashboard, click "Download JioHotstar" button
2. **Expected**: Modal appears with overlay
3. **Expected**: See heading "🎉 Almost There!"
4. **Expected**: See two Instagram link buttons
5. Click first Instagram link (@its_kks_07)
6. **Expected**: New tab opens with Instagram profile
7. Return to application
8. Click second Instagram link (@ajeet__kunwar)
9. **Expected**: New tab opens with Instagram profile
10. Return to application
11. **Expected**: See message "✓ Great! Now check the box..."
12. Try clicking "Verify & Download" without checking box
13. **Expected**: Error message "⚠️ Please Follow First"
14. **Expected**: Error disappears after 3 seconds
15. Check the "I have followed both Instagram accounts" checkbox
16. Click "Verify & Download"
17. **Expected**: Success message "✓ Thank you! Redirecting to download..."
18. **Expected**: After 1.5 seconds, new tab opens with MediaFire link
19. **Expected**: Modal closes

**Success Criteria:**
- ✅ Modal appears and closes correctly
- ✅ Both Instagram links work
- ✅ Error shows when trying to skip verification
- ✅ Success flow works after checkbox is checked
- ✅ MediaFire link opens in new tab
- ✅ No console errors

---

### Scenario 4: Modal Cancellation

**Prerequisites:** Complete Scenario 2

**Steps:**
1. Click "Download JioHotstar" button
2. Modal appears
3. Click "Cancel" button
4. **Expected**: Modal closes without action
5. Click "Download JioHotstar" button again
6. Modal appears
7. Click outside the modal (on the dark overlay)
8. **Expected**: Modal closes without action

**Success Criteria:**
- ✅ Cancel button closes modal
- ✅ Click outside closes modal
- ✅ No downloads initiated

---

### Scenario 5: Data Persistence

**Prerequisites:** Complete Scenario 1

**Steps:**
1. Verify you're on dashboard with your information
2. Refresh the page (F5 or Ctrl+R)
3. **Expected**: Still on dashboard
4. **Expected**: User information still displayed
5. **Expected**: Welcome message still shows correct name
6. Open browser DevTools → Application → Local Storage
7. Find `jiohotstar_user` key
8. **Expected**: See JSON with your user data
9. Close browser completely
10. Reopen browser and navigate to `http://localhost:3000`
11. **Expected**: Automatically redirected to dashboard
12. **Expected**: All data still present

**Success Criteria:**
- ✅ Data persists across page refresh
- ✅ Data persists across browser sessions
- ✅ localStorage contains correct data structure

---

### Scenario 6: Logout Functionality

**Prerequisites:** User is logged in and on dashboard

**Steps:**
1. Click "Logout" button
2. **Expected**: Redirected to login page (`/`)
3. **Expected**: Welcome form is empty
4. Try to navigate to `/dashboard` manually
5. **Expected**: Redirected back to login page
6. Open DevTools → Application → Local Storage
7. **Expected**: `jiohotstar_user` key is removed

**Success Criteria:**
- ✅ Logout clears data
- ✅ Logout redirects to login
- ✅ Dashboard is no longer accessible
- ✅ localStorage is cleared

---

### Scenario 7: Responsive Design - Mobile

**Steps:**
1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select "iPhone 12 Pro" or similar mobile device
4. Navigate through registration process
5. **Expected**: Form is readable and usable
6. **Expected**: Buttons are easy to tap
7. Navigate to dashboard
8. **Expected**: Layout adapts to mobile screen
9. Open Instagram modal
10. **Expected**: Modal fits mobile screen
11. **Expected**: All buttons are accessible

**Test on multiple sizes:**
- iPhone SE (375x667)
- iPhone 12 Pro (390x844)
- Pixel 5 (393x851)
- Samsung Galaxy S20 (360x800)

**Success Criteria:**
- ✅ No horizontal scrolling
- ✅ All text is readable
- ✅ All buttons are tappable
- ✅ Forms are easy to fill
- ✅ Modal is fully visible

---

### Scenario 8: Edge Cases

#### Test 8.1: Special Characters in Name

**Steps:**
1. Enter name: "Jean-François O'Connor"
2. Enter valid contact and email
3. Submit form
4. **Expected**: Accepted and redirected
5. **Expected**: Name displays correctly on dashboard

#### Test 8.2: Long Name

**Steps:**
1. Enter name: "Alexander Maximilian Christopher Johannes"
2. Enter valid contact and email
3. Submit form
4. **Expected**: Accepted and redirected
5. **Expected**: Name displays without breaking layout

#### Test 8.3: Email Variations

**Steps:**
Test these email formats:
- user@domain.com ✅
- user.name@domain.com ✅
- user+tag@domain.co.uk ✅
- user@domain ❌ (should fail)
- user@domain. ❌ (should fail)
- @domain.com ❌ (should fail)
- user domain.com ❌ (should fail)

#### Test 8.4: Phone Number Variations

**Steps:**
Test these phone formats:
- 1234567890 ✅
- 123-456-7890 ❌ (should fail)
- (123) 456-7890 ❌ (should fail)
- 123 456 7890 ❌ (should fail)
- +1234567890 ❌ (should fail)

**Success Criteria:**
- ✅ Only 10 digits accepted
- ✅ Dashes and spaces rejected
- ✅ Special characters rejected

---

### Scenario 9: Browser Compatibility

**Test in each browser:**

#### Chrome
1. Complete full user flow
2. Check DevTools console for errors
3. Verify localStorage works

#### Firefox
1. Complete full user flow
2. Check Developer Console for errors
3. Verify localStorage works

#### Safari (if available)
1. Complete full user flow
2. Check Web Inspector for errors
3. Verify localStorage works

#### Edge
1. Complete full user flow
2. Check DevTools console for errors
3. Verify localStorage works

**Success Criteria:**
- ✅ No browser-specific errors
- ✅ Consistent behavior across browsers
- ✅ Same visual appearance

---

### Scenario 10: Performance Testing

**Steps:**
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
4. Review scores

**Expected Scores:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 80+

---

## Automated Testing (Future)

### Unit Tests

```bash
# If tests are added in the future
npm test
```

### E2E Tests

```bash
# If E2E tests are added
npm run test:e2e
```

---

## Bug Reporting

If you find a bug, report it with:

1. **Description**: What went wrong?
2. **Expected behavior**: What should happen?
3. **Actual behavior**: What actually happened?
4. **Steps to reproduce**: How to replicate the issue?
5. **Browser**: Which browser and version?
6. **Screenshots**: If applicable
7. **Console errors**: Any errors in DevTools console?

---

## Test Results Template

```
Date: ___________
Tester: ___________
Browser: ___________
Device: ___________

Scenario 1: First-Time User Registration
Status: [ ] Pass [ ] Fail
Notes: _______________________________

Scenario 2: Dashboard Display
Status: [ ] Pass [ ] Fail
Notes: _______________________________

Scenario 3: Instagram Verification Modal
Status: [ ] Pass [ ] Fail
Notes: _______________________________

Scenario 4: Modal Cancellation
Status: [ ] Pass [ ] Fail
Notes: _______________________________

Scenario 5: Data Persistence
Status: [ ] Pass [ ] Fail
Notes: _______________________________

Scenario 6: Logout Functionality
Status: [ ] Pass [ ] Fail
Notes: _______________________________

Scenario 7: Responsive Design
Status: [ ] Pass [ ] Fail
Notes: _______________________________

Scenario 8: Edge Cases
Status: [ ] Pass [ ] Fail
Notes: _______________________________

Scenario 9: Browser Compatibility
Status: [ ] Pass [ ] Fail
Notes: _______________________________

Scenario 10: Performance Testing
Status: [ ] Pass [ ] Fail
Notes: _______________________________

Overall Status: [ ] All Pass [ ] Some Failures
```

---

## Quick Smoke Test (5 minutes)

For rapid verification:

1. ✅ Register new user
2. ✅ See dashboard
3. ✅ Click download button
4. ✅ Open modal
5. ✅ Click Instagram links
6. ✅ Check verification box
7. ✅ Verify and download
8. ✅ MediaFire opens
9. ✅ Logout
10. ✅ Refresh - redirected to login

If all pass: Application is working correctly! ✅

---

## License

This project is for educational and demonstration purposes.
