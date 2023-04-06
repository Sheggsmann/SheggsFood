import { useState, useEffect } from "react";

export default function useInterval(time: number) {
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return currentTime;
}
