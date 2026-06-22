import Image from "next/image";
import LeadForm from "./components/LeadForm";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock3,
  Gift,
  MapPin,
  MessageCircle,
  PartyPopper,
  Phone,
  Play,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

const programs = [
  {
    tag: "Быстро и ярко",
    title: "Экспресс",
    characters: "1 персонаж",
    price: "от 3 000 ₽",
    color: "pink",
    items: [
      "Программа: 3 песни на ваш выбор",
      "Фотосессия",
      "3 гелиевых шарика в подарок",
    ],
  },
  {
    tag: "Выбирают чаще",
    title: "Вау-поздравление",
    characters: "2–3 персонажа",
    price: "от 7 000 ₽",
    color: "yellow",
    items: [
      "Программа: 3–5 песен на ваш выбор",
      "Фотосессия",
      "Композиция из 9 латексных и 2 фольгированных гелиевых шаров",
    ],
  },
  {
    tag: "Максимум эмоций",
    title: "Федерико-Феллини",
    characters: "3–5 персонажей",
    price: "от 15 000 ₽",
    color: "violet",
    items: [
      "Программа: 3–5 песен на ваш выбор",
      "Фотосессия и рилс с рилсмейкером",
      "Композиция из 15 фольгированных гелиевых шаров",
    ],
  },
];

const dollCards = [
  {
    title: "Белый мишка",
    image: "/catalog/dolls/white-bear.png",
    price: "от 2 000 ₽",
    features: ["Рост: 2,60 м", "Музыкальное сопровождение", "Весёлые танцы"],
    description:
      "Пусть ваш праздник наполнится радостью и весельем с нашим белым мишкой. Он станет центром внимания и подарит незабываемые эмоции.",
  },
  {
    title: "Стас Михайлов",
    image: "/catalog/dolls/stas-mikhailov.png",
    price: "от 3 000 ₽",
    features: [
      "Музыкальное сопровождение",
      "Сольный концерт специально для вас",
      "Танец вместе с гостями",
    ],
    description:
      "Артистичный образ для музыкального поздравления: любимые хиты, танец и зажигательное появление на празднике.",
  },
  {
    title: "Бурый мишка",
    image: "/catalog/dolls/brown-bear.png",
    price: "от 2 000 ₽",
    features: ["Рост: 2,60 м", "Музыкальное сопровождение", "Весёлые танцы"],
    description:
      "Отличный способ поднять настроение. Бурый мишка привлекает внимание и добавляет празднику тёплых эмоций.",
  },
  {
    title: "Панда",
    image: "/catalog/dolls/panda.png",
    price: "от 2 000 ₽",
    features: ["Рост: 2,60 м", "Музыкальное сопровождение", "Весёлые танцы"],
    description:
      "Панда — символ дружбы и веселья. Этот милый герой сделает праздник ярким, добрым и запоминающимся.",
  },
  {
    title: "Лабуба",
    image: "/catalog/dolls/labuba.png",
    price: "от 2 000 ₽",
    features: ["Рост: 2 м", "Музыкальное сопровождение", "Весёлые танцы"],
    description:
      "Лабуба — это веселье в каждой детали. Герой подарит вашему мероприятию уникальную атмосферу и зарядит гостей позитивом.",
  },
  {
    title: "Горилла",
    image: "/catalog/dolls/gorilla.png",
    price: "от 2 000 ₽",
    features: ["Рост: 2,60 м", "Музыкальное сопровождение", "Весёлые танцы"],
    description:
      "Горилла — не просто персонаж, а настоящий друг для вашего праздника. Он поднимет настроение и сделает день особенным.",
  },
  {
    title: "Чебурашка",
    image: "/catalog/dolls/cheburashka.png",
    price: "от 2 000 ₽",
    features: ["Рост: 2,60 м", "Музыкальное сопровождение", "Весёлые танцы"],
    description:
      "Чебурашка — символ дружбы и веселья. Он станет отличным компаньоном на празднике и подарит всем радость и улыбки.",
  },
];

