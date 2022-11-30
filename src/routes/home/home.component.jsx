import { Outlet } from 'react-router-dom';
// import Directory from '../../directory/directory.component';
import Directory from '../../components/directory/directory.component'

const Home = () => {
  return (
    <div>
        <Outlet/>
        <Directory/>
    </div>
  
  );
   
    
}

export default Home; 