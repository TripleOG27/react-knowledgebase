import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation on click
import ViewArticle from './ViewArticle';

const ArticleListItem = ({ result }) => {
  const [showOverlay, setShowOverlay] = useState(false); // Track overlay visibility
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setShowOverlay(true); // Show overlay on hover
  };

  const handleMouseLeave = () => {
    setShowOverlay(true); // Hide overlay when not hovering
  };

  const handleClick = () => {
    navigate(`/articles/${result.id}`); // Redirect to article page
  };

  return (
    <li key={result.id} className="list-group-item">
      <div
        className="d-flex justify-content-between align-items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        <div className="font-weight-bold">
          {result.title}
        </div>
        <small className="text-muted">{new Date(result.createdDate).toLocaleDateString()}</small>
      </div>

      {/* Show the article modal if hovering */}
      {showOverlay && (
        <ViewArticle article={result} onClose={() => setShowOverlay(false)} />
      )}
    </li>
  );
};

export default ArticleListItem;