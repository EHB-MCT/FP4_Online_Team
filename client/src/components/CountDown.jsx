import { useState, useEffect } from "react";

//CSS
import './CountDown.css'


function convert(n) {
    n = String(n);
    if (n.length == 1) n = "0" + n;
    return n;
}

const CountDown = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("June 20, 2025 16:00:00").getTime();
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            months: convert(Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30))),
            days: convert(Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))),
            hours: convert(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
            minutes: convert(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))),
            seconds: convert(Math.floor((timeDifference % (1000 * 60)) / 1000)),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    }, []);

    return (
        <div className="countdown">
            
            <div>
                <h1>{timeLeft.months}</h1>
                <p>Months</p>
            </div>
            <div>
                <h1>{timeLeft.days}</h1>
                <p>Days</p>
            </div>
            <div>
                <h1>{timeLeft.hours}</h1>
                <p>Hours</p>
            </div>
            <div>
                <h1>{timeLeft.minutes}</h1>
                <p>Minutes</p>
            </div>
            <div>
                <h1>{timeLeft.seconds}</h1>
                <p>Seconds</p>
            </div>
        </div>
    );
};

export default CountDown;