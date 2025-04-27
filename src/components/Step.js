import React, { useState } from 'react'

function Step({handlePrevious,handleNext,currentStep,data,setData}) {

    const [errors, setErrors] = useState({})
     
    function handleCardInfoChange(e){
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        let errorMessage = '';
        if (name === 'card_info' && value.length !== 12) {
            errorMessage = 'Credit card number must be exactly 12 digits long.';
          }

        if(name=== 'expiry_date' && !/^\d{2}\/\d{2}$/.test(value)){
            errorMessage = 'Expiration date must be in the format MM/YY';
        }
        setErrors({ ...errors, [name]: errorMessage });
    }
    
  return (
    <div>
        {
            currentStep===2 &&(
            <div id='step2' >
                <h2>Car details</h2>
          <div>
            <label >Car Model:</label><br />
            <input type="text" name="model" id="model"  value={data.model} onChange={(e) => setData({ ...data, model: e.target.value })}  /><br />
            <label >Car Price:</label><br />
            <input type="number" name="car_price" id="car_price" value={data.car_price} onChange={(e) => setData({ ...data, car_price: e.target.value })}   /><br />
            <button type="button" onClick={handlePrevious}  >Previous</button>
            <button type="button" onClick={handleNext}  >Next</button>
          </div>
            </div>
            
            )
        }

          { currentStep===3 &&
            <div id='step3' >
            <h2>Card details</h2>
            <div>
              <label >Card Info:</label><br />
              <input type="number" name="card_info" id="card_info"  value={data.card_info} onChange={handleCardInfoChange}  /><br />
              {errors.card_info && <span style={{ color: 'red' }}>{errors.card_info}</span>}<br />
              <label >Expiration Date:</label><br /> 
              <input type="text" name="expiry_date" id="expiry_date"  value={data.expiry_date} onChange={handleCardInfoChange}    /><br />
              {errors.expiry_date && <span style={{ color: 'red' }}>{errors.expiry_date}</span>}<br />
              <button type="button" onClick={handlePrevious}  >Previous</button>
              <button type="submit"    >Submit</button>
            </div>
            </div>
          }
    </div>
  )
}

export default Step