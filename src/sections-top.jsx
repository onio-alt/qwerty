/* global React */
const { useState, useEffect } = React;

const NAV_ITEMS = [
  { href: 'index.html#conclusions', label: 'Заключения' },
  { href: 'index.html#expert', label: 'Эксперт' },
  { href: 'index.html#objects', label: 'Объекты' },
  { href: 'pricing.html', label: 'Стоимость' },
  { href: 'index.html#contact', label: 'Контакты' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <React.Fragment>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner">
          <a href="index.html#top" className="brand">
            <span className="brand__caption">Экспертная практика</span>
            <span className="brand__name">Стрелков</span>
          </a>

          <nav className="nav">
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="header__contact">
            <a href="mailto:rstrelkov@inbox.ru" className="email">rstrelkov@inbox.ru</a>
            <span className="phone">+7 (999) 962-90-15</span>
          </div>

          <a href="tel:+79999629015" className="header__call" aria-label="Позвонить">
            <img src="assets/icon-call.svg" alt="" width="22" height="22"/>
          </a>

          <div className="header__socials">
            <a href="https://wa.me/79266100903" aria-label="WhatsApp"><img src="assets/icon-whatsapp.svg" alt="" width="20" height="20"/></a>
            <a href="https://t.me/IT_Expert_strexpit" aria-label="Telegram"><img src="assets/icon-telegram.svg" alt="" width="20" height="20"/></a>
            <a href="#" aria-label="MAX"><img src="assets/icon-max.svg" alt="" width="20" height="20"/></a>
          </div>

          <button className="burger" aria-label="Открыть меню" onClick={() => setOpen(true)}>
            <IconMenu/>
          </button>
        </div>
      </header>

      <div className={`drawer ${open ? 'drawer--open' : ''}`} aria-hidden={!open}>
        <div className="drawer__top">
          <span className="brand">Экспертная практика<br/>Стрелков</span>
          <button className="drawer__close" aria-label="Закрыть" onClick={() => setOpen(false)}>
            <IconClose/>
          </button>
        </div>
        <nav className="drawer__nav">
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <div className="drawer__contact">
          <a href="mailto:rstrelkov@inbox.ru" className="inline-link">rstrelkov@inbox.ru</a>
          <strong>+7 (999) 962-90-15</strong>
          <div className="header__socials" style={{display: 'flex'}}>
            <a href="https://wa.me/79266100903" aria-label="WhatsApp"><img src="assets/icon-whatsapp.svg" alt="" width="20" height="20"/></a>
            <a href="https://t.me/IT_Expert_strexpit" aria-label="Telegram"><img src="assets/icon-telegram.svg" alt="" width="20" height="20"/></a>
            <a href="#" aria-label="MAX"><img src="assets/icon-max.svg" alt="" width="20" height="20"/></a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Hero({ variant = 'default' }) {
  return (
    <section className={`hero ${variant !== 'default' ? `hero--${variant}` : ''}`} id="top">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <h1>Компьютерно-<br/>техническая<br/>экспертиза</h1>
            <p>Исследование цифровых данных и подготовка заключений для судебных и досудебных процессов</p>
            <a href="#contact" className="btn btn--primary">Получить консультацию</a>
          </div>
          <div className="hero__image">
            <img src="assets/hero-fingerprint.jpg" alt="Цифровой отпечаток на микросхеме"/>
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { icon: 'forum',           label: 'Работа с экспертом без посредников' },
  { icon: 'fact_check',      label: 'Правовая корректность заключений' },
  { icon: 'memory',          label: 'Современные методы исследований' },
  { icon: 'account_balance', label: 'Заключения принимаются судами' },
];

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {STATS.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat__icon"><MIcon name={s.icon} size={30} weight={300}/></div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Conclusions() {
  const items = [
    {
      title: 'Досудебное заключение',
      body: 'Готовится по инициативе одной из сторон до назначения судебной экспертизы. Помогает сформировать правовую позицию, направить претензию, подготовить ходатайства, оценить перспективы дела и представить письменное доказательство в суд.',
    },
    {
      title: 'Судебное заключение',
      body: 'Назначается судом и имеет доказательственную силу в рамках процесса. Эксперт исследует цифровые объекты, документы, файлы, переписку, сайты и журналы событий - и отвечает на каждый вопрос суда развёрнутым обоснованным выводом. Заключение, как правило, оказывает решающее влияние на исход дела.',
    },
    {
      title: 'Рецензия на заключение',
      body: 'Нужна, когда требуется проверить или оспорить заключение эксперта другой стороны. Выявляет методические и процессуальные недостатки, несоответствие выводов исходным данным - и служит аргументом для защиты правовой позиции.',
    },
  ];
  return (
    <section className="section section--soft" id="conclusions">
      <div className="container">
        <div className="section-title">
          <h2>Виды экспертных документов</h2>
        </div>
        <div className="conclusions__grid">
          {items.map((it, i) => (
            <div className="conclusion-col" key={i}>
              <h3><span className="arrow"><IconArrow size={18}/></span>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
        <div className="conclusions__cta">
          <a href="#contact" className="btn btn--primary">Заказать исследование</a>
        </div>
      </div>
    </section>
  );
}

function Helps() {
  const cols = [
    { title: 'Частным лицам',         icon: 'verified_user', items: ['зафиксировать цифровые доказательства', 'подтвердить подлинность файлов, переписки и документов', 'обратиться в суд или правоохранительные органы с подготовленной доказательной базой'] },
    { title: 'Адвокатам и юристам',    icon: 'balance',       items: ['сформулировать корректные вопросы на экспертизу', 'получить независимое заключение для формирования правовой позиции', 'проверить и оспорить спорное экспертное заключение'] },
    { title: 'Организациям и бизнесу', icon: 'manage_search', items: ['исследовать сайты, ПО, служебную переписку и цифровые следы действий сотрудников', 'установить факты изменений файлов и цифровых документов', 'сформировать доказательную базу для корпоративного или судебного спора'] },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>Решаемые задачи</h2>
        </div>
        <div className="helps__grid">
          {cols.map((c, i) => (
            <div className="helps-col" key={i}>
              <h3>
                <span className="material-symbols-outlined helps-col__icon" aria-hidden="true">{c.icon}</span>
                {c.title}
              </h3>
              <ul>
                {c.items.map((x, j) => <li key={j}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, Stats, Conclusions, Helps });