const clientGallerySlots = Array.from({ length: 8 }, (_, index) => index + 1);

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Праздник нужен уже сегодня? Мы умеем быстро!</span>
          <a href="tel:+79332040510">
            <Phone size={15} />
            +7 933 204-05-10
          </a>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <a className="logo" href="#top" aria-label="Миссия-радость">
            <Image
              className="logo-image"
              src="/catalog/logo-missiya-radost.png"
              alt="Миссия Радость"
              width={150}
              height={135}
              priority
            />
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            <a href="#programs">Экспресс-поздравления</a>
            <a href="#characters">Персонажи</a>
            <a href="#about">О нас</a>
            <a href="#contacts">Контакты</a>
          </nav>

          <a className="button button-small" href="#contacts">
            Заказать праздник
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <PartyPopper size={17} />
              Экспресс-поздравления в Москве
            </div>
            <h1>
              Миссия — <span>радость!</span>
            </h1>
            <p className="hero-lead">
              Недорого, зрелищно и точно запомнится. Любимый герой приедет,
              поздравит и устроит настоящий праздник даже сегодня.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#programs">
                Выбрать поздравление
                <ArrowRight size={19} />
              </a>
              <a className="video-link" href="#characters">
                <span>
                  <Play size={18} fill="currentColor" />
                </span>
                Смотреть героев
              </a>
            </div>
            <div className="hero-points">
              <span>
                <Clock3 size={18} /> Приедем от 60 минут
              </span>
              <span>
                <ShieldCheck size={18} /> Чистые костюмы
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-sticker sticker-top">
              <Star size={18} fill="currentColor" />
              500+ счастливых детей
            </div>
            <div className="hero-image-wrap">
              <Image
                className="hero-main-logo"
                src="/catalog/logo-missiya-radost.png"
                alt="Миссия Радость"
                width={620}
                height={560}
                priority
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>
            <div className="hero-sticker sticker-bottom">
              <span className="sticker-icon">15</span>
              минут на яркое поздравление
            </div>
          </div>
        </div>
      </section>

      <section className="trust-row" aria-label="Наши преимущества">
        <div className="container trust-grid">
          <div>
            <strong>7 лет</strong>
            <span>создаём эмоции</span>
          </div>
          <div>
            <strong>30+</strong>
            <span>персонажей</span>
          </div>
          <div>
            <strong>4.9</strong>
            <span>средняя оценка</span>
          </div>
          <div>
            <strong>60 мин</strong>
            <span>быстрый выезд</span>
          </div>
        </div>
      </section>

      <section className="section programs-section" id="programs">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Праздник без долгой подготовки</span>
              <h2>Готовые экспресс-поздравления</h2>
            </div>
            <p>
              Выберите формат, персонажа и удобное время. Всё остальное мы уже
              придумали и привезём с собой.
            </p>
          </div>

          <div className="program-grid">
            {programs.map((program) => (
              <article className={`program-card ${program.color}`} key={program.title}>
                <div className="program-topline">
                  <span>{program.tag}</span>
                  <Gift size={25} />
                </div>
                <h3>{program.title}</h3>
                <div className="program-time">
                  <Users size={18} />
                  Количество персонажей: {program.characters}
                </div>
                <ul>
                  {program.items.map((item) => (
                    <li key={item}>
                      <span>
                        <Check size={14} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="program-footer">
                  <strong>{program.price}</strong>
                  <a href="#contacts" aria-label={`Выбрать пакет ${program.title}`}>
                    <ArrowRight size={20} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section characters-section" id="characters">
        <div className="container">
          <div className="section-heading heading-center">
            <div>
              <span className="section-kicker">Кто придёт в гости?</span>
              <h2>Наши персонажи</h2>
            </div>
            <p>
              Узнаваемые образы, профессиональные актёры и костюмы, которые
              отлично выглядят и вживую, и на фото.
            </p>
          </div>

          <div className="doll-grid">
            {dollCards.map((card) => (
              <article className="doll-card" key={card.title}>
                <div className="doll-image-shell">
                  <Image
                    src={card.image}
                    alt={`Кукла ${card.title}`}
                    fill
                    sizes="(max-width: 650px) 90vw, (max-width: 1000px) 42vw, 28vw"
                  />
                </div>
                <div className="doll-card-content">
                  <div className="doll-card-topline">
                    <span>Экспресс-поздравление</span>
                    <strong>{card.price}</strong>
                  </div>
                  <h3>{card.title}</h3>
                  <ul>
                    {card.features.map((feature) => (
                      <li key={feature}>
                        <Check size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clients-section" id="clients">
        <div className="container">
          <div className="section-heading clients-heading">
            <div>
              <span className="section-kicker">Фото появятся здесь</span>
              <h2>Наши счастливые клиенты</h2>
            </div>
            <p>
              Подготовили горизонтальную галерею для живых фото с праздников.
              Когда появятся снимки, их можно будет быстро заменить в этих
              карточках.
            </p>
          </div>

          <div className="clients-scroll" aria-label="Галерея счастливых клиентов">
            {clientGallerySlots.map((slot) => (
              <article className="client-photo-card" key={slot}>
                <div className="client-photo-placeholder">
                  <Users size={30} />
                  <span>Фото {String(slot).padStart(2, "0")}</span>
                </div>
                <strong>Счастливый праздник</strong>
                <small>Место для фотографии клиента</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lead-section" id="contacts">
        <div className="container lead-card">
          <div className="lead-copy">
            <span className="section-kicker">Можно заказать прямо сейчас</span>
            <h2>Заказать поздравление</h2>
            <p>
              Оставьте имя и телефон. Мы быстро свяжемся с вами, чтобы
              подобрать героя и удобное время.
            </p>
            <a className="lead-phone" href="tel:+79332040510">
              <span>
                <Phone size={21} />
              </span>
              <div>
                <small>Контакт для связи</small>
                <strong>+7 933 204-05-10</strong>
              </div>
            </a>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-image">
            <Image
              src="/hero.jpg"
              alt="Команда аниматоров Миссия-радость"
              fill
              sizes="(max-width: 800px) 100vw, 46vw"
            />
            <div className="about-badge">
              <Users size={23} />
              <strong>Команда, которая любит праздники</strong>
            </div>
          </div>
          <div className="about-copy">
            <span className="section-kicker">О нас</span>
            <h2>Мы не просто приезжаем в костюме</h2>
            <p>
              Каждый аниматор проходит обучение, знает, как быстро расположить
              к себе ребёнка, и умеет удержать внимание даже самой активной
              компании.
            </p>
            <div className="about-features">
              <div>
                <span>
                  <CalendarCheck size={21} />
                </span>
                <strong>Работаем каждый день</strong>
                <small>И в праздники тоже</small>
              </div>
              <div>
                <span>
                  <Star size={21} />
                </span>
                <strong>Проверенные актёры</strong>
                <small>Опыт работы с детьми</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <a className="logo logo-footer" href="#top">
            <Image
              className="logo-image"
              src="/catalog/logo-missiya-radost.png"
              alt="Миссия Радость"
              width={150}
              height={135}
            />
          </a>
          <p>
            Экспресс-поздравления для детей
            <br />
            в Москве и ближайшем Подмосковье.
          </p>
          <div className="footer-location">
            <MapPin size={18} />
            Ежедневно, 09:00–21:00
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 «Миссия-радость»</span>
          <span>Политика конфиденциальности</span>
        </div>
      </footer>

      <a className="floating-contact" href="#contacts" aria-label="Заказать поздравление">
        <MessageCircle size={25} />
      </a>
    </main>
  );
}
