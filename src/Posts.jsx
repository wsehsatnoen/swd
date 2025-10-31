import React, { useState } from 'react';
import "./Posts.css";
import postItems from './data/posts.json';

function Posts() {
  const [currentPost, setCurrentPost] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const handlePostClick = (index) => {
    if (isTransitioning) return; // Prevent clicks during transition
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPost(index + 1);
      setIsTransitioning(false);
    }, 150); // Half of the CSS transition duration
  };

  const handleBackClick = () => {
    if (isTransitioning) return; // Prevent clicks during transition
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPost(0);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="posts-container">
      <h2>Entries</h2>
      <p>A little snippets of my life for you to enjoy!</p>
      
      <div className={`post-content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        {currentPost === 0 && (
          <PostList onPostClick={handlePostClick} />
        )}
        
        {currentPost > 0 && (
          <Post 
            postIndex={currentPost - 1} 
            onBack={handleBackClick} 
          />
        )}
      </div>
    </div>
  );
}

function getFirstPhoto(post) {
  if (post.photos && post.photos.length > 0) {
    return post.photos[0];
  }
  return null;
}

function PostList({ onPostClick }) {
  return (
    <div className="post-list">
      {postItems.map((post, index) => (
        <div key={index} className="post-item" onClick={() => onPostClick(index)}>
          <h3>{post.title}</h3>
          <p>{post.date}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

function Post({ postIndex, onBack }) {
  const post = postItems[postIndex];
  
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post-detail">
      <button onClick={onBack} className="back-button">
        ← Back to Posts
      </button>
      <h2>{post.title}</h2>
      <p className="post-excerpt">{post.excerpt}</p>
      <div className="post-content">
        <div className='photos'> 
          {post.photos && post.photos.length > 0 ? (
            post.photos.map((photo, idx) => (
              <img 
                key={idx} 
                src={photo} 
                alt={`Post Image ${idx + 1}`}
                onError={(e) => {
                  console.log(`Failed to load image: ${photo}`);
                  e.target.style.display = 'none';
                }}
                onLoad={() => console.log(`Successfully loaded: ${photo}`)}
              />
            ))
          ) : (
            <p>No photos available</p>
          )}
        </div>
        <p>{post.data}</p>
      </div>
    </div>
  );
}

export default Posts;