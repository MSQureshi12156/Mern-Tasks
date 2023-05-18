import React from 'react'

export default function Home() {
  return (
    
    <section
      style={{
        backgroundImage: "url('./assets/images/course-react.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#000000',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};



