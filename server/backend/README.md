# MGM College Backend (Express + MongoDB)

## Setup
1. Copy `.env.example` to `.env` and set `MONGO_URI` and `PORT`.
2. Install dependencies:
   ```bash
   npm install
   npm run dev
   ```

## Endpoints
Base path: `/api`

Collections mapped:
- `applications` -> `/api/applications`
- `grievances` -> `/api/grievances`
- `suggestions` -> `/api/suggestions`
- `student` -> `/api/student`
- `alumni` -> `/api/alumni`
- `staff` -> `/api/staff`
- `employers` -> `/api/employers`
- `parents` -> `/api/parents`

Each exposes:
- `GET /` list (q, sort, order, limit)
- `POST /` create
- `DELETE /:id` delete by id
- `DELETE /` delete all

Health check: `GET /api/health`

## Notes
- Schemas are lax (`strict: false`) so you can post current form payloads directly.
- Add indexes and stricter schemas later if needed.
