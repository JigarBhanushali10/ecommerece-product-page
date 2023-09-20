import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: any) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(<div className="overlay">{children}</div>, ref.current)
    : null;
};

export default ModalPortal;
