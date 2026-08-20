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
        name: 'Новинки',
      },
      {
        locale: 'en',
        name: 'New',
      },
      {
        locale: 'hy',
        name: 'Նորույթներ',
      },
    ],
  },
  {
    id: 2,
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
        locale: 'hy',
        name: 'Կոմբո',
      },
    ],
  },
  {
    id: 3,
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
        locale: 'hy',
        name: 'Բուրգերներ',
      },
    ],
  },
  {
    id: 4,
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
        locale: 'hy',
        name: 'Սոուսներ',
      },
    ],
  },
  {
    id: 5,
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
        locale: 'hy',
        name: 'Խորտիկներ',
      },
    ],
  },
  {
    id: 6,
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
        locale: 'hy',
        name: 'Ըմպելիքներ',
      },
    ],
  },
  {
    id: 7,
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
        locale: 'hy',
        name: 'Կտրոններ',
      },
    ],
  },
]

export const product = [
  // ==================== БУРГЕРЫ ====================

  {
    categoryId: 3,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/group/74e6ddde00fbe9e8e554ba96a21592e5.png',

    weightInGrams: 337,
    calories: 318,
    proteins: 23,
    fats: 13,
    carbs: 15,
    price: 609,

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
        locale: 'hy',
        name: 'Անգուս 4 պանիր',
        slug: 'angus-4-panir',
      },
    ],
  },

  {
    categoryId: 3,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/group/49e89b5a743c3f7673e569038c839f00.png',

    weightInGrams: 337,
    calories: 318,
    proteins: 23,
    fats: 13,
    carbs: 15,
    price: 589,

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
        locale: 'hy',
        name: 'Անգուս Պարմեջանո',
        slug: 'angus-parmedzhano',
      },
    ],
  },

  {
    categoryId: 3,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/group/c4b08f2da6def7ff3a566fcb749d2dd0.png',

    weightInGrams: 274,
    calories: 263,
    proteins: 16,
    fats: 10,
    carbs: 19,
    price: 614,

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
        locale: 'hy',
        name: 'Վոպպեր',
        slug: 'vopper',
      },
    ],
  },

  {
    categoryId: 3,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/group/45b05f26b50a1aa0adad326b22c7a7f8.png',

    weightInGrams: 274,
    calories: 263,
    proteins: 16,
    fats: 10,
    carbs: 19,
    price: 389,

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
        locale: 'hy',
        name: 'Նոր Բիգ Քինգ',
        slug: 'nor-big-king',
      },
    ],
  },

  // ==================== КОМБО ====================

  {
    categoryId: 2,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/dishes/e0dedb86ad1623c34c9721742eb29524.png',

    price: 1129,

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
        locale: 'hy',
        name: 'Կրակոտ կոմբո երկուսի համար Բիգ Քինգով',
        slug: 'krakot-kombo-erkusi-hamar-big-kingov',
      },
    ],
  },

  {
    categoryId: 2,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/dishes/4fccd6ffa9715f78223dd9de484f2b0b.png',

    price: 409,

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
        locale: 'hy',
        name: 'Դասական փոքր կոմբո',
        slug: 'dasakan-pokr-kombo',
      },
    ],
  },

  // ==================== СОУСЫ ====================

  {
    categoryId: 4,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/dishes/54de00251c68c1a58ae956d6012d0f2c.png',

    price: 69,

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
        locale: 'hy',
        name: 'Պանրի սոուս',
        slug: 'panri-sous',
      },
    ],
  },

  {
    categoryId: 4,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/dishes/c0cda2922da0729f77b6668197789b0e.png',

    price: 79,

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
        locale: 'hy',
        name: 'Պարմեջանո սոուս',
        slug: 'parmedzhano-sous',
      },
    ],
  },

  {
    categoryId: 4,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/dishes/888e434d84d1bb64e7dfcb90fd1fa9d1.png',

    price: 89,

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
        locale: 'hy',
        name: 'Սխտորի սոուս',
        slug: 'skhtori-sous',
      },
    ],
  },

  {
    categoryId: 4,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/dishes/6d32b71790fd02f555bf481520f3b039.png',

    price: 74,

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
        locale: 'hy',
        name: 'Քաղցր և թթու սոուս',
        slug: 'kaghtsr-ev-ttu-sous',
      },
    ],
  },

  {
    categoryId: 4,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/dishes/113a95dc05a2ccc8beb2daa7faceb69e.png',

    price: 74,

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
        locale: 'hy',
        name: 'Կարի սոուս',
        slug: 'kari-sous',
      },
    ],
  },

  {
    categoryId: 4,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/dishes/faa292b977d2bfbece1e6366cb525f6a.png',

    price: 74,

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
        locale: 'hy',
        name: 'Կեսարի սոուս',
        slug: 'kesari-sous',
      },
    ],
  },

  {
    categoryId: 4,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/dishes/686ff8b64da74a89ed39f054feed9d1b.png',

    price: 62,

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
        locale: 'hy',
        name: 'Կետչուպ',
        slug: 'ketchup',
      },
    ],
  },

  // ==================== ЗАКУСКИ ====================

  {
    categoryId: 5,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/group/d3e4750db9754ddab3a29e43b49fccf9.png',

    price: 109,

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
        locale: 'hy',
        name: 'Քինգ Ֆրի',
        slug: 'king-fri-109',
      },
    ],
  },

  {
    categoryId: 5,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/group/cffe1874b0a8f897dcd57a1200f77265.png',

    price: 164,

    translations: [
      {
        locale: 'ru',
        name: 'Кинг Фри',
        slug: 'king-fri-164',
      },
      {
        locale: 'en',
        name: 'King Fries',
        slug: 'king-fries-164',
      },
      {
        locale: 'hy',
        name: 'Քինգ Ֆրի',
        slug: 'king-fri-164',
      },
    ],
  },

  {
    categoryId: 5,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/group/f511e2b64715a9473f189a1abb105d37.png',

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
        locale: 'hy',
        name: 'Ծովախեցգետին',
        slug: 'tsovakhetsgetin',
      },
    ],
  },

  // ==================== НАПИТКИ ====================

  {
    categoryId: 6,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/group/68b578b7705de76758395d89a0d71bc2.png',

    price: 189,

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
        locale: 'hy',
        name: 'Էվերվես Կոլա 0.3',
        slug: 'evervess-kola-03',
      },
    ],
  },

  {
    categoryId: 6,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/dishes/e4520d1620ba9b5cfce0619abea90d09.png',

    price: 99,

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
        locale: 'hy',
        name: 'Ակվա Միներալե գազավորված ջուր 0.5լ',
        slug: 'akva-minerale-gazavorvats-jur-05l',
      },
    ],
  },

  {
    categoryId: 6,

    imageUrl:
      'https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/dishes/557358e3a81675d349ea240d14d8162a.png',

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
        locale: 'hy',
        name: 'J7 նարնջի-մանդարինի հյութ 0.2լ',
        slug: 'j7-narnji-mandarini-hyut-02',
      },
    ],
  },
]
