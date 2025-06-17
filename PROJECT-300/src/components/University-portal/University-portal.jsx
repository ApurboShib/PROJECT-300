import React from "react";
import { Layers, FileText, BarChart3 } from "lucide-react";

const UniversityPortal = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'1\' height=\'40\' fill=\'%23ffffff\' opacity=\'0.1\'/%3E%3Crect y=\'0\' width=\'40\' height=\'1\' fill=\'%23ffffff\' opacity=\'0.1\'/%3E%3C/svg%3E')] bg-[length:40px_40px]" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Header Badge */}
        <div className="mb-8 border border-blue-500 text-blue-400 bg-blue-500/10 px-4 py-2 text-sm font-medium rounded-full">
          NEW University Portal 3.0
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 max-w-4xl leading-tight">
          MuPortal - University Material Sharing Portal
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl text-center mb-12 max-w-2xl">
          Access slides, sheets, resources, and results from your department
        </p>

        {/* Login Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-base font-medium rounded-md transition-colors duration-200">
            Student Login
          </button>
          <button className="border border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-base font-medium rounded-md transition-colors duration-200">
            Admin Login
          </button>
          <button className="border border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-base font-medium rounded-md transition-colors duration-200">
            Guest Access
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Department-Based Access */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border border-gray-600 rounded-lg flex items-center justify-center">
              <Layers className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">
              Department-Based Access
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automatically filtered content based on your department
            </p>
          </div>

          {/* Course Materials */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border border-gray-600 rounded-lg flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">
              Course Materials
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Download slides, sheets, and access external resources
            </p>
          </div>

          {/* Results & Progress */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border border-gray-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">
              Results & Progress
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Track your academic performance and results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityPortal;
