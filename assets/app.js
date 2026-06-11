const basePath = decodeURI(window.location.pathname.replace(/\/index\.html$/, "/"));

const routes = {
  "/": {
    title: "Refraservice. Європейський досвід промислового будівництва",
    canonical: "https://refraservice.com.ua/",
    page: "home"
  },
  "/o-nas/": {
    title: "Refraservice. Про нас",
    canonical: "https://refraservice.com.ua/o-nas/",
    page: "about"
  },
  "/kladka-ogneupornih-izdeliy/": {
    title: "Refraservice. Кладка вогнетривких виробів",
    canonical: "https://refraservice.com.ua/kladka-ogneupornih-izdeliy/",
    page: "service",
    service: "kladka"
  },
  "/futerovochnie-raboti/": {
    title: "Refraservice. Футерувальні роботи",
    canonical: "https://refraservice.com.ua/futerovochnie-raboti/",
    page: "service",
    service: "futer"
  },
  "/montazh-metallokonstruktsiy/": {
    title: "Refraservice. Монтаж металоконструкцій",
    canonical: "https://refraservice.com.ua/montazh-metallokonstruktsiy/",
    page: "service",
    service: "metal"
  },
  "/montazh-teh-oborudovaniya/": {
    title: "Refraservice. Монтаж технологічного обладнання",
    canonical: "https://refraservice.com.ua/montazh-teh-oborudovaniya/",
    page: "service",
    service: "equipment"
  },
  "/montazh-truboprovodov/": {
    title: "Refraservice. Монтаж трубопроводів",
    canonical: "https://refraservice.com.ua/montazh-truboprovodov/",
    page: "service",
    service: "pipes"
  },
  "/obshie-raboti/": {
    title: "Refraservice. Загальнобудівельні роботи",
    canonical: "https://refraservice.com.ua/obshie-raboti/",
    page: "service",
    service: "general"
  },
  "/keramicheskaya-naplavka/": {
    title: "Refraservice. Керамічна наплавка",
    canonical: "https://refraservice.com.ua/keramicheskaya-naplavka/",
    page: "service",
    service: "ceramic"
  },
  "/objects/": {
    title: "Refraservice. Наші об’єкти",
    canonical: "https://refraservice.com.ua/objects/",
    page: "objects"
  },
  "/fotos/": {
    title: "Refraservice. Фотогалерея",
    canonical: "https://refraservice.com.ua/fotos/",
    page: "gallery"
  },
  "/kontakti/": {
    title: "Refraservice. Контакти",
    canonical: "https://refraservice.com.ua/kontakti/",
    page: "contacts"
  },
  "/objects/obj-9/": {
    title: "Refraservice. Об’єкт 9",
    canonical: "https://refraservice.com.ua/objects/obj-9/",
    page: "object-detail",
    objectIndex: 8
  },
  "/objects/объект-10/": {
    title: "Refraservice. Об’єкт 10",
    canonical: "https://refraservice.com.ua/objects/%d0%be%d0%b1%d1%8a%d0%b5%d0%ba%d1%82-10/",
    page: "object-detail",
    objectIndex: 9
  },
  "/objects/объект-11/": {
    title: "Refraservice. Об’єкт 11",
    canonical: "https://refraservice.com.ua/objects/%d0%be%d0%b1%d1%8a%d0%b5%d0%ba%d1%82-11/",
    page: "object-detail",
    objectIndex: 10
  },
  "/objects/объект-12/": {
    title: "Refraservice. Об’єкт 12",
    canonical: "https://refraservice.com.ua/objects/%d0%be%d0%b1%d1%8a%d0%b5%d0%ba%d1%82-12/",
    page: "object-detail",
    objectIndex: 11
  },
  "/objects/объект-13/": {
    title: "Refraservice. Об’єкт 13",
    canonical: "https://refraservice.com.ua/objects/%d0%be%d0%b1%d1%8a%d0%b5%d0%ba%d1%82-13/",
    page: "object-detail",
    objectIndex: 12
  },
  "/objects/объект-14/": {
    title: "Refraservice. Об’єкт 14",
    canonical: "https://refraservice.com.ua/objects/%d0%be%d0%b1%d1%8a%d0%b5%d0%ba%d1%82-14/",
    page: "object-detail",
    objectIndex: 13
  },
  "/objects/объект-15/": {
    title: "Refraservice. Об’єкт 15",
    canonical: "https://refraservice.com.ua/objects/%d0%be%d0%b1%d1%8a%d0%b5%d0%ba%d1%82-15/",
    page: "object-detail",
    objectIndex: 14
  },
  "/objects/объект-16/": {
    title: "Refraservice. Об’єкт 16",
    canonical: "https://refraservice.com.ua/objects/%d0%be%d0%b1%d1%8a%d0%b5%d0%ba%d1%82-16/",
    page: "object-detail",
    objectIndex: 15
  },
  "/objects/объект-17/": {
    title: "Refraservice. Об’єкт 17",
    canonical: "https://refraservice.com.ua/objects/%d0%be%d0%b1%d1%8a%d0%b5%d0%ba%d1%82-17/",
    page: "object-detail",
    objectIndex: 16
  }
};

const route = routes[basePath] || routes["/"];

