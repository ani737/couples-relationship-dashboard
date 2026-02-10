'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'user' | 'couple'>('user');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pb-24">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-100 px-4 py-4">
        <h1 className="text-2xl font-bold text-purple-900">⚙️ Profile & Settings</h1>
        <p className="text-sm text-purple-600 mt-1">Manage your account</p>
      </div>

      {/* Profile Section */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-6 border-2 border-purple-100 shadow-sm">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-4xl text-white mb-3">
              👤
            </div>
            <h2 className="text-xl font-bold text-purple-900">Alex & Jamie</h2>
            <p className="text-purple-600 text-sm">Together since Jan 2023</p>
            <div className="flex gap-4 mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">247</div>
                <div className="text-xs text-gray-600">Tasks Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">1,540</div>
                <div className="text-xs text-gray-600">Total Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">89</div>
                <div className="text-xs text-gray-600">Memories</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Selection */}
      <div className="px-4 py-2">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('user')}
            className={`flex-1 py-2 px-4 rounded-xl font-semibold transition-all ${
              activeTab === 'user'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-white text-purple-600 border border-purple-200'
            }`}
          >
            👤 My Settings
          </button>
          <button
            onClick={() => setActiveTab('couple')}
            className={`flex-1 py-2 px-4 rounded-xl font-semibold transition-all ${
              activeTab === 'couple'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-white text-purple-600 border border-purple-200'
            }`}
          >
            💑 Couple Settings
          </button>
        </div>
      </div>

      {/* Settings Content */}
      <div className="px-4 py-2 space-y-3">
        {activeTab === 'user' ? (
          <>
            {/* Personal Info */}
            <div className="bg-white rounded-2xl p-4 border-2 border-purple-100">
              <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span>📝</span> Personal Information
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Alex"
                    className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="alex@example.com"
                    className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-400"
                  />
                </div>
                <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-2xl p-4 border-2 border-purple-100">
              <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span>🔔</span> Notifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Task reminders</span>
                  <label className="relative inline-block w-12 h-6">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-500 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Partner completed task</span>
                  <label className="relative inline-block w-12 h-6">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-500 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">New memories added</span>
                  <label className="relative inline-block w-12 h-6">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-500 transition-colors"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                  </label>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Relationship Info */}
            <div className="bg-white rounded-2xl p-4 border-2 border-purple-100">
              <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span>💕</span> Relationship Details
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-1">
                    Anniversary Date
                  </label>
                  <input
                    type="date"
                    defaultValue="2023-01-14"
                    className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-1">
                    Couple Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Alex & Jamie"
                    className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-400"
                  />
                </div>
                <button className="w-full bg-pink-500 text-white py-3 rounded-xl font-semibold hover:bg-pink-600 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Points & Rewards */}
            <div className="bg-white rounded-2xl p-4 border-2 border-purple-100">
              <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span>⭐</span> Points System
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-1">
                    Points per task
                  </label>
                  <input
                    type="number"
                    defaultValue="10"
                    className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-1">
                    Bonus quest points
                  </label>
                  <input
                    type="number"
                    defaultValue="50"
                    className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>
            </div>

            {/* Partner Management */}
            <div className="bg-white rounded-2xl p-4 border-2 border-purple-100">
              <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span>👫</span> Partner Connection
              </h3>
              <div className="space-y-3">
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-600 font-semibold">✓ Connected</span>
                  </div>
                  <p className="text-sm text-gray-600">Partner: Jamie (jamie@example.com)</p>
                </div>
                <button className="w-full bg-red-100 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-200 transition-colors border-2 border-red-200">
                  Disconnect Partner
                </button>
              </div>
            </div>
          </>
        )}

        {/* Account Actions */}
        <div className="bg-white rounded-2xl p-4 border-2 border-purple-100">
          <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
            <span>⚠️</span> Account
          </h3>
          <div className="space-y-2">
            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              Change Password
            </button>
            <button className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transition-colors border-2 border-red-200">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
