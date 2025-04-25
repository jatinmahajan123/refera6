// UserProfilePage.tsx
import React, { useState } from 'react';

interface UserProfileData {
  name: string;
  phone: string;
  email: string;
}

const UserProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<UserProfileData>({
    name: "Kadin Stanton",
    phone: "1234567890",
    email: "kadinstanton@gmail.com"
  });
  
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(userData.name);
  
  const handleNameSave = () => {
    setUserData({...userData, name: editedName});
    setIsEditingName(false);
  };
  
  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Delete account logic would go here
      console.log("Account deletion requested");
    }
  };
  
  const handleSignOut = () => {
    // Sign out logic would go here
    console.log("Sign out requested");
  };
  
  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h2 className="text-xl font-medium mb-6 flex justify-between items-center">
          Profile
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              {userData.name.charAt(0)}
            </div>
            <button className="ml-2 text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
        </h2>
        
        <div className="border-b border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">User Name</span>
            {isEditingName ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 mr-2"
                />
                <button 
                  onClick={handleNameSave}
                  className="text-blue-600 text-sm"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="mr-2 text-gray-800">{userData.name}</span>
                <button 
                  onClick={() => setIsEditingName(true)}
                  className="text-blue-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="border-b border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">User Phone</span>
            <span className="text-gray-800">{userData.phone}</span>
          </div>
        </div>
        
        <div className="border-b border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Email</span>
            <span className="text-gray-800">{userData.email}</span>
          </div>
        </div>
        
        <div className="border-b border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Password</span>
            <div className="flex items-center">
              <span className="mr-2 text-gray-800">********</span>
              <button className="bg-white text-blue-600 border border-blue-600 text-sm px-4 py-1 rounded">
                Change Password
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <button 
            onClick={handleDeleteAccount}
            className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded"
          >
            Delete Account
          </button>
          
          <button 
            onClick={handleSignOut}
            className="bg-red-500 text-white px-6 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;