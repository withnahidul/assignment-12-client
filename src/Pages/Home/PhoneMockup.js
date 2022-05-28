import React from 'react';

const PhoneMockup = () => {
    return (
        <div className='px-8 my-10'>
            <h2 className='lg:text-5xl md:text-3xl text-xl text-center font-bold my-10'>Experience with App</h2>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>

                <div class="mockup-window border hidden lg:block bg-base-300">
                    <div class="flex justify-center px-4 py-20 bg-base-200">
                        <img src="https://i.ibb.co/QvwYKfT/banner1.jpg" alt="" />
                    </div>
                </div>

                <div class="mockup-phone border-primary">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">
                            <img src="https://i.ibb.co/sCkv7y5/Untitled.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PhoneMockup;