import { Canvas } from "@react-three/fiber"
import clsx from "clsx"
import { useState } from "react"
import gsap from "gsap"

//Models
import { Model } from "../../../shared/model/Model"

//CSS
import style from './awards.module.scss'

export const Awards = () => {

    const [rotationY, setRotationY] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionDirection, setTransitionDirection] = useState('next');

    const awards = [
        {
            title: "Publieksprijs",
            description: "Deze prijs gaat naar het favoriete project van het live publiek tijdens Expo24. Elke bezoeker aan het event mag stemmen op drie projecten waar hij of zij bijzonder enthousiast over is: originele animatie of VR beelden, prachtige installaties, slimme apps en sites, goeie interactieve storytelling, ... De student van het project met het meeste aantal stemmen mag de publieksprijs mee naar huis nemen."
        },
        {
            title: "Jury prijs",
            description: "De 'Juryprijs' wordt toegekend door een multidisciplinair team van docenten aan een project waarin de passie en vaardigheden van de Multimedia-student onmiskenbaar zichtbaar zijn. De prijs is een erkenning voor toewijding, toepassing en creativiteit. De student die wint, heeft zich getoond als een uitzonderlijke multimedia-professional met een eigen innovatieve benadering."
        },
        {
            title: "Publieksprijs1",
            description: "Deze prijs gaat naar het favoriete project van het live publiek tijdens Expo24. Elke bezoeker aan het event mag stemmen op drie projecten waar hij of zij bijzonder enthousiast over is: originele animatie of VR beelden, prachtige installaties, slimme apps en sites, goeie interactieve storytelling, ... De student van het project met het meeste aantal stemmen mag de publieksprijs mee naar huis nemen."
        },
        {
            title: "Jury prijs2",
            description: "De 'Juryprijs' wordt toegekend door een multidisciplinair team van docenten aan een project waarin de passie en vaardigheden van de Multimedia-student onmiskenbaar zichtbaar zijn. De prijs is een erkenning voor toewijding, toepassing en creativiteit. De student die wint, heeft zich getoond als een uitzonderlijke multimedia-professional met een eigen innovatieve benadering."
        }
    ];    
    
    const next = () => {
        if (isTransitioning) return;

        setTransitionDirection("next");
        setIsTransitioning(true);

        const spinTimes = 1;
        const spinAmount = Math.PI * 2 * spinTimes;
        const startRotation = rotationY;
        const endRotation = startRotation + spinAmount;

        gsap.to(
            { value: startRotation },
            {
                value: endRotation,
                duration: 2,
                ease: "power4.inOut",
                onUpdate: function () {
                    setRotationY(this.targets()[0].value);
                },
                onComplete: () => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
                    setIsTransitioning(false);
                }
            }
        );
    };

    const previous = () => {
        if (isTransitioning) return;

        setTransitionDirection("previous");
        setIsTransitioning(true);

        const spinAmount = -Math.PI * 2;
        const startRotation = rotationY;
        const endRotation = startRotation + spinAmount;

        gsap.to(
            { value: startRotation },
            {
                value: endRotation,
                duration: 2,
                ease: "power4.inOut",
                onUpdate: function () {
                    setRotationY(this.targets()[0].value);
                },
                onComplete: () => {
                    setCurrentIndex((prevIndex) => (prevIndex - 1 + awards.length) % awards.length);
                    setIsTransitioning(false);
                }
            }
        );
    };


    return (
        <>

            
        </>
    )

}