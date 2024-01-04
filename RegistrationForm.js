
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    state: '',
    acknowledgement: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (formData.username.length < 4) {
      newErrors.username = 'Username must be at least 4 characters';
      valid = false;
    } else {
      newErrors.username = '';
    }

    // Add email validation logic (regex or any library)
    // ...

    if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(formData.password)) {
      newErrors.password =
        'Password must contain at least one number and one special character';
      valid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Display data in the table
      setSubmittedData({ ...formData });
    } else {
      console.log('Form has errors');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  return (
    <div className="container mt-5">
    <div className="row">
      {/* Left side: Form */}
      <div className="col-md-6">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.username}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.password}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">State:</label>
          <select
            className="form-select"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
          </select>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="acknowledgement"
            checked={formData.acknowledgement}
            onChange={handleChange}
          />
          <label className="form-check-label">Acknowledgement</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
        </div>
     
        <div className="col-md-6">
            <div className="shadow p-3 mb-5 bg-white rounded">
              {submittedData && (
                <div>
                  <h3>Submitted Data</h3>
                  {Object.keys(submittedData).length > 0 ? (
                    <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Username</th>
                          <th>Email</th>
                          <th>Password</th>
                          <th>State</th>
                          <th>Acknowledgement</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{submittedData.username}</td>
                          <td>{submittedData.email}</td>
                          <td>{submittedData.password}</td>
                          <td>{submittedData.state}</td>
                          <td>{submittedData.acknowledgement ? 'Yes' : 'No'}</td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                  ) : (
                    <p>No data submitted yet.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default RegistrationForm;

