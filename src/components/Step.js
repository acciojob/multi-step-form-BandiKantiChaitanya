import React from "react";

function Step({ step, formData, onChange, onNext, onPrevious, onSubmit }) {
    return (
      <div>
        <div id="step1" style={{ display: step === 1 ? 'block' : 'none' }}>
          <h2>Step 1: Personal Information</h2>
          <label>
            First Name:
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={onChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={onChange}
            />
          </label>
          {/* Add Next button for Step 1 */}
          <button type="button" onClick={onNext}>Next</button>
        </div>
   
        <div id="step2" style={{ display: step === 2 ? 'block' : 'none' }}>
          <h2>Step 2: Car Information</h2>
          <label>
            Car Model:
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={onChange}
            />
          </label>
          <br />
          <label>
            Car Price:
            <input
              type="text"
              id="car_price"
              value={formData.car_price}
              onChange={onChange}
            />
          </label>
          {/* Add Previous and Next buttons for Step 2 */}
          <button type="button" onClick={onPrevious}>Previous</button>
          <button type="button" onClick={onNext}>Next</button>
        </div>
   
        <div id="step3" style={{ display: step === 3 ? 'block' : 'none' }}>
          <h2>Step 3: Payment Information</h2>
          <label>
            Card Information:
            <input
              type="text"
              id="card_info"
              value={formData.card_info}
              onChange={onChange}
            />
          </label>
          <br />
          <label>
            Expiry Date:
            <input
              type="text"
              id="expiry_date"
              value={formData.expiry_date}
              onChange={onChange}
            />
          </label>
          {/* Add Previous and Submit buttons for Step 3 */}
          <button type="button" onClick={onPrevious}>Previous</button>
          <button type="button" onClick={onSubmit}>Submit</button>
        </div>
      </div>
    );
  }
  export default Step;