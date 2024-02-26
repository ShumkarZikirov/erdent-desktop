import doctor1 from '../../../assets/images/doctor1.png'
import doctor2 from '../../../assets/images/doctor2.png'
import doctor3 from '../../../assets/images/doctor3.png'
import doctor4 from '../../../assets/images/doctor4.png'
import fc from '../../../assets/images/Fb.png'
import tw from '../../../assets/images/Tw.png'
import inl from '../../../assets/images/Ld.png'
import './online.scss'
const OnlineDoctor = () => {
  return(
      <div className={'onlineDoctor'}>
          <div className={'onlineDoctor-main'}>
              <div className={'onlineDoctor-tittle'}>
                  <h5>Наши врачи</h5>
              </div>
              <div className={'onlineDoctor-p'}>
                  <p>Наши онлайн-врачи имеют в среднем 15-летний опыт работы и рейтинг удовлетворенности 98%, они действительно выделяют нас!</p>
              </div>
              <div className={'onlineDoctor-doctors'}>
                  <div className={'display'}>
                      <img className={'doctor'} src={doctor1} alt=""/>
                      <h6>Dr Amanda Linda </h6>
                      <p>Dentist Specilist</p>
                      <div>
                          <img src={fc} alt=""/>
                          <img src={tw} alt=""/>
                          <img src={inl} alt=""/>
                      </div>
                  </div>
                  <div>
                      <img src={doctor2} alt=""/>
                      <h6>Dr. Alisa Rahman</h6>
                      <p>Carddiologist Specilist</p>
                      <div>
                          <img src={fc} alt=""/>
                          <img src={tw} alt=""/>
                          <img src={inl} alt=""/>
                      </div>
                  </div>
                  <div>
                      <img src={doctor3} alt=""/>
                      <h6>Dr. Anthony Fauci</h6>
                      <p>Neurology Specilist</p>
                      <div>
                          <img src={fc} alt=""/>
                          <img src={tw} alt=""/>
                          <img src={inl} alt=""/>
                      </div>
                  </div>
                  <div>
                      <img className={'doctor'} src={doctor4} alt=""/>
                      <h6>Dr. Khalid Abbed</h6>
                      <p>Cancer Specilist</p>
                      <div>
                          <img src={fc} alt=""/>
                          <img src={tw} alt=""/>
                          <img src={inl} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default OnlineDoctor