import erdernt from '../../../assets/images/header-logo.png'
import './footer.scss'
const Footer = () => {
  return(
      <div className={'footer'}>
        <div className={'footer-main'}>
          <div className={'footer-left'}>
            <img src={erdernt} alt=""/>
              <p>Метэйри, Насирдина Исанова 52/2, Ош, Луизиана</p>
              <p>Свяжитесь с нами: +996 999-999-999</p>
              <div>
                  <li><i className="fa-brands fa-facebook-f"></i></li>
                  <li><i className="fa-brands fa-instagram"></i></li>
                  <li><i className="fa-brands fa-twitter"></i></li>
                  <li><i className="fa-brands fa-youtube"></i></li>
              </div>
          </div>
          <div className={'footer-left-center'}>
                <h5>Категории</h5>
              <li>Главная</li>
              <li>Касательно</li>
              <li>Услуги</li>
              <li>Обзоры</li>
              <li>Статья</li>
          </div>
          <div className={'footer-right-center'}>
              <h5>Относительно</h5>
              <li>Партнеры</li>
              <li>Карьеры</li>
              <li>Пресс</li>
              <li>Сообщество</li>
          </div>
          <div className={'footer-right'}>
              <h5>Подписаться на рассылку новостей</h5>
              <p>Подпишитесь на советы, новые направления и эксклюзивные промоакции.</p>
              <form action="erdent/src/components/main/footer/footer#">
                  <input type="text" placeholder={'Введите свой email'}/>
                  <button>подписаться</button>
              </form>
          </div>
        </div>
      </div>
  )
}
export default Footer