const services = {
  kladka: {
    title: "Кладка вогнетривких виробів",
    menuTitle: "Кладка вогнетривких виробів",
    url: "/kladka-ogneupornih-izdeliy/",
    image: "/assets/service-ogne-upor.jpg",
    alt: "Вогнетривка кладка",
    short: "Роботи з вогнетривкими матеріалами для теплових агрегатів і коксових батарей будь-якої складності.",
    body: [
      "Компанія виконує вогнетривку кладку, ремонт і відновлення промислових теплових агрегатів, де критичні геометрія, режим нагріву та ресурс конструкції.",
      "Роботи плануються з урахуванням проєктної документації, матеріалів, температурних навантажень і вимог промислової безпеки.",
      "Команди Refraservice працюють на об’єктах металургійної та коксохімічної галузі в Україні й за кордоном."
    ],
    details: [
      ["Проєктна підготовка", "Аналіз обсягу робіт, підбір вогнетривів і підготовка графіка виконання."],
      ["Монтаж і ремонт", "Кладка, відновлення простінків, ремонт футерування та контроль якості швів."],
      ["Пускові етапи", "Підтримка розігріву, контроль вузлів і підготовка виконавчої документації."]
    ]
  },
  futer: {
    title: "Футерувальні роботи",
    menuTitle: "Футерувальні роботи",
    url: "/futerovochnie-raboti/",
    image: "/assets/service-fut-rab.jpg",
    alt: "Футерувальні роботи",
    short: "Футерування печей, котлів, жолобів, ємностей та інших промислових теплових агрегатів.",
    body: [
      "Футерування захищає робочі поверхні від термічного, хімічного та механічного впливу.",
      "Refraservice виконує футерувальні роботи на промислових агрегатах з урахуванням матеріалу, режиму експлуатації та потрібного ресурсу.",
      "У роботі використовуються цегляні, монолітні й комбіновані рішення для металургійних, цементних і коксохімічних об’єктів."
    ],
    details: [
      ["Теплові агрегати", "Печі, котли, жолоби, цистерни та ділянки з підвищеним температурним навантаженням."],
      ["Матеріали", "Вогнетривка цегла, бетони, суміші та ізоляційні рішення під конкретний режим."],
      ["Контроль", "Геометрія, щільність, стики, вузли примикання та підготовка до експлуатації."]
    ]
  },
  metal: {
    title: "Монтаж металоконструкцій",
    menuTitle: "Монтаж металоконструкцій",
    url: "/montazh-metallokonstruktsiy/",
    image: "/assets/service-metal.jpg",
    alt: "Монтаж металоконструкцій",
    short: "Виготовлення, демонтаж і монтаж промислових металоконструкцій з виконавчою документацією.",
    body: [
      "Металоконструкції застосовуються під час будівництва та реконструкції виробничих майданчиків, естакад, сходів, каркасів і технологічних вузлів.",
      "Компанія виконує зварні та болтові з’єднання, підготовку майданчика, монтаж елементів і здачу об’єкта з комплектом документації.",
      "Підхід базується на точності, безпеці та відповідності затвердженому проєкту."
    ],
    details: [
      ["Зварні з’єднання", "Монтаж вузлів із контролем міцності та якості швів."],
      ["Болтові вузли", "Збірні та розбірні конструкції для промислових об’єктів."],
      ["Документація", "Виконавчі схеми, акти та технічна фіксація виконаних робіт."]
    ]
  },
  equipment: {
    title: "Монтаж технологічного обладнання",
    menuTitle: "Монтаж технологічного обладнання",
    url: "/montazh-teh-oborudovaniya/",
    image: "/assets/service-teh-ob.jpg",
    alt: "Монтаж технологічного обладнання",
    short: "Монтаж, демонтаж, ревізія та введення в експлуатацію промислового технологічного обладнання.",
    body: [
      "Refraservice монтує технологічне обладнання на об’єктах металургійної, коксохімічної, цементної та суміжних галузей.",
      "Процес включає підготовку основи, такелаж, позиціонування, з’єднання з трубопроводами та перевірку вузлів.",
      "Команда працює з великими агрегатами й ділянками, де важливі строки зупинки виробництва та точність монтажу."
    ],
    details: [
      ["Підготовка", "Перевірка основи, осей, відміток і монтажних допусків."],
      ["Такелаж", "Безпечна подача та встановлення обладнання в проєктне положення."],
      ["Інтеграція", "Зв’язка з трубопроводами, металоконструкціями та технологічними комунікаціями."]
    ]
  },
  pipes: {
    title: "Монтаж трубопроводів",
    menuTitle: "Монтаж трубопроводів",
    url: "/montazh-truboprovodov/",
    image: "/assets/service-pipes.jpg",
    alt: "Монтаж трубопроводів",
    short: "Монтаж водопроводів, газопроводів, повітропроводів, паропроводів і промислових трас.",
    body: [
      "Трубопроводи збираються вузлами, секціями або блоками залежно від габаритів, умов майданчика та проєктних вимог.",
      "Компанія виконує укрупнювальне складання, монтаж арматури, опор, підвісок, зварювання та випробування.",
      "Роботи підходять для наземних, естакадних і підземних інженерних систем."
    ],
    details: [
      ["Блокове складання", "Попереднє складання вузлів поруч із зоною монтажу."],
      ["Арматура", "Монтаж арматури, фланців, опор і компенсувальних елементів."],
      ["Випробування", "Продування, перевірка міцності, ізоляція стиків і фінальний контроль."]
    ]
  },
  general: {
    title: "Загальнобудівельні роботи",
    menuTitle: "Загальнобудівельні роботи",
    url: "/obshie-raboti/",
    image: "/assets/service-general.jpg",
    alt: "Загальнобудівельні роботи",
    short: "Комплексні будівельні, ремонтні та підготовчі роботи на промислових об’єктах.",
    body: [
      "Загальнобудівельний напрям закриває підготовку майданчиків, ремонтні операції, оздоблювальні та допоміжні роботи.",
      "Компанія бере на себе завдання, які забезпечують готовність об’єкта до технологічного монтажу та подальшої експлуатації.",
      "Підхід розрахований на промислове середовище, стислі строки та роботу поруч із діючим виробництвом."
    ],
    details: [
      ["Підготовка майданчика", "Очищення, вирівнювання, організація доступу та тимчасових зон."],
      ["Ремонт", "Відновлювальні, оздоблювальні та захисні роботи на промислових ділянках."],
      ["Супровід", "Підтримка суміжних монтажних команд і здача робіт замовнику."]
    ]
  },
  ceramic: {
    title: "Керамічна наплавка",
    menuTitle: "Керамічна наплавка",
    url: "/keramicheskaya-naplavka/",
    image: "/assets/plant-zavod.jpg",
    alt: "Керамічна наплавка",
    short: "Технологічне відновлення керамічного масиву та робочих поверхонь промислових агрегатів.",
    body: [
      "Керамічна наплавка застосовується для відновлення робочих зон, де потрібно продовжити ресурс і знизити знос.",
      "На публічному сайті цей напрям позначений як окрема послуга Refraservice.",
      "У демо збережено структуру окремої сторінки та можливість замовити розрахунок за цим напрямом."
    ],
    details: [
      ["Діагностика", "Оцінка стану поверхні та зон, що потребують відновлення."],
      ["Технологія", "Підбір способу нанесення та режиму робіт під промисловий об’єкт."],
      ["Результат", "Підвищення захисних характеристик і підготовка до експлуатації."]
    ]
  }
};

