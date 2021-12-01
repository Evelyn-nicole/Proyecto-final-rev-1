import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer
      className="page-footer font-small teal pt-4 mt-5 text-white">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-3 mt-md-0 mt-3">
            <h5 className="text-uppercase font-weight-bold">Footer text 1</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              sapiente sint, nulla, nihil repudiandae commodi voluptatibus
              corrupti animi sequi aliquid magnam debitis, maxime quam
              recusandae harum esse fugiat. Itaque, culpa?
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase font-weight-bold">Footer text 2</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.Optio
              deserunt fuga perferendis modi earum commodi aperiam temporibus
              quod nulla nesciunt aliquid debitis ullam omnis quos ipsam,
              aspernatur id excepturi hic.
            </p>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase font-weight-bold">Siguenos en RRSS </h5>
            <p>
              IG @yourevent_pr
            </p>
            <p>
              Facebook your event pr
            </p>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase font-weight-bold">Contactanos</h5>
            <p className="mt-4">
              Correo: youreventpr@gmail.com
            </p>
            <p>
              Telefono: +562 22749865
            </p>
            <p>
              Whatsapp: +569 58731937
            </p>
            <p>
              Oficina Central: Av. Las Condes #1775. of 505.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        ©2021 Copyright:
        <Link to="/"> youreventpr.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
