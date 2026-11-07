/* LUMMI Mini App — approval mockups. Static, no build step. */

const LOGO = `<svg class="logo" viewBox="70 -760 5460 820" role="img" aria-label="LUMMI."><path fill="currentColor" d="M120 0V-700H211V-55H572V0ZM982.0 -700V-270Q982.0 -229 990.0 -179.5Q998.0 -130 1028.0 -87.5Q1058.0 -45 1117.0 -16.5Q1176.0 12 1278.0 12Q1342.0 12 1391.5 -8.0Q1441.0 -28 1474.5 -63.0Q1508.0 -98 1525.0 -144.5Q1542.0 -191 1542.0 -244V-700H1498.0V-277Q1498.0 -255 1497.0 -232.5Q1496.0 -210 1491.0 -187.5Q1486.0 -165 1475.5 -143.0Q1465.0 -121 1445.0 -99Q1409.0 -60 1364.0 -46.0Q1319.0 -32 1270.0 -32Q1228.0 -32 1195.5 -45.0Q1163.0 -58 1134.0 -84Q1111.0 -104 1099.0 -124.0Q1087.0 -144 1081.0 -163.5Q1075.0 -183 1074.0 -203.0Q1073.0 -223 1073.0 -243V-700ZM2110.0 -700H2042.0V0H2086.0V-571H2090.0L2399.0 12H2417.0L2733.0 -567H2737.0V0H2828.0V-700H2759.0L2435.0 -99H2431.0ZM3436.0 -700H3368.0V0H3412.0V-571H3416.0L3725.0 12H3743.0L4059.0 -567H4063.0V0H4154.0V-700H4085.0L3761.0 -99H3757.0ZM4734.0 -700V0H4825.0V-700ZM5365.0 -43Q5365.0 -65 5381.0 -81.0Q5397.0 -97 5419.0 -97Q5441.0 -97 5457.0 -81.0Q5473.0 -65 5473.0 -43Q5473.0 -21 5457.0 -5.0Q5441.0 11 5419.0 11Q5397.0 11 5381.0 -5.0Q5365.0 -21 5365.0 -43Z"/></svg>`;
const MONO = `<svg viewBox="70 -760 830 820" aria-hidden="true"><path fill="currentColor" d="M120 0V-700H211V-55H572V0ZM742.0 -43Q742.0 -65 758.0 -81.0Q774.0 -97 796.0 -97Q818.0 -97 834.0 -81.0Q850.0 -65 850.0 -43Q850.0 -21 834.0 -5.0Q818.0 11 796.0 11Q774.0 11 758.0 -5.0Q742.0 -21 742.0 -43Z"/></svg>`;

