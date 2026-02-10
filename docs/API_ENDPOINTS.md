# 🌐 API Endpoints - Couples Relationship Dashboard

## 1. Overview
The following endpoints define the RESTful API for the Couples Relationship Dashboard. All endpoints are prefixed with `/api/v1`.

---

## 2. Authentication
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Authenticate a user and return a JWT.
- `POST /auth/google`: Google OAuth login/callback.
- `POST /auth/logout`: Invalidate current session.

---

## 3. Couple Management
- `GET /couple`: Get details of the current paired couple.
- `POST /couple/invite`: Generate a pairing code/link.
- `POST /couple/join`: Join a couple using a pairing code.
- `POST /couple/leave`: Disconnect from the current partner.

---

## 4. Tasks
- `GET /tasks`: List all tasks (predefined + custom) for the couple.
- `POST /tasks`: Create a new custom task.
- `GET /tasks/:id`: Get details of a specific task.
- `PUT /tasks/:id`: Update a custom task.
- `DELETE /tasks/:id`: Delete a custom task.
- `POST /tasks/:id/complete`: Mark a task as completed (optionally upload image).

---

## 5. Points & Streaks
- `GET /wallet/points`: Get current points for the user.
- `GET /wallet/history`: Get point transaction history.
- `GET /streaks`: Get current daily/weekly streak status and history.

---

## 6. Rewards
- `GET /rewards`: List all rewards (predefined + custom).
- `POST /rewards`: Create a new custom reward.
- `GET /rewards/:id`: Get details of a specific reward.
- `PUT /rewards/:id`: Update a custom reward.
- `DELETE /rewards/:id`: Delete a custom reward.
- `POST /rewards/:id/redeem`: Redeem a reward using points.
- `POST /rewards/redemption/:id/fulfill`: Mark a redeemed reward as fulfilled.

---

## 7. Memory Wall
- `GET /memories`: Get a timeline of all completed tasks with photos.
- `GET /memories/:month/:year`: Filter memories by date.

---

## 8. Surprise Quests
- `GET /quests/active`: Get currently active system-generated quests.
- `POST /quests/:id/complete`: Complete a surprise quest for bonus points.

---

## 9. Notifications
- `GET /notifications`: List all user notifications.
- `POST /notifications/:id/read`: Mark a notification as read.

---

## 10. Admin Endpoints
- `GET /admin/stats`: Get platform usage metrics.
- `POST /admin/tasks`: Create/Update predefined tasks.
- `POST /admin/rewards`: Create/Update predefined rewards.
- `PUT /admin/logic`: Update streak/bonus calculation parameters.
