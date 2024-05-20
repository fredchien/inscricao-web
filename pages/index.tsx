import { useState, useEffect } from 'react';
import MenuComponent from "../components/menu";
import Home from "../components/home";
import Loading from '../components/loading/indes';
import Paterns from '../components/partners';
import CardComponent from "../components/moreSchool";
import InfoCourse from '../components/info-course';
// import SliderButtons from '../components/slider-button';
import Apprenticeship from '../components/apprenticeship';
import SoftSkillsComponent from '../components/softSkils';
import Footer from '../components/footer';
import DoubtsComponents from '../components/doubts';
import Depositions from '../components/depositions';
import Requeriments from '../components/requirements';
import Form from '../components/form';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <MenuComponent />
          <Home />
          <main>
            <div className='box-main'>
              {/* <Paterns />
              <CardComponent />
              <InfoCourse /> */}
              {/* <SliderButtons /> */}
              {/* <Apprenticeship />
              <SoftSkillsComponent />
              <Depositions />
              <Requeriments />
              <Form /> */}
              <DoubtsComponents />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
