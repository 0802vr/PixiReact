 
import { useEffect } from 'react';
import ProfileNav from '../Layers/ProfileNav/ProfileNav';
 

function ProfilePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);

  return (
    <main className='' style={{ padding: '200px 0' }}>
        
        <ProfileNav />        
              
    </main>
  );
}

export default ProfilePage;