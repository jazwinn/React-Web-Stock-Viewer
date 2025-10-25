# Stock Editor Viewer Application

A web application to view stock prices, company news, and AI-generated summaries. 
The backend is built with Node.js, while the frontend is built with React and tailwind.

---

## Features

- Watchlist of multiple companies
- Real-time stock price and change indicators
- Company news and AI summaries

---

## Demo 


https://github.com/user-attachments/assets/592ac0ee-72d5-4203-ba16-c8a1badeac60





---

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- Internet access for stock API requests

---

## Backend Setup 

The backend is a Node.js server that fetches stock data and serves endpoints for the frontend.

Ensure .env exists inside Server/
 ```.evn
PORT=3001
GEMINI_API_KEY=your_GoogleAI_api_key
```
1. Navigate to Server/
```bash
node server.js
```

## Frontend Setup (React)
1. Ensure .env exists inside /my-react-app
```.evn
VITE_FINNHUB_API_KEY=your_finndhub_api_key 
```
2. Install dependencies
```bash
npm install
```
3. Start development server
```bash
npm run dev
```

## Usage
1. Open the frontend in the browser (Vite dev server).
2. Click on a stock in the Watchlist.
3. View real-time stock price, daily changes, and news summary.

## Notes
- The backend and frontend use the .env file to load API keys and port configuration.
- Tailwind CSS is used for responsive styling.


