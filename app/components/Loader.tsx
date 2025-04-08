'use client';

import { PuffLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="loader h-[70vh] flex flex-col justify-center items-center">
            <PuffLoader size={100} color="red" />
        </div>
    );
};

export default Loader;
