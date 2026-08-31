import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faClock, faEarthAsia, faHammer, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

export interface Footer {
    readonly authors: FooterAuthors
    readonly content: FooterContent
    readonly media?: FooterSocialMedia
}

interface FooterAuthors {
    created: string
}

export interface FooterContent {
    [item: number]: FooterBlock
}

interface FooterBlock {
    readonly title: string
    readonly items: {
        [item: number]: FooterLinks
    }
}

export interface FooterLinks {
    readonly name: string
    readonly icon?: IconDefinition
}

export interface FooterSocialMedia {
    [index: number]: SocialMedia
}

interface SocialMedia {
    readonly id: string
    readonly icon: IconDefinition
    readonly href: string
}

export function normalizeLink(href: string): string {
    let normalize: string = ''

    if (!href.startsWith('https://') && !href.startsWith('http://')) {
        normalize = 'https://' + href
    } else if (href.startsWith('http://')) {
        normalize = '#'
    } else {
        normalize = href
    }

    return normalize
}

export const footer: Footer = {
    authors: {
        created: 'Экскурсия с Доставкой',
    },

    content: {
        0: {
            title: 'Информация',
            items: {
                0: {
                    name: 'Город Трудовой Доблести',
                    icon: faHammer,
                },
                1: {
                    name: '1.2 млн жителей',
                    icon: faPeopleGroup,
                },
                2: {
                    name: 'Часовой пояс: МСК+2',
                    icon: faClock,
                },
                3: {
                    name: 'Основан в 1736 г.',
                    icon: faEarthAsia,
                },
            },
        },

        1: {
            title: 'Юридическое',
            items: {
                0: {
                    name: 'Конфиденциальность',
                },
                1: {
                    name: 'Лицензии',
                },
            },
        },
    },

    media: {
        0: {
            id: 'github',
            icon: faGithub,
            href: 'github.com/cheltours/chelyabinsk-history',
        },
    },
}
