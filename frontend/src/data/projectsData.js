export const projectsData = [
    {
        id: "stock-market-prediction",
        title: "Stock Market Price Prediction Website",
        description: "Developed using Streamlit and an LSTM model for Indian stock data via yfinance. Integrated Flask-based user authentication and designed a UI for visualizations.",
        techStack: ["Python", "Streamlit", "Flask", "SQLite3", "LSTM"],
        tryItLink: "/wip",
        videoPlaceholder: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", // Using thumbnail as placeholder for now or a wip image
        thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
        details: {
            problem: "Predicting stock market trends is notoriously difficult but highly valuable. The goal was to build a user-friendly tool that leverages deep learning to forecast future prices based on historical data.",
            dataUsed: "Historical Indian stock market data fetched dynamically via the yfinance API.",
            problemsFaced: "Handling the non-linear, volatile nature of stock data required tuning the long short-term memory (LSTM) architecture to minimize overfitting and effectively capture long-term dependencies."
        }
    },
    {
        id: "climate-change-tracker",
        title: "Climate Change Tracker (UN SDG 13)",
        description: "Built a web-based ESG footprint tracker as Team Lead during an AI internship. Integrated NewsAPI and Google Gemini for chat and article summaries.",
        techStack: ["Python", "Streamlit", "Gemini API", "NewsAPI"],
        tryItLink: "/wip",
        videoPlaceholder: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
        details: {
            problem: "Raising awareness about environmental, social, and governance (ESG) factors by providing a tangible way to track personal or corporate footprints, aligned with UN SDG 13.",
            dataUsed: "Live environmental news from NewsAPI, processed by Google Gemini.",
            problemsFaced: "Integrating multiple external APIs synchronously and keeping the LLM chat responses fast and highly relevant to the provided ESG context."
        }
    }
];
