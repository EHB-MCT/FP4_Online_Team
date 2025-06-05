import { Canvas } from "@react-three/fiber"
import clsx from "clsx"

//Models
import { Model } from "../../../shared/model/Model"

//CSS
import style from './awards.module.scss'

export const Awards = () => {

    const rotation = [0, 0, 0]

    return (
        <>
            <section className="wrapper">
                <div className="inner-wrapper">
                    <Canvas className={clsx(style["canvas"])}>
                        <Model
                            rotation={ rotation }
                        />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 10, 7.5]} intensity={1} castShadow />
                        <perspectiveCamera makeDefault position={[0, 0, 5]} />

                    </Canvas>
                    <div className={clsx(style["awards-wrapper"])}>
                        <div className="price">
                            <h2>Publieksprijs</h2>
                            <p>
                                Deze prijs gaat naar het favoriete project van het live publiek tijdens Expo24. Elke bezoeker aan het event mag stemmen op drie projecten waar hij of zij bijzonder enthousiast over is: originele animatie of VR beelden, prachtige installaties, slimme apps en sites, goeie interactieve storytelling, ... De student van het project met het meeste aantal stemmen mag de publieksprijs mee naar huis nemen.
                            </p>
                        </div>
                        <div className="price">
                            <h2>Jury prijs</h2>
                            <p>
                                De 'Juryprijs' wordt toegekend door een multidisciplinair team van docenten aan een project waarin de passie en vaardigheden van de Multimedia-student onmiskenbaar zichtbaar zijn. De prijs is een erkenning voor toewijding, toepassing en creativiteit. De student die wint, heeft zich getoond als een uitzonderlijke multimedia-professional met een eigen innovatieve benadering.                            
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )

}