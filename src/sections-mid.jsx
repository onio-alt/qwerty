/* global React */
const { useState, useRef, useEffect } = React;

function Expert({ onOpenLightbox }) {
  const [idx, setIdx] = useState(0);

  const slides = [
    { type: 'img', src: 'assets/certificate-diploma.jpg', alt: 'Диплом специалиста' },
    { type: 'img', src: 'assets/diplom-perepodgotovka.jpg', alt: 'Диплом о профессиональной переподготовке' },
    { type: 'img', src: 'assets/diplom-perepodgotovka2.jpg', alt: 'Диплом о профессиональной переподготовке' },
    { type: 'img', src: 'assets/sertificate.jpg', alt: 'Сертификат' },
  ];
  const total = slides.length;
  const go = (i) => setIdx((i + total) % total);

  return (
    <section className="section" id="expert">
      <div className="container">
        <div className="expert__badge"><MIcon name="badge" size={22}/></div>
        <h2 style={{marginBottom: 48}}>Сведения об эксперте</h2>

        <div className="expert__grid">
          <div className="expert__bio">
            <div className="expert__head">
              <div className="expert__photo">
                <img src="assets/expert-photo.jpg" alt="Родион Александрович Стрелков"/>
              </div>
              <div>
                <div className="expert__name">Родион Александрович Стрелков</div>
                <div className="expert__role">Независимый судебный эксперт</div>
                <a href="#contact" className="btn btn--primary" style={{padding: '10px 22px', fontSize: 14}}>
                  Написать эксперту
                </a>
              </div>
            </div>

            <div className="expert__section">
              <h4><MIcon name="school" size={20}/> Образование</h4>
              <p>Высшее техническое - МГТУ им. Н.Э. Баумана, специальность «Судебная экспертиза», квалификация - судебный эксперт.</p>
            </div>

            <div className="expert__section">
              <h4>Профессиональный опыт</h4>
              <p>Более семи лет экспертной практики. Готовлю заключения для арбитражных судов и судов общей юрисдикции, участвую в заседаниях в качестве специалиста и эксперта.</p>
              <p>Работаю с цифровыми доказательствами для судов, адвокатов, организаций и частных лиц: помогаю установить факты, подтвердить позицию и представить выводы в понятном процессуальном формате.</p>
            </div>
          </div>

          <div className="carousel">
            <div className="carousel__label">Документы и сертификаты</div>
            <div className="carousel__viewport">
              <div
                className="carousel__track"
                style={{ transform: `translateX(-${idx * 100}%)` }}
              >
                {slides.map((s, i) => (
                  <div className="carousel__slide" key={i}>
                    {s.type === 'img' ? (
                      <img
                        src={s.src}
                        alt={s.alt}
                        onClick={() => onOpenLightbox && onOpenLightbox(s.src)}
                      />
                    ) : (
                      <div className="cert-placeholder">[ {s.label} ]</div>
                    )}
                  </div>
                ))}
              </div>
              <button className="carousel__btn carousel__btn--prev" aria-label="Назад" onClick={() => go(idx - 1)}>
                <IconChevronLeft/>
              </button>
              <button className="carousel__btn carousel__btn--next" aria-label="Вперёд" onClick={() => go(idx + 1)}>
                <IconChevronRight/>
              </button>
            </div>
            <div className="carousel__dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`carousel__dot ${i === idx ? 'carousel__dot--active' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Слайд ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  const items = [
    { icon: 'fact_check',      title: 'Процессуальная корректность',
      body: 'Заключения оформляются в строгом соответствии с процессуальными требованиями - так, чтобы суд принял их без замечаний.' },
    { icon: 'forum',           title: 'Экспертиза без посредников',
      body: 'Вы общаетесь напрямую с экспертом: быстрее уточняете детали, точнее формулируете вопросы и получаете выводы без потери смысла между исполнителями.' },
    { icon: 'account_balance', title: 'Судебная практика',
      body: 'Заключения используются в судах общей юрисдикции и арбитражных судах, а также в досудебной подготовке по гражданским и уголовным делам - и принимаются судами в качестве доказательств.' },
    { icon: 'language',        title: 'Работа по всей России',
      body: 'Работаю как очно, так и дистанционно с клиентами из любого региона России.' },
    { icon: 'memory',          title: 'Современные методики',
      body: 'Применяю специализированные инструменты цифровой криминалистики, обеспечивающие точность и воспроизводимость результатов исследования.' },
  ];
  return (
    <section className="section section--soft" id="advantages">
      <div className="container">
        <div className="section-title"><h2>Почему выбирают меня?</h2></div>
        <div className="advantages__grid">
          {items.map((it, i) => (
            <div className="advantage" key={i}>
              <h3><MIcon name={it.icon} size={22}/>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { title: 'Первичная консультация',
      body: ['Определяем, какие факты важно подтвердить, какие материалы нужны и какую пользу заключение даст для вашей позиции.'] },
    { title: 'Формирование вопросов экспертизы',
      body: ['Помогаю сформулировать вопросы так, чтобы на них можно было ответить экспертным путём и использовать ответы в деле.'] },
    { title: 'Исследование материалов',
      body: ['Выявляю технические признаки, временные последовательности и существенные факты, которые имеют значение для спора.'] },
    { title: 'Подготовка заключения',
      body: ['Оформляю мотивированное письменное заключение с понятными выводами по каждому поставленному вопросу.'] },
    { title: 'Участие в судебном заседании (при необходимости)',
      body: ['При необходимости разъясняю суду выводы, методику и значение выявленных признаков для рассматриваемого спора.'] },
  ];
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-title"><h2>Этапы исследования</h2></div>
        <div className="process">
          <div className="process__list">
            {steps.map((s, i) => (
              <div className="step" key={i}>
                <div className="step__num">{i + 1}</div>
                <div className="step__body">
                  <div className="step__title">{s.title}</div>
                  {s.body.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Objects() {
  const cards = [
    { icon: 'desktop_windows', title: 'Компьютерно-техническая', body: 'Помогает установить действия пользователя, изменения данных и технические причины спорной ситуации.' },
    { icon: 'devices_other',   title: 'Мобильные устройства',   body: 'Позволяет подтвердить переписку, активность приложений и следы использования устройства.' },
    { icon: 'hard_drive',      title: 'HDD и SSD',              body: 'Показывает историю удаления, копирования, изменения данных и состояние носителя.' },
    { icon: 'forum',           title: 'Переписка',              body: 'Помогает зафиксировать содержание сообщений, участников, время и признаки подлинности.' },
    { icon: 'mail',            title: 'Электронная почта',      body: 'Позволяет проверить отправку, получение, вложения и технические признаки сообщения.' },
    { icon: 'cloud',           title: 'Облачное хранилище',     body: 'Помогает установить структуру данных, свойства файлов и следы действий в облачном сервисе.' },
  ];
  return (
    <section className="section section--soft" id="objects">
      <div className="container">
        <div className="section-title"><h2>Экспертизы по объектам<br/>исследования</h2></div>
        <div className="objects__grid">
          {cards.map((c, i) => (
            <div className="object-card" key={i}>
              <div className="object-card__icon"><MIcon name={c.icon} size={32} weight={300}/></div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <a href="pricing.html" className="btn btn--primary">Смотреть все объекты</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Expert, Advantages, Process, Objects });
