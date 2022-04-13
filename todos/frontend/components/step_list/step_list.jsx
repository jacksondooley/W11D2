import React from 'react';

const StepList = ({ steps, todo_id}) => {
  return(
    <div>
      <ul>
      {steps.map((step) => {
        return <li>{step.title}</li>
      })}
      </ul>
      <form>
      </form>
    </div>
  )
}

export default StepList;