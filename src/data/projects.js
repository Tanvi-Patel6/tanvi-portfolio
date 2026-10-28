// ── Project data ──────────────────────────────────────────
// Edit this file to add / update projects.
// Supports categorization, filtering by tech/tags, and detailed views.

export const projects = [
  {
    id:          'healthytrack',
    title:       'HealthyTrack',
    category:    'Full-Stack Health & Diet Management System',
    tagline:     'Comprehensive diet and nutrition management platform with custom meal assignment',
    description: 'A full-stack web application developed with React, Node.js, Express, and MongoDB that simplifies diet tracking for users and empowers administrators to create personalized meal plans based on body analysis assessments.',
    longDescription: 'HealthyTrack bridges the gap between individual health monitoring and nutrition guidance. Built with React.js on the frontend and an Express/MongoDB REST API on the backend, the system features role-based access for both everyday users and diet administrators. Users can record body statistics via a Body Analysis Form, monitor assigned nutrition plans with macro-nutrient breakdowns (calories, protein, carbs, fats), view healthy lifestyle tips, and submit feedback. Administrators have access to an administrative suite to manage registered accounts, inspect body assessment metrics, assign personalized meal schedules, and moderate user communications.',
    keyFeatures: [
      'Dual-Portal Architecture: Separate dedicated dashboards for End Users and System Administrators',
      'Body Analysis Form: Captures height, weight, age, gender, goal (gain/loss/maintain), blood group, and diet type',
      'Custom Meal Assignment: Admins configure tailored daily/weekly meal schedules with full nutritional metrics (calories, protein, carbs, fats)',
      'Day & Meal Filters: Users can filter assigned meals by specific day (Monday–Sunday) and meal category (Breakfast, Lunch, Dinner)',
      'Secure User Authentication & Profile Management: Profile updates, password modification, and account lifecycle control',
      'Message & Feedback Center: Two-way communication channel between users and administrators',
      'Robust REST API & MongoDB Schema: Scalable collections for users, admins, bodytypes, meals, feedbacks, and contacts'
    ],
    techStack:   ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Axios', 'React Router', 'CSS Modules'],
    liveUrl:     null,          // Placeholder: replace with live deployment link
    githubUrl:   'https://github.com/Tanvi-Patel6/HealthyTrack-React-Version',
    image:       '/healthytrack.png', // Screenshot preview located in public/healthytrack.png
    featured:    true,
  },
  {
    id:          'farmfusion',
    title:       'Farm Fusion',
    category:    'Full-Stack Agricultural E-Commerce & AgriTech',
    tagline:     'Direct digital marketplace empowering farmers to trade crops, purchase equipment, and access government subsidies',
    description: 'A full-stack agricultural web platform built with React, PHP, and MySQL that connects farmers directly with buyers and equipment vendors, eliminating intermediaries while providing subsidy access and government schemes.',
    longDescription: 'FarmFusion is a web-based AgriTech platform designed to modernize agricultural trading and empower farming communities. By removing middlemen, the system enables farmers to earn fair profits while giving buyers fresh produce at reasonable prices. Built with a React and Bootstrap frontend, a PHP backend, and a relational MySQL database (agriculture_db), the platform features dual-role architectures for everyday users and administrators. Farmers can explore crop categories, purchase modern machinery, utilize shopping carts and wishlists, and apply for government subsidies directly on equipment purchases. Administrators manage crop inventories, equipment listings, subsidy allocations, order fulfillments, agricultural blogs, and monthly/yearly profit & loss analysis.',
    keyFeatures: [
      'Direct Farmer-to-Buyer Marketplace: Enables farmers to trade crops, fruits, and grains directly with buyers and other farmers without intermediaries',
      'Farming Equipment & Machinery Store: Comprehensive catalog of agricultural tools and modern equipment with transparent pricing and specs',
      'Subsidy & Government Schemes Hub: Dedicated modules allowing farmers to access government schemes and apply eligible subsidies at checkout for discounts',
      'Shopping Cart, Wishlist & Invoicing: Streamlined cart system, wishlist for favorites, easy checkout, and downloadable order invoices',
      'Dual Role-Based Portals: Tailored experience for farmers and customers, alongside an administrative control panel for system moderation',
      'Profit & Loss Financial Reporting: Built-in analytics allowing farmers and administrators to track category-wise profit and loss trends over time',
      'Educational Farming Blogs: Informative guides, seasonal tips, and agricultural updates curated by administrators',
      'Relational MySQL Architecture (agriculture_db): Structured multi-table schema powering crops, instruments, orders, subsidies, and feedback'
    ],
    techStack:   ['React', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
    liveUrl:     null,          // Placeholder: replace with live demo link
    githubUrl:   null,          // Placeholder: replace with GitHub repository link
    image:       '/image.png',     // Screenshot preview located in public/image.png
    featured:    true,
  },
  // ── More projects can be seamlessly appended below ──
]
