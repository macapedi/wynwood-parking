
import InfoSections from '../../components/InfoSections/InfoSections';
import './HomePage.scss';



function HomePage() {
  return (
    <div className="home">
        <div className='home-main'>
          <p className='home__title'>This is my home page</p>
          <InfoSections/>

        </div>
     
    </div>
  );
}

export default HomePage;
