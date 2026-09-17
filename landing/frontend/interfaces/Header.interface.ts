import { useEffect, useRef, useState } from 'react'
import { type LanguageKeys } from '../interfaces/App.interface'

import RUSSIA_FLAG from '../images/flags/RU.svg'
import USA_FLAG from '../images/flags/US.svg'
import CHINE_FLAG from '../images/flags/CN.svg'
import GERMANY_FLAG from '../images/flags/DE.svg'

interface Navmenu {
    [index: number]: {
        title: string
        href?: string
        state?: (state: boolean) => void
    }
}

export const navmenu: Navmenu = {
    0: {
        title: 'Памятка туристу',
        href: '',
    },

    1: {
        title: 'достопримечательности',
        href: '',
    },

    2: {
        title: 'гастроном',
        href: '',
    },

    3: {
        title: 'Обратная связь',
        href: '',
    },

    4: {
        title: 'Контакты',
        href: '',
    },
}

export const languages: LanguageKeys = {
    0: {
        language: 'Русский',
        key: 'ru',
        flag: RUSSIA_FLAG,
    }
}

export function useSticky() {
    const ref = useRef<HTMLDivElement>(null)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        if (!ref.current) {
            return
        }

        const observer = new IntersectionObserver(([event]) => setIsSticky(event.intersectionRatio < 1), {
            threshold: [1],
            rootMargin: '-1px 0px 0px 0px',
        })
        observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    return {
        ref,
        isSticky,
    }
}
