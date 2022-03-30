import Navbar from './components/Navbar';
import Plan from './components/Plan';
import Footer from './components/Footer';
import planDatas from './planDatas';

function App() {
  const plans = planDatas.map((plan) => {
    return <Plan key={plan.id} plan={plan} />;
  });

  return (
    <div>
      <Navbar />

      <div className="container mx-auto">
        <div className="plan-container relative lg:flex lg:px-6">{plans}</div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
