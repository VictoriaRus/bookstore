import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {accountActivation} from "../services/authServices/authServices";
import {Link} from "react-router-dom";
import Button from "../components/common-components/Button";

const ActivationPage = () => {
    const {uid, token} = useParams();
    const [isActivated, setIsActivated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (uid && token) {
            const activateAccount = async () => {
                try {
                    setIsLoading(true);
                    const response = await accountActivation({uid, token});
                    console.log({response});
                    if (response) {
                        setIsActivated(true);
                    }
                } catch (e: any) {
                    console.log({e});
                    setErrorMessage(e?.response?.data?.detail as string);
                } finally {
                    setIsLoading(false);
                }
            };
            activateAccount();
        }

    }, [uid, token]);
    return (
        <div>
            {
                isActivated ? (
                    <div>
                        Your account is successfully activated!
                        <Link to='/sign-in'>
                            <Button text='Go to the login page'/>
                        </Link>
                    </div>
                ) : (
                    <>
                        {
                            !isLoading ? (
                                <>
                                    <>Activation Page</>
                                    {errorMessage && <p>{errorMessage}</p>}
                                </>
                            ) : <div>Loading...</div>
                        }
                    </>
                )
            }
        </div>
    );
};

export default ActivationPage;