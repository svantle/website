const NotFound = () => {
    return (
        <div style={{
            backgroundColor: '#1d2226',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
        }}>
            <h1>404 - Not Found</h1>
            <p>
                The page you requested was not found in our system :(
            </p>
        </div>
    );
};

export default NotFound;
