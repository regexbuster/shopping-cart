import { Link } from 'react-router-dom';

function Error() {

    return (
        <>
            <h1>HOW DID YOU GET HERE</h1>
            <p>Please leave.</p>
            <Link to="/">Escape</Link>
        </>
    );
}

export default Error;