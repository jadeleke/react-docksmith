# 🚀 react-docksmith

**react-docksmith** is a modern, containerized React portfolio application built by me. This project demonstrates the full DevOps workflow — building a React app, containerizing it with Docker, and deploying it using Nginx.

---

## 📚 Table of Contents

- [🎯 Overview](#-overview)
- [⚙️ Prerequisites](#⚙️-prerequisites)
- [💻 Local Development](#-local-development)
- [🐳 Docker Setup](#-docker-setup)
- [📄 Push to Docker Hub](#-push-to-docker-hub)
- [📁 Project Structure](#-project-structure)
- [�� License](#-license)

---

## 🎯 Overview

This project includes:

- A modern portfolio UI in React
- A multi-stage Docker build process
- Deployment-ready Nginx serving
- Docker Hub push support

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js (v14+)](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)
- A [Docker Hub account](https://hub.docker.com/) (to push the image)

---

## 💻 Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/jadeleke/react-docksmith.git
cd react-docksmith
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App Locally

```bash
npm start
```

Then visit [http://localhost:80](http://localhost:80)

---

## 🐳 Docker Setup

### 1. Build the Docker Image

Make sure you’re in the root of the project:

```bash
docker build -t react-docksmith .
```

This uses the `Dockerfile` which includes a production build step and an Nginx server to serve the React app.

### 2. Run the Docker Container Locally

```bash
docker run -p 80:80 react-docksmith
```

Then open your browser and go to [http://localhost](http://localhost)

---

## 📄 Push to Docker Hub

### 1. Log in to Docker

```bash
docker login
```

Enter your Docker Hub credentials when prompted.

### 2. Tag the Image

Replace `yourusername` with your actual Docker Hub username:

```bash
docker tag react-docksmith yourusername/react-docksmith
```

### 3. Push to Docker Hub

```bash
docker push yourusername/react-docksmith
```

---

## 📁 Project Structure

```bash
react-docksmith/
├── Dockerfile           # Multi-stage Dockerfile for building and serving the app
├── package.json         # Project metadata and dependencies
├── public/
│   └── index.html       # Homepage HTML (with full portfolio design)
├── src/
│   ├── App.js           # Main React component
│   └── index.js         # React app entry point
├── styles.css           # Custom styles for portfolio
├── script.js            # Chart.js script
└── README.md            # This file
```

---

## �� License

This project is licensed under the MIT License.

---

## 🙌 Author

Made with ❤️ by [Joseph Adeleke](https://www.linkedin.com/in/joseph-adeleke-27b433149/)

---

## 🔗 Useful Links

- React Docs → https://reactjs.org
- Docker Docs → https://docs.docker.com
- CRA Deployment → https://create-react-app.dev/docs/deployment/
- Docker Hub → https://hub.docker.com

