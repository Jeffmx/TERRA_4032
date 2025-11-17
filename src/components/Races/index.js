import "./races.css"

const Races = () => {
  return (
    <main>
      <div className="display">
        <img src="/assets/imgs/races/automato.png" alt="" />
      </div>

      <div className="shadow">
        <div className="select"></div>
      </div>
      <div className="shadow">
        <section className="info">
          <div className="corretor" style={{height:'100%'}}></div>
          <h1>automato</h1>
          <div className="race-info">
            <div className="info-selector">
              <h2>1</h2>
              <h2>2</h2>
              <h2>3</h2>
            </div>
            <div className="tas">
              <h2>something 1</h2>
              <h2>something 2</h2>
              <h2>something 3</h2>
            </div>
          </div>
          <div>

          </div>
        </section>
      </div>
    </main>
  );
}

export default Races
