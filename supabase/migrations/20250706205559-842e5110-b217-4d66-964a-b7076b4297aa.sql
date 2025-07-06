
-- Create user_sessions table to track assessment data
CREATE TABLE public.user_sessions (
  id UUID NOT NULL PRIMARY KEY,
  roles TEXT[] NOT NULL,
  pains TEXT[] NOT NULL,
  demo_clicked BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for better query performance
CREATE INDEX idx_user_sessions_created_at ON public.user_sessions(created_at);
CREATE INDEX idx_user_sessions_demo_clicked ON public.user_sessions(demo_clicked);

-- Since this is a public assessment tool, we don't need RLS policies
-- All data can be inserted without authentication requirements
