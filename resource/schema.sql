-- Create applications table
CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  company_name TEXT NOT NULL,
  job_title TEXT,
  job_url TEXT,
  location TEXT,
  status TEXT DEFAULT 'saved',
  applied_date TEXT,
  salary_range TEXT,
  cover_letter TEXT,
  notes TEXT,
  source TEXT DEFAULT 'manual',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Create index on company_name for faster lookups
CREATE INDEX IF NOT EXISTS idx_company_name ON applications(company_name);

-- Create index on status
CREATE INDEX IF NOT EXISTS idx_status ON applications(status);

-- Create index on applied_date
CREATE INDEX IF NOT EXISTS idx_applied_date ON applications(applied_date);
