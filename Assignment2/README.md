# Tarun Shokeen - Portfolio (Assignment 2)

A modern, responsive React portfolio website showcasing my development projects and skills. This is the frontend component that works in conjunction with Assignment 1 (Express.js backend).


## Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Assignment 1 backend running on `http://localhost:3000`

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shokeent/assignment1.git
   cd assignment1/Assignment2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the portfolio:**
   - Frontend: `http://localhost:5173`
   - Make sure Assignment 1 backend is running on `http://localhost:3000`

## 🔧 Full Stack Setup

This portfolio requires both Assignment 1 (backend) and Assignment 2 (frontend) to be running:

### 1. Start Assignment 1 Backend:
```bash
cd ../portfolio-admin
npm install
npm start
```
Backend will run on: `http://localhost:3000`

### 2. Start Assignment 2 Frontend:
```bash
cd Assignment2
npm install
npm run dev
```
Frontend will run on: `http://localhost:5173`

## 📁 Project Structure

```
Assignment2/
├── src/
│   ├── components/
│   │   ├── Header.jsx & Header.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── Projects.jsx & Projects.css
│   │   ├── Skills.jsx & Skills.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── vite.config.js (API proxy configuration)
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** CSS3 (Custom, no frameworks)
- **Icons:** Lucide React
- **API Integration:** Fetch API with Vite proxy
- **Responsive Design:** CSS Grid & Flexbox

## 🎯 Features

- **Responsive Design:** Works on desktop, tablet, and mobile
- **API Integration:** Connects to Assignment 1 backend for dynamic data
- **Smooth Scrolling:** Navigation with smooth scroll behavior
- **Real Projects:** Showcases actual GitHub projects
- **Skills Display:** Categorized skills with proficiency levels
- **Contact Form:** Interactive contact section
- **Fallback Data:** Works offline with static project data

## 📊 Portfolio Content

### Featured Projects:
1. **IXD Ontario Parks** - Camping website with interactive features
2. **Useless Pet** - Interactive dog breed application
3. **Well Nest** - React Native mental health app
4. **Portfolio Admin** - Full-stack admin dashboard

### Skills Categories:
- Programming Languages (JavaScript, etc.)
- Frontend Frameworks (React, React Native)
- Backend Technologies (Node.js, Express.js, Firebase)
- Databases (MongoDB, Firebase)
- Mobile Development (React Native, Expo)
- Web Technologies (HTML5, CSS3)

## 🔗 API Integration

The portfolio connects to Assignment 1 backend via Vite proxy:
- **Projects API:** `GET /api/projects`
- **Skills API:** `GET /api/skills`
- **Proxy Configuration:** `vite.config.js` routes `/api/*` to `localhost:3000`

## 🎨 Design Features

- Modern gradient backgrounds
- Card-based layouts
- Hover animations and transitions
- Mobile-first responsive design
- Clean typography and spacing
- Professional color scheme

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔍 Troubleshooting

### Common Issues:

1. **API Connection Failed:**
   - Ensure Assignment 1 backend is running on port 3000
   - Check that both servers are running simultaneously

2. **Port Already in Use:**
   - Vite will automatically suggest an alternative port
   - Or manually specify: `npm run dev -- --port 5174`

3. **CORS Errors:**
   - The Vite proxy in `vite.config.js` handles CORS
   - Ensure proxy configuration is correct

## 👨‍💻 Developer Information

**Name:** Tarun Shokeen  
**Program:** Full Stack Development  
**Institution:** Humber College  
**Assignment:** Assignment 2 - React Portfolio Frontend  

## 📞 Contact

- **Location:** Toronto, Ontario, Canada
- **GitHub:** [Shokeent](https://github.com/Shokeent)

---

**Note:** This portfolio is designed to work seamlessly with Assignment 1 backend. For the complete experience, ensure both applications are running simultaneously.

