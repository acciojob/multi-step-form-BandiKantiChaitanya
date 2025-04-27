import React, { useState } from 'react'
import Step from './Step';

const App = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "", 
  });
  

  const handleChange = (event) => {
    const {id, value} = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };
 
  const handleSubmit = () => {
    alert('Form submitted!');
    console.log(formData);
  };


  return (
    <div>
      <h1>Multi-Step Form</h1>
      <Step
        step={currentStep} 
        formData={formData}
        onChange={handleChange}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSubmit={handleSubmit}
      />

    </div>
  );
};

export default App