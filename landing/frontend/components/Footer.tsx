import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type Footer, type FooterLinks, normalizeLink, footer } from '../interfaces/Footer.interface'

export default function Footer(): React.ReactNode {
    return (
        <footer>
            <section className="container">
                <div className="footer-app-authors">
                    <p>
                        &copy; {new Date().getFullYear()} {footer.authors.created}
                    </p>
                    {footer.media !== undefined && Object.keys(footer.media).length > 0 && (
                        <ul className="footer-app-social">
                            {Object.entries(footer.media).map(([key, item]) => (
                                <a key={key} id={item.id} href={normalizeLink(item.href)}>
                                    <FontAwesomeIcon icon={item.icon} />
                                </a>
                            ))}
                        </ul>
                    )}
                </div>

                {Object.entries(footer.content).map(([key, index]) => (
                    <div key={key} className="footer-block">
                        <h1>{index.title}</h1>
                        <div className="footer-block-content">
                            {Object.entries(index.items as FooterLinks).map(([id, item]) => (
                                <>
                                    {item.lambda !== undefined ? (
                                        <button key={id} onClick={item.lambda}>
                                            {item.icon !== undefined && (
                                                <span>
                                                    <FontAwesomeIcon icon={item.icon} />
                                                </span>
                                            )}
                                            {item.name}
                                        </button>
                                    ) : (
                                        <>
                                            {item.href !== undefined ? (
                                                <a key={id} href={normalizeLink(item.href)}>
                                                    {item.icon !== undefined && (
                                                        <span>
                                                            <FontAwesomeIcon icon={item.icon} />
                                                        </span>
                                                    )}
                                                    {item.name}
                                                </a>
                                            ) : (
                                                <p key={id}>
                                                    {item.icon !== undefined && (
                                                        <span>
                                                            <FontAwesomeIcon icon={item.icon} />
                                                        </span>
                                                    )}
                                                    {item.name}
                                                </p>
                                            )}
                                        </>
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </footer>
    )
}
