import { useState } from 'react';
import { BusinessOwner, createBusinessOwner } from '../api/business-owner';

export const useBusinessOwner = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createOwner = async (data: BusinessOwner) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await createBusinessOwner(data);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err.message || 'Failed to create business owner');
      setLoading(false);
      throw err;
    }
  };

  return {
    createOwner,
    loading,
    error
  };
};
