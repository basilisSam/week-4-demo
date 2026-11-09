import './App.css'

function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="demo-card" aria-labelledby="page-title">
        <div className="topline">
          <span className="brand-mark" aria-hidden="true">D</span>
          <span className="brand-name">DEVREADY</span>
          <span className="status"><span className="status-dot" /> LIVE DEMO</span>
        </div>

        <div className="content">
          <p className="eyebrow">WEEK 04 <span>•</span> DEPLOYMENT</p>
          <h1 id="page-title">DevRready<br /><span>Deployment demo</span></h1>
          <p className="description">
            A small step from local code to a page that’s ready to share.
          </p>
          <div className="deploy-note">
            <span className="check" aria-hidden="true">✓</span>
            <span>React app is ready to deploy</span>
          </div>
        </div>

        <footer className="card-footer">
          <span>BUILT WITH REACT</span>
          <span className="footer-line" />
          <span>WEEK 4 DEMO</span>
        </footer>
      </section>
      <p className="page-caption">A clean start. A live destination.</p>
    </main>
  )
}

export default App
