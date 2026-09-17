import { init_places } from '../interfaces/Places.interface'

export default function Start(): React.ReactNode {
    return (
        <section className="start">
            <h1 id="anim-element">Погрузитесь в историю</h1>
            <p id="anim-element">Все экскурсии и репортажи в одном месте:</p>

            <div className="places">
                <div className="container" id={Object.keys(init_places).length !== 0 ? '' : 'empty'}>
                    {Object.keys(init_places).length !== 0 ? (
                        <>
                            {Object.entries(init_places).map(([key, index]) => (
                                <article key={key} className="card">
                                    <span className="card-content">
                                        <img src={index.image as string} alt="" />
                                        <div className="place-info">
                                            <h2>{index.name}</h2>
                                            <p>{index.description}</p>
                                        </div>
                                    </span>

                                    {/* <span className="card-tags">
                                        <p>Музей</p>
                                        <p>Достопримечательность</p>
                                    </span> */}
                                </article>
                            ))}
                        </>
                    ) : (
                        <>
                            <article id="empty"></article>
                            <article id="empty"></article>
                            <article id="empty"></article>
                        </>
                    )}
                </div>
            </div>

            {Object.keys(init_places).length !== 0 ? (
                <div className="app-button">
                    <a href="app/">Начать приключение</a>
                </div>
            ) : (
                <div className="app-button" id="empty">
                    <a></a>
                </div>
            )}
        </section>
    )
}
