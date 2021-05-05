import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap'

export default function PomodoroClock() {

  const initialMinute = 25
  const initialSeconds = 0
  const [ minutes, setMinutes ] = useState(initialMinute);
  const [seconds, setSeconds ] =  useState(initialSeconds);
  const mountedRef = useRef(null) //<- flag to fire useEffect
  const [temp, setTemp] = useState(false)

  const incrementMinutes = () => setMinutes(prev => prev + 1)
  const decrementMinutes = () => setMinutes(prev => prev - 1)

  useEffect(()=>{
    if(mountedRef.current){
      const myInterval = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(myInterval)
            } else {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        } 
        }, 1000)
        return () => clearInterval(myInterval);
    }
  });

  const handleStart = () => {
    mountedRef.current = true
    setTemp(true)
  }

  const handleReset = () => {
    setMinutes(initialMinute)
    setSeconds(initialSeconds)
    mountedRef.current = false
    setTemp(false)
  }

  return (
    <div className="d-flex flex-column align-items-center">
      { minutes === 0 && seconds === 0
          ? null
          : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
      }
      <div className="d-flex flex-column align-items-center">
        <div>
          <Button onClick={incrementMinutes}>+</Button>
          <Button onClick={decrementMinutes}>-</Button>
        </div>
        <div>
          <Button onClick={handleStart}>Start</Button>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      </div>
    </div>
  )
}