const objects = [
  ["ОБ’ЄКТ 1", "Будівництво нової коксової батареї №6, кладка 12 обігрівальних простінків на коксовому заводі «Вікторія», м. Валбжих, Польща.", "gallery-20.jpg", "/objects/"],
  ["ОБ’ЄКТ 2", "Монтаж та ізоляція технічних трубопроводів і котла на будівництві енергоблока «Elektrownja Opole», м. Ополе, Польща.", "gallery-img2854.jpg", "/objects/"],
  ["ОБ’ЄКТ 3", "Капітальний ремонт УСТК на коксохімічному заводі «Przyjazn», Польща.", "gallery-21.jpg", "/objects/"],
  ["ОБ’ЄКТ 4", "Ремонт керамічного масиву коксової батареї на підприємстві «АрселорМіттал» у Південній Африці.", "gallery-7.jpg", "/objects/"],
  ["ОБ’ЄКТ 5", "Цементна випалювальна піч, цементний завод «Гораждже», район м. Ополе, Польща.", "service-general.jpg", "/objects/"],
  ["ОБ’ЄКТ 6", "Наскрізний ремонт 12 простінків на коксохімічному заводі «Przyjazn», м. Домброва-Гурнича, Польща.", "direction-koksohim.jpg", "/objects/"],
  ["ОБ’ЄКТ 7", "Обслуговування, ремонт і ревізія технологічного обладнання на коксохімічному заводі «Radlin», Польща.", "service-teh-ob.jpg", "/objects/"],
  ["ОБ’ЄКТ 8", "Футерування ємностей для зберігання сірчаної кислоти, корпорація «Codelco», Чилі.", "service-fut-rab.jpg", "/objects/"],
  ["ОБ’ЄКТ 9", "ПАТ «АрселорМіттал Кривий Ріг». Ремонт металоконструкцій грохотів, коксовий цех №1.", "logo-arcelor.jpg", "/objects/obj-9/"],
  ["ОБ’ЄКТ 10", "ПАТ «АрселорМіттал Кривий Ріг». Ремонт металоконструкцій дифузорів газоскидного пристрою.", "service-metal.jpg", "/objects/объект-10/"],
  ["ОБ’ЄКТ 11", "ПАТ «АрселорМіттал Кривий Ріг». Заміна покриття покрівлі тракту подачі шихти.", "plant-zavod.jpg", "/objects/объект-11/"],
  ["ОБ’ЄКТ 12", "ПАТ «АрселорМіттал Кривий Ріг». Роботи з керамічної наплавки за технологією RPR HP.", "gallery-img6242.jpg", "/objects/объект-12/"],
  ["ОБ’ЄКТ 13", "Промисловий ремонт і відновлення технологічних ділянок коксохімічного виробництва.", "gallery-12.jpg", "/objects/объект-13/"],
  ["ОБ’ЄКТ 14", "Комплексні роботи на технологічному майданчику з підготовкою вузлів до експлуатації.", "hero-gen1.jpg", "/objects/объект-14/"],
  ["ОБ’ЄКТ 15", "Ремонтні роботи на агрегатах із високим температурним навантаженням.", "service-ogne-upor.jpg", "/objects/объект-15/"],
  ["ОБ’ЄКТ 16", "Монтаж і відновлення ділянок промислової інфраструктури.", "gallery-img6242.jpg", "/objects/объект-16/"],
  ["ОБ’ЄКТ 17", "Промислові ремонтні роботи із застосуванням інженерних і монтажних ресурсів компанії.", "gallery-21.jpg", "/objects/объект-17/"]
];

const objectPhotos = {
  1: ["refraservice-photos/photo-65.jpg", "refraservice-photos/photo-66.jpg"],
  2: ["refraservice-photos/object-extra-01.jpg", "refraservice-photos/object-extra-02.jpg", "refraservice-photos/object-extra-03.jpg"],
  3: ["refraservice-photos/photo-62.jpg", "refraservice-photos/photo-61.jpg"],
  4: ["refraservice-photos/photo-45.jpg", "refraservice-photos/photo-44.jpg", "refraservice-photos/photo-43.jpg", "refraservice-photos/photo-42.jpg"],
  5: ["refraservice-photos/photo-48.jpg", "refraservice-photos/photo-47.jpg", "refraservice-photos/photo-46.jpg"],
  6: ["refraservice-photos/photo-41.jpg", "refraservice-photos/photo-40.jpg"],
  7: ["refraservice-photos/photo-52.jpg", "refraservice-photos/photo-51.jpg", "refraservice-photos/photo-50.jpg"],
  8: ["refraservice-photos/photo-56.jpg", "refraservice-photos/photo-55.jpg", "refraservice-photos/photo-54.jpg", "refraservice-photos/photo-53.jpg"],
  9: ["refraservice-photos/photo-38.jpg", "refraservice-photos/photo-37.jpg", "refraservice-photos/photo-36.jpg"],
  10: ["refraservice-photos/photo-35.jpg", "refraservice-photos/photo-34.jpg"],
  11: ["refraservice-photos/photo-33.jpg", "refraservice-photos/photo-32.jpg", "refraservice-photos/photo-31.jpg"],
  12: ["refraservice-photos/photo-30.jpg", "refraservice-photos/photo-29.jpg", "refraservice-photos/photo-28.jpg", "refraservice-photos/photo-27.jpg", "refraservice-photos/photo-26.jpg", "refraservice-photos/photo-25.jpg"],
  13: ["refraservice-photos/photo-24.jpg", "refraservice-photos/photo-23.jpg", "refraservice-photos/photo-22.jpg"],
  14: ["refraservice-photos/photo-21.jpg", "refraservice-photos/photo-20.jpg", "refraservice-photos/photo-19.jpg", "refraservice-photos/photo-18.jpg"],
  15: ["refraservice-photos/photo-17.jpg", "refraservice-photos/photo-16.jpg", "refraservice-photos/photo-15.jpg", "refraservice-photos/photo-14.jpg", "refraservice-photos/photo-13.jpg", "refraservice-photos/photo-12.jpg"],
  16: ["refraservice-photos/photo-11.jpg", "refraservice-photos/photo-10.jpg", "refraservice-photos/photo-09.jpg", "refraservice-photos/photo-08.jpg"],
  17: ["refraservice-photos/photo-07.jpg", "refraservice-photos/photo-06.jpg", "refraservice-photos/photo-05.jpg", "refraservice-photos/photo-04.jpg", "refraservice-photos/photo-03.jpg", "refraservice-photos/photo-02.jpg", "refraservice-photos/photo-01.jpg"]
};

const serviceObjectGroups = {
  kladka: [1, 4, 6],
  futer: [5, 8],
  metal: [9, 10, 14],
  equipment: [3, 7, 15, 17],
  pipes: [2, 13],
  general: [11, 16],
  ceramic: [12]
};

const servicePortfolios = Object.entries(serviceObjectGroups).map(([serviceKey, objectIds]) => ({
  serviceKey,
  serviceName: services[serviceKey].title,
  objects: objectIds.map((objectId) => {
    const [objectName, description, coverImage, url] = objects[objectId - 1];
    return {
      objectId,
      objectName,
      description,
      coverImage,
      url,
      photos: objectPhotos[objectId] || []
    };
  })
}));

const gallery = Array.from({ length: 67 }, (_, index) => [
  `refraservice-photos/photo-${String(index + 1).padStart(2, "0")}.jpg`,
  `Фото Refraservice ${index + 1}`
]);

