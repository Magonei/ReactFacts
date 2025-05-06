import { createRoot } from "react-dom/client"
import "./index.css"
const root = createRoot(document.getElementById("root"))
import App from "./App"
import Header from "./Components/Navbar"



root.render(<App />)