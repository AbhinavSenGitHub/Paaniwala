import React from 'react'

const Preloader = () => {
    return (
        <div>
            <div className="loader-wrap">
                <div className="preloader">
                    <div className="preloader-close">Preloader Close</div>
                    <div id="handle-preloader" className="handle-preloader">
                        <div className="animation-preloader">
                            <div className="spinner" />
                            <div className="txt-loading">
                                <span data-text-preloader="P" className="letters-loading">
                                    {" "}
                                    P{" "}
                                </span>
                                <span data-text-preloader="a" className="letters-loading">
                                    {" "}
                                    a{" "}
                                </span>
                                <span data-text-preloader="n" className="letters-loading">
                                    {" "}
                                    n{" "}
                                </span>
                                <span data-text-preloader="i" className="letters-loading">
                                    {" "}
                                    i{" "}
                                </span>
                                <span data-text-preloader="W" className="letters-loading">
                                    {" "}
                                    W{" "}
                                </span>
                                <span data-text-preloader="a" className="letters-loading">
                                    {" "}
                                    a{" "}
                                </span>
                                <span data-text-preloader="l" className="letters-loading">
                                    {" "}
                                    l{" "}
                                </span>
                                <span data-text-preloader="a" className="letters-loading">
                                    {" "}
                                    a{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader
