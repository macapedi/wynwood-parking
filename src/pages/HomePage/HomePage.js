
import InfoSections from '../../components/InfoSections/InfoSections';
import './HomePage.scss';



function HomePage() {
  return (
    <div className="home">
        <div className='home-main'>
          <p className='home__title'>This is my home page</p>
          <div className='home__align'>
          <InfoSections/>
          </div>

        </div>
     
    </div>
  );
}

export default HomePage;
