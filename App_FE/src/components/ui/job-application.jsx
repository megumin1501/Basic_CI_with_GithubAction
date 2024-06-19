import React from 'react';

function JobApplication() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">IT Job Application</h1>
        </header>
        <main>
          <form>
            <div className="form-group mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position:</label>
              <select id="position" name="position" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                <option value="">Select a position</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Fullstack Developer</option>
              </select>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience:</label>
              <input type="number" id="experience" name="experience" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills:</label>
              <input type="text" id="skills" name="skills" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Upload Resume:</label>
              <input type="file" id="resume" name="resume" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded">Apply</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default JobApplication;