const sectionSearchItems = [
  {
    id: "section-home",
    title: "Головна",
    aliases: ["головна", "home", "main", "рефрасервіс", "refraservice"],
    keywords: ["європейський досвід", "промислове будівництво", "industrial engineering"],
    type: "розділ",
    url: "/",
    sectionId: "top",
    action: "scroll"
  },
  {
    id: "section-about",
    title: "Про нас",
    aliases: ["о нас", "про нас", "компания", "компанія", "about"],
    keywords: ["історія", "2017", "європа", "україна", "ресурси", "досвід", "company", "about"],
    type: "розділ",
    url: "/o-nas/",
    sectionId: "page-about",
    action: "scroll"
  },
  {
    id: "section-services",
    title: "Послуги",
    aliases: ["послуги", "послуга", "сервіси", "services", "service", "напрями"],
    keywords: ["кладка", "футерування", "металоконструкції", "обладнання", "трубопроводи", "загальнобудівельні роботи", "керамічна наплавка", "engineering services"],
    type: "розділ",
    url: "/",
    sectionId: "services",
    action: "scroll"
  },
  {
    id: "section-objects",
    title: "Наші об'єкти",
    aliases: ["наші об'єкти", "наші об’єкти", "об’єкти", "objects", "portfolio", "портфоліо"],
    keywords: ["об’єкт", "роботи", "промислові майданчики", "арселорміттал", "industrial sites"],
    type: "розділ",
    url: "/objects/",
    sectionId: "page-objects",
    action: "scroll"
  },
  {
    id: "section-gallery",
    title: "Фотогалерея",
    aliases: ["фото", "фотогалерея", "галерея", "світлини", "знімки", "fotos", "photo", "gallery"],
    keywords: ["об’єкти", "зображення", "публічні фото", "lightbox"],
    type: "розділ",
    url: "/fotos/",
    sectionId: "page-gallery",
    action: "scroll"
  },
  {
    id: "section-contacts",
    title: "Контакти",
    aliases: ["контакти", "контакт", "contacts", "address", "phone", "email", "адреса", "телефон", "пошта"],
    keywords: ["дніпро", "воскресенська", "office@refraservice.com.ua", "050 224 25 09", "заявка", "request"],
    type: "контакт",
    url: "/kontakti/",
    sectionId: "page-contacts",
    action: "scroll"
  }
];

function assetSrc(file) {
  if (file.startsWith("http")) return file;
  return `/assets/${file}`;
}

function localUrl(path) {
  if (path === "/") return "/";
  return path;
}

function withFocus(url, focusId, hash = "") {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}focus=${encodeURIComponent(focusId)}${hash}`;
}

function normalizeSearchValue(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[ё]/g, "е")
    .replace(/[іїы]/g, "и")
    .replace(/[є]/g, "е")
    .replace(/[ґ]/g, "г")
    .replace(/[ъь'’`ʼ]/g, "")
    .replace(/[^a-zа-я0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const temp = row[j];
      row[j] = Math.min(
        row[j] + 1,
        row[j - 1] + 1,
        previous + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
      previous = temp;
    }
  }
  return row[b.length];
}

function tokenScore(queryToken, candidateToken) {
  if (!queryToken || !candidateToken) return 0;
  if (candidateToken === queryToken) return 32;
  if (candidateToken.startsWith(queryToken) || queryToken.startsWith(candidateToken)) return 24;
  if (candidateToken.includes(queryToken) || queryToken.includes(candidateToken)) return 18;
  const allowedDistance = queryToken.length >= 7 ? 2 : queryToken.length >= 4 ? 1 : 0;
  if (allowedDistance && levenshtein(queryToken, candidateToken) <= allowedDistance) return 12;
  return 0;
}

function objectAliases(objectNumber) {
  return [
    `об’єкт ${objectNumber}`,
    `об'єкт ${objectNumber}`,
    `обект ${objectNumber}`,
    `object ${objectNumber}`,
    `site ${objectNumber}`,
    `project ${objectNumber}`,
    `об’єкт${objectNumber}`,
    `об'єкт${objectNumber}`,
    `obj ${objectNumber}`
  ];
}

function buildSearchIndex() {
  const serviceItems = Object.entries(services).flatMap(([key, service]) => {
    const serviceId = `service-${key}`;
    const serviceItem = {
      id: serviceId,
      title: service.title,
      aliases: [service.menuTitle, service.alt, `послуга ${service.title}`, `service ${service.title}`, "послуги", "services"],
      keywords: [service.short, ...service.body, ...service.details.flat()],
      type: "послуга",
      url: service.url,
      sectionId: serviceId,
      action: "openService"
    };
    const detailItems = service.details.map(([title, text], index) => ({
      id: `${serviceId}-detail-${index}`,
      title,
      aliases: [title, `${service.title} ${title}`, `${service.menuTitle} ${title}`],
      keywords: [text, service.title, service.menuTitle, service.short],
      type: "послуга",
      url: service.url,
      sectionId: `${serviceId}-detail-${index}`,
      action: "openAccordion"
    }));
    return [serviceItem, ...detailItems];
  });

  const objectItems = objects.map(([title, text, image, url], index) => {
    const objectNumber = index + 1;
    const objectId = `object-${objectNumber}`;
    const directUrl = objectNumber <= 8 ? "/objects/" : url;
    const hash = objectNumber <= 8 ? `#${objectId}` : "";
    return {
      id: objectId,
      title: title[0] + title.slice(1).toLowerCase(),
      aliases: objectAliases(objectNumber),
      keywords: [text, image, "фото", "світлини", "галерея", "об’єкт", "object", "project", "роботи", `${objectPhotos[objectNumber]?.length || 0} фото`],
      type: "об’єкт",
      url: directUrl,
      sectionId: objectId,
      action: "openObject",
      hash
    };
  });

  const galleryItems = gallery.slice(0, 12).map(([image, alt], index) => ({
    id: `gallery-photo-${index + 1}`,
    title: alt,
    aliases: [`фото ${index + 1}`, `photo ${index + 1}`, "фотогалерея", "галерея", "gallery"],
    keywords: [image, "фото", "світлини", "знімки", "об’єкти", "photos"],
    type: "фото",
    url: "/fotos/",
    sectionId: "page-gallery",
    action: "scroll"
  }));

  return [...sectionSearchItems, ...serviceItems, ...objectItems, ...galleryItems].map((item) => {
    const searchable = [item.title, item.type, ...(item.aliases || []), ...(item.keywords || [])].join(" ");
    return {
      ...item,
      href: withFocus(item.url, item.sectionId || item.id, item.hash || ""),
      normalized: normalizeSearchValue(searchable),
      tokens: normalizeSearchValue(searchable).split(" ").filter(Boolean)
    };
  });
}

const searchIndex = buildSearchIndex();

