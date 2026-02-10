'use client';

import React, { useState } from 'react';

export default function Dashboard() {
  const [showMemoryModal, setShowMemoryModal] = useState(false);
  const [showQuestModal, setShowQuestModal] = useState(false);
  const [streak, setStreak] = useState(12);
  const [points, setPoints] = useState(1240);
  const [memories, setMemories] = useState([
    { id: 1, title: 'Beach Trip', status: 'Coming Soon' },
    { id: 2, title: 'First Dinner', status: 'Coming Soon' }
  ]);

  const handleNewMemory = () => {
    setShowMemoryModal(true);
  };

  const handleQuestComplete = () => {
    setPoints(points + 100);
    setStreak(streak + 1);
    setShowQuestModal(true);
    setTimeout(() => setShowQuestModal(false), 3000);
  };

  const handleShop = () => {
    alert('Shop feature coming soon! 🛍️');
  };

  const handleViewAll = () => {
    alert('View all memories - Feature coming soon! 📸');
  };

  return (
    <div className="min-h-screen bg-rose-50 font-sans text-gray-900">
      {showQuestModal && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-full shadow-lg z-50 animate-bounce">
          🎉 Quest Completed! +100 Points!
        </div>
      )}

      {showMemoryModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowMemoryModal(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">📸 Add New Memory</h3>
            <input 
              type="text" 
              placeholder="Memory title"
              className="w-full px-4 py-3 border-2 border-rose-100 rounded-xl mb-4 focus:border-rose-400 focus:outline-none"
            />
            <textarea 
              placeholder="Describe this special moment..."
              className="w-full px-4 py-3 border-2 border-rose-100 rounded-xl mb-4 h-32 focus:border-rose-400 focus:outline-none"
            />
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  setMemories([...memories, { id: Date.now(), title: 'New Memory', status: 'Added!' }]);
                  setShowMemoryModal(false);
                }}
                className="flex-1 bg-rose-500 text-white py-3 rounded-xl font-bold hover:bg-rose-600 transition"
              >
                Save Memory
              </button>
              <button 
                onClick={() => setShowMemoryModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-rose-100 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💕</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Us Together
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-rose-200 border-2 border-white flex items-center justify-center text-xs text-rose-700 font-bold">A</div>
              <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center text-xs text-purple-700 font-bold">B</div>
            </div>
            <button 
              onClick={handleNewMemory}
              className="bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-rose-600 transition shadow-lg shadow-rose-200 active:scale-95"
            >
              New Memory
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-50 hover:shadow-md transition text-left">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-rose-600">
              <span>🔥</span> Our Streak
            </h2>
            <div className="text-5xl font-black text-rose-500 mb-2">{streak} Days</div>
            <p className="text-sm text-gray-500 leading-relaxed">You're doing great! Complete 3 more tasks to reach your 15-day milestone and unlock a special reward.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-50 hover:shadow-md transition text-left">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-rose-600">
              <span>💎</span> Points
            </h2>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-3xl font-bold">{points.toLocaleString()}</div>
                <p className="text-xs text-rose-400 font-medium">{1600 - points} pts to next level</p>
              </div>
              <button 
                onClick={handleShop}
                className="text-rose-500 text-sm font-bold hover:underline cursor-pointer"
              >
                Shop →
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-50 text-left">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-rose-600">
              <span>📅</span> Next Date
            </h2>
            <div className="flex items-center gap-4 p-3 bg-rose-50 rounded-2xl border border-rose-100 hover:bg-rose-100 transition cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">🏠</div>
              <div>
                <p className="font-bold text-gray-800">Home Movie Night</p>
                <p className="text-xs text-gray-500">Friday, 8:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        <section className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-50 text-left">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span>📸</span> Memory Wall
              </h2>
              <button 
                onClick={handleViewAll}
                className="text-rose-500 text-sm font-bold hover:underline cursor-pointer"
              >
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {memories.map((memory) => (
                <div 
                  key={memory.id}
                  className="aspect-video bg-rose-50 rounded-2xl overflow-hidden relative group cursor-pointer border-2 border-dashed border-rose-100 hover:border-rose-300 transition-all flex flex-col items-center justify-center hover:scale-105"
                >
                  <span className="text-rose-400 font-bold uppercase tracking-widest text-xs">{memory.title}</span>
                  <span className="text-[10px] text-rose-300">{memory.status}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={handleNewMemory}
              className="w-full mt-6 py-4 rounded-2xl border-2 border-dashed border-rose-200 text-rose-400 font-bold hover:bg-rose-50 hover:border-rose-300 transition-all active:scale-[0.98] cursor-pointer"
            >
              + Post New Shared Moment
            </button>
          </div>

          <div className="bg-gradient-to-br from-rose-500 to-purple-600 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group text-left">
            <div className="absolute top-0 right-0 p-4 opacity-20 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
              <span className="text-8xl">✨</span>
            </div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🎯</span> Active Quest
              </h2>
              <p className="text-2xl font-black mb-6 leading-tight">Write a heartfelt note and hide it for them to find.</p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex gap-2">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">+100 Pts</span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">Relationship Goal</span>
                </div>
                <button 
                  onClick={handleQuestComplete}
                  className="bg-white text-rose-600 px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-lg hover:bg-rose-50 active:scale-95 transition-all cursor-pointer"
                >
                  I Done It!
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto p-8 text-center">
        <p className="text-rose-300 text-sm font-medium italic">"Small acts, big love."</p>
        <p className="text-gray-400 text-xs mt-2">© 2026 Us Together Dashboard • Made with ❤️</p>
      </footer>
    </div>
  );
}
