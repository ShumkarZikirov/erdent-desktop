import './about-header.scss'
import img1 from '../../../assets/images/about-doctor1.png'
import img2 from '../../../assets/images/about-doctor2.png'

const AboutHeader = () => {
    return (
        <div className={'aboutHeader'}>
            <div className={'aboutHeader-main'}>
                <div className={'aboutHeader__left'}>
                    <img src={img1} alt=""/>
                </div>
                <div className={'aboutHeader__center'}>
                    <h3>О нашей клинике</h3>
                    <p>В наших отделениях можно получить консультацию специалистов как самых востребованных, так и
                        достаточно редких стоматологических направлений, что позволяет решить большинство
                        стоматологических вопросов за одно посещение. </p>
                    <button>Читать больше</button>
                </div>
                <div className={'aboutHeader__right'}>
                    <img src={img2} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default AboutHeader