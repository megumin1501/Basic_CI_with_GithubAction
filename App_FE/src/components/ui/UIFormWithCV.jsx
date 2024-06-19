import React from 'react';

function UIFormWithCV() {
  return (
    <div className="app-container">
      <header>
        <h1>IT Job Application</h1>
      </header>
      <main>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <select id="position" name="position" required>
              <option value="">Select a position</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Fullstack Developer</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="experience">Years of Experience:</label>
            <input type="number" id="experience" name="experience" required />
          </div>
          <div className="form-group">
            <label htmlFor="skills">Skills:</label>
            <input type="text" id="skills" name="skills" required />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Upload Resume:</label>
            <input type="file" id="resume" name="resume" required />
          </div>
          <button type="submit">Apply</button>
        </form>
      </main>
    </div>
  );
}

export default UIFormWithCV;
