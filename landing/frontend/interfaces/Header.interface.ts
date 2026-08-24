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
        href: 'Hello',
    },

    1: {
        title: 'достопримечательности',
        href: 'Hello',
    },

    2: {
        title: 'гастроном',
        href: 'Hello',
    },

    3: {
        title: 'Обратная связь',
        href: 'Hello',
    },

    4: {
        title: 'Контакты',
        href: 'Hello',
    },
}

export const languages: LanguageKeys = {
    0: {
        language: 'Русский',
        key: 'ru',
        flag: RUSSIA_FLAG,
    },
    1: {
        language: '中文',
        key: 'zh',
        flag: CHINE_FLAG,
    },
    2: {
        language: 'English',
        key: 'en',
        flag: USA_FLAG,
    },
    3: {
        language: 'Deutsch',
        key: 'de',
        flag: GERMANY_FLAG,
    },
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
