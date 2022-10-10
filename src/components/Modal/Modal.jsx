import React from "react";



export default function Modal({children,showModal, setShowModal}) {
    // const [showModal, setShowModal] = useState(false);
    return (
        <>
           
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full  p-4  bg-white  shadow-lg">
                                <div className="">
                                   
                                    <div className="mt-2 ">
                                    <div className="font-semibold gap-2 mt-3 flex justify-end">
                                           
                                            <button
                                                className=" text-lg md:pr-7 font-bold"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                X
                                            </button>
                                    </div>
                                     {children}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}