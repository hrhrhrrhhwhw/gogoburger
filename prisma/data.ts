// calories: калории продукта
// proteins: белки
// fats: жиры
// carbs: углеводы

export const categories = [
  {
    id: 1,
    translations: [
      {
        locale: 'ru',
        name: 'Комбо',
      },
      {
        locale: 'en',
        name: 'Combos',
      },
      {
        locale: 'am',
        name: 'Կոմբո',
      },
    ],
  },
  {
    id: 2,
    translations: [
      {
        locale: 'ru',
        name: 'Бургеры',
      },
      {
        locale: 'en',
        name: 'Burgers',
      },
      {
        locale: 'am',
        name: 'Բուրգերներ',
      },
    ],
  },
  {
    id: 3,
    translations: [
      {
        locale: 'ru',
        name: 'Соусы',
      },
      {
        locale: 'en',
        name: 'Sauces',
      },
      {
        locale: 'am',
        name: 'Սոուսներ',
      },
    ],
  },
  {
    id: 4,
    translations: [
      {
        locale: 'ru',
        name: 'Закуски',
      },
      {
        locale: 'en',
        name: 'Snacks',
      },
      {
        locale: 'am',
        name: 'Խորտիկներ',
      },
    ],
  },
  {
    id: 5,
    translations: [
      {
        locale: 'ru',
        name: 'Напитки',
      },
      {
        locale: 'en',
        name: 'Drinks',
      },
      {
        locale: 'am',
        name: 'Ըմպելիքներ',
      },
    ],
  },
  {
    id: 6,
    translations: [
      {
        locale: 'ru',
        name: 'Купоны',
      },
      {
        locale: 'en',
        name: 'Coupons',
      },
      {
        locale: 'am',
        name: 'Կտրոններ',
      },
    ],
  },
]

