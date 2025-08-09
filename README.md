# WWE Clothing Website

A responsive, single-page landing page for a WWE-themed clothing website built with React and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Interactive Navigation**: Sticky top navigation with search functionality
- **Wrestler Filtering**: Click on wrestler profiles to filter products
- **Product Grid**: Responsive product display with hover effects
- **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Language**: JavaScript (JSX)

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Top navigation bar
│   ├── Hero.jsx           # Hero section with call-to-action
│   ├── WrestlerSection.jsx # Horizontal scrollable wrestler profiles
│   ├── ProductGrid.jsx     # Product display grid with filtering
│   └── Footer.jsx         # Footer with links and company info
├── data.js                # Sample wrestler and product data
├── App.jsx                # Main application component
├── main.jsx               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wwe-clothing-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features Breakdown

### Navigation Bar
- WWE logo and branding
- Search bar with placeholder functionality
- Menu links (Home, Superstars, Apparel, Sale)
- Sticky positioning when scrolling
- Mobile-responsive design

### Hero Section
- Compelling headline and description
- Call-to-action buttons
- Featured wrestler previews
- Gradient background with overlay

### Wrestler Section
- Horizontal scrollable layout
- Circular profile images with names
- Hover effects (zoom-in and shadow)
- Click to filter products
- Clear filter button when active

### Product Grid
- Responsive grid layout (1-4 columns based on screen size)
- Product cards with images, names, prices
- Wrestler category badges
- "New" labels
- Add to Cart buttons
- Dynamic filtering based on wrestler selection

### Data Structure

The application uses two main data arrays:

**Wrestlers**: Contains wrestler information (id, name, image, category)
**Products**: Contains product information (id, name, price, image, category, wrestler)

### Filtering Logic

- Clicking a wrestler filters products to show only items from that wrestler's collection
- The "Show All Products" button clears the filter
- Product count updates dynamically
- Section title changes to reflect the selected wrestler

## Customization

### Colors
The project uses custom WWE-themed colors defined in `tailwind.config.js`:
- `wwe-red`: #FF0000
- `wwe-blue`: #0066CC
- `wwe-black`: #000000
- `wwe-gray`: #333333

### Adding New Wrestlers/Products
Edit the `src/data.js` file to add new wrestlers or products. Ensure each product has a matching `category` that corresponds to a wrestler's category.

### Styling
All styling is done through Tailwind CSS classes. Custom CSS can be added to `src/index.css` using Tailwind's `@layer` directive.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Lazy loading of images
- Smooth CSS transitions
- Optimized hover effects
- Responsive image sizing

## Future Enhancements

- Shopping cart functionality
- User authentication
- Product search and filtering
- Wishlist functionality
- Product reviews and ratings
- Backend integration
- Payment processing

## License

This project is for demonstration purposes. WWE and all related marks are trademarks of WWE.

## Contributing

Feel free to submit issues and enhancement requests!
