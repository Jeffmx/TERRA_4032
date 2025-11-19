import TabNav from "components/TabNav";
import Stats from "components/Stats";
import "./races.css"

const Races = () => {
  return (
    <main>
      <div className="race-display">
        <img src="/assets/imgs/races/automato.png" alt="" />
      </div>

      <div className="shadow">
        <div className="race-selector"></div>
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
