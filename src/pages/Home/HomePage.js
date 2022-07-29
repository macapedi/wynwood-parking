import './HomePage.scss';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';


function HomePage() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={()=>setIsOpen(true)}> OpenModal</button>

      <Modal isOpen={isOpen} closer={()=>setIsOpen(false)}/>
    </div>
  );
}

export default HomePage;
