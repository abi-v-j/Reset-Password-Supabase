import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('access_token');
    const type = params.get('type');


    if (accessToken && type === 'recovery') {
       navigate('/changePassword', { state: { token: accessToken } });
    }else{
        // invalid link or no token
       alert("invalid password reset link")
    }

  }, [navigate]);


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="loader"></div>
            <p>Please Wait...</p>
          </div>
    </div>
  );
}

export default LoadingPage;