const ICONS = {
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/>',
  home: '<path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>',
  grid: '<rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/>',
  set: '<rect x="3.5" y="9.5" width="17" height="10.5" rx="1.5"/><path d="M6.5 9.5v-4M9.25 9.5v-4M12 9.5v-4M14.75 9.5v-4M17.5 9.5v-4"/>',
  bag: '<path d="M5.5 8h13l-.9 11.1a1 1 0 0 1-1 .9H7.4a1 1 0 0 1-1-.9z"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/>',
  user: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c.9-3.5 3.6-5.5 7-5.5s6.1 2 7 5.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M6 12h12"/>',
  trash: '<path d="M5 7h14M10 7V5h4v2M7 7l.8 12.1a1 1 0 0 0 1 .9h6.4a1 1 0 0 0 1-.9L17 7"/>',
  share: '<path d="M12 15V4M8 8l4-4 4 4"/><path d="M6 12v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7"/>',
  chevR: '<path d="M10 6l6 6-6 6"/>',
  chevD: '<path d="M6 10l6 6 6-6"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  copy: '<rect x="8.5" y="8.5" width="11" height="11" rx="2"/><path d="M15.5 8.5V6A1.5 1.5 0 0 0 14 4.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5"/>',
  upload: '<path d="M12 15V5M8 9l4-4 4 4"/><path d="M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4.5l3 1.8"/>',
  truck: '<path d="M3.5 6.5h10v9h-10zM13.5 9.5h3.8l3.2 3.3v2.7h-7"/><circle cx="7.5" cy="17.5" r="1.8"/><circle cx="16.5" cy="17.5" r="1.8"/>',
  filter: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  sort: '<path d="M8 5v14M5 16l3 3 3-3M16 19V5M13 8l3-3 3 3"/>',
  pin: '<path d="M12 20.5s6-5.4 6-10.2A6 6 0 0 0 6 10.3c0 4.8 6 10.2 6 10.2z"/><circle cx="12" cy="10.3" r="2.2"/>',
  phone: '<path d="M7 4h2.6l1.4 3.6-1.8 1.2a10.5 10.5 0 0 0 6 6l1.2-1.8 3.6 1.4V17a2 2 0 0 1-2.1 2A15 15 0 0 1 5 6.1 2 2 0 0 1 7 4z"/>',
  gift: '<rect x="4" y="9" width="16" height="4" rx="1"/><path d="M5.5 13v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6M12 9v11"/><path d="M12 9C10.5 6 7.5 5.5 7.5 7.5 7.5 9 12 9 12 9zM12 9c1.5-3 4.5-3.5 4.5-1.5C16.5 9 12 9 12 9z"/>',
  calendar: '<rect x="4" y="5.5" width="16" height="14.5" rx="2"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
  globe: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.4 2.3 2.4 13.7 0 16M12 4c-2.4 2.3-2.4 13.7 0 16"/>',
  close: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
  info: '<circle cx="12" cy="12" r="8"/><path d="M12 11v5"/><path d="M12 8h.01" stroke-width="2"/>',
  more: '<circle cx="6.5" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="17.5" cy="12" r="1.3" fill="currentColor" stroke="none"/>',
  ext: '<path d="M14 4.5h5.5V10M19.5 4.5 11 13"/><path d="M17 13.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V8.5A1.5 1.5 0 0 1 6 7h4.5"/>',
  chat: '<path d="M5 5.5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9l-4.5 3.5v-3.5H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z"/>',
  image: '<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M5 17l4.5-4 3.5 3 2.5-2 3.5 3"/>',
  sun: '<circle cx="12" cy="12" r="3.5"/><path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M6 18l1.4-1.4M16.6 7.4 18 6"/>',
  moon: '<path d="M18.5 14.5A7 7 0 0 1 9.5 5.5a7 7 0 1 0 9 9z"/>',
};
const ic = (n, c = '') => `<svg class="i ${c}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;

/* ---------- Seed catalog (docs/catalog-sample.md). Family, pyramid, sillage, prices = placeholders. ---------- */
const PRICE = { 10: 69000, 30: 149000, 50: 219000 };
const SET_PRICE = 299000;
const F = {
  amouage: {
    brand: 'Amouage', name: 'Guidance', type: 'UNISEX', badge: 'hit',
    fam: { ru: 'Восточный древесный', uz: 'Sharqona yogʻochli' },
    notes: { ru: ['груша', 'фундук', 'ладан'], uz: ['nok', 'findiq', 'ladan'] },
    pyr: { ru: ['груша', 'фундук, роза', 'ладан'], uz: ['nok', 'findiq, atirgul', 'ladan'] },
    season: { ru: 'Осень–зима', uz: 'Kuz–qish' }, time: { ru: 'Вечер', uz: 'Kechqurun' }, sil: { ru: 'Заметный', uz: 'Sezilarli' },
    desc: { ru: 'Сочная груша и сливочный фундук с дымкой ладана и розы. Тёплый, уютный и роскошный.', uz: 'Nok va findiqning shirin-kremli ochilishi, ladan va atirgulning nafis izi. Iliq, sokin va hashamatli.' },
    when: { ru: 'Для свиданий, вечерних выходов и праздников.', uz: 'Uchrashuv, kechki tadbir va bayramlar uchun.' },
  },
  'blue-seduction': {
    brand: 'Antonio Banderas', name: 'Blue Seduction', type: 'HOMME', badge: null,
    fam: { ru: 'Свежий', uz: 'Salqin' },
    notes: { ru: ['бергамот', 'дыня', 'мята'], uz: ['bergamot', 'qovun', 'yalpiz'] },
    pyr: { ru: ['бергамот, мята', 'дыня', 'мята'], uz: ['bergamot, yalpiz', 'qovun', 'yalpiz'] },
    season: { ru: 'Весна–лето', uz: 'Bahor–yoz' }, time: { ru: 'День', uz: 'Kunduzi' }, sil: { ru: 'Лёгкий', uz: 'Yengil' },
    desc: { ru: 'Лёгкий прохладный аромат бергамота, дыни и мяты. Свежий мужской парфюм на каждый день.', uz: 'Bergamot, qovun va yalpizning yengil, salqin uygʻunligi. Har kuni uchun toza erkak atiri.' },
    when: { ru: 'На каждый день: работа, учёба, прогулки, спорт.', uz: 'Har kuni: ish, oʻqish, sayr va sport uchun.' },
  },
  'blue-sapphire': {
    brand: 'Boadicea the Victorious', name: 'Blue Sapphire', type: 'UNISEX', badge: 'new',
    fam: { ru: 'Цветочный древесный', uz: 'Gulli yogʻochli' },
    notes: { ru: ['лимон', 'роза', 'уд'], uz: ['limon', 'atirgul', 'ud'] },
    pyr: { ru: ['лимон', 'роза', 'уд'], uz: ['limon', 'atirgul', 'ud'] },
    season: { ru: 'Осень–зима', uz: 'Kuz–qish' }, time: { ru: 'Вечер', uz: 'Kechqurun' }, sil: { ru: 'Сильный', uz: 'Kuchli' },
    desc: { ru: 'Яркий лимон, сердце из розы и глубокий шлейф уда. Богатый и роскошный аромат.', uz: 'Limonning yorqin boshlanishi, atirgul yuragi va chuqur ud izi. Boy va hashamatli atir.' },
    when: { ru: 'Для свадеб, праздников и особых событий.', uz: 'Toʻy, bayram va maxsus tadbirlar uchun.' },
  },
  tygar: {
    brand: 'Bvlgari', name: 'Tygar', type: 'HOMME', badge: 'hit',
    fam: { ru: 'Цитрусовый', uz: 'Sitrusli' },
    notes: { ru: ['грейпфрут', 'имбирь', 'древесные ноты'], uz: ['greypfrut', 'zanjabil', 'yogʻoch notalari'] },
    pyr: { ru: ['грейпфрут', 'имбирь', 'древесные ноты'], uz: ['greypfrut', 'zanjabil', 'yogʻoch notalari'] },
    season: { ru: 'Весна–лето', uz: 'Bahor–yoz' }, time: { ru: 'День', uz: 'Kunduzi' }, sil: { ru: 'Заметный', uz: 'Sezilarli' },
    desc: { ru: 'Энергичная свежесть грейпфрута и имбиря на тёплой древесной базе.', uz: 'Greypfrut va zanjabilning shiddatli tetikligi, iliq yogʻochli iz bilan.' },
    when: { ru: 'На каждый день и в офис.', uz: 'Har kuni va ofis uchun.' },
  },
  'tygar-extrait': {
    brand: 'Bvlgari', name: 'Tygar Extrait', type: 'HOMME', badge: 'new',
    fam: { ru: 'Амбровый', uz: 'Ambrali' },
    notes: { ru: ['грейпфрут', 'амбра', 'бензоин'], uz: ['greypfrut', 'ambra', 'benzoin'] },
    pyr: { ru: ['грейпфрут', 'амбра', 'бензоин'], uz: ['greypfrut', 'ambra', 'benzoin'] },
    season: { ru: 'Круглый год', uz: 'Yil boʻyi' }, time: { ru: 'День и вечер', uz: 'Kunduzi va kechqurun' }, sil: { ru: 'Сильный', uz: 'Kuchli' },
    desc: { ru: 'Яркий грейпфрут, тёплая амбра и бензоин. Самая насыщенная версия Tygar.', uz: 'Greypfrutning yorqinligi, ambra va benzoinning iliq, chuqur izi. Tygarning eng boy talqini.' },
    when: { ru: 'Подходит и на каждый день, и на мероприятия.', uz: 'Har kuni uchun ham, tadbirlar uchun ham mos.' },
  },
};
Object.keys(F).forEach((k) => (F[k].slug = k));

/* ---------- Strings ---------- */
const T = {
  ru: {
    tgSub: 'мини-приложение', close: 'Закрыть', back: 'Назад',
    tabs: ['Главная', 'Каталог', 'Наборы', 'Корзина', 'Профиль'],
    cur: 'сум', ml: 'мл',
    from: (n) => `<span class="from">от</span> ${n} сум`,
    insp: (b) => `По мотивам ${b}`,
    hit: 'Хит', nw: 'Новинка',
    searchPh: 'Аромат или нота: ваниль, уд…',
    slogan: 'Ароматы, которые освещают',
    bannerTxt: 'Бесплатная доставка до пункта BTS от 250 000 сум',
    bannerCta: 'В каталог',
    quick: [['Homme', 'для него'], ['Femme', 'для неё'], ['Unisex', 'для всех'], ['Наборы', '5 × 10 мл']],
    top: 'Топ продаж', fresh: 'Новинки', all: 'Все',
    discTxt: 'Пять ароматов по 10 мл, чтобы найти свой. Когда набор доставят, на 30 или 50 мл одного из них будет скидка 20% на 30 дней.',
    discReady: 'Готовый набор', discBuild: 'Собрать свой',
    catalog: 'Каталог', filters: 'Фильтры', season: 'Сезон', volume: 'Объём', count: '5 ароматов', sort: 'Топ продаж',
    inStock: 'В наличии', low: 'Осталось 3 шт.', soldOut: 'Нет в наличии',
    ppNudge: 'В корзине 69 000 сум. До бесплатной доставки — ещё <b>181 000 сум</b>',
    about: 'Об аромате', whenH: 'Когда носить', pyrH: 'Ноты', pyrL: ['Верхние', 'Сердце', 'База'],
    chars: ['Стойкость', 'Шлейф', 'Сезон', 'Время'], lasting: 'до 24 часов',
    disclaimer: 'Аромат LUMMI по мотивам, не оригинальный парфюм.',
    uzum: 'Купить на Uzum Market', similar: 'Похожие ароматы',
    buyNow: 'Купить сейчас', toCart: 'В корзину',
    setDeal: 'Скидка за набор −20%', setDealTill: 'до 2 декабря',
    cart: 'Корзина', items2: '2 товара', items3: '3 товара',
    nudge: 'Добавьте ещё <b>32 000 сум</b> — и доставка до пункта BTS будет бесплатной',
    suggest: 'Подойдёт любой аромат 10 мл',
    nudgeDone: 'Доставка до пункта BTS — бесплатно',
    promo: 'Промокод', apply: 'Применить',
    sItems: (n) => `Товары (${n})`, sShip: 'Доставка до пункта BTS', sTotal: 'Итого', free: 'Бесплатно', sSet: 'Скидка за набор',
    checkout: 'Оформить заказ',
    discH: 'Скидка', discHint: 'Одна скидка на заказ. Без промокода мы сами выбираем самую выгодную.',
    promoOn: 'Промокод LUMMI10', promoSub: '−10% на товары', better: 'Скидка за набор выгоднее на 1\u00A0100\u00A0сум', betterSub: 'Tygar Extrait 30 мл · до 2 декабря', switchTo: 'Переключить', sPromo: 'Промокод LUMMI10',
    optSet: ['Скидка за набор −20%', 'Tygar Extrait 30 мл · до 2 декабря'],
    optPromo: ['Промокод', 'Введите код на шаге выше'],
    optBday: ['Купон ко дню рождения', 'Откроется 11 марта'],
    emptyH: 'В корзине пока пусто', emptyP: 'Начните с Discovery set: пять ароматов по 10 мл, чтобы найти свой.',
    toCatalog: 'В каталог', buildSet: 'Собрать набор',
    sets: 'Наборы', segBuild: 'Собрать свой', segReady: 'Discovery set',
    picked: (n) => `${n} из 5 выбрано`, perSet: 'за набор',
    perk: 'Когда набор доставят, на 30 или 50 мл одного из этих ароматов будет скидка 20% на 30 дней.',
    pickH: 'Выберите 5 разных ароматов', more2: 'Выберите ещё 2',
    co: 'Оформление', recip: 'Получатель', name: 'Имя', nameV: 'Дилноза', phone: 'Телефон',
    accPhone: 'Ваш номер', accNote: 'из Telegram', recipPhone: 'Телефон получателя', recipHint: 'Если заказ заберёт другой человек, укажите его номер.',
    bday: 'Дата рождения', optional: 'необязательно', bdayHint: 'Пришлём купон −20% ко дню рождения. Дату можно указать один раз.',
    shipH: 'Доставка BTS', shipInfo: '<b>До пункта BTS</b> по всему Узбекистану, до 48 часов после передачи в BTS. 25 000 сум, от 250 000 сум — бесплатно.',
    region: 'Регион', regionV: 'Самаркандская область', city: 'Город или район', cityV: 'Самарканд',
    point: 'Пункт BTS', pointV: 'BTS Самарканд — Центр', pointA: 'ул. Рудаки, 45 · пн–сб 9:00–18:00', otherPts: 'Ещё 4 пункта в Самарканде', change: 'Сменить',
    noPoint: 'Нет вашего пункта? Укажите адрес вручную',
    comment: 'Комментарий к заказу', commentPh: 'Например, когда удобно звонить',
    yourOrder: 'Ваш заказ',
    consent1: 'Согласен(на) на обработку персональных данных, включая дату рождения. <span class="link">Подробнее</span>',
    consent2: 'Присылать статус заказа в чат с ботом',
    toPay: 'Перейти к оплате',
    pay: 'Оплата', order: 'Заказ № 10482', stWait: 'Ожидает оплаты',
    reserve: 'Товары забронированы до <b>08:40, 8 ноября</b>. Загрузите чек до этого времени — тогда бронь сохранится до проверки.',
    amountL: 'Сумма к переводу', copy: 'Скопировать',
    exact: 'Переведите ровно эту сумму, без округления, — так оплата подтвердится быстрее.',
    cardL: 'Карта получателя', cardTag: 'заглушка', holder: 'Получатель: [владелец карты]',
    steps: ['Переведите сумму на карту в приложении банка', 'Сохраните скриншот или PDF чека', 'Загрузите чек сюда или отправьте его боту @Lummiuz_bot'],
    fileMeta: '1,2 МБ · загружен', replace: 'Заменить', fileHint: 'JPG, PNG или PDF, до 10 МБ',
    sendCheck: 'Отправить чек', askMgr: 'Вопрос по оплате?', writeMgr: 'Написать менеджеру', cancelOrder: 'Отменить заказ',
    stReview: 'Чек на проверке', reviewH: 'Чек получен, проверяем оплату',
    reviewP: 'Сверяем чек с поступлением на карту. Напишем в чат с ботом, как только оплата подтвердится.',
    tl: [['Заказ создан', '7 ноября, 20:40'], ['Чек получен', '20:52'], ['Проверка оплаты', 'сейчас'], ['Сборка', ''], ['Передан в BTS', 'трек-номер придёт в чат с ботом'], ['Доставлен', '']],
    tlDone: [['Заказ создан', '7 ноября, 20:40'], ['Чек получен', '20:52'], ['Оплата подтверждена', '21:03'], ['Сборка', 'сейчас'], ['Передан в BTS', 'трек-номер придёт в чат с ботом'], ['Доставлен', '']],
    orderMini: '2 товара · 243 000 сум', toShop: 'В магазин',
    stOk: 'Оплата подтверждена', okH: 'Спасибо! Оплата подтверждена',
    okP: 'Заказ № 10482 уже собираем. Когда передадим его в BTS, пришлём трек-номер в чат с ботом.',
    myOrders: 'Мои заказы',
    profile: 'Профиль', meName: 'Дилноза Каримова', lang: 'Язык', langs: ['Русский', 'Oʻzbekcha'],
    mySets: 'Мои наборы', setLine: 'Набор от 28 октября · доставлен 2 ноября',
    setPerk: '−20% на 30 или 50 мл одного аромата из набора', setLeft: 'Осталось 25 дней · до 2 декабря', pickScent: 'Выбрать аромат',
    bdayCoupon: 'Купон ко дню рождения', bdayCouponP: '−20% · появится 11 марта, за 3 дня до дня рождения',
    o1: ['№ 10482', '7 ноября · 243 000 сум'], o2: ['№ 10311', '28 октября · 299 000 сум'], stDelivered: 'Доставлен', repeat: 'Повторить заказ',
    savedPt: 'Пункт доставки',
    info: ['О LUMMI', 'Доставка и оплата', 'Возврат', 'Вопросы и ответы', 'Контакты', 'Публичная оферта'],
  },
  uz: {
    tgSub: 'mini-ilova', close: 'Yopish', back: 'Orqaga',
    tabs: ['Asosiy', 'Katalog', 'Toʻplamlar', 'Savat', 'Profil'],
    cur: 'soʻm', ml: 'ml',
    from: (n) => `${n} soʻm<span class="from">dan</span>`,
    insp: (b) => `${b} asosida`,
    hit: 'Xit', nw: 'Yangi',
    searchPh: 'Ifor yoki nota: vanil, ud…',
    slogan: 'Lahzalaringizni yorituvchi iforlar',
    bannerTxt: '250 000 soʻmdan BTS punktigacha bepul yetkazish',
    bannerCta: 'Katalogga',
    quick: [['Homme', 'erkaklar uchun'], ['Femme', 'ayollar uchun'], ['Unisex', 'hamma uchun'], ['Toʻplamlar', '5 × 10 ml']],
    top: 'Koʻp sotilganlar', fresh: 'Yangi iforlar', all: 'Barchasi',
    discTxt: '10 ml dan beshta ifor, oʻzingiznikini topish uchun. Toʻplam yetkazilgach, ulardan birining 30 yoki 50 ml hajmiga 30 kun davomida 20% chegirma.',
    discReady: 'Tayyor toʻplam', discBuild: 'Oʻzingiz yigʻing',
    catalog: 'Katalog', filters: 'Filtrlar', season: 'Mavsum', volume: 'Hajm', count: '5 ta ifor', sort: 'Koʻp sotilgan',
    inStock: 'Mavjud', low: '3 dona qoldi', soldOut: 'Tugagan',
    ppNudge: 'Savatda 69 000 soʻm. Bepul yetkazishgacha yana <b>181 000 soʻm</b>',
    about: 'Ifor haqida', whenH: 'Qachon taqish kerak', pyrH: 'Notalar', pyrL: ['Yuqori', 'Yurak', 'Baza'],
    chars: ['Turgʻunlik', 'Iz', 'Mavsum', 'Vaqt'], lasting: '24 soatgacha',
    disclaimer: 'LUMMI ifori mashhur atir asosida yaratilgan, original atir emas.',
    uzum: 'Uzum Market’da xarid qilish', similar: 'Oʻxshash iforlar',
    buyNow: 'Hozir sotib olish', toCart: 'Savatga',
    setDeal: 'Toʻplam chegirmasi −20%', setDealTill: '2-dekabrgacha',
    cart: 'Savat', items2: '2 ta mahsulot', items3: '3 ta mahsulot',
    nudge: 'Yana <b>32 000 soʻm</b> qoʻshing — BTS punktigacha yetkazish bepul boʻladi',
    suggest: 'Istalgan 10 ml ifor mos keladi',
    nudgeDone: 'BTS punktigacha yetkazish — bepul',
    promo: 'Promokod', apply: 'Qoʻllash',
    sItems: (n) => `Mahsulotlar (${n})`, sShip: 'BTS punktigacha yetkazish', sTotal: 'Jami', free: 'Bepul', sSet: 'Toʻplam chegirmasi',
    checkout: 'Rasmiylashtirish',
    discH: 'Chegirma', discHint: 'Bitta buyurtmaga bitta chegirma. Promokodsiz eng foydalisini oʻzimiz tanlaymiz.',
    promoOn: 'LUMMI10 promokodi', promoSub: 'mahsulotlarga −10%', better: 'Toʻplam chegirmasi 1\u00A0100\u00A0soʻm foydaliroq', betterSub: 'Tygar Extrait 30 ml · 2-dekabrgacha', switchTo: 'Almashtirish', sPromo: 'LUMMI10 promokodi',
    optSet: ['Toʻplam chegirmasi −20%', 'Tygar Extrait 30 ml · 2-dekabrgacha'],
    optPromo: ['Promokod', 'Kodni yuqorida kiriting'],
    optBday: ['Tugʻilgan kun kuponi', '11-martda ochiladi'],
    emptyH: 'Savat hozircha boʻsh', emptyP: 'Discovery set’dan boshlang: oʻzingiznikini topish uchun 10 ml dan beshta ifor.',
    toCatalog: 'Katalogga', buildSet: 'Toʻplam yigʻish',
    sets: 'Toʻplamlar', segBuild: 'Oʻzingiz yigʻing', segReady: 'Discovery set',
    picked: (n) => `5 tadan ${n} tasi tanlandi`, perSet: 'toʻplam narxi',
    perk: 'Toʻplam yetkazilgach, shu iforlardan birining 30 yoki 50 ml hajmiga 30 kun davomida 20% chegirma.',
    pickH: '5 xil ifor tanlang', more2: 'Yana 2 ta tanlang',
    co: 'Rasmiylashtirish', recip: 'Qabul qiluvchi', name: 'Ism', nameV: 'Dilnoza', phone: 'Telefon',
    accPhone: 'Raqamingiz', accNote: 'Telegram’dan', recipPhone: 'Qabul qiluvchi telefoni', recipHint: 'Buyurtmani boshqa odam olsa, uning raqamini kiriting.',
    bday: 'Tugʻilgan sana', optional: 'ixtiyoriy', bdayHint: 'Tugʻilgan kuningizga −20% kupon yuboramiz. Sanani faqat bir marta kiritish mumkin.',
    shipH: 'BTS orqali yetkazish', shipInfo: '<b>BTS punktigacha</b> butun Oʻzbekiston boʻylab, BTS’ga topshirilgach 48 soatgacha. 25 000 soʻm, 250 000 soʻmdan — bepul.',
    region: 'Viloyat', regionV: 'Samarqand viloyati', city: 'Shahar yoki tuman', cityV: 'Samarqand shahri',
    point: 'BTS punkti', pointV: 'BTS Samarqand — Markaz', pointA: 'Rudakiy koʻchasi, 45 · du–sh 9:00–18:00', otherPts: 'Samarqandda yana 4 ta punkt', change: 'Oʻzgartirish',
    noPoint: 'Punktingiz yoʻqmi? Manzilni qoʻlda yozing',
    comment: 'Buyurtmaga izoh', commentPh: 'Masalan, qoʻngʻiroq uchun qulay vaqt',
    yourOrder: 'Buyurtmangiz',
    consent1: 'Shaxsiy ma’lumotlarim, jumladan tugʻilgan sanam qayta ishlanishiga roziman. <span class="link">Batafsil</span>',
    consent2: 'Buyurtma holatini bot chatiga yuborish',
    toPay: 'Toʻlovga oʻtish',
    pay: 'Toʻlov', order: 'Buyurtma № 10482', stWait: 'Toʻlov kutilmoqda',
    reserve: 'Mahsulotlar <b>8-noyabr, 08:40</b> gacha band qilindi. Shu vaqtgacha chekni yuklang — tekshiruv tugaguncha bron saqlanadi.',
    amountL: 'Oʻtkaziladigan summa', copy: 'Nusxalash',
    exact: 'Aynan shu summani yaxlitlamasdan oʻtkazing — toʻlov tezroq tasdiqlanadi.',
    cardL: 'Qabul qiluvchi kartasi', cardTag: 'namuna', holder: 'Qabul qiluvchi: [karta egasi]',
    steps: ['Bank ilovasida summani kartaga oʻtkazing', 'Chek skrinshotini yoki PDF’ini saqlang', 'Chekni shu yerga yuklang yoki @Lummiuz_bot botiga yuboring'],
    fileMeta: '1,2 MB · yuklandi', replace: 'Almashtirish', fileHint: 'JPG, PNG yoki PDF, 10 MB gacha',
    sendCheck: 'Chekni yuborish', askMgr: 'Toʻlov boʻyicha savol bormi?', writeMgr: 'Menejerga yozish', cancelOrder: 'Buyurtmani bekor qilish',
    stReview: 'Chek tekshirilmoqda', reviewH: 'Chek qabul qilindi, toʻlovni tekshiryapmiz',
    reviewP: 'Chekni kartaga tushgan pul bilan solishtiryapmiz. Toʻlov tasdiqlanishi bilan bot chatiga yozamiz.',
    tl: [['Buyurtma yaratildi', '7-noyabr, 20:40'], ['Chek qabul qilindi', '20:52'], ['Toʻlov tekshirilmoqda', 'hozir'], ['Yigʻilmoqda', ''], ['BTS’ga topshirildi', 'trek raqami bot chatiga keladi'], ['Yetkazildi', '']],
    tlDone: [['Buyurtma yaratildi', '7-noyabr, 20:40'], ['Chek qabul qilindi', '20:52'], ['Toʻlov tasdiqlandi', '21:03'], ['Yigʻilmoqda', 'hozir'], ['BTS’ga topshirildi', 'trek raqami bot chatiga keladi'], ['Yetkazildi', '']],
    orderMini: '2 ta mahsulot · 243 000 soʻm', toShop: 'Doʻkonga',
    stOk: 'Toʻlov tasdiqlandi', okH: 'Rahmat! Toʻlov tasdiqlandi',
    okP: 'Buyurtma № 10482 yigʻilmoqda. BTS’ga topshirganimizda trek raqamini bot chatiga yuboramiz.',
    myOrders: 'Buyurtmalarim',
    profile: 'Profil', meName: 'Dilnoza Karimova', lang: 'Til', langs: ['Русский', 'Oʻzbekcha'],
    mySets: 'Mening toʻplamlarim', setLine: 'Toʻplam 28-oktabr · 2-noyabrda yetkazildi',
    setPerk: 'Toʻplamdagi bitta iforning 30 yoki 50 ml hajmiga −20%', setLeft: '25 kun qoldi · 2-dekabrgacha', pickScent: 'Ifor tanlash',
    bdayCoupon: 'Tugʻilgan kun kuponi', bdayCouponP: '−20% · 11-martda, tugʻilgan kuningizdan 3 kun oldin keladi',
    o1: ['№ 10482', '7-noyabr · 243 000 soʻm'], o2: ['№ 10311', '28-oktabr · 299 000 soʻm'], stDelivered: 'Yetkazildi', repeat: 'Buyurtmani takrorlash',
    savedPt: 'Yetkazish punkti',
    info: ['LUMMI haqida', 'Yetkazish va toʻlov', 'Qaytarish', 'Savol-javoblar', 'Kontaktlar', 'Ommaviy oferta'],
  },
};

/* keep Uzbek dates like "2-dekabrgacha" on one line */
(function nowrapDates(o) {
  for (const k of Object.keys(o)) {
    if (typeof o[k] === 'string') o[k] = o[k].replace(/(\d{1,2}-[a-zʻ’]+)/g, '<span class="nw">$1</span>');
    else if (Array.isArray(o[k]) || (o[k] && typeof o[k] === 'object')) nowrapDates(o[k]);
  }
})(T.uz);

/* ---------- Helpers ---------- */
const money = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');
let L = 'ru';
let t = T.ru;
const sum = (n) => `${money(n)} ${t.cur}`;
const notes = (f) => f.notes[L].join(' · ');

function tg(kind) {
  const left = kind === 'back' ? `${ic('back')}<span>${t.back}</span>` : `<span>${t.close}</span>`;
  return `<header class="tg" aria-label="Telegram"><div class="tg-l">${left}</div><div class="tg-c"><b>LUMMI.</b><span>${t.tgSub}</span></div><div class="tg-r">${ic('more')}</div></header>`;
}

function tabs(active, badge = 2) {
  const icons = ['home', 'grid', 'set', 'bag', 'user'];
  return `<nav class="tabs">${t.tabs
    .map((n, i) => `<a class="tab${i === active ? ' on' : ''}">${ic(icons[i])}${i === 3 && badge ? `<span class="dot">${badge}</span>` : ''}<span>${n}</span></a>`)
    .join('')}</nav>`;
}

const badge = (f) => (f.badge === 'hit' ? `<span class="badge">${t.hit}</span>` : f.badge === 'new' ? `<span class="badge new">${t.nw}</span>` : '<span></span>');

function pc(f, hideBadge = false) {
  return `<article class="pc">
    <div class="pc-top">${hideBadge ? '<span></span>' : badge(f)}<span class="type">${f.type}</span></div>
    <div class="ph"><img src="img/${f.slug}_30ml_card.webp" alt="" loading="lazy"></div>
    <div class="pc-body">
      <div class="t-caps">${t.insp(f.brand)}</div>
      <h3 class="t-name">${f.name}</h3>
      <div class="rule"></div>
      <div class="t-notes">${notes(f)}</div>
      <div class="pc-foot"><span class="price">${t.from(money(PRICE[10]))}</span><button class="plus" aria-label="+">${ic('plus')}</button></div>
    </div>
  </article>`;
}

const secHead = (title, link = true) =>
  `<div class="sec-head"><h2 class="t-sec">${title}</h2>${link ? `<a>${t.all}${ic('chevR', 'xs')}</a>` : ''}</div>`;

const nudgeBar = (pct, left, right) =>
  `<div class="thread"><i style="width:${pct}%"></i></div><div class="ends"><span>${left}</span><span>${right}</span></div>`;

/* ---------- Screens ---------- */
const S = {};

S.home = () => `${tg('close')}<div class="scroll">
  <div class="appbar">${LOGO}<span class="lang"><span class="${L === 'ru' ? 'on' : ''}">RU</span><span class="${L === 'uz' ? 'on' : ''}">UZ</span></span></div>
  <div class="search field pl">${ic('search', 's')}<span class="grow">${t.searchPh}</span></div>
  <section class="banner">
    <div class="banner-txt"><h2>${t.slogan}</h2><p>${t.bannerTxt}</p><span class="btn btn-p">${t.bannerCta}</span></div>
    <img src="img/discovery-banner.webp" alt="">
  </section>
  <div class="dots"><i class="on"></i><i></i><i></i></div>
  <nav class="quick">${t.quick.map(([a, b]) => `<a><span><b>${a}</b><span>${b}</span></span>${ic('chevR', 's')}</a>`).join('')}</nav>
  ${secHead(t.top)}
  <div class="hscroll">${['amouage', 'tygar', 'blue-sapphire', 'blue-seduction'].map((k) => pc(F[k], F[k].badge === 'hit')).join('')}</div>
  <section class="disc">
    <div class="disc-vials">${['amouage', 'blue-seduction', 'blue-sapphire', 'tygar', 'tygar-extrait'].map((k) => `<div class="slot"><img src="img/${k}_10ml_vial.webp" alt=""></div>`).join('')}</div>
    <div class="disc-body">
      <div class="row between"><h2 class="t-sec">Discovery set</h2><span class="price">${sum(SET_PRICE)}</span></div>
      <p class="small muted" style="margin:8px 0 0">${t.discTxt}</p>
      <div class="row"><span class="btn btn-s">${t.discReady}</span><span class="btn btn-p">${t.discBuild}</span></div>
    </div>
  </section>
  ${secHead(t.fresh)}
  <div class="hscroll">${['tygar-extrait', 'blue-sapphire', 'amouage'].map((k) => pc(F[k], F[k].badge === 'new')).join('')}</div>
  <div style="height:28px"></div>
