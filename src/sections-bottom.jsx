/* global React */
const { useState } = React;

function Examples() {
  const cards = [
    { n: 'Экспертиза сайта по ТЗ', body: 'Проведена проверка сайта на соответствие техническому заданию: структура, функциональные модули, роли пользователей, формы, интеграции и требования к доступам. Подготовлено заключение с поэлементной таблицей соответствия.',
      year: '2023 г.', cat: 'Экспертиза сайта', status: 'Принято судом' },
    { n: 'Спор по исходному коду', body: 'Сравнительный анализ двух версий репозитория показал прямое заимствование модулей, совпадение структуры и ключевых функций, включая историю коммитов и авторские правки.',
      year: '2024 г.', cat: 'Экспертиза ПО', status: 'Использовано в суде' },
    { n: 'Фиксация сайта для арбитража', body: 'Зафиксировано содержимое сайта и личного кабинета: страницы, метаданные, путь навигации и временные отметки. Подготовлен комплект для процессуального представления.',
      year: '2024 г.', cat: 'Экспертиза сайта', status: 'Приобщено к делу' },
    { n: 'Подмена финансовых файлов', body: 'По метаданным и журналам ОС установлено редактирование отчетных документов после даты их официальной отправки. Выявлена цепочка изменений и учетная запись пользователя.',
      year: '2025 г.', cat: 'Метаданные файлов', status: 'Принято судом' },
    { n: 'Установление дат создания PDF-документов', body: 'Исследованы внутренние метаданные PDF-файлов, сведения о генераторе документов, временные параметры создания и модификации. Установлены даты формирования документов и последовательность их появления.',
      year: '2025 г.', cat: 'Метаданные документов', status: 'Включено в правовую позицию' },
  ];
  return (
    <section className="section section--soft" id="examples">
      <div className="container">
        <div className="section-title"><h2>Примеры экспертиз</h2></div>
        <div className="examples__grid">
          {cards.map(c => (
            <div className="example-card" key={c.n}>
              <h3>{c.n}</h3>
              <div className="example-card__body">{c.body}</div>
              <div className="example-card__meta">
                <div className="example-card__row"><span className="k">Год исследования</span><span className="v">{c.year}</span></div>
                <div className="example-card__row"><span className="k">Категория</span><span className="v">{c.cat}</span></div>
                <div className="example-card__row"><span className="k">Статус</span><span className="v">{c.status}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: 'Будет ли заключение принято судом?',
      a: 'Да, при надлежащем оформлении. Исследование выполняется в соответствии с требованиями к компетенции эксперта, методике и обоснованности выводов. Окончательную оценку допустимости и достоверности даёт суд в каждом конкретном деле.' },
    { q: 'Можно ли провести экспертизу дистанционно?',
      a: 'В большинстве случаев - да. Материалы могут быть переданы по защищённому каналу либо почтовой отправкой с фиксацией целостности. Личная встреча требуется только при работе с носителями, которые нельзя отправлять.' },
    { q: 'Сколько времени занимает проведение экспертизы?',
      a: 'Срок зависит от объема материалов, количества вопросов и сложности объекта. В среднем досудебное исследование занимает от 5 рабочих дней, однако точный срок определяется после предварительного ознакомления с материалами.' },
    { q: 'Чем отличается досудебное и судебное заключение?',
      a: 'Судебное назначается судом, который самостоятельно определяет вопросы исследования. Досудебное готовится по инициативе стороны - заказчик сам формулирует вопросы, что позволяет охватить более широкий круг обстоятельств. Используется для формирования правовой позиции, направления претензий или представления в суд как письменное доказательство.' },
    { q: 'Что нужно для проведения экспертизы?',
      a: 'Для судебной экспертизы - определение суда, для досудебной - договор и согласованные вопросы, а также объекты исследования: устройства, копии, выгрузки, документы.' },
  ];
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-title"><h2>Вопросы и ответы</h2></div>
        <div className="faq">
          {items.map((it, i) => (
            <div className={`faq__item ${openIdx === i ? 'faq__item--open' : ''}`} key={i}>
              <button className="faq__q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="chev"><IconChevronDown/></span>
              </button>
              <div className="faq__a">
                <div className="faq__a-inner">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', msg: '', consent: false });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [k]: v });
    if (errs[k]) setErrs({ ...errs, [k]: null });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Укажите имя';
    if (!form.email.trim() && !form.phone.trim()) {
      e.email = 'Укажите email или телефон';
      e.phone = 'Укажите email или телефон';
    } else {
      if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Некорректный email';
    }
    if (!form.msg.trim()) e.msg = 'Опишите задачу';
    if (!form.consent) e.consent = 'Требуется согласие';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrs(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setForm({ name: '', email: '', phone: '', msg: '', consent: false });
      setTimeout(() => setSent(false), 6000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <form className="contact" onSubmit={submit} noValidate>
          <h2>Остались вопросы?</h2>
          <p className="sub">Отправьте Ваш запрос и получите бесплатную консультацию от эксперта</p>
          <div className="contact__grid">
            <div>
              <div className={`field ${errs.name ? 'field--error' : ''}`}>
                <label>Имя</label>
                <input value={form.name} onChange={update('name')} placeholder="Анастасия Александровна"/>
                {errs.name && <span className="field__err">{errs.name}</span>}
              </div>
              <div className={`field ${errs.email ? 'field--error' : ''}`} style={{marginTop: 16}}>
                <label>Электронная почта</label>
                <input type="email" value={form.email} onChange={update('email')}/>
                {errs.email && <span className="field__err">{errs.email}</span>}
              </div>
              <div className={`field ${errs.phone ? 'field--error' : ''}`} style={{marginTop: 16}}>
                <label>Телефон</label>
                <input value={form.phone} onChange={update('phone')}/>
                {errs.phone && <span className="field__err">{errs.phone}</span>}
              </div>
            </div>
            <div className="contact__right">
              <div className={`field ${errs.msg ? 'field--error' : ''}`} style={{flex: 1}}>
                <label>Сообщение</label>
                <textarea value={form.msg} onChange={update('msg')}/>
                {errs.msg && <span className="field__err">{errs.msg}</span>}
              </div>
              <label className="consent">
                <input type="checkbox" checked={form.consent} onChange={update('consent')}/>
                <span>
                  Я даю согласие на обработку своих персональных данных и подтверждаю, что ознакомлен(а) с <a href="privacy.html" className="inline-link">Политикой обработки персональных данных</a>.
                  {errs.consent && <span className="field__err" style={{display:'block', marginTop: 4}}>{errs.consent}</span>}
                </span>
              </label>
            </div>
            <div className="contact__submit">
              <button type="submit" className="btn btn--primary" style={{minWidth: 200}}>Отправить</button>
            </div>
            {sent && (
              <div className="contact__success" style={{gridColumn: '1 / -1'}}>
                <MIcon name="check_circle" size={20}/> Сообщение отправлено. Я свяжусь с вами в ближайшее время.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <div className="footer__brand">Экспертная практика<br/>Стрелков</div>
          </div>
          <div>
            <h5>Меню</h5>
            <ul className="footer__list">
              <li><a href="index.html#conclusions">Заключения</a></li>
              <li><a href="index.html#expert">Эксперт</a></li>
              <li><a href="index.html#advantages">Преимущества</a></li>
              <li><a href="index.html#process">Этапы</a></li>
              <li><a href="index.html#objects">Объекты</a></li>
              <li><a href="index.html#examples">Примеры</a></li>
              <li><a href="pricing.html">Стоимость</a></li>
              <li><a href="index.html#faq">Вопросы и ответы</a></li>
              <li><a href="index.html#contact">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h5>Контакты</h5>
            <div className="footer__contacts">
              <div className="footer__row footer__row--lg"><MIcon name="call" size={26}/><span className="big">+7 (999) 962-90-15</span></div>
              <div className="footer__row footer__row--lg"><MIcon name="mail" size={26}/><a href="mailto:rstrelkov@inbox.ru" className="email">rstrelkov@inbox.ru</a></div>
              <div style={{color:'var(--footer-ink-muted)', fontSize:13, marginTop: 4}}>Режим работы: 12:00-20:00, Пн-Пт.</div>
              <div className="footer__socials">
                <a className="footer__social" href="https://wa.me/79266100903"><span className="icon"><IconWhatsApp size={22}/></span>WhatsApp</a>
                <a className="footer__social" href="https://t.me/IT_Expert_strexpit"><span className="icon"><IconTelegram size={22}/></span>Telegram</a>
                <a className="footer__social" href="#"><span className="icon"><IconMax size={22}/></span>MAX</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div>© 2024–2026 г. <a href="privacy.html">Политика конфиденциальности</a></div>
          <div>ИП Стрелков Александрович · ИНН 091706875564 · ОГРНИП 325010000032740</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Examples, FAQ, Contact, Footer });
