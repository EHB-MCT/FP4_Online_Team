import { createContext, useContext, useState, useEffect } from "react";

const VerifiedContext = createContext();

export const useVerified = () => useContext(VerifiedContext);

export const VerifiedProvider = ({ children }) => {

    const [verified, setVerified] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      fetch(`https://api.shiftfestival.be/api/verify-token?token=${token}`, {
        credentials: 'include',
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setVerified(true);
          }
        });
    } else {
      fetch('https://api.shiftfestival.be/api/user-status', {
        credentials: 'include',
      })
        .then(res => res.json())
        .then(data => {
          if (data.verified) {
            setVerified(true);
          }
        });
    }
  }, []);

  return (
    <VerifiedContext.Provider value={{ verified, setVerified }}>
      {children}
    </VerifiedContext.Provider>
  );
};