</div>${tabs(0, 1)}`;

S.catalog = () => `${tg('close')}<div class="scroll">
  <div class="screen-head"><h1 class="t-title">${t.catalog}</h1></div>
  <div class="search field pl">${ic('search', 's')}<span class="grow">${t.searchPh}</span></div>
  <div class="chips" style="margin-top:12px">
    <span class="chip on">${ic('filter', 'xs')}${t.filters}<span class="cnt">1</span></span>
    <span class="chip">Homme</span><span class="chip">Femme</span><span class="chip">Unisex</span>
    <span class="chip">${t.season}${ic('chevD', 'xs')}</span><span class="chip">${t.volume}${ic('chevD', 'xs')}</span>
  </div>
  <div class="toolbar"><span class="muted">${t.count}</span><button>${ic('sort', 'xs')}${t.sort}</button></div>
  <div class="pgrid">${['amouage', 'tygar', 'blue-sapphire', 'tygar-extrait', 'blue-seduction'].map((k) => pc(F[k])).join('')}</div>
  <div style="height:24px"></div>
</div>${tabs(1, 1)}`;

function product(slug, vol, sale) {
  const f = F[slug];
  const vols = [10, 30, 50]
    .map((v) => {
      if (sale && v === 50) return `<button class="vol off" disabled><b>${v} ${t.ml}</b><span>${t.soldOut}</span></button>`;
      const discounted = sale && v === 30;
      const price = discounted ? `<span class="was">${money(PRICE[v])}</span><span>${money(PRICE[v] * 0.8)}</span>` : `<span>${money(PRICE[v])}</span>`;
      return `<button class="vol${v === vol ? ' on' : ''}" data-vol="${v}" aria-pressed="${v === vol}"><b>${v} ${t.ml}</b>${price}</button>`;
    })
    .join('');
  const imgs = [10, 30, 50].map((v) => `<img src="img/${slug}_${v}ml.webp" alt="" data-v="${v}" style="opacity:${v === vol ? 1 : 0}">`).join('');
  const unit = sale && vol === 30 ? PRICE[30] * 0.8 : PRICE[vol];
  const similar = slug === 'amouage' ? ['blue-sapphire'] : ['tygar', 'blue-seduction'];
  return `${tg('back')}<div class="scroll">
  <div class="gallery">${imgs}<button class="icon-btn" aria-label="share">${ic('share', 's')}</button></div>
  <div class="pp">
    <div class="row between">${badge(f)}<span class="type">${f.type} · <span style="letter-spacing:.06em;text-transform:none;font-family:var(--f-ui);font-size:12px">${f.fam[L]}</span></span></div>
    <div class="t-caps" style="margin-top:14px">${t.insp(f.brand)}</div>
    <h1 class="t-name lg" style="margin-top:2px">${f.name}</h1>
    <div class="lrule"><i></i></div>
    <div class="t-notes" style="font-size:13.5px">${notes(f)}</div>
    <div class="vols">${vols}</div>
    <div class="stock${sale ? ' low' : ''}">${sale ? t.low : t.inStock}</div>
    ${sale ? `<div class="setdeal" style="margin-top:14px"><b>${t.setDeal}</b><span class="muted">${t.setDealTill}</span></div>` : ''}
    <div class="nudge" style="margin-top:16px"><p>${t.ppNudge}</p>${nudgeBar(27.6, '69 000', '250 000')}</div>
  </div>
  <div class="pad" style="margin-top:28px"><h2 class="t-sec">${t.about}</h2>
    <p style="font-size:15px;margin:10px 0 0">${f.desc[L]}</p>
    <p class="small muted" style="margin:8px 0 0"><span style="color:var(--ink);font-weight:600">${t.whenH}:</span> ${f.season[L].toLowerCase()}, ${f.time[L].toLowerCase()}. ${f.when[L]}</p>
  </div>
  <div class="pad" style="margin-top:24px"><h2 class="t-sec" style="margin-bottom:10px">${t.pyrH}</h2>
    <div class="pyr">${t.pyrL.map((l, i) => `<div><span>${l}</span><div>${f.pyr[L][i]}</div></div>`).join('')}</div>
  </div>
  <dl class="dl pad" style="margin:20px 16px 0;padding:0">
    <div><dt>${t.chars[0]}</dt><dd>${t.lasting}</dd></div><div><dt>${t.chars[1]}</dt><dd>${f.sil[L]}</dd></div>
    <div><dt>${t.chars[2]}</dt><dd>${f.season[L]}</dd></div><div><dt>${t.chars[3]}</dt><dd>${f.time[L]}</dd></div>
  </dl>
  <div class="pad" style="margin-top:20px"><div class="disclaimer">${ic('info', 'xs')}<span>${t.disclaimer}</span></div></div>
  <div class="pad" style="margin-top:12px"><span class="btn btn-s btn-w">${t.uzum}${ic('ext', 'xs')}</span></div>
  ${secHead(t.similar, false)}
  <div class="hscroll">${similar.map((k) => pc(F[k])).join('')}</div>
  <div style="height:24px"></div>
