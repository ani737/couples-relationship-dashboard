# Database Schema

## Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    USER ||--o{ COUPLE : belongs_to
    COUPLE ||--o{ MEMORY : has
    COUPLE ||--o{ GOAL : has
    COUPLE ||--o{ EVENT : has
    COUPLE ||--o{ CHAT_MESSAGE : contains

    USER {
        uuid id PK
        string email
        string password_hash
        string display_name
        string avatar_url
        datetime created_at
    }

    COUPLE {
        uuid id PK
        uuid user1_id FK
        uuid user2_id FK
        datetime anniversary
        datetime created_at
    }

    MEMORY {
        uuid id PK
        uuid couple_id FK
        string title
        text description
        string image_url
        datetime date
        datetime created_at
    }

    GOAL {
        uuid id PK
        uuid couple_id FK
        string title
        text description
        enum status "PENDING, IN_PROGRESS, COMPLETED"
        datetime target_date
        datetime created_at
    }
```

## Tables

### Users
- `id`: UUID (Primary Key)
- `email`: String (Unique)
- `password_hash`: String
- `display_name`: String
- `avatar_url`: String
- `created_at`: Timestamp

### Couples
- `id`: UUID (Primary Key)
- `user1_id`: UUID (Foreign Key -> Users.id)
- `user2_id`: UUID (Foreign Key -> Users.id)
- `anniversary`: Date
- `created_at`: Timestamp

### Memories
- `id`: UUID (Primary Key)
- `couple_id`: UUID (Foreign Key -> Couples.id)
- `title`: String
- `description`: Text
- `image_url`: String
- `date`: Date
- `created_at`: Timestamp

### Goals
- `id`: UUID (Primary Key)
- `couple_id`: UUID (Foreign Key -> Couples.id)
- `title`: String
- `description`: Text
- `status`: Enum (PENDING, IN_PROGRESS, COMPLETED)
- `target_date`: Date
- `created_at`: Timestamp
