import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import supabase from './supabase';


function ChangePasswordPage() {
  const location = useLocation();
  const token = location.state?.token;
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);


    const validatePassword = (value) => {
      if (!value) return "Password cannot be empty";
      if (value.length < 8 || value.length > 16)
        return "Password must be between 8 to 16 characters";
      if (!/(?=.*[a-z])/.test(value))
        return "Must contain a lowercase letter";
      if (!/(?=.*[A-Z])/.test(value))
        return "Must contain an uppercase letter";
      if (!/(?=.*\d)/.test(value))
        return "Must contain a number";
      if (!/(?=.*[@$!%*?&])/.test(value))
        return "Must contain a special character (@\$!%*?&)";
      return null;
  };

    const handleSubmit = async (e) => {
     e.preventDefault();
       const passwordValidation = validatePassword(password);
          if (passwordValidation) {
            setPasswordError(passwordValidation);
            return;
          }
       if (password !== confirmPassword) {
          setPasswordError("Passwords do not match");
         return;
        }
     setLoading(true);
    try {
      const {error} = await supabase.auth.updateUser({password});
            if (error) {
             alert(error.message);
              return;
          }
        alert("Password changed successfully");
           navigate("/", {replace: true});
     } catch (e){
         alert(e.message);
      }finally {
        setLoading(false);
     }
  };



    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
           <div style={{ width: '300px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Change Password</h2>
                <form onSubmit={handleSubmit}>
                     <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>New Password</label>
                         <input type="password" placeholder='Enter new password'  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                     </div>
                     <div style={{ marginBottom: '15px' }}>
                       <label style={{ display: 'block', marginBottom: '5px' }}>Confirm New Password</label>
                        <input type="password" placeholder='Confirm new password' style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                           value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  />
                     </div>
                    {passwordError && <p style={{ color: 'red', marginBottom: '10px' }}>{passwordError}</p>}
                     <button disabled={loading} type="submit"
                       style={{ width: '100%', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                     >{loading ? "Loading..." : "Change Password"}</button>
                </form>
            </div>
        </div>
    );
}

export default ChangePasswordPage;