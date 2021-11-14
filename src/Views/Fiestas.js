import react from "react";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Fiestas = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className ="container-fluid">
            <ul className="nav nav-pills mb-3 d-flex justify-content-center mt-4"  id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#Fiestaelec" role="tab" aria-controls="pills-home" aria-selected="true">Fiesta electronica</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#Fiestazomb" role="tab" aria-controls="pills-profile" aria-selected="false">Fiesta Zombie</a>
                </li>
            </ul>
            
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="Fiestaelec" role="tabpanel" aria-labelledby="pills-home-tab">
                    <h2 className ="d-flex justify-content-center mb-3">Fiesta Electronica</h2>
                    <div className ="row">
                            <div className ="col-3">
                              </div>
                            
                            <div className ="col-6">
                                <div >
                                    <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner" style={{height: "30rem"}}>
                                            <div className="carousel-item active">
                                                <img src="https://picsum.photos/id/21/200/300"  className="d-block w-100 heightcarrousel" alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://picsum.photos/id/22/200/300"  className="d-block w-100 heightcarrousel" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://picsum.photos/id/23/200/300" className="d-block w-100 heightcarrousel" alt="..."/>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <br />
                                    <div>
                                        <p>Valores:</p>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="" id="firstvalue" name ="Radios"/>
                                            <label class="form-check-label" for="firstvalue">
                                                20 a 40 Personas  ----{">"} $0000
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="" id="flexCheckIndeterminate" name ="Radios"/>
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                                50 a 60 Personas  ----{">"} $0000
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="" id="flexCheckIndeterminate" name ="Radios"/>
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                                60 a 80 Personas  ----{">"} $0000
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="" id="flexCheckIndeterminate" name ="Radios"/>
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                                Mas de 100 personas ----{">"} $0000
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className ="col-3 d-flex flex-column align-items-center">
                                <h5>Incluye </h5>
                                <div className = "d-flex flex-column">
                                <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Tematica Completa
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Centro de Eventos(Ubicacion en Google Maps)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Minuto Personalizado
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                        Parking privado y servicio de guardacoches.
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                        Dj. Música a elección.
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                        Video Película del Evento.
                                        </label>
                                    </div>
                            </div>
                        </div>    
                    </div>

                    <div className ="d-flex justify-content-center flex-column align-items-center mt-5">
                        <h2>Preguntas Frecuentes</h2>
                        <button type="button" className="btn btn-primary w-25 mt-3" data-toggle="modal" data-target="#Primerapregunta">
                        Primera Pregunta
                        </button>
                        <div className="modal fade" id="Primerapregunta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Respuesta</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                                <div className="modal-body">
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                        <button type="button" className="btn btn-primary w-25 mt-3" data-toggle="modal" data-target="#segundapregunta">
                        Segunda Pregunta
                        </button>
                        <div className="modal fade" id="segundapregunta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Respuesta</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    
                        <button type="button" className="btn btn-primary w-25 mt-3" data-toggle="modal" data-target="#tercerapregunta">
                        Tercera Pregunta
                        </button>
                        <div className="modal fade" id="tercerapregunta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Respuesta</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                            </div>
                            <div className="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>     
                </div>

                <div className="tab-pane fade show active" id="Fiestazomb" role="tabpanel" aria-labelledby="pills-home-tab">
                    <h2 className ="d-flex justify-content-center mb-3">Fiesta Zombie</h2>
                    <div className ="row">
                            <div className ="col-3">
                                <div className="card" style={{width: "18rem"}}>
                                    <img src="https://picsum.photos/id/190/200/300"  className="card-img-top" alt="..."  style={{height: "15rem"}} />
                                    <div className="card-body">
                                        <p className="card-text">Numero: </p>
                                        <p className="card-text">Contacto</p>
                                        <p className="card-text">Direccion</p>
                                        <p className="card-text">Favoritos</p>
                                        <p className="card-text">Ayuda en Linea</p>
                                        <a href="a" className="btn btn-primary">Cerrar Sesion</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className ="col-6">
                                <div >
                                    <div id="carouselControlsZ" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner" style={{height: "30rem"}}>
                                            <div className="carousel-item active">
                                                <img src="https://picsum.photos/id/51/200/300"  className="d-block w-100 heightcarrousel" alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://picsum.photos/id/53/200/300"  className="d-block w-100 heightcarrousel" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://picsum.photos/id/54/200/300" className="d-block w-100 heightcarrousel" alt="..."/>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselControlsZ" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselControlsZ" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <br />
                                    <div>
                                        <p>Valores:</p>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="" id="firstvalue" name ="Radios"/>
                                            <label class="form-check-label" for="firstvalue">
                                                20 a 40 Personas  ----{">"} $0000
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="" id="flexCheckIndeterminate" name ="Radios"/>
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                                50 a 60 Personas  ----{">"} $0000
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="" id="flexCheckIndeterminate" name ="Radios"/>
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                                60 a 80 Personas  ----{">"} $0000
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="" id="flexCheckIndeterminate" name ="Radios"/>
                                            <label class="form-check-label" for="flexCheckIndeterminate">
                                                Mas de 100 personas ----{">"} $0000
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className ="col-3 d-flex flex-column align-items-center">
                                <h5>Incluye </h5>
                                <div className = "d-flex flex-column">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Tematica Completa
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Centro de Eventos(Ubicacion en Google Maps)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Minuto Personalizado
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                        Parking privado y servicio de guardacoches.
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                        Dj. Música a elección.
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                        Video Película del Evento.
                                        </label>
                                    </div>
                            </div>
                        </div>    
                    </div>

                    <div className ="d-flex justify-content-center flex-column align-items-center mt-5">
                        <h2>Preguntas Frecuentes</h2>
                        <button type="button" className="btn btn-primary w-25 mt-3" data-toggle="modal" data-target="#PrimerapreguntaZ">
                        Primera Pregunta
                        </button>
                        <div className="modal fade" id="PrimerapreguntaZ" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Respuesta</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                                <div className="modal-body">
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                        <button type="button" className="btn btn-primary w-25 mt-3" data-toggle="modal" data-target="#segundapreguntaZ">
                        Segunda Pregunta
                        </button>
                        <div className="modal fade" id="segundapreguntaZ" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Respuesta</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    
                        <button type="button" className="btn btn-primary w-25 mt-3" data-toggle="modal" data-target="#tercerapreguntaZ">
                        Tercera Pregunta
                        </button>
                        <div className="modal fade" id="tercerapreguntaZ" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Respuesta</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                            </div>
                            <div className="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>     
                </div>
            </div>    
            <div className='Container'>
            <h1 className='text-center'>React Calendar with Range</h1>
            <div className='calendar-container'>
                <Calendar
                    onChange={setDate}
                    value={date}
                    selectRange={true}
                />
            </div>
            {date.length > 0 ? (
                <p className='text-center'>
                    <span className='bold'>Start:</span>{' '}
                    {date[0].toDateString()}
                    &nbsp;|&nbsp;
                    <span className='bold'>End:</span> {date[1].toDateString()}
                </p>
            ) : (
                <p className='text-center'>
                    <span className='bold'>Default selected date:</span>{' '}
                    {date.toDateString()}
                </p>
            )}
        </div>  
        </div>  
        
    )
}



export default Fiestas