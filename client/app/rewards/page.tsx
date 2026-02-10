'use client';

import { useState } from 'react';

export default function RewardsPage() {
  const [currentPoints, setCurrentPoints] = useState(1740);

  const featuredRewards = [
    { id: 1, name: 'Movie Night', description: 'Netflix and chill 🍿', points: 500, icon: '🎬', available: true },
    { id: 2, name: 'Fancy Dinner Date', description: 'Dress up and dine out', points: 1000, icon: '🍴️', available: true },
    { id: 3, name: 'Weekend Getaway', description: '2-day trip together', points: 3000, icon: '✈️', available: false },
    { id: 4, name: 'Spa Day', description: 'Couples massage & relaxation', points: 1500, icon: '💆', available: true },
  ];

  const customRewards = [
    { id: 5, name: 'Breakfast in Bed', description: 'Made with love', points: 200, icon: '🥞', available: true },
    { id: 6, name: 'Car Wash', description: 'Sparkling clean ride', points: 150, icon: '🚗', available: true },
  ];

  const handleRedeem = (reward: any) => {
    if (currentPoints >= reward.points) {
      setCurrentPoints(currentPoints - reward.points);
      alert(`🎉 ${reward.name} redeemed! Enjoy! ❤️`);
    } else {
      alert(`😔 Need ${reward.points - currentPoints} more points`);
    }
  };

  return (
    <div className="min-h-screen bg-rose-50">
      <header className="bg-gradient-to-r from-rose-500 to-purple-600 text-white p-6 sticky top-0 z-40">
        <h1 className="text-2xl font-bold">🎁 Rewards</h1>
        <p className="text-sm text-white/80 mt-1">Redeem your points for special experiences</p>
      </header>

      <div className="bg-white shadow-sm p-4 sticky top-[88px] z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Your Points</p>
            <p className="text-3xl font-black text-rose-500">{currentPoints.toLocaleString()}</p>
          </div>
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold text-sm hover:bg-purple-200 transition">
            💎 History
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-4 space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>⭐</span> Featured Rewards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredRewards.map((reward) => (
              <div
                key={reward.id}
                className={`bg-white p-6 rounded-2xl border-2 transition-all ${
                  reward.available
                    ? 'border-rose-100 hover:border-rose-300 hover:shadow-lg'
                    : 'border-gray-200 opacity-60'
                }`}
              >
                <div className="text-5xl mb-3">{reward.icon}</div>
                <h3 className="font-bold text-lg text-gray-800">{reward.name}</h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">{reward.description}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full font-bold text-sm">
                    💎 {reward.points} pts
                  </span>
                  {reward.available ? (
                    <button
                      onClick={() => handleRedeem(reward)}
                      disabled={currentPoints < reward.points}
                      className={`px-6 py-2 rounded-full font-bold text-sm transition active:scale-95 ${
                        currentPoints >= reward.points
                          ? 'bg-rose-500 text-white hover:bg-rose-600'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Redeem
                    </button>
                  ) : (
                    <div className="bg-gray-200 text-gray-600 px-6 py-2 rounded-full font-bold text-sm">
                      🔒 Locked
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>💝</span> Custom Rewards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {customRewards.map((reward) => (
              <div
                key={reward.id}
                className="bg-white p-6 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-3">{reward.icon}</div>
                <h3 className="font-bold text-lg text-gray-800">{reward.name}</h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">{reward.description}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold text-sm">
                    💎 {reward.points} pts
                  </span>
                  <button
                    onClick={() => handleRedeem(reward)}
                    disabled={currentPoints < reward.points}
                    className={`px-6 py-2 rounded-full font-bold text-sm transition active:scale-95 ${
                      currentPoints >= reward.points
                        ? 'bg-purple-500 text-white hover:bg-purple-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Redeem
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <button className="fixed bottom-24 right-6 bg-gradient-to-r from-rose-500 to-purple-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 transition-transform active:scale-95">
        +
      </button>
    </div>
  );
}
