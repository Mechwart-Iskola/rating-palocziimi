import React, { useEffect, useState } from 'react'
import '../App.css'

const Card = () => {
    const [ActiveBtn, setActiveBtn] = useState(-1);
    const ratingValues: number[] = [1, 2, 3, 4, 5]

    const btnOnclick = (x:number) => {
        setActiveBtn(x)
        
    }

    

    return (

      <div className='container'>
          <div className='btn'><img src="../../images/icon-star.svg" alt="" /></div>
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appriciated to help us improve our offering.</p>
          <div className="btn-container">
            {
                ratingValues.map(x => (
                    <button key={x} className={
                        x == ActiveBtn ? "btn selected" : "btn"} 
                        onClick={() => btnOnclick(x)}>{x}</button>
                ))
            }
          </div>
          <button className="btn submit">SUBMIT</button>
      </div>
    )
}

export default Card