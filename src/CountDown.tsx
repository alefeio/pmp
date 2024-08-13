import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Estilização do contador
const CountdownContainer = styled.div`
  display: flex;
  text-align: center;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #f07c8c;
  border-radius: 10px;
  background-color: #fff7f7;
  text-align: center;
  align-self: center;
  max-width: 300px;
`;

const TimeUnit = styled.div`
  display: inline-block;
  margin: 0 10px;
  font-size: 2rem;
  font-weight: bold;
  color: #f07c8c;
`;

const Label = styled.div`
  font-size: 1rem;
  color: #555;
`;

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-08-15T23:59:59') - +new Date();
    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };

    if (difference < 0) {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <CountdownContainer>
      <TimeUnit>{timeLeft.days}</TimeUnit>
      <Label>Dias</Label>
      <TimeUnit>{timeLeft.hours}</TimeUnit>
      <Label>Horas</Label>
      <TimeUnit>{timeLeft.minutes}</TimeUnit>
      <Label>Minutos</Label>
    </CountdownContainer>
  );
};

export default Countdown;
