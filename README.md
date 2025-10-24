# QuickEats - Dynamic Surge Pricing System

A revolutionary food delivery platform with intelligent surge pricing technology that adapts to real-time demand and supply across Lucknow, Uttar Pradesh.
Website:-https://quick-eats.base44.app/

## 🚀 Features

- **Dynamic Surge Pricing**: Real-time pricing adjustments based on demand and supply
- **Smart Order Management**: Efficient order processing and tracking system
- **Delivery Partner Network**: Comprehensive partner management with real-time status tracking
- **Live Analytics Dashboard**: Real-time insights into orders, pricing, and performance metrics
- **Multi-Zone Coverage**: Serving multiple zones across Lucknow with zone-specific pricing
- **Responsive Design**: Mobile-first approach with modern UI/UX

## 🛠️ Tech Stack

### Frontend
- **Next.js 13.4.19** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible component primitives

### Styling & UI
- **Custom CSS Variables** - Theme customization
- **Responsive Design** - Mobile-first approach
- **Modern Animations** - Smooth user interactions

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hasan8936/QuickEats.git
   cd QuickEats
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
QuickEats/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── Components/                   # React components
├── Entities/                     # Data models & schemas
│   ├── DeliveryPartner.json     # Partner entity schema
│   ├── Location.json            # Location/Zone schema
│   ├── Order.json               # Order entity schema
│   └── SurgePolicy.json         # Surge pricing schema
├── lib/                         # Utility functions
│   └── utils.ts                 # Common utilities
├── Layout.js                    # Main application layout
├── public/                      # Static assets
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies & scripts
```

## 🎯 Core Features

### 1. Dynamic Pricing Engine
- **Real-time Surge Calculation**: Adjusts delivery fees based on demand/supply ratio
- **Zone-based Pricing**: Different base rates for different areas in Lucknow
- **Configurable Multipliers**: Customizable surge thresholds and maximum limits

### 2. Order Management System
- **Customer Order Tracking**: Complete order lifecycle management
- **Item Management**: Detailed order items with pricing
- **Delivery Address Handling**: Zone-based address classification

### 3. Partner Network
- **Real-time Status**: Track partner availability (available/busy/offline)
- **Vehicle Management**: Support for bikes, scooters, and bicycles
- **Performance Metrics**: Rating and active order tracking

### 4. Analytics Dashboard
- **Live Metrics**: Real-time order counts, revenue, and performance data
- **Zone Analytics**: Area-wise performance insights
- **Surge Monitoring**: Track pricing adjustments and their impact

## 🔧 Configuration

### Environment Setup
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=postgresql://user:password@localhost:5432/quickeats
```

### Tailwind Configuration
The project uses custom color variables defined in `globals.css`. Modify these to match your brand:
```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* Add more custom variables */
}
```

## 📱 Pages & Navigation

### Main Sections
1. **Order Food** (`/`) - Customer order interface
2. **Partners** (`/partners`) - Delivery partner management
3. **Pricing Control** (`/surge`) - Surge pricing controls
4. **Analytics** (`/analytics`) - Live dashboard and insights

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Manual Build
```bash
npm run build
npm start
```

## 🎨 Customization

### Brand Colors
Update the color scheme in `tailwind.config.js` and `globals.css`:
```css
:root {
  --primary: your-primary-color;
  --secondary: your-secondary-color;
}
```

### Logo & Branding
- Replace logo in the Layout component
- Update company name and contact information
- Modify footer content

## 🔒 Data Models

### Order Entity
```json
{
  "customer_name": "string",
  "delivery_address": "string",
  "items": "array",
  "subtotal": "number",
  "delivery_fee": "number",
  "total_amount": "number"
}
```

### Delivery Partner
```json
{
  "name": "string",
  "vehicle_type": "bike|scooter|bicycle",
  "status": "available|busy|offline",
  "current_location": "string",
  "rating": "number"
}
```

### Surge Policy
```json
{
  "zone_name": "string",
  "demand_threshold_high": "number",
  "supply_threshold_low": "number",
  "max_surge_multiplier": "number",
  "current_active_orders": "number"
}
```

### PostgreSQL Orders Table
If you want to persist orders to a Postgres database, create a table like:

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_name TEXT,
  items JSONB,
  total NUMERIC,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

Install the Postgres client and set the DATABASE_URL environment variable (see above). The app exposes `GET /api/orders` and `POST /api/orders` routes for basic order persistence.


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: hello@quickeats.com
- **Phone**: +91 9876543210
- **Address**: Serving Lucknow, Uttar Pradesh, India

## 🙏 Acknowledgments

- Built with Next.js and modern web technologies
- Icons by Lucide React
- UI components by Radix UI
- Styled with Tailwind CSS

---

**QuickEats** - Revolutionizing food delivery with smart pricing technology 🍕⚡
