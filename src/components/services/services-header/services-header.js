import './services.scss'
import doctors from '../../../assets/images/doctors-girl.png'
const ServicesHeader = () => {
  return(
      <div className={'servicesHeader'}>
          <div className={'servicesHeader-main'}>
              <p>Erdent</p>
              <h2>Услуги</h2>
              <div className={'servicesHeader-main-block'}>
                  <img src={doctors} alt=""/>
              </div>
          </div>
      </div>
  )
}
export default ServicesHeader