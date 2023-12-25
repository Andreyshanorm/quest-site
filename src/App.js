import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePageMain from './components/HomePageMain/main'
import AboutUs from './components/AboutUsMain/AboutUsMain'
import BookingMain from './components/BookingMain/BookingMain';
import CertificateMain from './components/CirtificateMain/CirtificateMain';
import LocationMain from './components/LocationMain/LocationMain';


function App() {
  return (
    <>
      <Router>
            <Routes>
              <Route exact path="/" element={<HomePageMain/>}></Route>
              <Route exact path="/about" element={<AboutUs/>}/>
              <Route exact path="/booking" element={<BookingMain/>}/>
              <Route exact path="/certificate" element={<CertificateMain/>}/>
              <Route exact path="/location" element={<LocationMain/>}/>
            </Routes>
      </Router>
    </>
  );
}

export default App;
