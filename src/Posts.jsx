import React, { useState } from 'react';
import "./Posts.css";

const postItems = [
  { title: 'Understanding React Hooks', excerpt: 'An introduction to React Hooks and how to use them effectively in your projects.' },
  { title: 'JavaScript ES6 Features', excerpt: 'A deep dive into the new features introduced in ES6 and how they can improve your code.' },
  { title: 'CSS Grid vs Flexbox', excerpt: 'A comparison of CSS Grid and Flexbox for layout design, with use cases for each.' },
];

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
      <h2>Blog Posts</h2>
      <p>Here are some of my blog posts.</p>
      
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

function PostList({ onPostClick }) {
  return (
    <div className="post-list">
      {postItems.map((post, index) => (
        <div key={index} className="post-item" onClick={() => onPostClick(index)}>
          <h3>{post.title}</h3>
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
        <p>Full content of the post goes here...</p>
        <p>This is where you would add the complete blog post content. You can add multiple paragraphs, code examples, images, and any other content you want to include in your blog post.</p>
      </div>
    </div>
  );
}

export default Posts;