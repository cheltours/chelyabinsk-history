interface LandingPlaces {
    readonly [item: number]: LandingPlaceContent
}

interface LandingPlaceContent {
    readonly name: string
    readonly image: string
    readonly description: string
}

export const init_places: LandingPlaces = {}
