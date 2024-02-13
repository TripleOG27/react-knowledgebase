import React from 'react';

const ArticleView = ({article, onClose}) => {
    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{article.title}</h5>
              </div>
              <div className="modal-body">
                <p><strong>Description:</strong></p>
                <p>{article.description}</p>
                <p><strong>Text:</strong></p>
                <p>{article.longText}</p>
                <p><strong>Workaround:</strong></p>
                <p>{article.workaround}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ArticleView;