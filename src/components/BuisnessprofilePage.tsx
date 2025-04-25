// BusinessProfilePage.tsx
import React, { useState } from 'react';

interface BusinessProfileData {
  logo?: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  industry: string;
  services: string;
  products: string;
  companySize: string;
  city: string;
  state: string;
  zipCode: string;
}

const BusinessProfilePage: React.FC = () => {
  const [businessData, setBusinessData] = useState<BusinessProfileData>({
    logo: undefined,
    description: '',
    name: '',
    email: '',
    phone: '',
    industry: '',
    services: '',
    products: '',
    companySize: '',
    city: '',
    state: '',
    zipCode: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBusinessData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setBusinessData(prev => ({ ...prev, logo: event.target?.result as string }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save business profile logic
    console.log("Business data to save:", businessData);
    alert("Business profile saved successfully!");
  };
  
  return (
    <div className="max-w-3xl">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Business Logo</label>
          <div className="flex items-center">
            <label className="cursor-pointer px-4 py-2 bg-gray-100 text-gray-600 rounded border border-gray-300">
              Choose Image
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleLogoChange}
              />
            </label>
            {businessData.logo && (
              <div className="ml-4 w-12 h-12 rounded-full overflow-hidden">
                <img src={businessData.logo} alt="Business logo" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Business Description</label>
          <textarea
            name="description"
            value={businessData.description}
            onChange={handleInputChange}
            placeholder="Enter description..."
            className="w-full px-3 py-2 border border-gray-300 rounded"
            rows={4}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-2">Business Name</label>
            <input
              type="text"
              name="name"
              value={businessData.name}
              onChange={handleInputChange}
              placeholder="Enter business name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Business Email</label>
            <input
              type="email"
              name="email"
              value={businessData.email}
              onChange={handleInputChange}
              placeholder="e.g., robert.fox@mymail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-2">Business Phone No.</label>
            <input
              type="tel"
              name="phone"
              value={businessData.phone}
              onChange={handleInputChange}
              placeholder="Enter phone no."
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Industry</label>
            <select
              name="industry"
              value={businessData.industry}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded appearance-none bg-white"
            >
              <option value="">Select</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="retail">Retail</option>
              <option value="manufacturing">Manufacturing</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-2">Services</label>
            <input
              type="text"
              name="services"
              value={businessData.services}
              onChange={handleInputChange}
              placeholder="Enter services..."
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Products</label>
            <input
              type="text"
              name="products"
              value={businessData.products}
              onChange={handleInputChange}
              placeholder="Enter products..."
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-2">Company Size (Optional)</label>
            <select
              name="companySize"
              value={businessData.companySize}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded appearance-none bg-white"
            >
              <option value="">Select</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501+">501+ employees</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">City</label>
            <select
              name="city"
              value={businessData.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded appearance-none bg-white"
            >
              <option value="">Select</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
              <option value="phoenix">Phoenix</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-gray-700 mb-2">State</label>
            <select
              name="state"
              value={businessData.state}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded appearance-none bg-white"
            >
              <option value="">Select</option>
              <option value="ny">New York</option>
              <option value="ca">California</option>
              <option value="il">Illinois</option>
              <option value="tx">Texas</option>
              <option value="az">Arizona</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={businessData.zipCode}
              onChange={handleInputChange}
              placeholder="Enter zip code"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="px-8 py-2 bg-blue-500 text-white rounded font-medium"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessProfilePage;