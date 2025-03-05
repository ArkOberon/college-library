import { 
  uuid, 
  varchar, 
  integer, 
  pgTable, 
  date, 
  text,  
  pgEnum,
  timestamp
} from 'drizzle-orm/pg-core';

export const STATUS_ENUM = pgEnum('status', [
  'PENDING', 
  'APPROVED', 
  'REJECTED'
])

export const ROLE_ENUM = pgEnum('role', [
  'USER', 
  'ADMIN', 
  'SUPERADMIN'
])

export const BORROW_ENUM = pgEnum('borrow_status', [
  'BORROWED', 
  'RETURNED'
])

export const users = pgTable('users', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: text().notNull().unique(),
  universityId: integer("university_id").notNull().unique(),
  password: text("password").notNull(),
  universityCard: text("university_card").notNull(),
  status: STATUS_ENUM('status').default('PENDING'),
  role: ROLE_ENUM('role').default('USER'),
  lastActivityDate: date('last_activity_date').defaultNow(),
  createdAt: timestamp('created_At', {
    withTimezone: true,
  }).defaultNow()
});
