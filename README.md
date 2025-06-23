# Warung Mbah Karmi – Frontend Codebase

This is the official frontend codebase for **Warung Mbah Karmi**, a traditional Indonesian food business. The website is built using [React.js v18](https://react.dev/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/) to deliver a fast, modern, and responsive user experience.

---

## 🚀 Features

- **Menu Display** – View our full menu with detailed descriptions and prices.
- **Brand Story** – Discover the history and values behind Warung Mbah Karmi.
- **Ordering Options** – Place food orders easily through a simple interface.
- **Responsive Design** – Optimized layout for mobile, tablet, and desktop.
- **Scalable & Maintainable** – Clean file structure and reusable components.

---

## 🛠️ Getting Started


# Clone the repository
git clone https://github.com/your-username/warung-mbah-karmi.git
cd warung-mbah-karmi

# Install dependencies
npm install

# Start the development server
npm run dev

# How to Tunnel on local 
npx untun@latest tunnel http://localhost:5173

Then open your browser and visit: [http://localhost:5173](http://localhost:5173)

---

## 🧰 Tech Stack

- **React.js v18** – Modern UI library with Concurrent Mode and Hooks  
- **Vite** – Lightning-fast development tooling with Hot Module Replacement (HMR)  
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development  
- **ESLint + Prettier** – Linting and formatting tools (optional but recommended)

---

## 📦 Project Structure

```plaintext
warung-mbah-karmi/
└── src/
    ├── assets/          # Images, icons, fonts, etc.
    │   ├── images/
    │   └── styles/
    │       └── tailwind.css
    │
    ├── components/      # Reusable UI components
    │   ├── Navbar.jsx
    │   ├── Sidebar.jsx
    │   ├── Button.jsx
    │   └── CardMenu.jsx
    │
    ├── layouts/         # Main layouts (DashboardLayout, AuthLayout, etc.)
    │   └── DashboardLayout.jsx
    │
    ├── pages/           # Application pages
    │   ├── Dashboard.jsx
    │   ├── Orders.jsx
    │   ├── MenuList.jsx
    │   └── NotFound.jsx
    │
    ├── router/          # Routing configuration
    │   └── index.jsx
    │
    ├── App.jsx          # Root component
    └── main.jsx         # Entry point
```


Made with ❤️ for Warung Mbah Karmi