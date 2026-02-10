import React from 'react';

const MemoryWall = () => {
  const memories = [
    { id: 1, title: 'Beach Day', date: '2026-10-15', emoji: '🏖️' },
    { id: 2, title: 'Cooking Together', date: '2026-10-10', emoji: '🍝' },
    { id: 3, title: 'Late Night Walk', date: '2026-10-05', emoji: '🌙' },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-50">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span>📸</span> Memory Wall
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {memories.map((memory) => (
          <div key={memory.id} className="aspect-square bg-rose-50 rounded-2xl flex flex-col items-center justify-center p-4 text-center hover:bg-rose-100 transition cursor-pointer">
            <span className="text-4xl mb-2">{memory.emoji}</span>
            <p className="text-xs font-bold text-gray-800">{memory.title}</p>
            <p className="text-[10px] text-gray-500">{memory.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryWall;
