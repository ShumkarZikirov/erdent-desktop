import ServicesHeader from "../../components/services/services-header";
import ServicesErdent from "../../components/about-us/services-erdent";
import { useLocation } from 'react-router-dom';
const Services = () => {
    const location = useLocation()
  return(
      <div>
          <ServicesHeader/>
          <div style={{backgroundColor:'#F1F1F1'}}>
              <ServicesErdent/>
          </div>
      </div>
  )
}
export default Services