import React, {useState} from 'react'
import ModalDialog from '../Modal';

function FAQs (props) {

    // control states for FAQ modal
    const [showFAQ, setFAQShow] = useState(false);
    const handleFAQClose = () => setFAQShow(false);
    const handleFAQShow = () => setFAQShow(true);

    return (
        <>
            <div onClick={handleFAQShow}>
                FAQs
            </div>
            <ModalDialog modal_title = "FAQs"
                modal_content = {<div>
                                <strong>How do I use site?</strong><br/>
                                <p>To start comparing between stores, simply click on the "Compare Stores" option on the navigation bar. Or, you can also visit the individual stores by clicking "Individual Stores" if you prefer this option.</p>
                                <strong>Is the information displayed current?</strong><br/>
                                <p>But of course it is... We strive to keep up with the latest and best on both AliExpress and Amazon items, ensuring our users are satisfied with their search experience.</p>
                                <strong>Can I get your autograph please?!!!</strong><br/>
                                <p>Why yes, of course you can...</p>
                                <strong>Can we purchase items on this site?</strong><br/>
                                <p>No, this is still a working progress, and might be implemented a later version. For now, please click on the title or image of your desired item to get the full item details in the relevant online store and make purchases.</p>
                                </div>}
                show={showFAQ} 
                handleClose={handleFAQClose}
            />
        </>
    )
}

export default FAQs;