function searchSite(query, limit = 8) {
  const normalizedQuery = normalizeSearchValue(query);
  if (!normalizedQuery) return [];
  const queryTokens = normalizedQuery.split(" ").filter(Boolean);
  return searchIndex
    .map((item) => {
      let score = 0;
      if (item.normalized === normalizedQuery) score += 180;
      if (item.normalized.includes(normalizedQuery)) score += normalizedQuery.length > 2 ? 95 : 35;
      const tokenScores = queryTokens.map((token) => Math.max(...item.tokens.map((candidate) => tokenScore(token, candidate))));
      if (tokenScores.some((value) => value === 0)) return { item, score: 0 };
      score += tokenScores.reduce((sum, value) => sum + value, 0);
      if (item.title && normalizeSearchValue(item.title).includes(normalizedQuery)) score += 45;
      if (item.aliases?.some((alias) => normalizeSearchValue(alias).includes(normalizedQuery))) score += 55;
      if (item.type === "розділ") score += 8;
      if (item.type === "об’єкт" && /\d/.test(normalizedQuery)) score += 18;
      return { item, score };
    })
    .filter((result) => result.score >= 18)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((result) => result.item);
}

function servicesMenu() {
  return Object.values(services)
    .map((service) => `<a href="${localUrl(service.url)}">${service.menuTitle}</a>`)
    .join("");
}

function header() {
  const nav = [
    ["/", "Головна"],
    ["/o-nas/", "Про нас"],
    ["/objects/", "Наші об'єкти"],
    ["/fotos/", "Фотогалерея"],
    ["/kontakti/", "Контакти"]
  ];

  return `
    <header class="topbar" id="top">
      <div class="topbar__inner">
        <a href="/" aria-label="Refraservice">
          <img class="logo" src="/assets/logo2-provided.png" alt="Refraservice">
        </a>
        <div class="contact-strip">
          <span><b>●</b> Ми завжди готові відповісти на ваші запитання.</span>
          <span><b>⌖</b> м. Дніпро, вул. Воскресенська, 21</span>
          <a href="mailto:office@refraservice.com.ua"><b>@</b> office@refraservice.com.ua</a>
          <a href="tel:+380502242509"><b>☎</b> (050) 224-25-09</a>
        </div>
      </div>
      <nav class="nav" aria-label="Головне меню">
        <div class="nav__inner">
          <button class="mobile-menu-button" type="button" data-menu-toggle>Відкрити меню</button>
          <ul class="nav__links" data-menu>
            ${nav.slice(0, 2).map(([url, label]) => `<li><a class="${basePath === url ? "active" : ""}" href="${url}">${label}</a></li>`).join("")}
            <li class="has-menu">
              <button class="nav__toggle" type="button">Послуги</button>
              <div class="submenu">${servicesMenu()}</div>
            </li>
            ${nav.slice(2).map(([url, label]) => `<li><a class="${basePath === url ? "active" : ""}" href="${url}">${label}</a></li>`).join("")}
            <li><a href="#" aria-disabled="true">Статті</a></li>
          </ul>
          <button class="search-toggle" type="button" data-search-toggle aria-label="Пошук">Пошук</button>
        </div>
      </nav>
      <div class="search-panel" data-search-panel>
        <form data-search-form role="search">
          <input name="q" type="search" placeholder="Пошук на сайті" autocomplete="off" data-search-input aria-label="Пошук на сайті" aria-controls="search-results">
          <div class="search-results" id="search-results" data-search-results></div>
        </form>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <section class="cta">
      <div class="section">
        <div class="section__head reveal">
          <div>
            <p class="kicker">Заявка</p>
            <h2>Замовити розрахунок кошторису, задати питання, замовити дзвінок</h2>
          </div>
          <p>Напишіть нам. Ми передзвонимо та відповімо на ваші запитання. Форма працює на фронтенді й показує стани відправлення.</p>
        </div>
        ${contactForm("footer")}
      </div>
    </section>
    <footer class="footer">
      <div class="footer__inner">
        <p>© 2026 Refraservice · Копіювання матеріалів сайту без дозволу заборонено</p>
        <p>Розробка та просування: <a href="https://smart-seo.com.ua" target="_blank" rel="noreferrer">Smart SEO</a></p>
      </div>
    </footer>
    <div class="modal" data-modal>
      <button class="btn btn--ghost" type="button" data-modal-close>Закрити</button>
      <button class="modal__nav modal__nav--prev" type="button" data-modal-prev aria-label="Попереднє фото">‹</button>
      <img alt="" data-modal-image>
      <button class="modal__nav modal__nav--next" type="button" data-modal-next aria-label="Наступне фото">›</button>
    </div>
  `;
}

function contactForm(id) {
  return `
    <form class="form-card glass reveal" data-lead-form novalidate>
      <label>Ваше ім'я *
        <input name="name" autocomplete="name" required>
        <span class="field-error">Вкажіть ім'я.</span>
      </label>
      <label>Ваш e-mail *
        <input name="email" type="email" autocomplete="email" required>
        <span class="field-error">Вкажіть коректний e-mail.</span>
      </label>
      <label>Номер телефону
        <input name="phone" type="tel" autocomplete="tel">
        <span class="field-error">Перевірте номер телефону.</span>
      </label>
      <label>Тема ${id === "contact" ? "*" : ""}
        <input name="subject" ${id === "contact" ? "required" : ""}>
        <span class="field-error">Вкажіть тему.</span>
      </label>
      <label>Повідомлення
        <textarea name="message"></textarea>
        <span class="field-error">Повідомлення занадто коротке.</span>
      </label>
      <button class="btn" type="submit">Надіслати</button>
      <div class="form-status" role="status" aria-live="polite"></div>
    </form>
  `;
}

