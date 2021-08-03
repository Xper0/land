
import * as React from 'react';
import "./Trynow.css";

export const Trynow = () => {
    return (
        <div className="trynow-conteiner padding">
            <div className="trynow-conteiner-column">
                <div className="trynow-conteiner-header">
                    <h3 className="trynow-conteiner-header-h3">NEW FEATURES</h3>
                    <h1 className="trynow-conteiner-header-h1">Over 1000 designers are using ...</h1>
                </div>
                <div className="trynow__hint">
                    <svg
                        className="trynow__arrow"
                        width="56"
                        height="41"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="1032 4369 56 41">
                        <image  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAApCAYAAABgDOogAAAAAXNSR0IArs4c6QAAAvpJREFUaEPtmUuITmEYx39/d0VuIYRcIqRkITYKEUuxkJQkSrlNIQZZIJINIixsXEazsUEWClFKEc1gFBtTEsoCI+Py6Pl6z3Tom77zzeZ7z2lOnb7F9/S+z+993ud6RIEfM5MKzFdC6wbMu4W7LVjJgiVHlqySXK3+75IFzawn4O/PmOG6FGTMrC8wGxgJ3Jb0tVbWybJvZguaWQ9gCLAQ2OHWA1ZKep9lo1rJZAIMcOOBtcB64CVwFLgn6XetlM+yb0XA4G/TgY3AHOABcBloltSe6yCTgvMruRQ4BVwEWiX9yXKCtZbp1IIBbiawDXALXgGuAh9ij5zpQy0LGHxuKrAbmA+cBC4Bn/IE12maMLMxwGZgOXAGaMgjXFlAMxsIrAE2ADcdUNK7WvtSV/f/54qaWW9gAXAMeA4cAV7kJaCUO4QOQA/3wBTgIDA5+N8dSZ7Qc/ukAQcAq4E64ISnA0nfcksWFC8BBuvNCNVJO7BH0qu8w3UEGTPrD6wCtgTrNUr6XiTAccAhYKj7nqTmIsClLTgXOAc0hrTwuTCAZtbH2x5gf2iDbsXeIVRz+DIz7/E8ci4Ctkp6XM0Cscs64GjgAOC/OyW1xK50Nfo5oAcYr1h6AfWS3lSzQOyyDjghRFAH3CvpdexKV6OfA3rnsA/wkURdURJ8cggOOCw0tYuBTZKeVnNCscs6oKeJFcBxYF0YBeZiHJHlcJNa1BP9WeCad++SipPoQ7Ht/ncYGAVsl9RkZh50BgFtea5LEwv6tNqrmfOhD7wADA5d/V3goaQfWa5EbDLpfnBSaJeGA7sAn2T7sMlr1AZJbbEpn0WfNKBfyWXA6TBBawoVjk/Wrkv6lWXB2GT+n8mMCHXpEuAZMM8n2pLux6Z4Vn3SHb37oRfeswLkNMC/HNUDN3xMn3XRmOQSwH7BWm45j6gTgbGAT9meeLCR1BqT4ll1SQA9Hfgs1H3wC/AR8Fz4FngEtOR1upYAesT0ks1fv4o+j/HXc2Aur2Zi4b9xlesoz1j9AwAAAABJRU5ErkJggg==" x="1032" y="4369"/>
                    </svg>
                    <p className="trynow__desc">30 days free trial for all.</p>
                </div>
                <div className="trynow-conteiner-form">
                    <form id="form">
                        <input className="trynow-conteiner-form-input" type="text" name="full name" placeholder="FULL NAME"/>
                        <input className="trynow-conteiner-form-input" type="text" name="email"placeholder="YOUR EMAIL"/>
                        <input  className="trynow-conteiner-form-input" type="text" name="password" placeholder="PASSWORD"/>
                        <button className="trynow-conteiner-form-submit">TRY NOW</button>
                    </form>
                </div>
            </div>

        </div>
    );
};