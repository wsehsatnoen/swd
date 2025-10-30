import "./Posts.css";

const postItems = [
  { title: 'Understanding React Hooks', excerpt: 'An introduction to React Hooks and how to use them effectively in your projects.' },
  { title: 'JavaScript ES6 Features', excerpt: 'A deep dive into the new features introduced in ES6 and how they can improve your code.' },
  { title: 'CSS Grid vs Flexbox', excerpt: 'A comparison of CSS Grid and Flexbox for layout design, with use cases for each.' },
];

function Posts() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <p>Here are some of my blog posts.</p>
      <div className="post-list">
        {postItems.map((post, index) => (
        <div key={index} className="post-item">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default Posts;