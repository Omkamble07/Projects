# Bella Vista Restaurant Website

A fully responsive restaurant website with reservation system built using HTML, CSS, and JavaScript. Perfect for adding to your resume to showcase frontend development skills.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Dynamic Menu System**: Filterable menu with categories (Appetizers, Mains, Desserts, Beverages)
- **Image Gallery**: Interactive gallery with lightbox modal and keyboard navigation
- **Reservation System**: Complete booking form with:
  - Date picker with min/max date validation
  - Dynamic time slot generation based on business hours
  - Form validation with real-time error messages
  - Phone and email validation
  - Success confirmation message
- **Smooth Navigation**: 
  - Sticky navbar with scroll effects
  - Active section highlighting
  - Smooth scroll to sections
  - Mobile hamburger menu

### Technical Highlights
- **Pure JavaScript**: No frameworks or libraries required (except Font Awesome for icons)
- **Modern CSS**: Flexbox, Grid, CSS Variables, Animations
- **Form Validation**: Client-side validation with custom error messages
- **LocalStorage Integration**: Saves reservations locally
- **Accessibility**: Semantic HTML, keyboard navigation support
- **SEO Optimized**: Proper heading hierarchy, meta tags

## 📁 Project Structure

```
restaurant-website/
│
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Setup Instructions

1. **Download the files**
   - Save `index.html`, `styles.css`, and `script.js` in the same folder

2. **Open the website**
   - Double-click `index.html` or
   - Right-click → Open with → Your browser

3. **For development**
   - Use VS Code with Live Server extension for auto-reload
   - Or use Python: `python -m http.server 8000`

## 💡 Key Features for Resume

### 1. Reservation System
```javascript
// Dynamic time slot generation based on business hours
// Different hours for weekdays, Saturday, and Sunday
// Form validation with regex patterns
// LocalStorage for data persistence
```

### 2. Menu Filtering
```javascript
// Category-based filtering
// Smooth animations on filter change
// Active state management
```

### 3. Gallery Modal
```javascript
// Lightbox functionality
// Keyboard navigation (Arrow keys, ESC)
// Click outside to close
// Previous/Next navigation
```

### 4. Responsive Navigation
```javascript
// Mobile hamburger menu
// Active section highlighting on scroll
// Smooth scroll behavior
```

## 🎨 Customization Guide

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #d4a574;      /* Gold accent color */
    --secondary-color: #2c3e50;    /* Dark blue */
    --text-dark: #1a1a1a;          /* Main text */
    --text-light: #666;            /* Secondary text */
    --bg-light: #f8f9fa;           /* Light background */
}
```

### Menu Items
Add/edit menu items in `index.html`:
```html
<div class="menu-item" data-category="mains">
    <div class="menu-item-header">
        <h3>Dish Name</h3>
        <span class="price">$XX</span>
    </div>
    <p class="description">Dish description</p>
    <span class="tag">Special Tag</span>
</div>
```

### Business Hours
Modify hours in `script.js`:
```javascript
// Lines 180-190 - Adjust opening/closing times
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    startHour = 11;  // Change opening hour
    endHour = 22;    // Change closing hour
}
```

### Contact Information
Update in `index.html`:
- Phone number: Search for `+1 (555) 123-4567`
- Email: Search for `info@bellavista.com`
- Address: Search for `123 Gourmet Street`

## 📱 Responsive Breakpoints

- **Desktop**: 968px and above
- **Tablet**: 600px - 968px
- **Mobile**: Below 600px

## 🔧 Technical Skills Demonstrated

### HTML
- Semantic HTML5 elements
- Form elements and validation attributes
- Accessibility best practices
- Meta tags for SEO

### CSS
- CSS Grid and Flexbox layouts
- CSS Variables for theming
- Media queries for responsive design
- Animations and transitions
- Box model manipulation
- Pseudo-elements and pseudo-classes

### JavaScript
- DOM manipulation
- Event handling (click, scroll, keyboard)
- Form validation with regex
- LocalStorage API
- Date/Time manipulation
- Intersection Observer API
- Arrow functions and ES6+ syntax
- Template literals

## 🎯 Resume Talking Points

**"Built a fully responsive restaurant website featuring:**
- Dynamic reservation system with real-time validation
- Interactive menu filtering with smooth animations
- Gallery lightbox with keyboard navigation
- Mobile-first responsive design
- Client-side form validation and data persistence
- Smooth scrolling and section highlighting
- Pure JavaScript (no frameworks)"

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Performance Optimizations

- Minimal external dependencies (only Font Awesome)
- Optimized CSS with efficient selectors
- Debounced scroll events
- Lazy loading ready (can be added)
- Minification ready

## 🔮 Future Enhancements (Add to show initiative)

- Backend integration (Node.js/Express)
- Database for reservations (MongoDB/PostgreSQL)
- Email confirmation system (NodeMailer)
- Online ordering system
- User accounts and reservation history
- Admin panel for managing bookings
- Payment integration
- Google Maps integration
- Reviews and ratings system
- Newsletter subscription

## 📝 License

Free to use for personal portfolio projects. Great for showcasing on GitHub and in your resume!

## 🤝 Contributing Ideas

If extending this project, consider adding:
- Table availability checker
- Seasonal menu updates
- Chef's specials carousel
- Customer testimonials
- Loyalty program
- Gift card purchases
- Private event booking

## 📧 Questions?

This project demonstrates industry-standard practices for:
- Code organization
- Responsive design
- User experience
- Form handling
- Client-side validation

Perfect for junior to mid-level frontend developer positions!

---

**Built with ❤️ using HTML, CSS, and JavaScript**

*Last updated: January 2026*