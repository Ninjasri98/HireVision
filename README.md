# 🎥 Video Call Interview Platform

HireVision is a modern, full-stack **video calling interview platform** designed to create seamless and interactive technical interview experiences. This project combines **Next.js**, **TypeScript**, **Stream**, **Convex**, and **Clerk** with modern UI libraries like **Tailwind CSS** and **Shadcn UI**, offering real-time collaboration and a clean, responsive interface.

---

## 🚀 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Stream** (Video & Real-time Communication)
- **Convex** (Backend & Realtime Database)
- **Clerk** (Authentication & Authorization)
- **Tailwind CSS** & **Shadcn UI** (Styling)

---

## ✨ Features

🎥 **Video Calls**  
High-quality video calling powered by **Stream**, optimized for interviews.

🖥️ **Screen Sharing**  
Share your screen with participants for code reviews, demos, or technical discussions.

🎬 **Screen Recording**  
Record interviews or sessions for later review or feedback.

💻 **Code Editor Panel**  
Integrated collaborative **code editor** within the meeting room, enabling live coding interviews and pair programming.

🔒 **Authentication & Authorization**  
Secure user management and role-based access control with **Clerk**.

💻 **Server Components, Layouts, Server Actions**  
Built with the latest **Next.js** features for optimized performance and scalability.

🎭 **Client & Server Components**  
Smooth interaction between **Client** and **Server** components ensures a responsive user experience.

🛣️ **Dynamic & Static Routes**  
Efficient routing with **Next.js App Router**, supporting static and dynamic paths.

🎨 **Styling with Tailwind & Shadcn**  
Modern, accessible, and responsive UI using **Tailwind CSS** and **Shadcn UI** components.

✨ **Server Actions**  
Simplified data mutations and API handling with **Next.js Server Actions** for secure and efficient backend communication.

---

## 🔧 Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/video-call-interview-platform.git
   cd video-call-interview-platform
2. **Install Dependencies**
   Make sure you have Node.js and npm installed. Then run:
   ```bash
   npm install
3. **Set up Environment Variables**
   Make sure you have Node.js and npm installed. Then run:
   ```dotenv
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=
   NEXT_PUBLIC_STREAM_API_KEY=
   STREAM_SECRET_KEY=
4. ** Run the Development Server**
   After installing dependencies and setting up environment variables, start the development server:
   ```bash
   npm run dev
