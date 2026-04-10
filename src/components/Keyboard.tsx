import { KEYBOARD_LAYOUT } from "../constants/layout";
import { useKeyboard } from "../hooks/useKeyboard"


export const Keyboard = () => {
    const { keyState } = useKeyboard();

    return (
        <div className="keyboard-frame">
            {KEYBOARD_LAYOUT.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">

                </div>
            ))}
        </div>
    )
}
