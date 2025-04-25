"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud, CheckCircle, Bell, User } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/header";
import AIAgentChat from "@/components/AIAgentChat";

const steps = [
  "Set Up Business Profile",
  "Sync Your Customer Data",
  "Set Up AI Agent Rules",
  "Set Up First Campaign",
];

const DashboardPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [csvUploaded, setCsvUploaded] = useState(false);
  const [zapierConnected, setZapierConnected] = useState(false);

  const [businessdescription, setBusinessDescription] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [product, setProduct] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [tone, setTone] = useState("");
  const [responseStyle, setResponseStyle] = useState("");
  const [businessNameError, setBusinessNameError] = useState(false);

  const navigate = useNavigate();
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleNext1 = () => {
    if (
      !businessdescription ||
      !uploadedLogo ||
      !businessName ||
      !businessEmail ||
      !businessPhone ||
      !industry ||
      !product ||
      !companySize ||
      !city ||
      !state ||
      !zipCode
    ) {
      // alert("Please fill in all required fields.");
      // return;
      setBusinessNameError(true);
      return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleNext2 = () => {
    if (!tone || !responseStyle) {
      alert("Please fill in all required fields.");
      return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedLogo(reader.result as string); // Set the uploaded logo URL
        setUploadedFileName(file.name);
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleResetImage = () => {
    setUploadedFileName(null);
    setUploadedLogo(null);
  };

  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      setCsvUploaded(true);
    }
  };

  const handleSaveBusinessProfile = () => {
    if (
      !businessdescription ||
      !uploadedLogo ||
      !businessName ||
      !businessEmail ||
      !businessPhone ||
      !industry ||
      !product ||
      !companySize ||
      !city ||
      !state ||
      !zipCode ||
      !tone ||
      !responseStyle
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const storedData = JSON.parse(
      localStorage.getItem("businessProfiles") || "[]"
    );

    if (
      storedData.some(
        (profile: { businessName: string }) =>
          profile.businessName === businessName
      )
    ) {
      alert("Business name already exists.");
      return;
    }

    const newProfile = {
      businessdescription,
      uploadedLogo,
      businessName,
      businessEmail,
      businessPhone,
      industry,
      product,
      companySize,
      city,
      state,
      zipCode,
      tone,
      responseStyle,
    };

    storedData.push(newProfile);
    localStorage.setItem("businessProfiles", JSON.stringify(storedData));
    
    alert("Business profile saved!");
    navigate("/dashboard"); 
  };

  const namechecker = () => {
    const storedData = JSON.parse(
      localStorage.getItem("businessProfiles") || "[]"
    );
    if (
      storedData.some(
        (profile: { businessName: string }) =>
          profile.businessName === businessName
      )
    ) {
      alert("Business name already exists.");
      return;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <form className="grid grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-sm w-full">
            {/* Business Profile Form (Step 1) */}
            <div className="col-span-2">
              <label className="text-sm font-medium mb-1 block">
                Business Logo
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="cursor-pointer"
                />
                {uploadedLogo ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={uploadedLogo}
                      alt="Business Logo Preview"
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <Button variant="outline" className="flex items-center gap-2">
                    <UploadCloud className="w-4 h-4" /> Choose Image
                  </Button>
                )}
                {uploadedFileName && (
                  <p className="text-sm text-gray-600">{uploadedFileName}</p>
                )}
                <Button
                  variant="outline"
                  onClick={handleResetImage}
                  className="text-red-500 hover:bg-red-100"
                >
                  Reset Image
                </Button>
              </div>
            </div>
            {/* Other form fields */}
            <div className="col-span-2">
              <label className="text-sm font-medium mb-1 block">
                Business Description
                <span className="text-red-500">*</span>
              </label>

              <Textarea
                value={businessdescription}
                onChange={(e) => setBusinessDescription(e.target.value)}
                required
                placeholder="Enter business description..."
              />
            </div>

            {/* <div>
              <label
              onInput={namechecker} className="text-sm font-medium mb-1 block">
                Business Name
                <span className="text-red-500">*</span>
              </label>
              <Input
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
              />
            </div> */}
            <div>
              <label className="text-sm font-medium mb-1 block">
                Business Name <span className="text-red-500">*</span>
              </label>
              <Input
                value={businessName}
                onChange={(e) => {
                  setBusinessName(e.target.value);
                  if (businessNameError && e.target.value.trim()) {
                    setBusinessNameError(false); // clear error while typing
                  }
                }}
                required
                className={`border ${
                  businessNameError ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-3 py-2 w-full`}
              />
              {businessNameError && (
                <p className="text-red-500 text-sm mt-1">
                  Business name is required.
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Business Email
                <span className="text-red-500">*</span>
              </label>
              <Input
                value={businessEmail}
                onChange={(e) => setBusinessEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Business Phone No.
                <span className="text-red-500">*</span>
              </label>
              <Input
                value={businessPhone}
                onChange={(e) => setBusinessPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Industry
                <span className="text-red-500">*</span>
              </label>
              <Select value={industry} onValueChange={setIndustry} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">E-Commerce</SelectItem>
                  <SelectItem value="finance">HealthCare</SelectItem>
                  <SelectItem value="saas">Saas/Software</SelectItem>
                  <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Services</label>
              <Input />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Product
                <span className="text-red-500">*</span>
              </label>
              <Input
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Company Size
                <span className="text-red-500">*</span>
              </label>
              <Select
                value={companySize}
                onValueChange={setCompanySize}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">1-10</SelectItem>
                  <SelectItem value="medium">11-50</SelectItem>
                  <SelectItem value="large">51+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">
                City
                <span className="text-red-500">*</span>
              </label>
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                State
                <span className="text-red-500">*</span>
              </label>
              <Select value={state} onValueChange={setState} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="tx">Texas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Zip Code
                <span className="text-red-500">*</span>
              </label>
              <Input
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>
            <div className="col-span-2 flex justify-end">
              <Button
                onClick={handleNext1}
                className="bg-blue-500 text-white px-6 hover:bg-blue-600"
              >
                Next
              </Button>
            </div>
          </form>
        );
      case 1:
        return (
          <div className="bg-white p-8 rounded-xl shadow-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-6">
              Import Customer Data: Sync with Zapier or Upload CSV
            </h2>

            {!zapierConnected ? (
              <Button
                variant="outline"
                className="mb-4 w-full"
                onClick={() => setZapierConnected(true)}
              >
                Connect with Zapier
              </Button>
            ) : (
              <div className="mb-4 border border-green-400 bg-green-50 text-green-700 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="font-medium">Zapier integration successful</p>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setZapierConnected(false)}
                    className="text-red-500 hover:bg-red-100"
                  >
                    Disconnect Zapier
                  </Button>
                </div>
              </div>
            )}

            <p className="my-4">or</p>
            <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg mb-4 relative">
              <label htmlFor="csv-upload" className="cursor-pointer block">
                {csvUploaded ? (
                  <div className="flex flex-col items-center space-y-2">
                    <CheckCircle className="text-green-500 w-6 h-6" />
                    <p className="text-sm text-green-600">
                      Uploaded: {uploadedFileName}
                    </p>
                    <p className="text-blue-600 underline mt-1">
                      Re-upload CSV File
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>Drag and drop files here</p>
                    <p className="text-blue-600 underline mt-2">
                      Click to Upload CSV File
                    </p>
                  </div>
                )}
              </label>
              <input
                id="csv-upload"
                type="file"
                accept=".csv"
                onChange={handleCSVUpload}
                className="hidden"
              />
            </div>
            <Button
              onClick={handleNext}
              className="bg-blue-500 text-white px-6 hover:bg-blue-600"
              disabled={!csvUploaded && !zapierConnected}
            >
              Next
            </Button>
          </div>
        );

      case 2:
        return (
          <div className="bg-white p-10 rounded-xl shadow-sm w-full max-w-lg mx-auto">
            <h2 className="text-xl font-semibold text-center mb-8">
              Set Up AI Agent Rules
            </h2>
            <div className="mb-6">
              <label className="text-sm font-medium mb-1 block">
                Tone of Communication
                <span className="text-red-500">*</span>
              </label>
              <Select value={tone} onValueChange={setTone} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select " />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="motivational">Motivational</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium mb-1 block">
                Response Style
                <span className="text-red-500">*</span>
              </label>
              <Select
                value={responseStyle}
                onValueChange={setResponseStyle}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Response Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Concise</SelectItem>
                  <SelectItem value="detailed">Detailed</SelectItem>
                  <SelectItem value="sbs">Step By Step</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium">Auto-offer help</p>
                <p className="text-xs text-gray-500">
                  AI pops up suggestions automatically when user lands on a
                  page.
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm font-medium">User-initiated only</p>
                <p className="text-xs text-gray-500">
                  AI only responds when clicked or messaged.
                </p>
              </div>
              <Switch />
            </div>

            <Button
              onClick={handleNext2}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-400 text-white hover:from-blue-600 hover:to-indigo-500"
            >
              Next
            </Button>
          </div>
        );

      case 3:
        return (
          <form className="bg-white p-8 rounded-xl shadow-sm w-full space-y-10">
            <div>
              <h2 className="text-xl font-semibold mb-6">
                Create New Campaign
              </h2>
              <label className="block text-sm font-medium mb-2">
                Campaign Name
              </label>
              <Input placeholder="e.g., Summer Referral Special" />
            </div>

            {/* Promoter Settings */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Promoter Settings</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Reward Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Points" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="points">Points</SelectItem>
                      <SelectItem value="cash">$</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Reward Value
                  </label>
                  <Input placeholder="e.g., 200 points" />
                </div>
              </div>
              <label className="block text-sm font-medium mb-1">
                Promoter Message
              </label>
              <Textarea placeholder="e.g. Share this with your friends and get $20 for each successful signup!" />
            </div>

            {/* Follow-Up Strategy for Promoter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow-Up Strategy</h3>
              <div className="grid grid-cols-2 gap-4 items-end">
                <div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="SMS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="After 1 Day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1day">After 1 Day</SelectItem>
                      <SelectItem value="3days">After 3 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Follow-Up Message
                  </label>
                  <Textarea placeholder="Reminder message here..." />
                </div>
                <div className="col-span-2">
                  <Button className="mt-2 bg-blue-100 text-blue-600">
                    + Add Action
                  </Button>
                </div>
              </div>
            </div>

            Leads Settings
            <div>
              <h3 className="text-lg font-semibold mb-4">Leads Settings</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Reward Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Discount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="discount">Discount</SelectItem>
                      <SelectItem value="points">Points</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Reward Value
                  </label>
                  <Input placeholder="e.g., 20%" />
                </div>
              </div>
              <label className="block text-sm font-medium mb-1">
                Referred Message
              </label>
              <Textarea placeholder="e.g. You're invited! Sign up now and get 20% off your first order." />
            </div>

            {/* Form Fields */}
            <div>
              <h4 className="text-md font-medium mb-2">Form Fields</h4>
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="name" />
                  <label htmlFor="name" className="text-sm">
                    Full Name
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="email" />
                  <label htmlFor="email" className="text-sm">
                    Email Address
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="phone" />
                  <label htmlFor="phone" className="text-sm">
                    Phone Number
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="age" />
                  <label htmlFor="age" className="text-sm">
                    Age
                  </label>
                </div>
              </div>
            </div>

            {/* Follow-Up for Leads */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow-Up Strategy</h3>
              <div className="grid grid-cols-2 gap-4 items-end">
                <div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="SMS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="After 1 Day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1day">After 1 Day</SelectItem>
                      <SelectItem value="3days">After 3 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Follow-Up Message
                  </label>
                  <Textarea placeholder="Reminder message here..." />
                </div>
                <div className="col-span-2">
                  <Button className="mt-2 bg-blue-100 text-blue-600">
                    + Add Action
                  </Button>
                </div>
              </div>
            </div>

            {/* Launch Button */}
            <div className="flex justify-end">
              <Button
                onClick={handleSaveBusinessProfile}
                className="bg-blue-500 text-white px-8 hover:bg-blue-600"
              >
                Launch
              </Button>
            </div>
          </form>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  const getStepStatus = (index: number) => {
    if (index < currentStep) return "Completed";
    if (index === currentStep) return "In Progress";
    return "Not Started";
  };

  return (
    <div className="flex h-screen">
      
      <div className="flex-1 p-10 bg-gray-50 overflow-y-auto text-gray-800">
        <div className="flex">
          <div className="w-1/4 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-blue-600 font-semibold mb-4">
              Get Started with ReferralHub
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              To get started with better referrals & rewards, complete your
              account setup in a few easy steps.
            </p>
            {steps.map((step, i) => (
              <div key={i} className="flex items-center space-x-3 mb-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${
                    i < currentStep
                      ? "bg-green-500"
                      : i === currentStep
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                >
                  {i < currentStep ? "✓" : i === currentStep ? "•" : ""}
                </div>
                <div>
                  <p className="font-medium text-sm">{step}</p>
                  <p className="text-xs text-gray-400">{getStepStatus(i)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-3/4 pl-10">
          
          {renderStepContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;


