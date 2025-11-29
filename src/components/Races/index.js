import TabNav from "components/TabNav"
import Stats from "components/Stats"
import "jsons/races.json"
import "./races.css"

const Races = () => {
  return (
    <main>
      <div className="race-display">
        <img src="/assets/imgs/races/automato.png" alt="" />
      </div>

      <div className="shadow">
        <section className="race-selector">
          <div className="race-container">
            <img className="race" width={'300px'} src="assets/imgs/races/automato.png"/>
          </div>
          <div className="race-container">
            <img className="race" width={'300px'} src="assets/imgs/races/automato.png"/>
          </div>
          <div className="race-container">
            <img className="race" width={'300px'} src="assets/imgs/races/automato.png"/>
          </div>
          <div className="race-container">
            <img className="race" width={'300px'} src="assets/imgs/races/deteridion.png"/>
          </div>
          <div className="race-container">
            <img className="race" width={'300px'} src="assets/imgs/races/humano.png"/>
          </div>
          <div className="race-container">
            <img className="race" width={'300px'} src="assets/imgs/races/sanaridion.png"/>
          </div>
        </section>
      </div>

      <div className="shadow">
        <section className="race-info">
          <h1>automato</h1>
          <TabNav />
          <Stats />
        </section>
      </div>
    </main>
  );
}

export default Races