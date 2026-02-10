'use client';

import { useState } from 'react';

export default function TasksPage() {
  const [activeTab, setActiveTab] = useState('my-tasks');
  const [showCreateTask, setShowCreateTask] = useState(false);

  const tabs = [
    { id: 'my-tasks', label: 'My Tasks', icon: '✅' },
    { id: 'partner', label: 'Partner', icon: '🤝' },
    { id: 'recurring', label: 'Recurring', icon: '🔁' },
    { id: 'quests', label: 'Quests', icon: '🎯' },
  ];

  const myTasks = [
    { id: 1, name: 'Plan a surprise date', category: 'Quality Time', points: 100, status: 'pending' },
    { id: 2, name: 'Cook dinner together', category: 'Acts of Service', points: 50, status: 'pending' },
    { id: 3, name: 'Send a love note', category: 'Words of Affirmation', points: 30, status: 'completed' },
  ];

  return (
    <div className="min-h-screen bg-rose-50">
      <header className="bg-gradient-to-r from-rose-500 to-purple-600 text-white p-6 sticky top-0 z-40">
        <h1 className="text-2xl font-bold">📋 Tasks</h1>
        <p className="text-sm text-white/80 mt-1">Grow together, one task at a time</p>
      </header>

      <div className="bg-white border-b border-rose-100 sticky top-[88px] z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-rose-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-4 space-y-4">
        {myTasks.map((task) => (
          <div
            key={task.id}
            className={`bg-white p-4 rounded-2xl border-2 transition-all hover:shadow-md ${
              task.status === 'completed'
                ? 'border-green-200 bg-green-50'
                : 'border-rose-100 hover:border-rose-300'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-800">{task.name}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                    {task.category}
                  </span>
                  <span className="text-xs bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-bold">
                    💎 {task.points} pts
                  </span>
                </div>
              </div>
              {task.status === 'pending' ? (
                <button className="bg-rose-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-rose-600 transition active:scale-95">
                  ✅ Mark Done
                </button>
              ) : (
                <div className="bg-green-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                  ✓ Completed
                </div>
              )}
            </div>
          </div>
        ))}
      </main>

      <button
        onClick={() => setShowCreateTask(true)}
        className="fixed bottom-24 right-6 bg-gradient-to-r from-rose-500 to-purple-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 transition-transform active:scale-95"
      >
        +
      </button>

      {showCreateTask && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowCreateTask(false)}>
          <div className="bg-white rounded-3xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4">➕ Create New Task</h3>
            <input
              type="text"
              placeholder="Task name"
              className="w-full px-4 py-3 border-2 border-rose-100 rounded-xl mb-3 focus:border-rose-400 focus:outline-none"
            />
            <select className="w-full px-4 py-3 border-2 border-rose-100 rounded-xl mb-3 focus:border-rose-400 focus:outline-none">
              <option>Assign to: Me</option>
              <option>Assign to: Partner</option>
              <option>Assign to: Both</option>
            </select>
            <input
              type="number"
              placeholder="Points reward"
              className="w-full px-4 py-3 border-2 border-rose-100 rounded-xl mb-3 focus:border-rose-400 focus:outline-none"
            />
            <select className="w-full px-4 py-3 border-2 border-rose-100 rounded-xl mb-4 focus:border-rose-400 focus:outline-none">
              <option>One-time task</option>
              <option>Daily</option>
              <option>Weekly</option>
            </select>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowCreateTask(false);
                  alert('Task created! 🎉');
                }}
                className="flex-1 bg-rose-500 text-white py-3 rounded-xl font-bold hover:bg-rose-600 transition"
              >
                Create Task
              </button>
              <button
                onClick={() => setShowCreateTask(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
