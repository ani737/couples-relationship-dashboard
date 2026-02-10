# 📋 Feature Specifications - Couples Relationship Dashboard

## 1. Objective
Build a web-based application for couples to gamify positive relationship behaviors. Users earn points by completing tasks and can redeem points for rewards. The goal is to encourage consistency, appreciation, and healthy habits in relationships through light gamification.

## 2. Target Users
- **Couples**: Dating, engaged, married
- **Age Range**: 18–40 (primary), but flexible
- **Usage Model**: Both partners use the platform with linked accounts

## 3. User Roles
- **User (Partner A)**
- **User (Partner B)**
- *Both users have equal permissions in the MVP.*

---

## 4. Core Features (MVP Scope)

### 4.1 Authentication & Pairing
- **Email/Password Login**: Secure authentication system.
- **Google Login (Optional)**: OAuth integration for easier onboarding.
- **Partner Invitation**: Ability to invite partner via a unique link or 6-digit code.
- **Couple Linkage**: Once the invitation is accepted, both accounts are paired as a "Couple" sharing a unified dashboard.

### 4.2 Dashboard
A central hub for each partner featuring:
- **Points Display**: Real-time view of current points.
- **Streak Status**: Daily/weekly streak visualization.
- **Task Overview**: List of pending and recently completed tasks.
- **Activity Feed**: High-level, non-competitive view of partner's recent activity.

### 4.3 Task System
#### Predefined Tasks (Admin-managed)
System-provided tasks to get couples started:
- *Compliment your partner*
- *Plan a date*
- *Do a household chore*
- *Spend 30 minutes quality time*
- **Attributes**: Name, Category (Quality Time, Acts of Service, etc.), Default Points, Schedule (Daily/Weekly/Custom).

#### Custom Tasks (User-managed)
- **Self-assigned**: Create tasks for yourself.
- **Partner-assigned**: Create tasks for your partner.
- **Attributes**: Custom points, one-time or recurring settings.

#### Task Completion
- **Action**: Mark tasks as "Completed".
- **Memory Feature**: Optional photo upload as proof or a digital memory.
- **Reward**: Automatic point addition to the user's wallet.

### 4.4 Streaks & Bonuses
- **Daily Streak**: Completed at least one task today.
- **Weekly Streak**: Consistent engagement over 7 days.
- **Bonus Engine**: Point multipliers (e.g., +10%) for maintaining milestones.
- **Reset Logic**: Clear rules for streak resets during inactivity.

### 4.5 Rewards Marketplace
#### Predefined Rewards (Admin-managed)
- *Movie night*, *Dinner date*, *Surprise gift*, *“Choose the next activity”*.
- **Attributes**: Title, Description, Points Required.

#### Custom Rewards (User-managed)
- **Flexibility**: Users create rewards tailored to their relationship.
- **Attributes**: Name, Points Cost, Provider (Self/Partner/Both).

#### Redemption Flow
1. User redeems reward using points.
2. Partner receives a notification.
3. Status moves from "Redeemed" to "Fulfilled" once completed.

### 4.6 Memory Wall (Photos & Timeline)
- **Shared Gallery**: All completed tasks with photos appear in a chronological timeline.
- **Organization**: Sortable by date, viewable by month/year.

### 4.7 Surprise Quests
- **System Challenges**: Random daily/weekly tasks.
- **Collaborative**: Auto-assigned to both partners.
- **Urgency**: Limited time for completion with bonus rewards.

---

## 5. Optional Phase-2 Features (Future)
- **Mood Check-ins**: Daily emoji + short note status.
- **Love Languages**: Integration for personalized task recommendations.
- **Gamification Depth**: Badges and "Power Couple" levels.
- **Reminders**: Anniversary and milestone notifications.
- **Insights**: Non-judgmental relationship statistics.

---

## 6. Admin Panel (Basic)
Internal tool for platform management:
- **Content Management**: Add/edit/delete predefined tasks and rewards.
- **Logic Control**: Adjust point values and streak bonus parameters.
- **Analytics**: View basic usage metrics.

---

## 7. Data Models (High-Level)

### User
- `id`, `name`, `email`, `password`, `couple_id`, `points`, `streak_count`

### Couple
- `id`, `user_1_id`, `user_2_id`, `created_at`

### Task
- `id`, `title`, `description`, `category`, `points`, `created_by` (admin/user), `assigned_to` (self/partner/both), `schedule_type` (one-time/daily/weekly)

### TaskCompletion
- `id`, `task_id`, `user_id`, `completed_at`, `image_url` (optional)

### Reward
- `id`, `title`, `description`, `points_required`, `created_by` (admin/user)

### RewardRedemption
- `id`, `reward_id`, `user_id`, `status` (redeemed/fulfilled), `redeemed_at`

---

## 8. Notifications
- **Triggers**: Partner task completion, reward redemption, new surprise quest, streak milestones.
- **Delivery**: MVP will focus on simple in-app notifications.

---

## 9. Non-Functional Requirements
- **Mobile Responsive**: Primary usage will be on mobile browsers.
- **Privacy**: Strict isolation; couples can only see each other's data.
- **UX**: Fast task creation (max 3 clicks).
- **Aesthetics**: Simple, playful, and warm UI.

---

## 10. MVP Deliverables
1. Working login + couple pairing.
2. Task creation & completion flow.
3. Points wallet & Rewards redemption.
4. Streak tracking.
5. Photo uploads & Memory Timeline.
6. Basic Dashboard UI.
