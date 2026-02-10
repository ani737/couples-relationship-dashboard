import React from 'react';

const MoodTracker = () => {
  const moods = [
    { label: 'Happy', emoji: '😊', color: 'bg-yellow-100' },
    { label: 'Loved', emoji: '🥰', color: 'bg-rose-100' },
    { label: 'Tired', emoji: '😴', color: 'bg-blue-100' },
    { label: 'Excited', emoji: '🤩', color: 'bg-purple-100' },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-50">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span>🌈</span> How are you feeling?
      </h2>
      <div className="grid grid-cols-4 gap-2">
        {moods.map((mood) => (
          <button
            key={mood.label}
            className={`${mood.color} aspect-square rounded-2xl flex items-center justify-center text-2xl hover:scale-105 transition active:scale-95`}
            title={mood.label}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      <div className="mt-6 p-4 bg-rose-50 rounded-2xl border border-rose-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center text-xs">B</div>
        <p className="text-sm text-gray-700 font-medium">Partner is feeling <span className="font-bold text-rose-600 italic">Loved 🥰</span></p>
      </div>
    </div>
  );
};

export default MoodTracker;
