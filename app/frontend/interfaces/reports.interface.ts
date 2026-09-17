import { type Marker } from 'maplibre-gl'

export interface Places {
    [index: number]: PlaceContent
}

export interface PlaceContent {
    readonly image: string
    readonly title: string
    readonly description: string
    readonly coords: [number, number]
    readonly popup: PlacePopup
    marker?: Marker
    liked?: boolean
    readonly hasReport?: boolean
}

export interface PlacePopup {
    readonly image: string
    readonly title: string
    readonly description: string
    readonly address: string
    readonly schedule?: [
        PlaceSchedule,
        PlaceSchedule,
        PlaceSchedule,
        PlaceSchedule,
        PlaceSchedule,
        PlaceSchedule,
        PlaceSchedule,
    ]
}

export interface PlaceSchedule {
    readonly openHours: number
    readonly openMinutes: number
    readonly closeHours: number
    readonly closeMinutes: number
    readonly dayoff?: boolean
}

export interface Report {
    [index: number]: ReportContent
}

interface ReportContent {
    readonly image: string
    readonly title: string
    readonly description: string
    readonly coords: string
    readonly popup: ReportPopup
}

interface ReportPopup {
    readonly image: string
    readonly title: string
    readonly description: string
}

export let placesStore: Places = {
    0: {
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4d/b9/92/houses.jpg?w=900&h=500&s=1',
        title: 'Немецкий Квартал',
        description: 'Уникальный островок малоэтажной европейской застройки середины 1940-х годов.',
        coords: [55.253676, 61.39424],
        popup: {
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4d/b9/92/houses.jpg?w=900&h=500&s=1',
            title: 'Немецкий Квартал',
            description:
                'Исторический ансамбль из 30 малоэтажных домов, построенных в 1944–1946 годах пленным немцами и трудармейцами для инженеров ЧМЗ.',
            address: 'Металлургический район, Улица Социалистическая',
        },
        hasReport: true,
    },

    1: {
        image: 'https://chelyabinsk-love.ru/wp-content/uploads/2022/04/KMO_160860_00027_1_t218_182800.jpeg',
        title: 'Кировка',
        description: 'Пешеходная часть улицы Кирова в Челябинске.',
        coords: [55.163917, 61.40065],
        popup: {
            image: 'https://chelyabinsk-love.ru/wp-content/uploads/2022/04/KMO_160860_00027_1_t218_182800.jpeg',
            title: 'Пешеходная улица "Кировка"',
            description:
                'Пешеходная часть улицы Кирова, ставшая одной из главных достопримечательностей города.',
            address: 'Центральный район, Улица Кирова',
        },
    },

    2: {
        image: 'https://cdn.sportmaster.ru/upload/content/mediahab/prod/4aa076dd-546e-42f4-b420-e5438636a8b8.jpg',
        title: 'Парк Гагарина',
        description: 'Главное место отдыха в сосновом бору в центре города.',
        coords: [55.165097, 61.364797],
        popup: {
            image: 'https://xcourse.me/images/showplaces/690/4c7ef988f51d6378d9d701dea555d194.jpg',
            title: 'Парк им. Гагарина',
            description:
                'Центр отдыха в сосновом бору. Аттракционы: колесо обозрения, "Гулливер", "Лесной экстрим". Прокат лодок и велосипедов. Фонтан "Счастье", контактный зоопарк.',
            address: 'Центральный район, Коммуны 100',
        },
    },

    3: {
        image: 'https://n1s1.hsmedia.ru/55/c6/c1/55c6c1056736ea4a585276947bf46cb8/656x369_1_78921a5a9ea226e3bf588382840b157d@960x540_0xOhcn6zXI_8091120617152733728.jpg.webp',
        title: 'Белый Рынок',
        description: 'Главное место отдыха в сосновом бору в центре города.',
        coords: [55.156002, 61.369973],
        popup: {
            image: 'https://n1s1.hsmedia.ru/55/c6/c1/55c6c1056736ea4a585276947bf46cb8/656x369_1_78921a5a9ea226e3bf588382840b157d@960x540_0xOhcn6zXI_8091120617152733728.jpg.webp',
            title: 'Гастромаркет «Белый рынок»',
            description: 'Атмосферное место, где можно вкусно покушать с разнообразной кухней на любой вкус!',
            address: 'ул. Тернопольская, 6',
            schedule: [
                { openHours: 11, openMinutes: 0, closeHours: 22, closeMinutes: 0 },
                { openHours: 11, openMinutes: 0, closeHours: 22, closeMinutes: 0 },
                { openHours: 11, openMinutes: 0, closeHours: 22, closeMinutes: 0 },
                { openHours: 11, openMinutes: 0, closeHours: 22, closeMinutes: 0 },
                { openHours: 11, openMinutes: 0, closeHours: 23, closeMinutes: 0 },
                { openHours: 11, openMinutes: 0, closeHours: 23, closeMinutes: 0 },
                { openHours: 11, openMinutes: 0, closeHours: 22, closeMinutes: 0, dayoff: true },
            ],
        },
    },

    4: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Opera_Theater_in_Chelyabinsk_%28August_2025%29_-_0_1.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original',
        title: 'Театр oперы и балета',
        description: 'Ведущая оперная сцена Южного Урала.',
        coords: [55.166625, 61.40195],
        popup: {
            image: 'https://cdn.culture.ru/images/63b28e2f-58c4-58d2-8441-87e388ce49e1',
            title: 'Театр oперы и балета им. Глинки',
            description:
                'Одна из главных музыкальных сцен Урала. Открыт в 1956 году. В репертуаре - русская и зарубежная классика, современные постановки.',
            address: 'Центральный район, пл. Ярославского 1',
            schedule: [
                { openHours: 10, openMinutes: 0, closeHours: 20, closeMinutes: 0 },
                { openHours: 10, openMinutes: 0, closeHours: 20, closeMinutes: 0 },
                { openHours: 10, openMinutes: 0, closeHours: 20, closeMinutes: 0 },
                { openHours: 10, openMinutes: 0, closeHours: 20, closeMinutes: 0 },
                { openHours: 10, openMinutes: 0, closeHours: 20, closeMinutes: 0 },
                { openHours: 10, openMinutes: 0, closeHours: 20, closeMinutes: 0 },
                { openHours: 10, openMinutes: 0, closeHours: 20, closeMinutes: 0 },
            ],
        },
    },

    5: {
        image: 'https://upload.wikimedia.org/wikipedia/ru/d/d9/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%9A%D1%83%D1%80%D1%87%D0%B0%D1%82%D0%BE%D0%B2%D1%83_%D0%B2_%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA%D0%B5.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original',
        title: 'Памятник И.В. Курчатову',
        description: 'Выдающийся физик, основоположник советской атомной программы.',
        coords: [55.15934, 61.36286],
        popup: {
            image: 'https://chel.guide/sites/default/files/styles/hd_1280x720/public/pubs-images/2023/05/dd113b135460ee654f908aad63bca0ba.jpg.webp?h=12a1b64b&itok=IscjtG8c',
            title: 'Памятник Игорю Васильевичу Курчатову',
            description:
                'Выдающемуся физику, "отцу" советского атомного проекта. Монумент в виде стилизованного атома на высоком постаменте - один из символов Челябинска.',
            address: 'Центральный район, пр. Ленина 1',
        },
    },
}

