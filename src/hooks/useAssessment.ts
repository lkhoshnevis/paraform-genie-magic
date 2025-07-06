
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { UserSession } from '@/types/assessment';

export const useAssessment = () => {
  const [sessionId, setSessionId] = useState<string>('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedPains, setSelectedPains] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Generate session ID on component mount
    const newSessionId = crypto.randomUUID();
    setSessionId(newSessionId);
  }, []);

  const saveSession = async () => {
    if (!sessionId || selectedRoles.length === 0 || selectedPains.length === 0) return;
    
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('user_sessions')
        .insert({
          id: sessionId,
          roles: selectedRoles,
          pains: selectedPains,
          demo_clicked: false
        });

      if (error) {
        console.error('Error saving session:', error);
      }
    } catch (error) {
      console.error('Error saving session:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const trackDemoClick = async () => {
    if (!sessionId) return;
    
    try {
      const { error } = await supabase
        .from('user_sessions')
        .update({ demo_clicked: true })
        .eq('id', sessionId);

      if (error) {
        console.error('Error tracking demo click:', error);
      }
    } catch (error) {
      console.error('Error tracking demo click:', error);
    }
  };

  return {
    sessionId,
    selectedRoles,
    setSelectedRoles,
    selectedPains,
    setSelectedPains,
    saveSession,
    trackDemoClick,
    isLoading
  };
};
