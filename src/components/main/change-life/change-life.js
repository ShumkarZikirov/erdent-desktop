import './change-life.scss'
import smileDoctor from '../../../assets/images/smile-doctor.png'
import {useDispatch} from "react-redux";
const ChangeLife = () => {
  return(
      <div className={'changeLife'}>
          <div className={'changeLife-main'}>
              <div className={'changeLife-left'}>
                  <h3>Записаться</h3>
                  <p>Запишитесь на прием когда вы хотите и во сколько вы хотите! lorem ipsum i bla bla bla bla!</p>
                  <button >Запишитесь на прием</button>
              </div>
              <div className={'changeLife-right'}>
                  <img src={smileDoctor} alt=""/>
              </div>
          </div>
      </div>
  )
}
export default ChangeLife