import { KEYBOARD_LAYOUT } from "../constants/layout";
import { useKeyboard } from "../hooks/useKeyboard"
import { Key } from "./Key";


export const Keyboard = () => {
    const { keyState } = useKeyboard();

    return (
        <div className="keyboard-frame">
            {KEYBOARD_LAYOUT.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">
                    {row.map((key) => (
                        <Key
                            key={key.code}
                            config={key}
                            status={keyState[key.code] || 'idle'}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}
