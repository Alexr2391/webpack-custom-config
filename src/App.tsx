import { FC } from 'react'
import './styles/styles.scss'

const App: FC = () => {
    return (
        <main>
            <h1>{process.env.ASSET_HELLO}</h1>
            <p>welcome to the Webpack set up</p>
            <img src="assets/images/niagara.jpg" alt="niagara" />
        </main>
    )
}

export default App