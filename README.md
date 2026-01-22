# DBM Landscape Construction - Professional Website

A professional, visually stunning website for DBM Landscape Construction showcasing landscaping services in Adelaide.

## Features

- **Natural Green Theme**: Professional color scheme with green (#10B981) and earth tones
- **Portfolio Gallery**: Ready-to-use gallery structure for real project photos
- **Service Showcase**: Comprehensive landscaping services display
- **Quote Request System**: Easy-to-use form for customer inquiries
- **Responsive Design**: Fully mobile-optimized
- **Smooth Animations**: Professional scroll effects and transitions

## Services Offered

### Core Services
- Landscape Design
- Garden Construction
- Paving & Retaining Walls
- Lawn Installation
- Irrigation Systems
- Garden Maintenance

## Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Professional design with natural theme
- **JavaScript**: Interactive elements and form validation
- **Google Fonts**: Playfair Display (headings) and Inter (body)

## Design Elements

### Color Scheme
- Primary Green: #10B981 (growth, nature)
- Secondary Brown: #92400E (earth, stability)
- Accent Blue: #0EA5E9 (water, freshness)
- Clean white backgrounds

### Typography
- Headings: Playfair Display (elegant serif)
- Body: Inter (modern sans-serif)

## Adding Real Photos to Portfolio

The portfolio section is ready for real project photos. To add them:

1. **Add photos to the project folder**
   - Save images in the same directory as index.html
   - Recommended size: 1200x900px or 4:3 aspect ratio
   - Format: JPG or PNG

2. **Update the HTML**
   - Replace the placeholder divs in the portfolio section
   - Example:
   ```html
   <div class="portfolio-item">
       <img src="project1.jpg" alt="Garden transformation project">
       <div class="portfolio-overlay">
           <h4>Garden Transformation</h4>
           <p>Adelaide, SA</p>
       </div>
   </div>
   ```

3. **Remove the placeholder note**
   - Delete the `portfolio-note` div once real photos are added

## Local Development

Simply open `index.html` in a modern web browser to view the website.

For a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

Then navigate to `http://localhost:8000`

## Deployment

This is a static website and can be deployed to:
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the folder
- **GitHub Pages**: Enable in repository settings
- **Any web hosting**: Upload files via FTP

## Customization

### Contact Information
Update the following throughout the site:
- Phone number: `0400 000 000`
- Email: `info@dbmlandscape.com.au`
- Service area details
- ABN number

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --primary: #10B981;
    --secondary: #92400E;
    --accent: #0EA5E9;
}
```

### Services
Add or modify services in the services section of `index.html`.

## Business Information

**DBM Landscape Construction**  
Phone: 0400 000 000  
Email: info@dbmlandscape.com.au  
Service Area: Adelaide Metro, SA 5019

**Services:**
- Landscape Design
- Garden Construction
- Paving & Retaining Walls
- Lawn Installation
- Irrigation Systems
- Garden Maintenance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 DBM Landscape Construction. All rights reserved.
