-- Run this in Supabase Dashboard > SQL Editor

-- Create tax_expenses table
CREATE TABLE IF NOT EXISTS tax_expenses (
  id BIGSERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  date DATE NOT NULL,
  category TEXT,
  entities TEXT[],
  property_related BOOLEAN DEFAULT false,
  receipt_name TEXT,
  receipt_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE tax_expenses ENABLE ROW LEVEL SECURITY;

-- Allow public insert (for the app)
CREATE POLICY "Allow insert" ON tax_expenses FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow select" ON tax_expenses FOR SELECT USING (true);
CREATE POLICY "Allow update" ON tax_expenses FOR UPDATE USING (true);
CREATE POLICY "Allow delete" ON tax_expenses FOR DELETE USING (true);

-- Create storage bucket for receipts
INSERT INTO storage.buckets (id, name, public) VALUES ('tax-receipts', 'tax-receipts', true);
