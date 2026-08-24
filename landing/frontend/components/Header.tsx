import '../styles/Header.css'
import '../styles/mobile/Header.mobile.css'
import { navmenu, languages, useSticky } from '../interfaces/Header.interface'

import lightLogotype from '../images/light-logo.svg'
import darkLogotype from '../images/dark-logo.svg'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun, faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Header({
    setTheme,
    getTheme,
    setLang,
}: {
    setTheme: () => void
    getTheme: () => boolean
    setLang: (lang: string) => void
}): React.ReactNode {
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)
    const { ref, isSticky } = useSticky()

    return (
        <>
            {Object.keys(navmenu).length > 0 && (
                <div className="mobile-navmenu" id={!mobileMenu ? 'invisible' : 'visible'}>
                    <div className="container">
                        <div className="content">
                            <nav className="header">
                                <img
                                    className="logotype"
                                    src={!getTheme() ? darkLogotype : lightLogotype}
                                    alt="logotype.svg"
                                />
                                <button onClick={() => setMobileMenu(false)}>
                                    <span>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </span>
                                </button>
                            </nav>

                            <nav className="links">
                                {Object.entries(navmenu).map(([key, index]) => (
                                    <>
                                        {index.href !== undefined ? (
                                            <a key={key} href={'#' + index.href}>
                                                {index.title}
                                            </a>
                                        ) : (
                                            <>
                                                {index.state !== undefined && (
                                                    <button key={key} onClick={index.state}>
                                                        {index.title}
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </>
                                ))}
                            </nav>
                        </div>

                        <nav className="mobile-footer">
                            <button onClick={() => window.open('app/')}>Открыть приложение</button>
                        </nav>
                    </div>
                </div>
            )}

            <header className="navmenu" ref={ref} id={isSticky ? 'sticky' : ''}>
                <div className="container">
                    <img className="logotype" src={!getTheme() ? darkLogotype : lightLogotype} alt="logotype.svg" />

                    <nav className="buttons">
                        {Object.entries(navmenu).map(([key, index]) => (
                            <>
                                {index.href !== undefined ? (
                                    <a key={key} href={'#' + index.href}>
                                        {index.title}
                                    </a>
                                ) : (
                                    <>
                                        {index.state !== undefined && (
                                            <button key={key} onClick={index.state}>
                                                {index.title}
                                            </button>
                                        )}
                                    </>
                                )}
                            </>
                        ))}
                    </nav>

                    <nav className="commands">
                        <button className="theme" onClick={setTheme} disabled>
                            <span>
                                <FontAwesomeIcon icon={!getTheme() ? faMoon : faSun} />
                            </span>
                        </button>

                        <div className="dropdown">
                            <button
                                className="dropdown-button"
                                id={dropdownVisible ? 'active' : 'inactive'}
                                onClick={() => setDropdownVisible(!dropdownVisible)}>
                                <span>
                                    <FontAwesomeIcon icon={faGlobe} />
                                </span>
                            </button>
                            <div className="dropdown-content" id={dropdownVisible ? 'visible' : 'invisible'}>
                                {Object.entries(languages).map(([key, parameter]) => (
                                    <button
                                        key={key}
                                        onClick={() => {
                                            setLang(parameter.key)
                                            setDropdownVisible(false)
                                            document.location.reload()
                                        }}>
                                        <span>
                                            <img src={parameter.flag} alt="" />
                                        </span>{' '}
                                        {parameter.language}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {Object.entries(navmenu).filter(
                            ([key, index]) => (key && index.href !== undefined) || (key && index.state !== undefined)
                        ).length > 0 && (
                            <button className="mobile-menu" onClick={() => setMobileMenu(true)}>
                                <span>
                                    <FontAwesomeIcon icon={faBars} />
                                </span>
                            </button>
                        )}
                    </nav>
                </div>
            </header>
        </>
    )
}
