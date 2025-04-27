
import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {

  const [currentStep, setCurrentStep] = useState(1); 
  // let [previous,setPrevious]=useState(false)
  // let [next,setNext]=useState(false)
  let [data,setData]=useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  })

  function handlePrevious(){
    // setPrevious(true)
    if(currentStep>1) setCurrentStep(currentStep -1)
  }

  function handleNext(){
  // setNext(true)
  if (currentStep < 3) setCurrentStep(currentStep + 1);
  // console.log(currentStep)
  }

  function handleSubmit(e){
    e.preventDefault()
    setData(
      {
        first_name:e.target.first_name.value,
        last_name:e.target.last_name.value,
        model:e.target.model.value,
        car_price:e.target.car_price.value,
        card_info:e.target.card_info.value,
        expiry_date:e.target.expiry_date.value
      }
    )
    console.log(data)
  }


  return (
    <div>
        {/* Do not remove the main div */}
        <form action="" onSubmit={handleSubmit} >
          {
            currentStep===1 &&
            <div id="step1" >
          <h2>Customer details</h2>
          <div>
            <label >First Name:</label><br />
            <input type="text" name="first_name" id="first_name" value={data.first_name} onChange={(e) => setData({ ...data, first_name: e.target.value })} /><br />
            <label >Last Name:</label><br />
            <input type="text" name="last_name" id="last_name" value={data.last_name} onChange={(e) => setData({ ...data, last_name: e.target.value })}  /><br />
            <button type="button" disabled={currentStep===1}  >Previous</button>
            <button type="button" onClick={handleNext} >Next</button>
          </div>
          </div>
          }
          {
            currentStep>1 && currentStep < 4 && 
            <Step handlePrevious={handlePrevious}  handleNext={handleNext} currentStep={currentStep} data={data} setData={setData} />
          } 
        </form>
    </div>
  )
}

export default App
