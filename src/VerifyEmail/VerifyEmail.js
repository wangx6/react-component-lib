import React, {useState, useEffect} from 'react'

function useVerification({ 
    vauthenticationEndpoint: authenticationEndpoint, 
    vaccessToken: accessToken, 
    vverificationToken: verificationToken }) {

    /**
     * This space is the data or as react would like to call it , a "state".
     * useState is only used if you expect the data to change
     * if the data is static a const value is sufficient
     */
    const [status, setStatus] = useState(-1);

    // this is the space of "power"
    // this space is responsible of processing or modifying the state/data
    // this functions can be private or public
    // __verifyInput is a private function used for internal input verification
    // at the constructor stage
    function __verifyInput() {
        return authenticationEndpoint && accessToken && verificationToken;
    }

    /**
     * Verify if the token contained by the url is existing and non-expired
     * 
     * return -1, 0, 1
     * -1 - not verified yet
     * 0  - verification failed
     * 1  - verification successful
     */

    async function __verify() {
        const rs = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1);
            }, 1000);
        })
        return rs;
    }


    // With empty array passed, useEffect behaves as an "componentDidMount" 
    // function.
    useEffect(() => {
        if(!__verifyInput()) throw new Error('Missing config input')
        __verify().then(setStatus);
    }, []);

    // Anything returned here are the public api exposed
    return {
        status
    };
}

// This is component
// The component has Model, View and the Controller
export default function VhiVerifyEmail({ vauthenticationEndpoint, vaccessToken, vverificationToken }) {
    // This space is the Model
    const {status} = useVerification({ vauthenticationEndpoint, vaccessToken, vverificationToken });


    // This space is the Controller
    const onSuccessful = () => {
        console.log('redirect');
    };

    const onFail = () => {
        console.log('failed');
    }

    const onInVerifyingProcess= () => {
        console.log('Verifying in progress');
    }


    // This space is the View
    return (
        <div className="vrl-verify-email">
            {status === -1 ? '' : status === 0 ? <div>Verification failed</div> : <div>Verification successful</div>}
        </div>
    )
}
