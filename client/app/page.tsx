import React from 'react';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff5f7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '48px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', maxWidth: '600px', border: '1px solid #ffebeb' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#1a202c', marginBottom: '24px' }}>💕 Couples Relationship Dashboard</h1>
        <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '32px', lineHeight: '1.6' }}>
          Welcome to your shared space. Track memories, achieve goals, and stay connected with your partner through gamified challenges.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
          <div style={{ padding: '16px', backgroundColor: '#fff5f7', borderRadius: '16px', color: '#d53f8c', fontWeight: 'bold' }}>📸 Memories</div>
          <div style={{ padding: '16px', backgroundColor: '#ebf8ff', borderRadius: '16px', color: '#3182ce', fontWeight: 'bold' }}>🎯 Goals</div>
          <div style={{ padding: '16px', backgroundColor: '#f0fff4', borderRadius: '16px', color: '#38a169', fontWeight: 'bold' }}>🏆 Rewards</div>
          <div style={{ padding: '16px', backgroundColor: '#faf5ff', borderRadius: '16px', color: '#805ad5', fontWeight: 'bold' }}>✨ Quests</div>
        </div>
        <button style={{ backgroundColor: '#d53f8c', color: '#ffffff', border: 'none', padding: '16px 40px', borderRadius: '50px', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}>
          Coming Soon
        </button>
      </div>
      <footer style={{ marginTop: '48px', color: '#a0aec0' }}>© 2026 Made with ❤️ for Couples</footer>
    </div>
  );
}
