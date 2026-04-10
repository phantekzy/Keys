import { useKeyboard } from "../hooks/useKeyboard"


export const Keyboard = () => {
    const { keyState } = useKeyboard();

    return (
        <div className="keyboard-frame">

        </div>
    )
}
