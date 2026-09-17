interface LandingPlaces {
    readonly [item: number]: LandingPlaceContent
}

interface LandingPlaceContent {
    readonly name: string
    readonly image: string
    readonly description: string
}

export const init_places: LandingPlaces = {
    0: {
        name: "Немецкий Квартал",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4d/b9/92/houses.jpg?w=900&h=500&s=1",
        description: "Уникальный островок малоэтажной европейской застройки середины 1940-х годов."
    },

    1: {
        name: "Кировка",
        image: "https://chelyabinsk-love.ru/wp-content/uploads/2022/04/KMO_160860_00027_1_t218_182800.jpeg",
        description: "Пешеходная часть улицы Кирова, ставшая одной из главных достопримечательностей города."
    },

    2: {
        name: "Театр oперы и балета",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Opera_Theater_in_Chelyabinsk_%28August_2025%29_-_0_1.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original",
        description: "Одна из главных музыкальных сцен Урала. Открыт в 1956 году. В репертуаре - русская и зарубежная классика, современные постановки."
    }
}
