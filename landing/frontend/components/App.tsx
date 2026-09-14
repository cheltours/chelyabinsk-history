import { useEffect, useState } from 'react'

import Header from './Header'
import Hero from './Hero'
import About from './About'
import Tour from './Tour'
import Start from './Start'
import Footer from './Footer'

import '../styles/App.css'
import '../styles/Header.css'
import '../styles/Hero.css'
import '../styles/Sections.css'
import '../styles/Start.css'
import '../styles/Footer.css'

import '../styles/mobile/Header.mobile.css'
import '../styles/mobile/Hero.mobile.css'
import '../styles/mobile/Start.mobile.css'
import '../styles/mobile/Sections.mobile.css'

export default function Landing(): React.ReactNode {
    const [theme, changeTheme] = useState<boolean>(false)

    function setTheme(): void {
        changeTheme(!theme)
        document.documentElement.setAttribute('theme', !theme ? 'dark' : 'light')
        localStorage.setItem('theme', !theme ? 'dark' : 'light')
    }

    function getTheme(): boolean {
        return theme
    }

    function setLanguage(lang: string): void {
        document.documentElement.lang = lang
        localStorage.setItem('lang', lang)
    }

    useEffect(() => {
        if (localStorage.getItem('theme')) {
            changeTheme(localStorage.getItem('theme') === 'dark' ? true : false)
            document.documentElement.setAttribute('theme', String(localStorage.getItem('theme')))
        }

        if (localStorage.getItem('lang')) {
            setLanguage(String(localStorage.getItem('lang')))
            document.documentElement.lang = String(localStorage.getItem('lang'))
        }

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('anim-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.1,
            }
        )

        document.querySelectorAll('#anim-element').forEach((el) => observer.observe(el))

        const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link')
        if (link) {
            link.type = 'image/svg+xml'
            link.rel = 'icon'
            link.href = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? './logotype-light.svg'
                : './logotype-dark.svg'
            document.getElementsByTagName('head')[0].appendChild(link)
        }
    }, [])

    return (
        <main id="app">
            <Header setTheme={setTheme} getTheme={getTheme} setLang={setLanguage} />
            <Hero />
            <About />
            <Tour />
            <Start />
            <Footer />
        </main>
    )
}
