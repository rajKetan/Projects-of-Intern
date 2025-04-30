# 💸 Expense Tracker App

A modern and responsive full-stack Expense Tracker application built using **React**, **TypeScript**, **Vite**, **Firebase**, and **shadcn/ui**. This app allows users to track their daily expenses, categorize them, and visualize spending patterns with a clean and intuitive UI.

---

## 🔗 Live Link
(https://projects-of-intern.vercel.app/)

## 🧪 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore + Auth)
- **State Management**: React Hooks, Context API
- **Validation**: ZOD (for input schema validation)

---

## 📸 Screenshots

### 🧾 Expense Page
![Expense Page](https://github.com/user-attachments/assets/eb86517d-bdbd-4c39-8161-ca8fca1c9749)

### 🔐 Login Page
![Login Page](https://github.com/user-attachments/assets/6ccaab82-5f8a-4c7f-8565-17ed670460bf)

---

## ⚙️ Project Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/expense-tracker-app.git
   cd expense-tracker-app

2.  **Install dependencies**

3. **ENV setup**
  VITE_FIREBASE_API_KEY=your-api-key
  VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
  VITE_FIREBASE_PROJECT_ID=your-project-id
  VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
  VITE_FIREBASE_APP_ID=your-app-id

4 . **Folder Structure**
src/
├── assets/             # Images and icons
├── components/         # Shared components (Buttons, Cards, Inputs, etc.)
├── context/            # Auth and expense tracking contexts
├── hooks/              # Custom React hooks
├── pages/              # App pages like Login, Register, Dashboard
├── services/           # Firebase services (auth, db)
├── utils/              # Utility functions and constants
├── App.tsx             # Main app component with routes
├── main.tsx            # Entry point
└


