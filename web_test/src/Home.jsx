import { useState } from 'react'

function Home () {
    const [count, setCount] = useState(0)

    return (
        <main>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
            </div>
            <div className='row'>
                <div className='col-6'>
                    asfjagfhng fghrwa bwreui hg
                </div>
            </div>
        </main>
    );
}

export default Home