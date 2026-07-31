const weeks = [
  {
    number: "01",
    title: "Войти в ритм",
    walking: "4 прогулки по 30–40 минут",
    strength: "2 спокойных занятия по 10 минут",
    focus: "Привычка важнее темпа",
  },
  {
    number: "02",
    title: "Добавить объём",
    walking: "4–5 прогулок по 40 минут",
    strength: "2 занятия по 12–15 минут",
    focus: "Один белковый продукт в каждый приём пищи",
  },
  {
    number: "03",
    title: "Стать увереннее",
    walking: "5 прогулок, одна — 50–60 минут",
    strength: "3 занятия по 15 минут",
    focus: "Меньше алкоголя и сладких напитков",
  },
  {
    number: "04",
    title: "Закрепить",
    walking: "150–210 минут за неделю",
    strength: "2–3 занятия без спешки",
    focus: "Выбрать ритм на следующий месяц",
  },
];

const exercises = [
  {
    name: "Планка от стола",
    dose: "2 × 15–30 сек",
    cue: "Корпус прямой, плечи далеко от ушей. Чем выше опора, тем легче.",
  },
  {
    name: "Ягодичный мостик",
    dose: "2 × 8–12",
    cue: "Поднимайте таз без прогиба в пояснице и задержитесь на секунду наверху.",
  },
  {
    name: "Dead bug",
    dose: "2 × 6 на сторону",
    cue: "Двигайтесь медленно и сохраняйте поясницу в удобном нейтральном положении.",
  },
  {
    name: "Подъём колена сидя",
    dose: "2 × 8 на сторону",
    cue: "Сядьте ближе к краю стула и не отклоняйтесь назад.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Belly Fit Men 60 — наверх">
            <span className="brand-mark" aria-hidden="true">60</span>
            <span>Belly Fit Men</span>
          </a>
          <nav aria-label="Основная навигация">
            <a href="#plan">План</a>
            <a href="#exercises">Упражнения</a>
            <a href="#principles">Принципы</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Практическое руководство · 59–61 год</p>
            <h1>Меньше живот.<br />Больше жизни.</h1>
            <p className="hero-lead">
              Спокойный план на четыре недели: ходьба, простые силовые упражнения
              и питание без экстремальных диет. Начните с того уровня, который
              подходит вам сегодня.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#plan">Открыть план</a>
              <a className="button button-ghost" href="#safety">Сначала о безопасности</a>
            </div>
          </div>

          <aside className="week-card" aria-label="Ориентир на неделю">
            <div className="week-card-top">
              <span>Ориентир на неделю</span>
              <span className="status-dot">без спешки</span>
            </div>
            <div className="big-number">150</div>
            <p className="big-number-label">минут умеренной активности</p>
            <div className="mini-stats">
              <div><strong>2×</strong><span>силовые</span></div>
              <div><strong>7–8 ч</strong><span>сон</span></div>
              <div><strong>1 шаг</strong><span>за раз</span></div>
            </div>
            <p className="source-note">
              Ориентир ВОЗ — не стартовая норма. Если вы давно не занимались,
              увеличивайте нагрузку постепенно.
            </p>
          </aside>
        </div>
      </section>

      <section className="proof-strip" aria-label="Основные принципы">
        <div className="shell proof-grid">
          <div><span>01</span><p>Никакого героизма</p></div>
          <div><span>02</span><p>Регулярность вместо рывков</p></div>
          <div><span>03</span><p>Талия меняется постепенно</p></div>
        </div>
      </section>

      <section className="section shell" id="plan">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Ваш первый месяц</p>
            <h2>План, который можно продолжить</h2>
          </div>
          <p>
            Не гонитесь за цифрой на весах. Отмечайте прогулки, самочувствие и
            окружность талии раз в неделю — в одинаковых условиях.
          </p>
        </div>
        <div className="weeks-grid">
          {weeks.map((week) => (
            <article className="plan-card" key={week.number}>
              <div className="plan-card-head">
                <span>{week.number}</span>
                <h3>{week.title}</h3>
              </div>
              <dl>
                <div><dt>Ходьба</dt><dd>{week.walking}</dd></div>
                <div><dt>Сила</dt><dd>{week.strength}</dd></div>
                <div><dt>Фокус</dt><dd>{week.focus}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="section exercise-section" id="exercises">
        <div className="shell">
          <div className="section-heading split-heading light-heading">
            <div>
              <p className="eyebrow">10–15 минут</p>
              <h2>Сильный корпус без скручиваний</h2>
            </div>
            <p>
              Выполните упражнения подряд, отдохните и повторите круг. Движение
              должно оставаться контролируемым и не вызывать острой боли.
            </p>
          </div>
          <div className="exercise-list">
            {exercises.map((exercise, index) => (
              <article className="exercise-row" key={exercise.name}>
                <span className="exercise-index">0{index + 1}</span>
                <h3>{exercise.name}</h3>
                <p>{exercise.cue}</p>
                <strong>{exercise.dose}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="principles">
        <div className="section-heading">
          <p className="eyebrow">Три рычага результата</p>
          <h2>Просто, но не мгновенно</h2>
        </div>
        <div className="principles-grid">
          <article>
            <span className="principle-symbol" aria-hidden="true">↗</span>
            <h3>Двигайтесь чаще</h3>
            <p>Разговорный темп — хороший ориентир для умеренной ходьбы. Разбейте длинную прогулку на две, если так удобнее.</p>
          </article>
          <article>
            <span className="principle-symbol" aria-hidden="true">½</span>
            <h3>Соберите тарелку</h3>
            <p>Половина — овощи, четверть — источник белка, остальное — гарнир. Вода вместо сладких напитков работает лучше запретов.</p>
          </article>
          <article>
            <span className="principle-symbol" aria-hidden="true">Zz</span>
            <h3>Восстанавливайтесь</h3>
            <p>Недосып усиливает голод и мешает восстановлению. Стабильное время подъёма часто полезнее попытки «отоспаться» раз в неделю.</p>
          </article>
        </div>
      </section>

      <section className="safety-section" id="safety">
        <div className="shell safety-grid">
          <div>
            <p className="eyebrow">Сначала безопасность</p>
            <h2>Нагрузка должна помогать, а не пугать</h2>
          </div>
          <div>
            <p>
              Если вы давно не тренировались, у вас есть сердечно-сосудистые,
              суставные или другие хронические заболевания, обсудите начало
              занятий с врачом. Прекратите нагрузку при боли в груди, внезапной
              одышке, головокружении или необычной слабости.
            </p>
            <p className="safety-small">
              Этот сайт носит образовательный характер и не заменяет медицинскую
              консультацию, диагностику или индивидуальную программу лечения.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark" aria-hidden="true">60</span>
              <span>Belly Fit Men</span>
            </a>
            <p>Спокойный старт — устойчивый результат.</p>
          </div>
          <div className="references">
            <p>Источники</p>
            <a href="https://www.who.int/publications/i/item/9789240014886" target="_blank" rel="noreferrer">Рекомендации ВОЗ по физической активности</a>
            <a href="https://www.who.int/europe/news-room/fact-sheets/item/the-challenge-of-obesity" target="_blank" rel="noreferrer">ВОЗ/Европа: избыточный вес и ожирение</a>
          </div>
          <p className="copyright">© 2026 Belly Fit Men 60</p>
        </div>
      </footer>
    </main>
  );
}
