import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import './us-doctors-main.scss'
import {detailsDoctor,getDoctorsAction} from "../../../redux/actions/global-action";
import {useDispatch, useSelector} from "react-redux";
import {getDoctors} from "../../../axios/enroll-rest";
const UsDoctorsMain = () => {

    const navigate = useNavigate()
    const { data,detailDoctor} = useSelector(state => state.globalReducer)
    const dispatch = useDispatch()
    const getDetail = async () =>{
        const data = await getDoctors()
        dispatch(getDoctorsAction(data.data))

    }
    useEffect(() => {
        getDetail()
    }, [])
    const detail = (id) =>{
        navigate(`/details`)
        dispatch(detailsDoctor(id))

        }
  return(
      <div className={'doctors'}>
          <div className={'doctors-main'}>
              <div className={'doctors-main__title'}>
                  <h1>Наши врачи</h1>
                  <p>Нашим специалистам доступны все новейшие методики лечения, имплантации и протезирования зубов</p>
              </div>
              <div className={'doctors-main__doctors'}>
                  {
                      data.map((elem,index) =>{
                          return(
                                   <div onClick={() => detail(elem.id)} className={'doctors-main__doctors-block'} key={index}>
                                       <img src={elem.photo} alt=""/>
                                       <p>{elem.username}</p>
                                       <p>{elem.specialization}</p>
                                   </div>
                          )
                      })
                  }
              </div>
          </div>
      </div>
  )
}
export default UsDoctorsMain