import { useEffect, useState } from "react";

export const useAddedAnimationConfirmation = () => {
  const [confirmationToAdded, setConfirmationToAdded] = useState(false);

  useEffect(() => {
    if (confirmationToAdded) {
      setTimeout(() => {
        setConfirmationToAdded(false);
      }, 2000);
    }
  }, [confirmationToAdded]);

  return {
    confirmationToAdded,
    setConfirmationToAdded,
  };
};