</div>
<div class="dock">
  <div class="row between" style="margin-bottom:10px;font-size:13px"><span class="muted">${f.name} · ${vol} ${t.ml}</span><span class="price">${sale && vol === 30 ? `<span class="strike" style="font-size:12.5px;margin-right:6px">${money(PRICE[30])}</span>` : ''}${sum(unit)}</span></div>
  <div class="row" style="display:grid;grid-template-columns:1.2fr 1fr"><span class="btn btn-s">${t.buyNow}</span><span class="btn btn-p">${t.toCart}</span></div>
</div>`;
}
S.product = (st) => product('amouage', st.vol || 30, false);
S['product-sale'] = (st) => product('tygar-extrait', st.vol || 30, true);

const item = (slug, vol, qty, price, was = '', note = '') => {
  const f = F[slug];
  return `<div class="item"><div class="ph"><img src="img/${slug}_${vol}ml_card.webp" alt=""></div><div>
    <div class="item-top"><div><div class="t-caps">${t.insp(f.brand)}</div><div class="t-name">${f.name}</div><div class="item-meta">${vol} ${t.ml}</div>${note}</div>
      <div class="item-price">${was ? `<span class="strike small">${was}</span>` : ''}<span class="price">${price}</span></div></div>
    <div class="item-foot"><span class="stepper"><button aria-label="−">${ic('minus', 'xs')}</button><span>${qty}</span><button aria-label="+">${ic('plus', 'xs')}</button></span>
      <button class="trash" aria-label="delete">${ic('trash', 's')}</button></div>
  </div></div>`;
};

const mini = (slug) => {
  const f = F[slug];
  return `<div class="mini"><div class="ph"><img src="img/${slug}_10ml_card.webp" alt=""></div><div><div class="t-name">${f.name}</div><div class="small muted">10 ${t.ml} · ${sum(PRICE[10])}</div></div><button class="plus" aria-label="+">${ic('plus')}</button></div>`;
};

const summary = (rows) =>
  `<dl class="sum">${rows.map(([a, b, cls]) => `<div class="${cls || ''}"><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl>`;

const promoRow = () =>
  `<div class="row" style="gap:8px"><div class="field pl" style="flex:1"><span class="grow">${t.promo}</span></div><span class="btn btn-s" style="height:48px">${t.apply}</span></div>`;

S.cart = () => `${tg('close')}<div class="scroll">
  <div class="screen-head"><h1 class="t-title">${t.cart}</h1><span class="small muted">${t.items2}</span></div>
  <div class="pad"><div class="nudge"><p>${t.nudge}</p>${nudgeBar(87.2, '218 000', '250 000')}
    <div class="small muted" style="margin:14px 0 2px">${t.suggest}</div>${mini('tygar')}${mini('blue-sapphire')}</div></div>
  <div class="pad" style="margin-top:12px"><div class="card" style="padding:12px 14px 0">${item('amouage', 30, 1, sum(PRICE[30]))}${item('blue-seduction', 10, 1, sum(PRICE[10]))}</div></div>
  <div class="pad" style="margin-top:16px">${promoRow()}</div>
  <div class="pad" style="margin-top:16px"><div class="card card-pad">${summary([
    [t.sItems(2), sum(218000)],
    [t.sShip, sum(25000)],
    [t.sTotal, sum(243000), 'tot'],
  ])}</div></div>
  <div style="height:20px"></div>
</div>
<div class="dock"><span class="btn btn-p btn-w">${t.checkout}<span class="sep"></span>${sum(243000)}</span></div>${tabs(3)}`;

S['cart-discount'] = () => `${tg('close')}<div class="scroll">
  <div class="screen-head"><h1 class="t-title">${t.cart}</h1><span class="small muted">${t.items3}</span></div>
  <div class="pad"><div class="nudge done"><p>${ic('check', 's')}${t.nudgeDone}</p>${nudgeBar(100, '258 300', '250 000')}</div></div>
  <div class="pad" style="margin-top:12px"><div class="card" style="padding:12px 14px 0">
    ${item('tygar-extrait', 30, 1, sum(PRICE[30]))}${item('amouage', 10, 1, sum(PRICE[10]))}${item('blue-seduction', 10, 1, sum(PRICE[10]))}</div></div>
  <div class="pad" style="margin-top:16px"><div class="card card-pad">
    <h2 class="t-sec">${t.discH}</h2>
    <div class="small muted" style="margin-top:2px">${t.discHint}</div>
    <div class="applied"><span class="row" style="gap:8px;align-items:flex-start">${ic('check', 's')}<span><b>${t.promoOn}</b><span class="small muted" style="display:block">${t.promoSub}</span></span></span><span class="row" style="gap:2px"><span class="price">−${money(28700)}</span><button class="trash" aria-label="remove">${ic('close', 's')}</button></span></div>
    <div class="setdeal"><span><b>${t.better}</b><span class="small muted" style="display:block">${t.betterSub}</span></span><span class="btn btn-s btn-sm">${t.switchTo}</span></div>
  </div></div>
  <div class="pad" style="margin-top:16px"><div class="card card-pad">${summary([
    [t.sItems(3), sum(287000)],
    [t.sPromo, `−${sum(28700)}`],
    [t.sShip, `<span class="sale">${t.free}</span>`],
    [t.sTotal, sum(258300), 'tot'],
  ])}</div></div>
  <div style="height:20px"></div>
</div>
<div class="dock"><span class="btn btn-p btn-w">${t.checkout}<span class="sep"></span>${sum(258300)}</span></div>${tabs(3, 3)}`;

S['cart-empty'] = () => `${tg('close')}<div class="scroll">
  <div class="screen-head"><h1 class="t-title">${t.cart}</h1></div>
  <div class="empty"><div class="mono">${MONO.replace('<svg', '<svg style="width:30px;height:30px;color:var(--ink)"')}</div>
    <h2>${t.emptyH}</h2><p>${t.emptyP}</p>
    <span class="btn btn-p btn-w">${t.buildSet}</span><span class="btn btn-s btn-w" style="margin-top:8px">${t.toCatalog}</span></div>
</div>${tabs(3, 0)}`;

S.set = () => {
  const chosen = ['amouage', 'blue-sapphire', 'tygar-extrait'];
  const slots = [0, 1, 2, 3, 4]
    .map((i) => (chosen[i] ? `<div class="slot"><img src="img/${chosen[i]}_10ml_vial.webp" alt=""></div>` : `<div class="slot empty${i === 3 ? ' next' : ''}">${ic('plus')}${i + 1}</div>`))
    .join('');
  const names = [0, 1, 2, 3, 4].map((i) => (chosen[i] ? `<span>${F[chosen[i]].name}</span>` : `<span class="pl">—</span>`)).join('');
  const rows = ['amouage', 'blue-sapphire', 'tygar-extrait', 'tygar', 'blue-seduction']
    .map((k) => {
      const f = F[k];
      const on = chosen.includes(k);
      return `<div class="pick"><div class="ph"><img src="img/${k}_10ml_card.webp" alt=""></div><div><div class="t-caps">${t.insp(f.brand)}</div><div class="t-name">${f.name}</div><div class="t-notes" style="margin-top:2px">${notes(f)}</div></div><span class="sel${on ? ' on' : ''}">${ic(on ? 'check' : 'plus')}</span></div>`;
    })
    .join('');
  return `${tg('close')}<div class="scroll">
  <div class="screen-head"><h1 class="t-title">${t.sets}</h1></div>
  <div class="pad"><div class="aseg"><span class="on">${t.segBuild}</span><span>${t.segReady}</span></div></div>
  <section class="box" style="margin-top:14px">
    <div class="box-head">${LOGO.replace('class="logo"', 'class="logo" style="height:12.5px;margin:0 auto 8px"')}<div class="t-caps">Discovery set</div><div class="lrule c"><i></i></div><div class="small muted">5 × 10 ${t.ml}</div></div>
    <div class="slots">${slots}</div>
    <div class="slot-names">${names}</div>
    <div class="box-foot"><div class="row"><span>${t.picked(3)}</span><span><b>${sum(SET_PRICE)}</b> ${t.perSet}</span></div><div class="thread"><i style="width:60%"></i></div></div>
  </section>
  <div class="perk">${ic('gift', 's')}<span>${t.perk}</span></div>
  ${secHead(t.pickH, false)}
  <div class="pad" style="margin-top:-6px">${rows}</div>
  <div style="height:20px"></div>
</div>
<div class="dock"><span class="btn btn-d btn-w" aria-disabled="true">${t.more2}</span></div>${tabs(2)}`;
};

S.checkout = () => `${tg('back')}<div class="scroll">
  <div class="screen-head"><h1 class="t-title">${t.co}</h1></div>
  <section class="blk"><div class="blk-h"><h2 class="t-sec">${t.recip}</h2></div>
    <div class="fields">
      <div><div class="lbl">${t.name}</div><div class="field">${t.nameV}</div></div>
      <div><div class="lbl">${t.accPhone}</div><div class="field num" style="background:transparent;box-shadow:inset 0 0 0 1px var(--line-strong)"><span class="grow">+998 90 123 45 67</span><span class="small sale row" style="gap:4px;font-weight:600">${ic('check', 'xs')}${t.accNote}</span></div></div>
      <div><div class="lbl">${t.recipPhone}</div><div class="field num">+998 90 123 45 67</div><div class="hint">${t.recipHint}</div></div>
      <div><div class="lbl"><span>${t.bday}</span><span>${t.optional}</span></div><div class="field num"><span class="grow">14.03.1996</span>${ic('calendar', 's')}</div><div class="hint">${t.bdayHint}</div></div>
    </div></section>
  <section class="blk"><div class="blk-h"><h2 class="t-sec">${t.shipH}</h2></div>
    <div class="ship">${ic('truck', 's')}<span>${t.shipInfo}</span></div>
    <div class="fields">
      <div><div class="lbl">${t.region}</div><div class="field"><span class="grow">${t.regionV}</span>${ic('chevD', 's')}</div></div>
      <div><div class="lbl">${t.city}</div><div class="field"><span class="grow">${t.cityV}</span>${ic('chevD', 's')}</div></div>
      <div><div class="lbl"><span>${t.point}</span><span class="link" style="font-size:12.5px">${t.change}</span></div>
        <div class="point"><b>${t.pointV}</b><span>${t.pointA}</span>${ic('pin', 's')}</div>
        <div class="hint">${t.otherPts}</div></div>
      <div class="small"><span class="link">${t.noPoint}</span></div>
    </div></section>
  <section class="blk"><div class="lbl">${t.comment}</div><div class="field area pl">${t.commentPh}</div></section>
  <section class="blk"><div class="blk-h"><h2 class="t-sec">${t.yourOrder}</h2></div>
    <div class="card card-pad">${summary([[t.sItems(2), sum(218000)], [t.sShip, sum(25000)], [t.sTotal, sum(243000), 'tot']])}</div></section>
  <section class="blk">
    <div class="consent"><span class="check on">${ic('check')}</span><span>${t.consent1}</span></div>
    <div class="consent"><span class="check on">${ic('check')}</span><span>${t.consent2}</span></div>
  </section>
  <div style="height:22px"></div>
</div>
<div class="dock"><span class="btn btn-p btn-w">${t.toPay}<span class="sep"></span>${sum(243000)}</span></div>`;

S.payment = () => `${tg('back')}<div class="scroll">
  <div class="pay-head"><div class="row between"><h1 class="t-title">${t.pay}</h1><span class="status">${t.stWait}</span></div><div class="small muted" style="margin-top:4px">${t.order}</div></div>
  <div class="reserve">${ic('clock', 's')}<span>${t.reserve}</span></div>
  <section class="amount">
    <div class="lbl">${t.amountL}</div>
    <div class="copyrow"><span class="big">${sum(243000)}</span><button class="copy-i" aria-label="${t.copy}">${ic('copy', 's')}</button></div>
    <div class="hint">${t.exact}</div>
    <hr class="hr">
    <div class="lbl"><span>${t.cardL}</span><span class="ph-tag">${t.cardTag}</span></div>
    <div class="copyrow"><span class="cardno">9860 0000 0000 0000</span><button class="copy-i" aria-label="${t.copy}">${ic('copy', 's')}</button></div>
    <div class="small muted" style="margin-top:6px">${t.holder}</div>
  </section>
  <ol class="steps">${t.steps.map((s) => `<li><span>${s}</span></li>`).join('')}</ol>
  <div class="file"><div class="thumb">${ic('image')}</div><div><b>chek-10482.jpg</b><span class="small muted">${t.fileMeta}</span></div><span class="link small" style="margin-right:6px">${t.replace}</span></div>
  <div class="hint" style="margin:6px 16px 0">${t.fileHint}</div>
  <div class="small" style="text-align:center;margin:22px 16px 8px"><span class="muted">${t.askMgr}</span> <span class="link">${t.writeMgr}</span></div>
  <div class="small" style="text-align:center;margin:12px 16px 8px"><span class="link muted">${t.cancelOrder}</span></div>
  <div style="height:12px"></div>
</div>
<div class="dock"><span class="btn btn-p btn-w">${ic('upload', 's')}${t.sendCheck}</span></div>`;

function timeline(rows, doneN) {
  return `<ol class="timeline">${rows
    .map(([a, b], i) => {
      const cls = i < doneN ? 'done' : i === doneN ? 'now' : 'later';
      return `<li class="${cls}"><span class="tl-dot">${i < doneN ? ic('check') : ''}</span><div><b>${a}</b>${b ? `<span class="small">${b}</span>` : ''}</div></li>`;
    })
    .join('')}</ol>`;
}

const orderMini = () =>
  `<div class="card card-pad" style="margin:12px 16px 0;display:grid;grid-template-columns:1fr auto;align-items:center;gap:12px">
    <div><b style="font-weight:600">${t.order}</b><div class="small muted">${t.orderMini}</div></div>
    <div class="row" style="gap:6px"><div class="ph" style="width:34px;border-radius:6px"><img src="img/amouage_30ml_card.webp" alt=""></div><div class="ph" style="width:34px;border-radius:6px"><img src="img/blue-seduction_10ml_card.webp" alt=""></div></div>
  </div>`;

S['pay-review'] = () => `${tg('back')}<div class="scroll">
  <div class="pay-head"><div class="row between"><h1 class="t-title">${t.pay}</h1><span class="status">${t.stReview}</span></div></div>
  <div class="pad" style="margin-top:22px"><h2 style="font:600 19px/1.3 var(--f-ui);margin:0">${t.reviewH}</h2><p class="muted" style="margin:8px 0 0;font-size:14px">${t.reviewP}</p></div>
  <div class="card card-pad" style="margin:20px 16px 0">${timeline(t.tl, 2)}</div>
  ${orderMini()}
  <div class="small" style="text-align:center;margin:20px 16px 8px"><span class="muted">${t.askMgr}</span> <span class="link">${t.writeMgr}</span></div>
  <div style="height:12px"></div>
</div>
<div class="dock"><div class="row" style="display:grid;grid-template-columns:1fr 1fr"><span class="btn btn-s">${t.myOrders}</span><span class="btn btn-p">${t.toShop}</span></div></div>`;

S['pay-done'] = () => `${tg('close')}<div class="scroll">
  <div class="pay-head"><div class="row between"><h1 class="t-title">${t.pay}</h1><span class="status ok">${t.stOk}</span></div></div>
  <div class="pad" style="margin-top:18px"><div class="okmark">${ic('check')}</div><h2 style="font:600 19px/1.3 var(--f-ui);margin:0">${t.okH}</h2><p class="muted" style="margin:8px 0 0;font-size:14px">${t.okP}</p></div>
  <div class="card card-pad" style="margin:20px 16px 0">${timeline(t.tlDone, 3)}</div>
  ${orderMini()}
  <div style="height:20px"></div>
</div>
<div class="dock"><div class="row" style="display:grid;grid-template-columns:1fr 1fr"><span class="btn btn-s">${t.myOrders}</span><span class="btn btn-p">${t.toShop}</span></div></div>`;

S.profile = () => `${tg('close')}<div class="scroll">
  <div class="screen-head"><h1 class="t-title">${t.profile}</h1></div>
  <div class="me"><div class="ava">${t.meName[0]}</div><div><b>${t.meName}</b><span class="muted num">+998 90 123 45 67</span></div></div>
  <div class="pad" style="margin-top:18px"><div class="card" style="padding:10px 10px 10px 16px;display:flex;justify-content:space-between;align-items:center;gap:10px">
    <span class="row">${ic('globe', 's')}${t.lang}</span><div class="aseg sm"><span class="${L === 'ru' ? 'on' : ''}">${t.langs[0]}</span><span class="${L === 'uz' ? 'on' : ''}">${t.langs[1]}</span></div></div></div>
  <div class="pad" style="margin-top:12px"><section class="card card-pad myset">
    <h2 class="t-sec">${t.mySets}</h2>
    <div class="small muted" style="margin-top:4px">${t.setLine}</div>
    <div class="names">${['amouage', 'blue-sapphire', 'tygar-extrait', 'tygar', 'blue-seduction'].map((k) => `<span>${F[k].name}</span>`).join('')}</div>
    <div class="setdeal" style="display:block"><b>${t.setPerk}</b><div class="thread" style="margin:10px 0 6px;background:var(--line-strong)"><i style="width:83%"></i></div><span class="small muted">${t.setLeft}</span></div>
    <span class="btn btn-s btn-w" style="margin-top:12px">${t.pickScent}</span>
  </section></div>
  <div class="pad" style="margin-top:12px"><div class="card card-pad row" style="align-items:flex-start;gap:12px">${ic('gift', 's')}<div><b style="font-weight:600">${t.bdayCoupon}</b><div class="small muted">${t.bdayCouponP}</div></div></div></div>
  ${secHead(t.myOrders)}
  <div class="pad"><div class="list">
    <a style="display:block"><div class="row between"><b style="font-weight:600">${t.o1[0]}</b><span class="status">${t.stReview}</span></div><div class="small muted">${t.o1[1]}</div></a>
    <a style="display:block"><div class="row between"><b style="font-weight:600">${t.o2[0]}</b><span class="status ok">${t.stDelivered}</span></div><div class="small muted">${t.o2[1]}</div><span class="link small" style="display:inline-block;margin-top:8px">${t.repeat}</span></a>
  </div></div>
  <div class="pad" style="margin-top:12px"><div class="list"><a><span class="lead">${ic('pin', 's')}<span><span class="small muted" style="display:block">${t.savedPt}</span>${t.pointV}</span></span>${ic('chevR', 's')}</a></div></div>
  <div class="pad" style="margin-top:12px"><div class="list">${t.info.map((x) => `<a><span>${x}</span>${ic('chevR', 's')}</a>`).join('')}</div></div>
  <div class="pad" style="margin-top:16px"><span class="btn btn-s btn-w">${ic('chat', 's')}${t.writeMgr}</span></div>
  <div style="height:24px"></div>
</div>${tabs(4, 0)}`;

/* ---------- Board ---------- */
const SCREENS = [
  { id: 'home', group: 'main', h: 'Bosh sahifa', p: 'Qidiruv tepada; banner (rasm va matnni mijoz beradi — hozircha brandbook shiori); Homme / Femme / Unisex / Toʻplamlar; Koʻp sotilganlar; Discovery set; Yangi iforlar.' },
  { id: 'catalog', group: 'main', h: 'Katalog', p: 'Ikki ustun. Kartochka: Xit/Yangi belgisi, turi, «… asosida», nom, 3 nota, eng arzon narx va «+». Filtrlar va saralash tepada.' },
  { id: 'product', group: 'main', h: 'Mahsulot kartochkasi', p: 'Hajmni bosing — rasm, narx va zaxira almashadi (10 / 30 / 50 ml). Pastda: tavsif, notalar, xususiyatlar, disclaimer, Uzum, oʻxshash iforlar.' },
  { id: 'cart', group: 'main', h: 'Savat', p: 'Bepul yetkazishgacha qancha qolgani — Sage chiziq bilan, yoniga 10 ml takliflar (Uzum uslubi). Promokod, jami va «Rasmiylashtirish».' },
  { id: 'set', group: 'main', h: 'Toʻplam yigʻish', p: 'Discovery qutisi — 5 ta katak. 5 xil ifor tanlanmaguncha tugma oʻchiq. Narx tanlovga bogʻliq emas.' },
  { id: 'checkout', group: 'main', h: 'Rasmiylashtirish', p: 'Xaridor raqami faqat Telegram orqali (birinchi buyurtmada majburiy); qabul qiluvchi telefoni alohida. BTS punkti roʻyxatdan: viloyat → shahar → punkt, boʻlmasa qoʻlda yozish. Tugʻilgan sana ixtiyoriy.' },
  { id: 'payment', group: 'main', h: 'Toʻlov', p: 'Aniq summa va karta raqami nusxalanadi, bron muddati koʻrinadi. Chek shu yerga yuklanadi yoki botga yuboriladi. Toʻlovgacha xaridor buyurtmani oʻzi bekor qila oladi.' },
  { id: 'profile', group: 'main', h: 'Profil', p: 'Til, Mening toʻplamlarim va −20% muddati, tugʻilgan kun kuponi, buyurtmalar va «Takrorlash», maʼlumot sahifalari.' },
  { id: 'product-sale', group: 'state', h: 'Toʻplam chegirmasi + tugagan hajm', p: 'Toʻplamdagi iforning 30 ml narxi −20% bilan; 50 ml tugagan — tanlab boʻlmaydi.' },
  { id: 'cart-discount', group: 'state', h: 'Promokod va toʻplam chegirmasi', p: 'Bitta buyurtmaga bitta chegirma. Kiritilgan promokod qoʻllanadi; toʻplam chegirmasi foydaliroq boʻlsa, bir bosishda almashtirish taklif qilinadi. Promokodsiz eng foydalisini tizim oʻzi tanlaydi.' },
  { id: 'cart-empty', group: 'state', h: 'Savat boʻsh', p: 'Discovery set va katalogga yoʻl.' },
  { id: 'pay-review', group: 'state', h: 'Chek tekshirilmoqda', p: 'Chek yuborilgandan keyin tizim uni kartaga tushgan pul bilan avtomatik solishtiradi; holat Sage chiziq boʻylab.' },
  { id: 'pay-done', group: 'state', h: 'Toʻlov tasdiqlandi', p: 'Tasdiqdan keyin: yigʻish boshlandi, trek raqami botga keladi.' },
];

const qs = new URLSearchParams(location.search);
const state = {
  theme: qs.get('theme') || (window.innerWidth < 800 ? 'light' : 'both'),
  lang: qs.get('lang') || 'uz',
  full: qs.get('full') !== '0',
  vol: {},
};

/* phones narrower than a 360 px frame + gutters: scale the frames down instead of scrolling sideways */
function fit() {
  const root = document.getElementById('root');
  if (!root || document.body.classList.contains('solo')) return;
  const avail = root.clientWidth;
  document.querySelectorAll('.shot-frames').forEach((el) => (el.style.zoom = avail < 360 ? String(avail / 360) : ''));
}
window.addEventListener('resize', fit);

function frame(id, theme, extraCls = '') {
  L = state.lang;
  t = T[L];
  const html = S[id]({ vol: state.vol[id] });
  return `<div class="frame ${extraCls}" data-theme="${theme}" data-screen="${id}" lang="${L === 'uz' ? 'uz-Latn' : 'ru'}">${html}</div>`;
}

function shot(s) {
  const themes = state.theme === 'both' ? ['light', 'dark'] : [state.theme];
  return `<figure class="shot" style="margin:0" data-shot="${s.id}">
    <div class="shot-frames">${themes.map((th) => frame(s.id, th)).join('')}</div>
    <figcaption class="cap"><h3>${s.h}</h3><p>${s.p}</p></figcaption></figure>`;
}

function render() {
  document.body.classList.toggle('full', state.full);
  document.body.classList.toggle('both', state.theme === 'both');
  const solo = qs.get('solo');
  const root = document.getElementById('root');
  if (solo) {
    document.body.classList.add('solo');
    if (qs.get('pair') === '1') {
      const s = SCREENS.find((x) => x.id === solo);
      root.innerHTML = `<div class="pairwrap">${shot(s)}</div>`;
    } else {
      root.innerHTML = frame(solo, state.theme === 'both' ? 'light' : state.theme);
    }
    return;
  }
  document.querySelectorAll('[data-set]').forEach((b) => b.setAttribute('aria-pressed', String(state[b.dataset.set] === (b.dataset.val === 'true' ? true : b.dataset.val === 'false' ? false : b.dataset.val))));
  root.innerHTML = `
    <h2 class="section-title">Asosiy ekranlar</h2>
    <div class="grid">${SCREENS.filter((s) => s.group === 'main').map(shot).join('')}</div>
    <h2 class="section-title">Holatlar</h2>
    <div class="grid">${SCREENS.filter((s) => s.group === 'state').map(shot).join('')}</div>`;
  fit();
}

document.addEventListener('click', (e) => {
  const set = e.target.closest('[data-set]');
  if (set) {
    const v = set.dataset.val;
    state[set.dataset.set] = v === 'true' ? true : v === 'false' ? false : v;
    render();
    return;
  }
  const vol = e.target.closest('[data-vol]');
  if (vol && !vol.disabled) {
    const fr = vol.closest('.frame');
    const id = fr.dataset.screen;
    const prev = state.vol[id] || 30;
    const next = Number(vol.dataset.vol);
    if (prev === next) return;
    const scrolls = [...document.querySelectorAll(`.frame[data-screen="${id}"] .scroll`)].map((s) => s.scrollTop);
    state.vol[id] = prev;
    document.querySelectorAll(`.frame[data-screen="${id}"]`).forEach((f, i) => {
      state.vol[id] = next;
      L = state.lang;
      t = T[L];
      const tmp = document.createElement('div');
      tmp.innerHTML = S[id]({ vol: next });
      // keep the old gallery so the photo can cross-fade
      const oldGal = f.querySelector('.gallery');
      const newGal = tmp.querySelector('.gallery');
      newGal.replaceWith(oldGal);
      f.innerHTML = '';
      f.append(...tmp.childNodes);
      f.querySelector('.scroll').scrollTop = scrolls[i] || 0;
      oldGal.querySelectorAll('img').forEach((im) => (im.style.opacity = Number(im.dataset.v) === next ? 1 : 0));
    });
  }
});

render();
