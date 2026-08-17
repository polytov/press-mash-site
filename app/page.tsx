const models = [
  {
    name: "ПРЕСС 35 Т",
    purpose: "СТО, ремонт спецтехники, выпрессовка втулок и пальцев",
    force: "35 тонн",
    stroke: "до 600 мм",
    drive: "электрогидравлический",
  },
  {
    name: "ПРЕСС 50 Т",
    purpose: "ремонтные цеха, сельхозтехника, металлообработка",
    force: "50 тонн",
    stroke: "до 600 мм",
    drive: "электрогидравлический",
  },
  {
    name: "ПРЕСС 100 Т",
    purpose: "тяжелые узлы, производство, крупные посадки",
    force: "100 тонн",
    stroke: "до 600 мм",
    drive: "насосная станция",
  },
  {
    name: "ПР-35",
    purpose: "протяжной станок для шпоночных пазов и посадочных мест",
    force: "35 тонн",
    stroke: "рабочий",
    drive: "гидравлический",
  },
];

const advantages = [
  "Рабочее давление до 260 бар",
  "Регулируемая рабочая зона",
  "Большой ход штока",
  "Отдельная гидростанция",
  "Сборка под задачу заказчика",
  "Доставка по России",
];

const applications = [
  "СТО и грузовой сервис",
  "ремонт спецтехники",
  "сельхозтехника",
  "металлообработка",
  "производственные участки",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero__shade" />
        <nav className="nav" aria-label="Главная навигация">
          <a className="brand" href="#top" aria-label="ПРЕССМАШ">
            <span className="brand__mark">ПМ</span>
            <span>ПРЕССМАШ</span>
          </a>
          <div className="nav__links">
            <a href="#models">Модели</a>
            <a href="#specs">Характеристики</a>
            <a href="#request">Заявка</a>
          </div>
        </nav>

        <div className="hero__content">
          <p className="eyebrow">Производство и поставка по России</p>
          <h1>Гидравлические прессы 35 / 50 / 100 тонн</h1>
          <p className="hero__lead">
            Подберем пресс или протяжной станок ПР-35 под вашу задачу:
            усилие, ход штока, рабочая зона, гидростанция и оснастка.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#request">
              Получить расчет
            </a>
            <a className="button button--ghost" href="#media">
              Смотреть оборудование
            </a>
          </div>
          <dl className="hero__stats" aria-label="Ключевые характеристики">
            <div>
              <dt>260 бар</dt>
              <dd>рабочее давление</dd>
            </div>
            <div>
              <dt>600 мм</dt>
              <dd>ход штока</dd>
            </div>
            <div>
              <dt>4 модели</dt>
              <dd>в типовой линейке</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section--intro">
        <div className="section__head">
          <p className="eyebrow">В наличии и под заказ</p>
          <h2>Оборудование для ремонтных и производственных задач</h2>
        </div>
        <div className="intro__text">
          <p>
            Страница собрана как техническая витрина: минимум лишней анимации,
            максимум понятных параметров, фотографий, сфер применения и быстрой
            заявки на расчет.
          </p>
        </div>
      </section>

      <section className="section" id="models">
        <div className="section__head">
          <p className="eyebrow">Модельный ряд</p>
          <h2>Выберите пресс по усилию и задаче</h2>
        </div>
        <div className="model-grid">
          {models.map((model) => (
            <article className="model-card" key={model.name}>
              <span>{model.force}</span>
              <h3>{model.name}</h3>
              <p>{model.purpose}</p>
              <dl>
                <div>
                  <dt>Ход штока</dt>
                  <dd>{model.stroke}</dd>
                </div>
                <div>
                  <dt>Привод</dt>
                  <dd>{model.drive}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="section specs" id="specs">
        <div className="section__head">
          <p className="eyebrow">Сравнение</p>
          <h2>Технические характеристики</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Модель</th>
                <th>Усилие</th>
                <th>Ход штока</th>
                <th>Привод</th>
                <th>Применение</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr key={model.name}>
                  <th>{model.name}</th>
                  <td>{model.force}</td>
                  <td>{model.stroke}</td>
                  <td>{model.drive}</td>
                  <td>{model.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="media" id="media">
        <div className="media__image" aria-label="Гидравлический пресс в цеху" />
        <div className="media__content">
          <p className="eyebrow">Фото и видео</p>
          <h2>Покажите станок в работе</h2>
          <p>
            Для заявки важны реальные кадры: общий вид пресса, насосная
            станция, ход штока, рабочая зона и короткое видео с усилием на
            детали. Блок уже подготовлен под ролики с VK Видео или RuTube.
          </p>
          <div className="video-box">
            <span>▶</span>
            <div>
              <strong>Видео оборудования</strong>
              <small>30-60 секунд: задача, усилие, результат, контакты</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Где применяются</p>
          <h2>Для цехов, сервиса и производства</h2>
          <div className="chips">
            {applications.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="advantages">
          {advantages.map((item) => (
            <div key={item}>
              <span>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="request" id="request">
        <div>
          <p className="eyebrow">Расчет под задачу</p>
          <h2>Оставьте заявку на подбор пресса</h2>
          <p>
            Укажите модель, город и задачу. Менеджер уточнит размеры деталей,
            требуемое усилие, оснастку и сроки поставки.
          </p>
        </div>
        <form className="form">
          <label>
            Имя
            <input type="text" name="name" placeholder="Александр" />
          </label>
          <label>
            Телефон
            <input type="tel" name="phone" placeholder="+7 (___) ___-__-__" />
          </label>
          <label>
            Модель
            <select name="model" defaultValue="">
              <option value="" disabled>
                Выберите модель
              </option>
              {models.map((model) => (
                <option key={model.name}>{model.name}</option>
              ))}
            </select>
          </label>
          <label>
            Комментарий
            <textarea
              name="comment"
              placeholder="Что нужно прессовать, город, желаемые сроки"
            />
          </label>
          <button className="button button--primary" type="submit">
            Отправить заявку
          </button>
        </form>
      </section>
    </main>
  );
}