function hero() {
  return `
    <section class="hero" id="home" data-search-id="section-home" data-parallax>
      <div class="hero__inner">
        <div class="reveal">
          <span class="eyebrow">Європейський досвід промислового будівництва</span>
          <h1>Refraservice</h1>
          <p>ТОВ «РЕФРАСЕРВІС» виконує будівельні, ремонтні та монтажні роботи для металургійних, коксохімічних, скляних і цементних підприємств.</p>
          <div class="hero__actions">
            <a class="btn" href="/kontakti/">Замовити розрахунок</a>
            <a class="btn btn--ghost" href="/objects/">Наші об'єкти</a>
          </div>
        </div>
        <aside class="hero-card reveal" aria-label="Ключевые показатели">
          <div class="hero-card__metric">
            <span class="metric-number">2017</span>
            <span>рік заснування підприємства</span>
          </div>
          <div class="hero-card__metric">
            <span class="metric-number">EU</span>
            <span>проєкти в Україні та країнах Європи</span>
          </div>
          <div class="hero-card__metric">
            <span class="metric-number">24/7</span>
            <span>готовність до промислових ремонтів у стислий термін</span>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function homePage() {
  return `
    ${hero()}
    <section class="section" id="about-preview">
      <div class="about-grid">
        <article class="about-copy glass reveal">
          <p class="kicker">Про компанію</p>
          <h2>Інженерні ресурси, досвід і монтажні команди в єдиній системі</h2>
          <p>Підприємство ТОВ «РЕФРАСЕРВІС» засноване у 2017 році і працює як на території України, так і за кордоном. Основні ринки компанії включають Україну та країни Європи.</p>
          <p>Компанія має технічні та кадрові ресурси для будівельних, ремонтних і монтажних робіт на підприємствах металургійної галузі.</p>
          <a class="btn" href="/o-nas/">Про нас</a>
        </article>
        <aside class="fib-card glass reveal">
          <img src="/assets/fib.png" alt="FIB services international" loading="lazy" decoding="async">
          <h3>Офіційний представник FIB services international</h3>
          <p>Партнерство підсилює експертизу в промислових ремонтних і будівельних роботах.</p>
        </aside>
      </div>
    </section>
    <section class="section section--compact" id="services" data-search-id="section-services">
      <div class="section__head reveal">
        <div>
          <p class="kicker">Послуги нашої компанії</p>
          <h2>Промислові роботи повного циклу</h2>
        </div>
        <p>Картки розкриваються плавно: кожна послуга веде на окрему сторінку зі збереженим slug публічного сайту.</p>
      </div>
      <div class="service-grid">
        ${Object.entries(services).map(([key, service]) => serviceCard(service, key)).join("")}
      </div>
    </section>
    <section class="section section--compact" id="home-gallery" data-search-id="section-gallery">
      <div class="section__head reveal">
        <div>
          <p class="kicker">Деякі наші об'єкти</p>
          <h2>Реальні промислові майданчики</h2>
        </div>
        <p>На сайті збережено розділ об’єктів і фотогалерею з публічними зображеннями компанії.</p>
      </div>
      <div class="gallery-grid">
      ${gallery.slice(0, 8).map((item, index) => galleryItem(item, index, "home-gallery")).join("")}
      </div>
    </section>
    <section class="section section--compact">
      <div class="section__head reveal">
        <div>
          <p class="kicker">Наші замовники</p>
          <h2>ПАТ «АрселорМіттал Кривий Ріг»</h2>
        </div>
        <img class="glass" style="padding: 22px; background: #fff;" src="/assets/logo-arcelor.jpg" alt="ArcelorMittal" loading="lazy" decoding="async">
      </div>
    </section>
    ${directionsSection()}
  `;
}

function serviceCard(service, key) {
  return `
    <article class="service-card reveal" data-search-id="service-${key}">
      <img src="${service.image}" alt="${service.alt}" loading="lazy" decoding="async">
      <div class="service-card__body">
        <h3>${service.menuTitle}</h3>
        <p>${service.short}</p>
        <a class="btn" href="${service.url}">Дізнатися більше</a>
      </div>
    </article>
  `;
}

function directionsSection() {
  return `
    <section class="section section--compact">
      <div class="section__head reveal">
        <div>
          <p class="kicker">Основні напрямки</p>
          <h2>Фокус на важкій промисловості</h2>
        </div>
        <p>Структура напрямів повторює публічний сайт: коксохімія, металургія, скло, цемент і загальнобудівельні роботи.</p>
      </div>
      <div class="directions-grid">
        ${[
          ["direction-koksohim.jpg", "Коксохімічна промисловість", "Ремонт коксових батарей, технологічного та армувального обладнання, коксохімічних машин.", "/kladka-ogneupornih-izdeliy/"],
          ["direction-glass.jpg", "Металургійна, скляна, цементна промисловість", "Футерування, вогнетривка кладка, металоконструкції, технологічні трубопроводи.", "/futerovochnie-raboti/"],
          ["service-general.jpg", "Загальнобудівельні роботи", "Підготовчі, ремонтні, захисні та допоміжні будівельні роботи.", "/obshie-raboti/"]
        ].map(([image, title, text, url]) => `
          <article class="direction-card reveal">
            <img src="/assets/${image}" alt="${title}" loading="lazy" decoding="async">
            <div class="direction-card__body">
              <h3>${title}</h3>
              <p>${text}</p>
              <a class="btn" href="${url}">- Докладніше -</a>
            </div>
          </article>`).join("")}
      </div>
    </section>
  `;
}

function aboutPage() {
  return pageShell("Про нас", `
    <p>ТОВ «РЕФРАСЕРВІС» засноване у 2017 році й розвивається як промислова будівельна компанія для складних об’єктів металургійної галузі.</p>
    <p>Компанія реалізує проєкти з будівництва та реконструкції коксових батарей, гарячого ремонту простінків, відновлення після консервації, монтажу металоконструкцій, технологічного обладнання, трубопроводів і загальнобудівельних робіт.</p>
    <p>Refraservice працює в Україні та за кордоном. Серед ринків компанії: Центральна й Східна Європа, Африка та Латинська Америка.</p>
    <p>Ключовий принцип роботи: об’єднати інженерні знання, європейський досвід, професійні команди та технічні ресурси для виконання робіт будь-якої складності у стислі строки.</p>
    <h2>Наші послуги</h2>
    ${accordion(Object.entries(services).map(([key, service]) => [service.title, service.short, service.url, `about-service-${key}`]))}
  `, "Про нас", "page-about");
}

function servicePage(key) {
  const service = services[key];
  const portfolio = servicePortfolios.find((item) => item.serviceKey === key);
  return pageShell(service.title, `
    <img class="hero-inline" src="${service.image}" alt="${service.alt}" loading="eager" decoding="async">
    ${service.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    <h2>Склад робіт</h2>
    ${accordion(service.details.map(([title, text], index) => [title, text, service.url, `service-${key}-detail-${index}`]))}
    <h2>Об’єкти за послугою</h2>
    <p>У цьому блоці показані тільки об’єкти, які відповідають цій послузі за описом на публічній сторінці «Наші об’єкти».</p>
    ${serviceObjectsGrid(portfolio)}
    <p><a class="btn" href="/kontakti/">Замовити розрахунок за напрямом</a></p>
  `, service.title, `service-${key}`);
}

function serviceObjectsGrid(portfolio) {
  if (!portfolio?.objects.length) return `<p>Для цієї послуги на публічному сайті немає явно зіставлених об’єктів.</p>`;
  return `
    <div class="object-grid service-object-grid">
      ${portfolio.objects.map((object) => {
        const cover = object.photos[0] || object.coverImage;
        return `
          <article class="object-card reveal" data-service-object="${object.objectId}" data-search-id="object-${object.objectId}">
            <img src="${assetSrc(cover)}" alt="${object.objectName}" loading="lazy" decoding="async" style="width:100%;height:160px;object-fit:cover;border-radius:6px;margin-bottom:16px;">
            <h3>${object.objectName[0] + object.objectName.slice(1).toLowerCase()}</h3>
            <p>${object.description}</p>
            <p><strong>${object.photos.length}</strong> фото, тільки з галереї цього об’єкта</p>
            <a class="btn" href="${object.url}">Відкрити об’єкт</a>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function objectsPage() {
  return pageShell("Наші об’єкти", `
    <p>Розділ повторює публічну структуру портфоліо Refraservice: об’єкти з 1 по 17, включно з проєктами в Україні, Польщі, Південній Африці та Чилі.</p>
    <div class="object-grid">
      ${objects.map(([title, text, image, url], index) => {
        const photos = objectPhotos[index + 1] || [];
        const cover = photos[0] || image;
        return `
        <article class="object-card reveal" id="object-${index + 1}" data-search-id="object-${index + 1}">
          <img src="${assetSrc(cover)}" alt="${title}" loading="lazy" decoding="async" style="width:100%;height:160px;object-fit:cover;border-radius:6px;margin-bottom:16px;">
          <h3>${title}</h3>
          <p>${text}</p>
          <p><strong>${photos.length}</strong> фото в галереї об’єкта</p>
          <a class="btn" href="${url}">Відкрити об’єкт</a>
        </article>
      `}).join("")}
    </div>
  `, "Наші об’єкти", "page-objects");
}

function objectDetailPage(index) {
  const object = objects[index] || objects[8];
  const [title, text, image] = object;
  const photos = objectPhotos[index + 1] || [image];
  return pageShell(title[0] + title.slice(1).toLowerCase(), `
    <img class="hero-inline" src="${assetSrc(photos[0])}" alt="${title}" loading="eager" decoding="async">
    <p>${text}</p>
    <p>Галерея нижче містить тільки фотографії цього об’єкта, перенесені з відповідної публічної сторінки Refraservice.</p>
    <div class="gallery-grid">
      ${photos.map((photo, photoIndex) => galleryItem([photo, `${title} фото ${photoIndex + 1}`], photoIndex, title)).join("")}
    </div>
    <p><a class="btn" href="/objects/">Усі об’єкти</a></p>
  `, title[0] + title.slice(1).toLowerCase(), `object-${index + 1}`);
}

function galleryPage() {
  return pageShell("Фотогалерея", `
    <p>Публічні зображення винесені в сучасну адаптивну сітку з легким hover-ефектом і модальним переглядом.</p>
    <div class="gallery-grid">
      ${gallery.map((item, index) => galleryItem(item, index, "main-gallery")).join("")}
    </div>
  `, "Фотогалерея", "page-gallery");
}

function contactsPage() {
  return `
    <section class="section" id="contacts" data-search-id="page-contacts">
      <div class="section__head reveal">
        <div>
          <p class="kicker">Головна » Контакти</p>
          <h1>Контакти</h1>
        </div>
        <p>Збережені публічно видимі адреси, телефони, email і поля форми з публічного сайту.</p>
      </div>
      <div class="contact-grid">
        <article class="contact-card glass reveal">
          <h2>Refraservice</h2>
          <p><strong>Адреса:</strong> м. Дніпро, вул. Воскресенська, 21</p>
          <p><strong>Офіс:</strong><br><a href="mailto:office@refraservice.com.ua">office@refraservice.com.ua</a><br><a href="tel:+380502242509">(050) 224-25-09</a></p>
          <p><strong>Відділ постачання:</strong><br><a href="mailto:snab@refraservice.com.ua">snab@refraservice.com.ua</a><br><a href="tel:+380673469171">+38 (067) 346-91-71</a></p>
          <p><strong>Кошторисно-договірний відділ:</strong><br><a href="mailto:tender@refraservice.com.ua">tender@refraservice.com.ua</a></p>
        </article>
        ${contactForm("contact")}
      </div>
    </section>
  `;
}

function pageShell(title, content, breadcrumb = title, searchId = "") {
  const searchAttr = searchId ? ` data-search-id="${searchId}" id="${searchId}"` : "";
  return `
    <section class="section">
      <div class="split">
        <article class="content-card glass reveal"${searchAttr}>
          <p class="kicker">Головна » ${breadcrumb}</p>
          <h1>${title}</h1>
          ${content}
        </article>
        <aside class="side-card glass reveal">
          <h3>Наші послуги</h3>
          <ul class="link-list">
            ${Object.values(services).map((service) => `<li><a href="${service.url}">${service.title}</a></li>`).join("")}
          </ul>
          <h3 style="margin-top:28px;">Наші нові об’єкти</h3>
          <ul class="link-list">
            ${objects.slice(8, 17).map(([title, , , url]) => `<li><a href="${url}">${title[0] + title.slice(1).toLowerCase()}</a></li>`).join("")}
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function accordion(items) {
  return `
    <div class="accordion">
      ${items.map(([title, text, url, searchId], index) => `
        <div class="accordion__item ${index === 0 ? "open" : ""}" ${searchId ? `data-search-id="${searchId}"` : ""}>
          <button class="accordion__button" type="button">
            <span>${title}</span><span>+</span>
          </button>
          <div class="accordion__panel">
            <div>
              <p>${text}</p>
              ${url ? `<a href="${url}">Відкрити сторінку</a>` : ""}
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function galleryItem([image, alt], index = 0, group = "gallery") {
  return `
    <button class="gallery-item reveal" type="button" data-gallery-src="${assetSrc(image)}" data-gallery-index="${index}" data-gallery-group="${group}" aria-label="${alt}">
      <img src="${assetSrc(image)}" alt="${alt}" loading="lazy" decoding="async">
    </button>
  `;
}

function render() {
  document.title = route.title;
  const canonical = document.querySelector("link[rel='canonical']");
  if (canonical) canonical.setAttribute("href", route.canonical);

  let content = "";
  if (route.page === "home") content = homePage();
  if (route.page === "about") content = aboutPage();
  if (route.page === "service") content = servicePage(route.service);
  if (route.page === "objects") content = objectsPage();
  if (route.page === "gallery") content = galleryPage();
  if (route.page === "contacts") content = contactsPage();
  if (route.page === "object-detail") content = objectDetailPage(route.objectIndex);

  document.body.innerHTML = `${header()}<main>${content}</main>${footer()}`;
}

function initInteractions() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelector("[data-menu-toggle]")?.addEventListener("click", () => {
    document.querySelector("[data-menu]")?.classList.toggle("open");
  });

  initSearch();

  document.querySelectorAll(".accordion__button").forEach((button) => {
    button.addEventListener("click", () => button.closest(".accordion__item")?.classList.toggle("open"));
  });

  document.querySelectorAll(".reveal").forEach((node, index) => {
    node.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

  const hero = document.querySelector("[data-parallax]");
  let scrollTicking = false;
  function updateScrollDepth() {
    const depth = Math.round(window.scrollY * 0.08);
    document.body.style.setProperty("--page-depth", `${depth}px`);
    if (hero) hero.style.backgroundPosition = `center ${Math.round(window.scrollY * 0.16)}px`;
    scrollTicking = false;
  }
  if (!reduceMotion) {
    window.addEventListener("scroll", () => {
      if (scrollTicking) return;
      scrollTicking = true;
      window.requestAnimationFrame(updateScrollDepth);
    }, { passive: true });
    updateScrollDepth();
  }

  if (!reduceMotion) initTiltEffects();

  document.querySelectorAll("[data-lead-form]").forEach((form) => {
    form.addEventListener("submit", handleFormSubmit);
  });

  const modal = document.querySelector("[data-modal]");
  const modalImage = document.querySelector("[data-modal-image]");
  let activeGallery = [];
  let activeIndex = 0;

  function openModalFrom(button) {
    activeGallery = Array.from(document.querySelectorAll(`[data-gallery-group="${button.dataset.galleryGroup}"]`));
    activeIndex = activeGallery.indexOf(button);
    modal.classList.add("open");
    updateModalImage(false);
  }

  function updateModalImage(animate = true) {
    const button = activeGallery[activeIndex];
    if (!button) return;
    const setImage = () => {
      modalImage.src = button.dataset.gallerySrc;
      modalImage.alt = button.querySelector("img")?.alt || "";
      window.requestAnimationFrame(() => modalImage.classList.remove("is-switching"));
    };
    if (animate && !reduceMotion) {
      modalImage.classList.add("is-switching");
      window.setTimeout(setImage, 150);
    } else {
      setImage();
    }
  }

  function stepModal(direction) {
    if (!activeGallery.length) return;
    activeIndex = (activeIndex + direction + activeGallery.length) % activeGallery.length;
    updateModalImage();
  }

  document.querySelectorAll("[data-gallery-src]").forEach((button) => {
    button.addEventListener("click", () => openModalFrom(button));
  });
  document.querySelector("[data-modal-close]")?.addEventListener("click", () => modal.classList.remove("open"));
  document.querySelector("[data-modal-prev]")?.addEventListener("click", () => stepModal(-1));
  document.querySelector("[data-modal-next]")?.addEventListener("click", () => stepModal(1));
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) modal.classList.remove("open");
  });
  window.addEventListener("keydown", (event) => {
    if (!modal?.classList.contains("open")) return;
    if (event.key === "Escape") modal.classList.remove("open");
    if (event.key === "ArrowLeft") stepModal(-1);
    if (event.key === "ArrowRight") stepModal(1);
  });

  applySearchFocus();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderSearchResults(resultsNode, query) {
  const results = searchSite(query);
  if (!query.trim()) {
    resultsNode.innerHTML = `<p class="search-empty">Почніть вводити назву розділу, послуги, об’єкта або контакту.</p>`;
    return results;
  }
  if (!results.length) {
    resultsNode.innerHTML = `<p class="search-empty">Нічого не знайдено. Спробуйте написати іншу назву.</p>`;
    return results;
  }
  resultsNode.innerHTML = results.map((item) => `
    <a class="search-result" href="${item.href}" data-search-result="${item.id}">
      <span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml((item.aliases || []).slice(0, 2).join(" · ") || item.type)}</small>
      </span>
      <em>${escapeHtml(item.type)}</em>
    </a>
  `).join("");
  return results;
}

function initSearch() {
  const panel = document.querySelector("[data-search-panel]");
  const toggle = document.querySelector("[data-search-toggle]");
  const form = document.querySelector("[data-search-form]");
  const input = document.querySelector("[data-search-input]");
  const resultsNode = document.querySelector("[data-search-results]");
  if (!panel || !toggle || !form || !input || !resultsNode) return;

  toggle.addEventListener("click", () => {
    document.querySelector("[data-menu]")?.classList.remove("open");
    panel.classList.toggle("open");
    if (panel.classList.contains("open")) {
      window.setTimeout(() => input.focus(), 80);
      renderSearchResults(resultsNode, input.value);
    }
  });

  input.addEventListener("input", () => {
    renderSearchResults(resultsNode, input.value);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const results = renderSearchResults(resultsNode, input.value);
    if (results[0]) window.location.href = results[0].href;
  });

  document.addEventListener("click", (event) => {
    if (!panel.classList.contains("open")) return;
    if (panel.contains(event.target) || toggle.contains(event.target)) return;
    panel.classList.remove("open");
  });

  window.refraserviceSearch = { searchIndex, searchSite, normalizeSearchValue };
}

function applySearchFocus() {
  const params = new URLSearchParams(window.location.search);
  const focusId = params.get("focus") || window.location.hash.replace("#", "");
  if (!focusId) return;
  const target = document.querySelector(`[data-search-id="${CSS.escape(focusId)}"]`) || document.getElementById(focusId);
  if (!target) return;
  target.closest(".accordion__item")?.classList.add("open");
  target.classList.add("search-focus");
  window.setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 220);
}

function initTiltEffects() {
  const tiltNodes = document.querySelectorAll(".service-card, .direction-card, .object-card, .gallery-item, .hero-card");
  tiltNodes.forEach((node) => {
    node.addEventListener("mousemove", (event) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateX = (-y * 7).toFixed(2);
      const rotateY = (x * 8).toFixed(2);
      node.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) translateZ(0)`;
    });
    node.addEventListener("mouseleave", () => {
      node.style.transform = "";
    });
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector(".form-status");
  let valid = true;
  form.querySelectorAll("label").forEach((label) => label.classList.remove("invalid"));

  const data = Object.fromEntries(new FormData(form).entries());
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "");
  const required = ["name", "email"];
  if (form.querySelector("[name='subject'][required]")) required.push("subject");

  required.forEach((field) => {
    if (!String(data[field] || "").trim()) {
      form.querySelector(`[name='${field}']`)?.closest("label")?.classList.add("invalid");
      valid = false;
    }
  });
  if (data.email && !emailOk) {
    form.querySelector("[name='email']")?.closest("label")?.classList.add("invalid");
    valid = false;
  }

  if (!valid) {
    status.className = "form-status error";
    status.textContent = "Перевірте обов’язкові поля.";
    return;
  }

  status.className = "form-status";
  status.textContent = "Відправлення...";
  form.querySelector("button[type='submit']").disabled = true;

  window.setTimeout(() => {
    const submissions = JSON.parse(localStorage.getItem("refraserviceLeadDrafts") || "[]");
    submissions.push({ ...data, createdAt: new Date().toISOString() });
    localStorage.setItem("refraserviceLeadDrafts", JSON.stringify(submissions));
    status.className = "form-status success";
    status.textContent = "Заявку збережено локально. Для реального відправлення потрібно підключити backend.";
    form.reset();
    form.querySelector("button[type='submit']").disabled = false;
  }, 700);
}

render();
initInteractions();
