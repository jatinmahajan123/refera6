import axios from 'axios';

// Define the BusinessOwner interface based on the API documentation
export interface BusinessOwner {
  business_name: string;
  business_email: string;
  business_phno: string;
  industry: string;
  business_type?: string;
  products: string[];
  company_size?: string;
  city: string;
  state: string;
  zip_code: string;
  tone_of_communication: string;
  response_style: string;
  auto_offer_help?: boolean;
  user_initiated_only?: boolean;
  platform_setup?: boolean;
  credit_balance?: string;
  user: number;
}

// Create a business owner
export const createBusinessOwner = async (data: BusinessOwner): Promise<any> => {
  try {
    const response = await axios.post('/auth/create-business-owner', data);
    return response.data;
  } catch (error) {
    console.error('Error creating business owner:', error);
    throw error;
  }
};