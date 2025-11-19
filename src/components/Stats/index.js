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

const Stats = () => {
  return (
    <div className="shadow-race">
      <div>
        <Icon value={15} color={'gold'} />
        <h2>atk</h2>
      </div>
      <div>
        <Icon value={15} color={'green'} />
        <h2>int</h2>
      </div>
      <div>
        <Icon value={15} color={'cyan'} />
        <h2>vel</h2>
      </div>
      <div>
        <Icon value={15} color={'white'} />
        <h2>peso</h2>
      </div>
      <div>
        <Icon value={15} color={'white'} />
        <h2>alt</h2>
      </div>
      <div>
        <Icon value={15} color={'white'} />
        <h2>res</h2>
      </div>
    </div>
  )
}

export default Stats