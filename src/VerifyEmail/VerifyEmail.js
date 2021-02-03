import React, {useState, useEffect} from 'react'

// initial state
// authenEndpoint    - Endpoint of a service that is responsible for verifying email
// accessToken       - token that is required in order to access this service
// verificationToken - token to be verified
const initialState = {
    authenEndpoint: '',
    accessToken: '',
    verificationToken: '',
};

// initial status
// -1 - no checking has been performed yet
// 0  - verification failed
// 1  - verification successful
const initialStatus = -1;

function useVerification() {
    const [state] = useState(initialState);
    const [status, setStatus] = useState(initialStatus);

    useEffect(() => {
        async function verify() {
            setTimeout(() => {
                setStatus(1);
                console.log('verifying');
            }, 1000);
            // const res = await fetch(state.authenEndpoint);
            // const json = await res.json();
        }
        verify();
        
    }, []);

    return {
        status
    };
}

export default function VhiVerifyEmail(props) {
    const {status} = useVerification(props);
    return (
        <div>
            {status === -1 ? '' : status === 0 ? <div>Verification failed</div> : <div>Verification successful</div>}
        </div>
    )
}
