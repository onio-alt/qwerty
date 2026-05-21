/* global React, ReactDOM, Header, Footer, PRICING_GROUPS, PricingHero, PricingGroup, PricingNote */

function PricingApp() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <PricingHero/>
        {PRICING_GROUPS.map((g, i) => (
          <PricingGroup key={i} group={g} index={i}/>
        ))}
        <PricingNote/>
        <Contact/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PricingApp/>);