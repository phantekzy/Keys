import { useCallback, useEffect, useState } from "react";
import type { KeyboardState } from "../types/keyboard";

export const useKeyboard = () => {
  const [keyState, setKeyState] = useState<KeyboardState>({});

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    e.preventDefault();
    setKeyState((prev) => ({ ...prev, [e.code]: "pressed" }));
  }, []);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    setKeyState((prev) => ({ ...prev, [e.code]: "tested" }));
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  });
};
