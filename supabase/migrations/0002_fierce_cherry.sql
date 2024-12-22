/*
  # Create Waitlist Table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `country` (text, required)
      - `mobile_number` (text, required)
      - `created_at` (timestamptz, auto-generated)

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for inserting new entries
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  country text NOT NULL,
  mobile_number text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into waitlist
CREATE POLICY "Anyone can add to waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view waitlist entries
CREATE POLICY "Only authenticated users can view waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);