import Footer from "./pages/Footer";
// import Search from "./pages/Search";
// import Trips from "./pages/Trips";
import RoutesApp from "./routes";

import { ApiProvider } from "./context/ApiContext";
import { TripDetailProvidder } from "./context/TripProvider";

const App = () => {
  return (
    <>
      <div className="container">
        <ApiProvider>
          <TripDetailProvidder>
          <RoutesApp />
          </TripDetailProvidder>
        </ApiProvider>
      </div>
      <Footer />
    </>
  )
}

export default App;
