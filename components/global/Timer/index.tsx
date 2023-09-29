import { useEffect, useState } from 'react';

const Timer: React.FC = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment seconds
      setSeconds((prevSeconds) => (prevSeconds + 1) % 60);

      // Increment minutes when seconds reach 60
      if (seconds === 59) {
        setMinutes((prevMinutes) => (prevMinutes + 1) % 60);

        // Increment hours when minutes reach 60
        if (minutes === 59) {
          setHours((prevHours) => prevHours + 1);
        }
      }
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  // Helper function to format numbers with leading zeros
  const formatNumberWithZero = (number: number) => {
    return number < 10 ? `0${number}` : number.toString();
  };

  return (
    <div className="text-3xl font-bold">
      {formatNumberWithZero(hours)}:{formatNumberWithZero(minutes)}:{formatNumberWithZero(seconds)}
    </div>
  );
};

export default Timer;
