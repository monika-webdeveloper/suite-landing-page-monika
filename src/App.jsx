import Main from "./containers/Main";
import Testimonial from "./containers/Testimonial";
import Footer from "./containers/Footer";

const App = () => {
  return (
    <main className='flex flex-col '>
      <Main />
      <Testimonial />
      <Footer />
    </main>
  );
};
export default App;
