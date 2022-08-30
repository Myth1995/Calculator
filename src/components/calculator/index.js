import React, { useState } from "react";
import "./index.css";

export default function Calculator() {

  const [performCount, setPerformCount] = useState(0);  // Total operations performed count

  const [input1, setInput1] = useState('');  // Input field 1
  const [input2, setInput2] = useState('');  // Input field 2

  const [operator, setOperator] = useState('+');  // Operator - 1: add, 2: sub, 3: mul, 4: div

  const [resultOperation, setResultOperation] = useState(null); // Result Show

  // Calculate result with operatorId
  const calcResult = (optId) => {
    let result = 0;
    if(input1 === '' || input2 === '') {
      return;
    }
    //set operator
    switch(optId) {
      case 1:
        setOperator('+');
        result = input1 + input2;
        break;
      case 2:
        setOperator('-');
        result = input1 - input2;
        break;
      case 3:
        setOperator('*');
        result = input1 * input2;
        break;
      case 4:
        setOperator('/');
        result = input1 / input2;
        break;
      default:
        setOperator('+');
        result = input1 + input2;
        break;
    }
    result = "Result: " + result;
    setResultOperation(result);
    setPerformCount(performCount + 1);
  }

  // Format all values and operators
  const resetValue = () => {
    setPerformCount(1);
    setInput1('');
    setInput2('');
    setOperator('+');
    setResultOperation(null);
  }

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">Total operations performed: {performCount}</div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                  name="input1" value={input1} onChange={(e)=>{
                    setInput1(Number(e.target.value));
                  }}/>
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{operator}</label>
            <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3" placeholder="Eg: 2" 
                  name="input2" value={input2} onChange={(e)=>{
                    setInput2(Number(e.target.value));
                  }}/>
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button className="operationFont" type="submit" data-testid="addButton" onClick={()=>{ calcResult(1); }}>+</button>
            <button className="operationFont" type="submit" data-testid="subtractButton" onClick={()=>{ calcResult(2); }}>-</button>
            <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={()=>{ calcResult(3); }}>*</button>
            <button className="operationFont" type="submit" data-testid="divideButton" onClick={()=>{ calcResult(4); }}>/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button type="reset" data-testid="resetButton" className="outline danger" onClick={(e)=>{
              resetValue();
            }}>Reset</button>
            <div className="layout-row justify-content-center align-items-center result-container">
              {
                resultOperation ? 
                <div data-testid="result" className="result-value ma-0 slide-up-fade-in">{resultOperation}</div> : null
              }
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}