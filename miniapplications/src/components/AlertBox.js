
import React, { useState, useEffect } from "react";

const AlertMessage = () => {
  const [autoClose, setAutoClose] = useState(true);
  const [manualClose1, setManualClose1] = useState(true);
  const [manualClose2, setManualClose2] = useState(true);

  useEffect(() => {
    const autoCloseTimeout = setTimeout(() => setAutoClose(false), 3000);
    return () => clearTimeout(autoCloseTimeout);
  }, []);

  return (
    <div>
      {autoClose && (
        <Alert onClose={() => setAutoClose(false)}>
          Auto-close after 3 seconds
        </Alert>
      )}
      {manualClose1 && (
        <Alert onClose={() => setManualClose1(false)}>
          Manually closable 1
        </Alert>
      )}
      {manualClose2 && (
        <Alert onClose={() => setManualClose2(false)}>
          Manually closable 2
        </Alert>
      )}
    </div>
  );
};

const Alert = ({ onClose, children }) => (
  <div className="alert">
    <p>{children}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default AlertMessage;
