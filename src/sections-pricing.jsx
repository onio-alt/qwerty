/* global React, PRICING_GROUPS */

function PricingHero() {
  return (
    <section className="pricing-hero" id="top">
      <div className="container">
        <p className="pricing-hero__eyebrow">Стоимость услуг</p>
        <h1 className="pricing-hero__title">Прозрачные цены<br/>на экспертные услуги</h1>
        <p className="pricing-hero__lead">
          Ниже приведены ориентировочные стоимости и сроки по основным направлениям экспертной практики.
          Итоговая цена и срок зависят от объёма исходных данных, сложности задачи и количества вопросов.
          Точную стоимость рассчитываю после первичного бесплатного обсуждения.
        </p>
        <div className="pricing-hero__actions">
          <a href="#contact" className="btn btn--primary">Получить расчёт</a>
          <a href="#contact" className="btn btn--ghost">Задать вопрос</a>
        </div>
      </div>
    </section>
  );
}

function PricingGroup({ group, index }) {
  return (
    <section className="pricing-group">
      <div className="container">
        <header className="pricing-group__head">
          <span className="pricing-group__num" aria-hidden="true">
            <span className="material-symbols-outlined">{group.icon}</span>
          </span>
          <div>
            <h2 className="pricing-group__title">{group.title}</h2>
            <p className="pricing-group__intro">{group.intro}</p>
          </div>
        </header>

        <div className="pricing-table" role="table" aria-label={group.title}>
          <div className="pricing-table__head" role="row">
            <div role="columnheader">Наименование услуги</div>
            <div role="columnheader">Стоимость</div>
            <div role="columnheader">Срок проведения</div>
          </div>
          {group.rows.map((row, i) => (
            <div key={i} className="pricing-table__row" role="row">
              <div role="cell" data-label="Услуга">{row[0]}</div>
              <div role="cell" data-label="Стоимость" className="pricing-table__price">{row[1]}</div>
              <div role="cell" data-label="Срок" className="pricing-table__term">{row[2]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingNote() {
  return (
    <section className="pricing-note">
      <div className="container">
        <div className="pricing-note__card">
          <h3>Как формируется итоговая стоимость</h3>
          <ul>
            <li>Объём исходных данных: количество устройств, носителей, документов, объём переписки.</li>
            <li>Сложность поставленных вопросов и необходимость привлечения дополнительных специалистов.</li>
            <li>Срочность: ускоренные сроки рассчитываются индивидуально.</li>
            <li>Выезд эксперта, осмотр объектов, изъятие и фиксация цифровых доказательств — оплачиваются отдельно.</li>
          </ul>
          <p className="muted">
            Указанные цены не являются публичной офертой. Точная стоимость согласовывается в договоре после
            предварительного обсуждения задачи и анализа исходных материалов.
          </p>
        </div>
      </div>
    </section>
  );
}

window.PricingHero = PricingHero;
window.PricingGroup = PricingGroup;
window.PricingNote = PricingNote;