import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Shared/Button";
import routes from '../routes';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto mt-12">
            <div className="flex flex-row items-center justify-center lg:h-screen">
                <div className="w-full rounded-2xl p-4 shadow-2xl lg:w-1/3">
                    <img src="/images/404.png" alt="404.png" />
                    <p className="text-center uppercase text-sky-200 text-5xl mb-4">
                        404
                    </p>
                    <h1 className="mb-4 text-center text-xl font-bold main-text-color  lg:text-3xl">
                        Not found
                    </h1>
                    <p className="text-center  secondary-text-color">
                        Oops! The page you’re looking for can’t be found.
                    </p>
                    <Button text="Go to Products" classes="mt-6 w-full" handleClick={() => navigate(`${routes.products}/executive`)}/>
                </div>
            </div>
        </div>
    );
}

export default NotFound;