import React, { FC, useEffect, useState, useRef } from 'react'
import './Timer.css'

type PropsType = {
    minutes: number,
    handleSubmitTest: () => void
}

type Timer = {
    hour: number
    minute: number
    second: number
}

const decrease = (timer: Timer): Timer => {
    let updateTimer = { ...timer };
    const { hour, minute, second } = timer;

    if (second === 0) {
        updateTimer.second = 59;
        if (minute === 0) {
            updateTimer = { ...updateTimer, minute: 59, hour: timer.hour - 1 };
        } else {
            updateTimer = { ...updateTimer, minute: timer.minute - 1 };
        }
    } else {
        updateTimer = { ...updateTimer, second: timer.second - 1 };
    }

    return updateTimer;
}

const isEndTime = (timer: Timer): boolean => {
    if (timer.hour === 0 && timer.minute === 0 && timer.second === 0) return true;
    return false;
}

const formatTime = (h: number, m: number, s: number) => {
    const hourStr = `0${h}`.slice(-2);
    const minuteStr = `0${m}`.slice(-2);
    const secondStr = `0${s}`.slice(-2);

    return `${hourStr}:${minuteStr}:${secondStr}`;
}

const CountDownTimer: FC<PropsType> = ({ minutes, handleSubmitTest }) => {
    const [timer, setTimer] = useState({
        hour: Math.floor(minutes / 60),
        minute: minutes % 60,
        second: 0
    })

    const intervalId = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTimer(prev => decrease(prev));
        }, 1000);

        return () => {
            clearInterval(intervalId.current)
        }
    }, [])

    if (isEndTime(timer)) {
        clearInterval(intervalId.current)
        handleSubmitTest();
    }

    return (
        <div className='timer'>
            {formatTime(timer.hour, timer.minute, timer.second)}
        </div>
    )
}

export default CountDownTimer