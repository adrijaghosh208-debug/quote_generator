import React, { useState } from "react";
import "./QuoteGenerator.css";

function QuoteGenerator() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateQuotes = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/api/quotes");
    const data = await response.json();
    setQuotes(data);
    setLoading(false);
  };

  const shareOnWhatsApp = (quote) => {
    const url = `https://wa.me/?text=${encodeURIComponent(quote)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="container">
      <h1 className="title">✨ Quote Generator</h1>
      <p className="subtitle">Get inspired & share positivity</p>

      <button className="generate-btn" onClick={generateQuotes}>
        {loading ? "Generating..." : "Generate Quotes"}
      </button>

      <div className="quote-list">
        {quotes.map((quote, index) => (
          <div className="quote-card" key={index}>
            <p className="quote-text">“{quote}”</p>
            <button
              className="whatsapp-btn"
              onClick={() => shareOnWhatsApp(quote)}
            >
              Share on WhatsApp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuoteGenerator;