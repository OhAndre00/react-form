import { useEffect, useRef } from "react";

export default function FocusableInput() {
  const mountedRef = useRef(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Montato per la prima volta");
    } else {
      console.log("Montato per la seconda volta");
    }

    inputRef.current?.focus();
  }, []);

  return (
    <input
      className="border rounded-lg p-2 w-fit"
      placeholder="Focusable Input"
      type="text"
      ref={inputRef}
    />
  );
}
