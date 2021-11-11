import React from "react";

export const Mission = (props) => {
  
  return (
    <div className="">
      <div className="p-5" style={{ background: "rgb(231, 231, 231)" }}>
        <h5 className="" style={{ fontSize: "3rem", fontFamily: "serif" }}>
          Quienes Somos
        </h5>
        <p className="mt-3" style={{ fontFamily: "serif" }}>
          Vis id minim dicant sensibus. Pri aliquip conclusionemque ad, ad malis
          evertitur torquatos his. Has ei solum harum reprimique, id illum
          saperet tractatos his. Ei omnis soleat antiopam quo. Ad augue inani
          postulant mel, mel ea qualisque forensibus.Dicunt percipit deserunt ut
          usu. Aliquip delenit an eam, vocent vituperata vim ea. Ei mollis
          audire interpretaris cum, ei impedit fierent sea. Ius at homero noster
          prompta, ea sit dignissim vituperata efficiendi. Natum placerat ad
          mei.At cum soleat disputationi, quo veri admodum vituperata ad. Ea vix
          ceteros complectitur, vel cu nihil nullam. Nam placerat oporteat
          molestiae ei, an putant albucius qui. Oblique menandri ei his, mei te
          mazim oportere comprehensam. Cu nam labores lobortis definiebas, ei
          aliquyam salutatus persequeris quo, cum eu nemore fierent dissentiunt.
          Per vero dolor id, vide democritum scribentur eu vim, pri erroribus
          temporibus ex. Euismod molestie offendit has no. Quo te semper
          invidunt quaestio, per vituperatoribus sadipscing ei, partem aliquyam
          sensibus in cum.
        </p>
        <p>
          At cum soleat disputationi, quo veri admodum vituperata ad. Ea vix
          ceteros complectitur
        </p>
      </div>

      <div className="row no-gutters">
        <div className="col-6 d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center w-25 mx-auto">
            <p
              className=""
              style={{
                fontSize: "35px",
                fontFamily: "Calibri",
                color: "rgb(129, 129, 233)",
                fontWeight: "700",
                lineHeight: "1.1",
              }}
            >
              ¿ CUAL ES NUESTRA VISION ?{" "}
            </p>
          </div>
        </div>
        <div className="col-6">
          <img
            src="https://picsum.photos/id/55/700/400"
            className="w-100"
            alt=""
          />
        </div>
      </div>

      <div className="row no-gutters">
        <div className="col-6">
          <img
            src="https://picsum.photos/id/58/700/400"
            className="w-100"
            alt=""
          />
        </div>
        <div
          className="col-6 d-flex"
          style={{ background: "rgb(231, 231, 231)" }}
        >
          <div className="d-flex justify-content-center align-items-center mx-auto p-4">
            <p className="">
              Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu
              eum facilisis voluptatum, no eam albucius verterem. Sit congue
              platonem adolescens ut. Offendit reprimique et has, eu mei homero
              imperdiet.At quaeque adversarium ius, sed at integre persius
              verterem. Sit summo tibique at, eam et fugit complectitur, vis te
              natum vivendum mandamus. Iudico quodsi cum ad, dicit everti
              sensibus in sea, ea eius paulo deterruisset pri. Pro id aliquam
              hendrerit definitiones. Per et legimus delectus.it summo tibique
              at, eam et fugit complectitur, vis te natum vivendum mandamus.
              Iudico quodsi cum ad,
            </p>
          </div>
        </div>
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/id/48/700/300"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: "4rem", fontWeight: "700" }}>
                ¿Que Buscamos?
              </h5>
              <p style={{ fontSize: "2rem", fontWeight: "700" }}>
                LA FELCIDAD DE NUESTROS CLIENTES
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/18/700/300"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: "4rem", fontWeight: "700" }}>
                ¿ Que otorgamos ?{" "}
              </h5>
              <p style={{ fontSize: "2rem", fontWeight: "700" }}>
                Un servicio de Calidad.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/4/700/300"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: "4rem", fontWeight: "700" }}>
                ¿ Que prometemos ?
              </h5>
              <p style={{ fontSize: "2rem", fontWeight: "700" }}>
                Una celebracion como usted la merece.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Mission;
