import raceList from "jsons/races.json"
import TabNav from "components/TabNav"
import Stats from "components/Stats"
import { useState } from "react"
import "./races.css"

const Races = () => {
  const [activeRace, setActiveRace] = useState(0)

  return (
    <main>
      <div className="race-display">
        <img className="animar-img" key={raceList[activeRace].name} src={raceList[activeRace].img} alt={raceList[activeRace].name} />
      </div>

      <div className="shadow">
        <section className="race-selector">
          {raceList.map((race) => (
            <div onClick={() => setActiveRace(race.index)} className={activeRace === race.index ? "race-container race-active" : 'race-container'} key={race.name}>
              <img className="race" width={'300px'} src={race.img} alt={race.name} />
            </div>
          ))}
        </section>
      </div>

      <div className="shadow">
        <section className="race-info">
          <h1 className="animar-texto" key={raceList[activeRace].name}>{raceList[activeRace].name}</h1>
          <TabNav info={raceList[activeRace].info}/>          
          <Stats status={raceList[activeRace].status}/>
        </section>
      </div>
    </main>
  );
}

export default Races