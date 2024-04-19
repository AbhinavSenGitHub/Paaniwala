import React from 'react'

const Certificate = () => {
    return (
        <div className="certification-div">
            <div className="certification-top">
                <h3 className="brand-name">Brand name</h3> {/* todo: brand name or logo */}
                <div>
                    <p>+91 5948359649</p>
                    <p>email@gmail.com</p>
                </div>
            </div>
            {/* <br className="border"/> */}
            <div className="certification-content">
                <div className="quality-div">
                    <h3>Certification for Quality</h3>
                </div>
                <p>There are eight key important characteristics of a water quality measurement are temperature, clarity, conductivity, pH, alkalinity, chlorine, hardness, and dissolved oxygen. Commonly used to demonstrate the visual form of a document or a typeface without relying. 
                In publishing and graphic design, Lorem ipsum  is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. </p>
                {/* <p>The water in this certificate carries 200 TDS level.</p>
                <p>Its pH value is 7.</p>
                <p>This certificate is proofed by Dummy Name.</p> */}

                {/* footer certification */}
                <div className="certifcated-footer">
                    {/* <p>Sincerely,</p> */}
                    <p>Issued on: April 16, 2024</p>
                    <p>Signature</p>
                    <p>Seal sign</p>
                    {/* TODO: seal sign */}
                </div>
            </div>
        </div>
    )
}

export default Certificate
