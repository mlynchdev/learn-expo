import { Main } from "./src/Main"
import config from "./Storybook.config.json"

export default function App() {
    return <Main showSB={config.useStorybook === "true"} />
}
