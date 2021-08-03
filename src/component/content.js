import * as React from 'react';
import "./content.css"
import sectionImg from "../img/Rectangle.svg";
import macbook from "../img/macbook.svg"
import bacgroundFeedback from "../img/section4.jpg";
import window from "../img/window.svg"
import toys from "../img/toys.svg"

export function Content(prop) {
    let data = prop.prop
    const sectionBg ={
        backgroundImage: 'url(' + bacgroundFeedback + ')',
        overflow: 'hidden',
        zIndex: 0
    }

    return (
        <div className="content-conteiner ">
            <section className="content-conteiner-section-newDisign">
                <div className="content-conteiner-section-newDisign-table">
                    <h3 className="content-conteiner-section-newDisign-h3">NEW DESIGN</h3>
                    <div>
                        <h1 className="content-conteiner-section-newDisign-h1">There is no other platforms for you as
                            like <span>....</span></h1>
                    </div>
                    <p className="content-conteiner-section-newDisign-p">
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non
                        mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada
                        magna mollis euismod. Vestibulum id ligula porta felis euismod semper.
                        <br/><br/>
                        Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non
                        metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero,
                        a pharetra augue.</p>
                </div>
                <div className="content-conteiner-section-newDisign-table" >
                    <img className="content-conteiner-section-newDisign-table-img"  src={sectionImg} alt="treangle"/>
                </div>
            </section>
            <section  className="content-conteiner-section-newFuture">
                <img className="content-conteiner-section-newFuture-img"  src={toys} alt="toys"/>
                <div className="content-conteiner-section-newFuture-title">
                    <h3 className="content-conteiner-section-newDisign-h3">NEW FEATURES</h3>
                    <h1 className="content-conteiner-section-newFuture-h1">Some awesone features</h1>
                </div>
                <div className="content-conteiner-section-newFuture-title-row">
                    {data.feauture.map( (item => <div key={item.id}
                        className="content-conteiner-section-newFuture-title-row-te">
                        <img src={item.icon}  alt="icon"/>
                        <h3>{item.title}</h3>
                        <p className="content-conteiner-section-newFuture-title-row-text">{item.text}</p>
                    </div>))}
                </div>
            </section>
            <section className="content-conteiner-section-newDisignsection">
                <div className="content-conteiner-section-newDisign-tablesection">
                    <img className="content-conteiner-section-newDisign-img" src={macbook} alt="macbook"/>
                </div>
                <div className="content-conteiner-section-newDisign-tablesection">
                    <h3 className="content-conteiner-section-newDisign-h3">NEW DESIGN</h3>
                    <h1 className="content-conteiner-section-newDisign-h1">Resposive design, just need your
                        tap <span>....</span></h1>
                    <p className="content-conteiner-section-newDisign-p">
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non
                        mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn.
                        Vestibulum felis euismod semper.
                    </p>
                </div>
            </section>
            <section className="content-feedback" style={sectionBg}>
                <div className="content-info">
                    {data.feedback.map(item => <div key={item.id} className="content-info__block">
                        <img className="imgUser" src={item.icon} alt="userIcon"/>
                        <h3 className="content-info__name">{item.name}</h3>
                        <h2 className="content-info__prof">{item.title}</h2>
                        <p className="content-info__desc">{item.text}</p>
                    </div>)}
                </div>
                <div className="content-sponsor">
                    {data.svg.map((item,index) => <div className="content-sponsor__svg" key={index}>{item.sponsor}</div>)}
                </div>
            </section>
            <section className="browser-conteiner">
                <div className="browser-content">
                    <h3 className="browser-content-h3">NEW FEATURES</h3>
                    <h1 className="browser-content-h1">Some awesone features</h1>
                    <p className="browser-content__p">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non
                        mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn.
                        Vestibulum felis euismod semper.</p>
                </div>
                <div>
                    <img src={window} alt="window"/>
                </div>
            </section>

        </div>
    );
};