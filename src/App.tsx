import "./style.css";
import {
  SiteHeader,
  Hero,
  ImgScroll,
  About,
  Portfolio,
  Services,
  Contact,
  SiteFooter,
} from "./container";

function App() {
  return (
    <div>
      <div>
        <SiteHeader />
        <Hero />
      </div>
      <ImgScroll />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <SiteFooter />
    </div>
  );
}

export default App;
