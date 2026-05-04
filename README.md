# 🎧 Bajale — Smart Music Web App

A modern, interactive music web application built with a focus on **smooth UI/UX, dynamic audio control, and smart user features**.

> Play it. Feel it. Live it.

---

## 🚀 Features

### 🎵 Core Music Player

* Play / Pause / Next / Previous controls
* Shuffle & Repeat functionality
* Real-time progress bar & duration tracking
* Volume control with smooth slider

### 🎶 Smart UI Experience

* Infinite scrolling song titles (marquee effect)
* Active song highlight with glow effect
* Smooth animations and transitions
* Glassmorphism-based modern navbar

### 📂 Categories System

* Browse songs by multiple categories:

  * Romantic, Sad, Party, Classical, Lo-fi, Workout, Chill, Focus, Travel, etc.
* Dynamic filtering — click category → instantly shows related songs

### 📻 Trending Section

* Horizontal scroll (like Spotify)
* Arrow-based navigation (scroll by multiple cards)
* Responsive card layout

### 👤 My Space (User Section)

* Upload songs with metadata (artist, genre)
* Drag & drop upload UI
* Real-time upload progress bar
* Auto rendering of uploaded songs

### 🔍 Search System

* Real-time song filtering
* Instant UI updates

### 🎧 Smart Enhancements

* Sidebar with blur + smooth expand animation
* Category-based recommendation system (base logic ready)
* Song card play button interaction
* Clean responsive layout

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js (Express)
* **File Upload:** Multer
* **Styling:** Custom CSS (no frameworks)
* **Animations:** CSS + AOS (Animate on Scroll)

---

## 📁 Project Structure

```
Music_page/
│
├── assets/
│   ├── songs/
│   ├── images/
│   ├── lyrics/
│   └── songs.json
│
├── server/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── index1.html
├── style1.css
└── script1.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-link>
cd Music_page
```

### 2. Install dependencies

```
cd server
npm install
```

### 3. Run server

```
node server.js
```

### 4. Open in browser

```
http://localhost:5000
```

---

## 📌 How It Works

* Songs are loaded from `songs.json`
* Categories filter songs using `genre`
* Upload system stores songs in `/assets/songs`
* UI updates dynamically using JavaScript DOM manipulation

---

## 🎯 Future Improvements

* AI-based recommendation system
* Playlist creation & management
* User authentication system
* Cloud storage integration
* Mobile-first responsive optimization

---

## 💡 Key Highlights

* Fully dynamic frontend (no page reloads)
* Clean component-based UI structure
* Real-world app behavior (Spotify-inspired UX)
* Built with scalability in mind

---

## 👨‍💻 Contributors

* Rajendra Pal
* Subrata Pal

---

## 📄 License

This project is open-source and free to use.

---

## ⭐ Final Note

This is not just a music player — it’s a **complete interactive experience** combining UI design, logic handling, and real-world app behavior.

If you like the project, consider giving it a ⭐
