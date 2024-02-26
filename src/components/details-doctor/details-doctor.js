import React from 'react';
import {useSelector} from "react-redux";
import {findAllByDisplayValue} from "@testing-library/react";

const DetailsDoctor = () => {
    const { detailDoctor} = useSelector(state => state.globalReducer)
  return(
      <div>
          {
              detailDoctor.map((elem,index) => {
                  return(
                      <div>
                          <img src={elem.photo} alt=""/>
                      </div>
                  )
              })
          }
      </div>
  )
}
export default DetailsDoctor;

