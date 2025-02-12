import { useEffect, useRef, useState } from "react";

export default function MountedComponent() {
  const mountedRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      setMounted(true);
      console.log("Montato per la prima volta");
    }
  }, []);

  return <div>{mounted && <p>Componente Montato.</p>}</div>;
}
