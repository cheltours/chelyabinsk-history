import '../styles/Hero.css'
import '../styles/mobile/Hero.mobile.css'

import video from '../images/video.mp4'
import poster from '../images/places/center.jpg'

export default function Hero(): React.ReactNode {
    return (
        <section className="hero">
            <div className="container">
                <video autoPlay muted loop playsInline preload="auto" poster={poster} id="video">
                    <source src={video} type="video/mp4" />
                    <img src={poster} id="poster" alt="background"></img>
                </video>

                <nav>
                    <h1>Экскурсия с Доставкой</h1>
                    <p>
                        Путеводитель в твоем кармане! <br />
                        Откройте себе историю Челябинска заново.
                    </p>
                </nav>
            </div>
        </section>
    )
}
