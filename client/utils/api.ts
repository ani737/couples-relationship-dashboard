const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export const api = {
  // Couple endpoints
  getCouples: async () => {
    const response = await fetch(`${API_BASE_URL}/couples`);
    return response.json();
  },

  createCouple: async (data: { user1Name: string; user2Name: string; anniversaryDate?: Date }) => {
    const response = await fetch(`${API_BASE_URL}/couples`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  getCoupleById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/couples/${id}`);
    return response.json();
  },

  // Milestone endpoints
  getMilestones: async (coupleId: string) => {
    const response = await fetch(`${API_BASE_URL}/milestones?coupleId=${coupleId}`);
    return response.json();
  },

  createMilestone: async (data: { coupleId: string; title: string; description?: string; targetDate?: Date; pointsReward?: number }) => {
    const response = await fetch(`${API_BASE_URL}/milestones`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  completeMilestone: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/milestones/${id}/complete`, {
      method: 'PATCH',
    });
    return response.json();
  },

  // Memory endpoints
  getMemories: async (coupleId: string) => {
    const response = await fetch(`${API_BASE_URL}/memories?coupleId=${coupleId}`);
    return response.json();
  },

  createMemory: async (data: { coupleId: string; title: string; description?: string; date?: Date; photos?: string[] }) => {
    const response = await fetch(`${API_BASE_URL}/memories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // User endpoints
  getUserProfile: async (userId: string) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    return response.json();
  },

  updateUserProfile: async (userId: string, data: { name?: string; preferences?: any }) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

export default api;
