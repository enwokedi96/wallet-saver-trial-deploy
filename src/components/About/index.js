import React, {useState} from 'react'
import ModalDialog from '../Modal';

function About() {

    // control states for About modal
    const [showAbout, setAboutShow] = useState(false);
    const handleAboutClose = () => setAboutShow(false);
    const handleAboutShow = () => setAboutShow(true);

    return (
        <>
            <div onClick={handleAboutShow}>
                About Us
            </div>
            <ModalDialog modal_title = "About"
                        modal_content = {<div>
                                            <p className="aboutUsText text-justify">At wallet saver, we believe that everyone deserves to have a better shopping experience. Our goal is to present you with a varied shopping options from AliExpress and Amazon online stores, giving you the best of both worlds. Happy Shopping!!</p>
                                    </div>}
                        show={showAbout} 
                        handleClose={handleAboutClose}
            />
        </>
    )
}

export default About;