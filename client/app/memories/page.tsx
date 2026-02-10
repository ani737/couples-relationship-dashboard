'use client';

import { useState } from 'react';

interface Memory {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
}

export default function MemoriesPage() {
  const [view, setView] = useState<'timeline' | 'grid'>('timeline');
  const [filter, setFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample memories data
  const memories: Memory[] = [
    {
      id: 1,
      title: 'Beach sunset date',
      date: '2024-12-15',
      image: '🌅',
      description: 'Watched the most beautiful sunset together at the beach',
      tags: ['date', 'nature']
    },
    {
      id: 2,
      title: 'Cooking adventure',
      date: '2024-11-28',
      image: '🍳',
      description: 'Tried making pasta from scratch - it was a delicious mess!',
      tags: ['home', 'food']
    },
    {
      id: 3,
      title: 'Movie marathon',
      date: '2024-11-10',
      image: '🎬',
      description: 'Binge-watched our favorite trilogy with lots of snacks',
      tags: ['home', 'cozy']
    },
    {
      id: 4,
      title: 'Morning hike',
      date: '2024-10-22',
      image: '⛰️',
      description: 'Early morning hike to catch the sunrise from the peak',
      tags: ['adventure', 'nature']
    },
  ];

  const tags = ['all', 'date', 'home', 'nature', 'food', 'adventure', 'cozy'];

  const filteredMemories = filter === 'all' 
    ? memories 
    : memories.filter(m => m.tags.includes(filter));

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pb-24">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-100 px-4 py-4">
        <h1 className="text-2xl font-bold text-purple-900">💝 Memory Wall</h1>
        <p className="text-sm text-purple-600 mt-1">Your story together</p>
      </div>

      {/* "On This Day" Section */}
      <div className="px-4 py-4">
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-2xl border-2 border-pink-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">📅</span>
            <h3 className="font-bold text-purple-900">On This Day</h3>
          </div>
          <p className="text-sm text-purple-700">
            2 years ago: First date at the coffee shop ☕
          </p>
        </div>
      </div>

      {/* View Toggle & Filter */}
      <div className="px-4 py-2 space-y-3">
        {/* View Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setView('timeline')}
            className={`flex-1 py-2 px-4 rounded-xl font-semibold transition-all ${
              view === 'timeline'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-white text-purple-600 border border-purple-200'
            }`}
          >
            📜 Timeline
          </button>
          <button
            onClick={() => setView('grid')}
            className={`flex-1 py-2 px-4 rounded-xl font-semibold transition-all ${
              view === 'grid'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-white text-purple-600 border border-purple-200'
            }`}
          >
            🎨 Grid
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === tag
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'bg-white text-pink-600 border border-pink-200'
              }`}
            >
              {tag === 'all' ? '✨ All' : `#${tag}`}
            </button>
          ))}
        </div>
      </div>

      {/* Memories Display */}
      <div className="px-4 py-2">
        {view === 'timeline' ? (
          <div className="space-y-4">
            {filteredMemories.map((memory) => (
              <div
                key={memory.id}
                className="bg-white rounded-2xl p-4 border-2 border-purple-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="text-5xl">{memory.image}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-purple-900 text-lg">{memory.title}</h3>
                    <p className="text-sm text-purple-600 mb-2">
                      {new Date(memory.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                    <p className="text-gray-700 mb-2">{memory.description}</p>
                    <div className="flex gap-2">
                      {memory.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filteredMemories.map((memory) => (
              <div
                key={memory.id}
                className="bg-white rounded-2xl p-3 border-2 border-purple-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl text-center mb-2">{memory.image}</div>
                <h3 className="font-bold text-purple-900 text-sm mb-1 text-center">
                  {memory.title}
                </h3>
                <p className="text-xs text-purple-600 text-center">
                  {new Date(memory.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric'
                  })}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Memory Button */}
      <button
        onClick={() => setShowAddModal(true)}
        className="fixed bottom-24 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow text-2xl"
      >
        ➕
      </button>

      {/* Add Memory Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-purple-900">✨ New Memory</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-purple-900 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Beach sunset date"
                  className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-900 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-900 mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Share the story..."
                  rows={3}
                  className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-400 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-900 mb-2">
                  Choose an emoji
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {['❤️', '🌅', '🎬', '🍳', '⛰️', '🎉', '🌸', '☕', '🎵', '📸', '🌟', '💐'].map(emoji => (
                    <button
                      key={emoji}
                      className="text-3xl p-2 hover:bg-purple-100 rounded-xl transition-colors"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow">
                💝 Save Memory
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
