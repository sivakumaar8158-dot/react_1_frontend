export const NavBar1 = () => {
  return (
    <>
      
      <nav>
        <div className="navbar1">
          <div className="navbar2">
            <h3>Atlas Database</h3>
          </div>

          <div className="navbar3">
            <a className="navbar4" href="">Overview</a>
            <a className="navbar4" href="">Features</a>
            <a className="navbar4" href="">Security</a>
            <a className="navbar4" href="">Getting Started</a>
            <a className="navbar4" href="">Pricing</a>
            <a className="navbar4" href="">Resources</a>
          </div>
        </div>
      </nav>

      
      <div className="hero-section">
        <div className="hero-left">
          <h1>Atlas Database</h1>

          <p className="hero-desc">
            The most effective way to deploy MongoDB. Enjoy unmatched resilience,
            scalability, and enterprise-grade security while eliminating operational
            complexity.
          </p>

          <div className="button-group">
            <a href="#" className="btn-primary">Get Started</a>
            <a href="#" className="btn-secondary">Contact sales →</a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/blt4b8f5d88e7e5fcb7/6570d7ff19f33769508d1cf6/General_TECHNOLOGY_Database_Spot_BS_Mist.svg"
            alt="database-illustration"
          />
        </div>
      </div>

      
      <div className="slalom-section">

        
        <div className="slalom-left">
          <img
            src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/blt557771e610c05b3a/672281e0fae3bb3a466be5d0/Slalom_-_3_2_(4).svg"
            alt="AI Illustration"
          />
        </div>

        
        <div className="slalom-right">
          <h2>AI Ready</h2>

          <p>
            MongoDB enables seamless integration with AI technologies. Harness
            the power of retrieval-augmented generation (RAG) by utilizing vector
            search for innovative data handling. Effortlessly build AI-powered
            apps that scale with your needs.
          </p>

          <a
            href="https://www.mongodb.com/solutions/use-cases/artificial-intelligence"
            className="slalom-link"
          >
            Build AI-powered apps →
          </a>
        </div>

      </div>
    </>
  );
};

export default NavBar1;