export const product = [
  // ==================== КОМБО ====================

  {
    categoryId: 1,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/dishes/e0dedb86ad1623c34c9721742eb29524.png',

    weightInGrams: 1000,
    calories: 1242,
    proteins: 59,
    fats: 30,
    carbs: 79,

    price: 4792,

    translations: [
      {
        locale: 'ru',
        name: 'Огненное Комбо на двоих с Биг Кинг',
        slug: 'ognennoe-kombo-na-dvoih-s-big-king',
      },
      {
        locale: 'en',
        name: 'Fire Combo for Two with Big King',
        slug: 'fire-combo-for-two-with-big-king',
      },
      {
        locale: 'am',
        name: 'Կրակոտ կոմբո երկուսի համար Բիգ Քինգով',
        slug: 'krakot-kombo-erkusi-hamar-big-kingov',
      },
    ],
  },

  {
    categoryId: 1,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/dishes/4fccd6ffa9715f78223dd9de484f2b0b.png',

    weightInGrams: 1200,
    calories: 1342,
    proteins: 49,
    fats: 20,
    carbs: 99,

    price: 1740,

    translations: [
      {
        locale: 'ru',
        name: 'Классическое комбо Малое',
        slug: 'klassicheskoe-kombo-maloe',
      },
      {
        locale: 'en',
        name: 'Classic Small Combo',
        slug: 'classic-small-combo',
      },
      {
        locale: 'am',
        name: 'Դասական փոքր կոմբո',
        slug: 'dasakan-pokr-kombo',
      },
    ],
  },
  // ==================== БУРГЕРЫ ====================

  {
    categoryId: 2,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/group/74e6ddde00fbe9e8e554ba96a21592e5.png',

    weightInGrams: 337,
    calories: 318,
    proteins: 23,
    fats: 13,
    carbs: 15,
    price: 2700,

    translations: [
      {
        locale: 'ru',
        name: 'Ангус 4 Сыра',
        slug: 'angus-4-syra',
      },
      {
        locale: 'en',
        name: 'Angus 4 Cheese',
        slug: 'angus-4-cheese',
      },
      {
        locale: 'am',
        name: 'Անգուս 4 պանիր',
        slug: 'angus-4-panir',
      },
    ],
  },

  {
    categoryId: 2,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/group/49e89b5a743c3f7673e569038c839f00.png',

    weightInGrams: 337,
    calories: 318,
    proteins: 23,
    fats: 13,
    carbs: 15,
    price: 2500,

    translations: [
      {
        locale: 'ru',
        name: 'Ангус Пармеджано',
        slug: 'angus-parmedzhano',
      },
      {
        locale: 'en',
        name: 'Angus Parmigiano',
        slug: 'angus-parmigiano',
      },
      {
        locale: 'am',
        name: 'Անգուս Պարմեջանո',
        slug: 'angus-parmedzhano',
      },
    ],
  },

  {
    categoryId: 2,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/group/c4b08f2da6def7ff3a566fcb749d2dd0.png',

    weightInGrams: 274,
    calories: 263,
    proteins: 16,
    fats: 10,
    carbs: 19,
    price: 2600,

    translations: [
      {
        locale: 'ru',
        name: 'Воппер',
        slug: 'vopper',
      },
      {
        locale: 'en',
        name: 'Whopper',
        slug: 'whopper',
      },
      {
        locale: 'am',
        name: 'Վոպպեր',
        slug: 'vopper',
      },
    ],
  },

  {
    categoryId: 2,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/group/45b05f26b50a1aa0adad326b22c7a7f8.png',

    weightInGrams: 274,
    calories: 263,
    proteins: 16,
    fats: 10,
    carbs: 19,
    price: 1650,

    translations: [
      {
        locale: 'ru',
        name: 'Биг Кинг Новый',
        slug: 'big-king-novyy',
      },
      {
        locale: 'en',
        name: 'New Big King',
        slug: 'new-big-king',
      },
      {
        locale: 'am',
        name: 'Նոր Բիգ Քինգ',
        slug: 'nor-big-king',
      },
    ],
  },

  // ==================== СОУСЫ ====================

  {
    categoryId: 3,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/dishes/54de00251c68c1a58ae956d6012d0f2c.png',

    weightInGrams: 25,
    calories: 93,
    proteins: 1,
    fats: 10,
    carbs: 1,

    price: 292,

    translations: [
      {
        locale: 'ru',
        name: 'Соус Сырный',
        slug: 'sous-syrnyy',
      },
      {
        locale: 'en',
        name: 'Cheese Sauce',
        slug: 'cheese-sauce',
      },
      {
        locale: 'am',
        name: 'Պանրի սոուս',
        slug: 'panri-sous',
      },
    ],
  },

  {
    categoryId: 3,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/dishes/c0cda2922da0729f77b6668197789b0e.png',

    weightInGrams: 25,
    calories: 93,
    proteins: 1,
    fats: 10,
    carbs: 1,

    price: 252,

    translations: [
      {
        locale: 'ru',
        name: 'Соус Пармеджано',
        slug: 'sous-parmedzhano',
      },
      {
        locale: 'en',
        name: 'Parmigiano Sauce',
        slug: 'parmigiano-sauce',
      },
      {
        locale: 'am',
        name: 'Պարմեջանո սոուս',
        slug: 'parmedzhano-sous',
      },
    ],
  },

  {
    categoryId: 3,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/dishes/888e434d84d1bb64e7dfcb90fd1fa9d1.png',

    weightInGrams: 25,
    calories: 93,
    proteins: 1,
    fats: 10,
    carbs: 1,

    price: 292,

    translations: [
      {
        locale: 'ru',
        name: 'Соус Чесночный',
        slug: 'sous-chesnochnyy',
      },
      {
        locale: 'en',
        name: 'Garlic Sauce',
        slug: 'garlic-sauce',
      },
      {
        locale: 'am',
        name: 'Սխտորի սոուս',
        slug: 'skhtori-sous',
      },
    ],
  },

  {
    categoryId: 3,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/dishes/6d32b71790fd02f555bf481520f3b039.png',

    weightInGrams: 25,
    calories: 93,
    proteins: 1,
    fats: 10,
    carbs: 1,

    price: 310,

    translations: [
      {
        locale: 'ru',
        name: 'Соус Кисло-сладкий',
        slug: 'sous-kislo-sladkiy',
      },
      {
        locale: 'en',
        name: 'Sweet and Sour Sauce',
        slug: 'sweet-and-sour-sauce',
      },
      {
        locale: 'am',
        name: 'Քաղցր և թթու սոուս',
        slug: 'kaghtsr-ev-ttu-sous',
      },
    ],
  },

  {
    categoryId: 3,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/dishes/113a95dc05a2ccc8beb2daa7faceb69e.png',

    weightInGrams: 25,
    calories: 93,
    proteins: 1,
    fats: 10,
    carbs: 1,

    price: 292,

    translations: [
      {
        locale: 'ru',
        name: 'Соус Карри',
        slug: 'sous-karri',
      },
      {
        locale: 'en',
        name: 'Curry Sauce',
        slug: 'curry-sauce',
      },
      {
        locale: 'am',
        name: 'Կարի սոուս',
        slug: 'kari-sous',
      },
    ],
  },

  {
    categoryId: 3,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/dishes/faa292b977d2bfbece1e6366cb525f6a.png',

    weightInGrams: 25,
    calories: 93,
    proteins: 1,
    fats: 10,
    carbs: 1,

    price: 292,

    translations: [
      {
        locale: 'ru',
        name: 'Соус Цезарь',
        slug: 'sous-tsezar',
      },
      {
        locale: 'en',
        name: 'Caesar Sauce',
        slug: 'caesar-sauce',
      },
      {
        locale: 'am',
        name: 'Կեսարի սոուս',
        slug: 'kesari-sous',
      },
    ],
  },

  {
    categoryId: 3,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/dishes/686ff8b64da74a89ed39f054feed9d1b.png',

    weightInGrams: 25,
    calories: 93,
    proteins: 1,
    fats: 10,
    carbs: 1,

    price: 200,

    translations: [
      {
        locale: 'ru',
        name: 'Кетчуп',
        slug: 'ketchup',
      },
      {
        locale: 'en',
        name: 'Ketchup',
        slug: 'ketchup',
      },
      {
        locale: 'am',
        name: 'Կետչուպ',
        slug: 'ketchup',
      },
    ],
  },

  // ==================== ЗАКУСКИ ====================

  {
    categoryId: 4,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/group/d3e4750db9754ddab3a29e43b49fccf9.png',

    weightInGrams: 100,
    calories: 200,
    proteins: 7,
    fats: 4,
    carbs: 32,

    price: 462,

    translations: [
      {
        locale: 'ru',
        name: 'Кинг Фри',
        slug: 'king-fri-109',
      },
      {
        locale: 'en',
        name: 'King Fries',
        slug: 'king-fries-109',
      },
      {
        locale: 'am',
        name: 'Քինգ Ֆրի',
        slug: 'king-fri-109',
      },
    ],
  },

  {
    categoryId: 4,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/group/cffe1874b0a8f897dcd57a1200f77265.png',

    weightInGrams: 100,
    calories: 200,
    proteins: 7,
    fats: 4,
    carbs: 32,

    price: 462,

    translations: [
      {
        locale: 'ru',
        name: 'Наггетсы (9 шт.)',
        slug: 'king-fri-462',
      },
      {
        locale: 'en',
        name: 'Naggets (9 pieces)',
        slug: 'king-fries-462',
      },
      {
        locale: 'am',
        name: 'Նագեթներ (9 հատ)',
        slug: 'king-fri-462',
      },
    ],
  },

  {
    categoryId: 4,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/group/f511e2b64715a9473f189a1abb105d37.png',

    weightInGrams: 100,
    calories: 200,
    proteins: 7,
    fats: 4,
    carbs: 32,

    price: 599,

    translations: [
      {
        locale: 'ru',
        name: 'Креветки',
        slug: 'krevetki',
      },
      {
        locale: 'en',
        name: 'Shrimp',
        slug: 'shrimp',
      },
      {
        locale: 'am',
        name: 'Ծովախեցգետին',
        slug: 'tsovakhetsgetin',
      },
    ],
  },

  // ==================== НАПИТКИ ====================

  {
    categoryId: 5,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/group/68b578b7705de76758395d89a0d71bc2.png',

    weightInGrams: 500,
    calories: 220,
    proteins: 0,
    fats: 0,
    carbs: 56,

    price: 800,

    translations: [
      {
        locale: 'ru',
        name: 'Эвервесс Кола 0,3',
        slug: 'evervess-kola-03',
      },
      {
        locale: 'en',
        name: 'Evervess Cola 0.3',
        slug: 'evervess-cola-03',
      },
      {
        locale: 'am',
        name: 'Էվերվես Կոլա 0.3',
        slug: 'evervess-kola-03',
      },
    ],
  },

  {
    categoryId: 5,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/dishes/e4520d1620ba9b5cfce0619abea90d09.png',

    weightInGrams: 500,
    calories: 0,
    proteins: 0,
    fats: 0,
    carbs: 0,

    price: 420,

    translations: [
      {
        locale: 'ru',
        name: 'Вода Аква Минерале с газом 0,5л',
        slug: 'voda-akva-minerale-s-gazom-05l',
      },
      {
        locale: 'en',
        name: 'Aqua Minerale Sparkling Water 0.5L',
        slug: 'aqua-minerale-sparkling-water-05l',
      },
      {
        locale: 'am',
        name: 'Ակվա Միներալե գազավորված ջուր 0.5լ',
        slug: 'akva-minerale-gazavorvats-jur-05l',
      },
    ],
  },

  {
    categoryId: 5,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x512/catalog/images/dishes/557358e3a81675d349ea240d14d8162a.png',

    price: 109,

    translations: [
      {
        locale: 'ru',
        name: 'Сок J7 Апельсин-Мандарин 0,2 л',
        slug: 'sok-j7-apelsin-mandarin-02',
      },
      {
        locale: 'en',
        name: 'J7 Orange Tangerine Juice 0.2L',
        slug: 'j7-orange-tangerine-juice-02',
      },
      {
        locale: 'am',
        name: 'J7 նարնջի-մանդարինի հյութ 0.2լ',
        slug: 'j7-narnji-mandarini-amut-02',
      },
    ],
  },
]
