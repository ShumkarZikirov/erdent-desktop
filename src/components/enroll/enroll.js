import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import {BsInfoCircle} from "react-icons/bs";
import {times} from "../../arrays/times";
import './enroll.scss'
import {useDispatch} from "react-redux";
import {getDateServices} from "../../services/enroll-services";


const Enroll = () => {
    const dispatch = useDispatch()
    const [value, onChange] = useState(new Date());
    const [time, setTime] = useState('');

    const postEnroll = async () => {
        const day = value.getDate()
        const month = value.getMonth()
        const year = value.getFullYear()
        try {
            await getDateServices({
                from_time: time,
                date: `${year}-${month}-${day}`,
                doctor: 2
            })
        } catch (error) {
            alert('error')
        }
    }
    return (
        <div className={'enroll'}>
            <div className={'enroll-main'}>
                <div className={'enroll-main__title'}>
                    <h3>Записаться</h3>
                    <h4>Выберите дату</h4>
                </div>
                <div className={'enroll-main__calendar '}>
                    <Calendar
                        className={'calendar'}
                        onChange={onChange}
                        value={value}
                        defaultView={"month"}
                        maxDetail={'month'}
                        minDetail={'month'}
                        next2Label={null}
                        prev2Label={null}/>
                </div>
                <div className={'enroll-main__info '}>
                    <p className={'enroll-main__info-icon'}><BsInfoCircle/></p>
                    <div>
                        <div>
                            <span className={'white'}></span>
                            <p>Свободно</p>
                        </div>
                        <div>
                            <span className={'yellow'}></span>
                            <p>Не подтверждено</p>
                        </div>
                        <div>
                            <span className={'blue'}></span>
                            <p>Записан(а)</p>
                        </div>
                        <div>
                            <span className={'red'}></span>
                            <p>Занято</p>
                        </div>
                    </div>
                </div>
                <div className={'enroll-main__times'}>
                    <h3>Выберите время</h3>
                    <div>
                        {
                            times.map((elem, index) => {
                                return (
                                    <div onClick={() => setTime(elem.min)} key={index}
                                         className={'enroll-main__times-block'}>
                                        <p>{elem.min}</p>
                                        <p>{elem.max}</p>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <button onClick={() => postEnroll()}>Записаться</button>
                </div>
            </div>
        </div>
    )
}

export default Enroll