import { useEffect, useRef } from "react";
import "./stats.css";

function Icon({ value, color }) {
  const ref = useRef(null);

  useEffect(() => {
    const angle = (value / 100) * 360;
    ref.current.style.setProperty("--progress", `${angle}deg`)
    ref.current.style.setProperty("--color", `${color}`)
  }, [value]);

  return <div ref={ref} className="progress" />;
}

const Stats = ({status}) => {
  return (
    <div className="shadow-race">
      {Object.entries(status).map(([stat, value]) => (
        <div className="status-container">
          <Icon value={value[0]} color={value[1]} />
          <h2>{stat}</h2>
        </div>
      ))}
    </div>
  )
}

export default Stats