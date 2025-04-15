import { useState, useEffect} from 'react'

function Home () {
    const [count, setCount] = useState(0);

    useEffect(() => {

        document.title = 'Count: ' + count;
        
    },[count])

    function increase(){
        setCount((c) => c + 1);
    }

    function discount(){
        setCount((c) => c - 1);
    }

    return (
        <main>
            <div className="card">
                <button onClick={increase}>
                count is {count}
                </button>
                <button onClick={discount}>
                count is {count}
                </button>
            </div>
            <div className='row'>
                <div className='col-6'>
                    hello world
                </div>
            </div>
        </main>
    );
}

export default Home