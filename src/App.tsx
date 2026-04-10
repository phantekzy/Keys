import { Keyboard } from "./components/Keyboard"

const App = () => {
    return (
        <div className="main-viewport">
            <div className="glass-header">
                <h1>Keyboard tester</h1>
                <p>Made by Phantekzy</p>
            </div>
            <Keyboard />
            <button
                className="reset-trigger"
                onClick={() => window.location.reload()}
            >
                Reset
            </button>
        </div>
    )
}

export default App
