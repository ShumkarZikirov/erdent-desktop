import './services.scss'
import {servicesIcons} from "../../../arrays/services-icons";
const ServicesErdent = () => {
    return (
        <div  className={'servicesErdent'}>
            <div className={'servicesErdent__main'}>
                <div className={'servicesErdent__top'}>
                    <p>Erdent</p>
                    <h3>Услуги</h3>
                </div>
                <div className={'servicesErdent__main-list'}>
                    {
                        servicesIcons.map((elem,id) => {
                            return(
                                <div key={id} className={'main-list-block'}>
                                    <img src={elem.img} alt=""/>
                                    <div>
                                        <h3>{elem.title}</h3>
                                        <p>{elem.param}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
)
}
export default ServicesErdent