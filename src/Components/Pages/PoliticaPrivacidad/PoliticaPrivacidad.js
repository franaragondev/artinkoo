import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import swal from 'sweetalert';
import HeaderPages from '../../Header/HeaderPages'
import Footer from '../../Footer/Footer'
import GoToTop from '../../GoToTop/GoToTop'
//Componente que renderizará la página de Politica de privacidad
const PoliticaPrivacidad = (props) => {

    return (
        <div className='legales'>
            <HeaderPages />
            <GoToTop />
            <h2 className='tituloLegales'>POLÍTICA DE PRIVACIDAD</h2>
            <div className='paginasFooter'>
                <img className='imagenLegales' alt='quienes_somos' src='../images/pexels-pixabay-16442.jpg'></img>
            </div>
            <div className='parrafo_paginas_legales'>
                <div class="col-lg-8 ml-auto mr-auto">
                    <h3>Datos del responsable del fichero</h3>
                    <div class="text-justify">
                        <ul class="circle-list">
                            <li class="list-item"><b>Identidad:</b> artinkoo S.L. - CIF: B87186177</li>
                            <li class="list-item"><b>Dirección/C. P:</b> Pº de la Castellana, 95, 15 28046 Madrid</li>
                            <li class="list-item"><b>Teléfono​:</b> 91 489 64 19</li>
                            <li class="list-item"><b>Email: </b>lopd@atico34.com</li>
                        </ul>
                    </div>
                    <h3>Finalidades del tratamiento</h3>
                    <div class="text-justify">
                        <p>Le informamos que los datos que nos facilite por cualquier medio (página web, correo electrónico, formularios en papel, y/o cualquier otro documento) serán incorporados un fichero titularidad de artinkoo.</p>
                        <p>artinkoo tratará la información que nos proporcionan las personas interesadas con las siguientes finalidades:</p>
                        <ul class="circle-list">
                            <li class="list-item"><b>Gestionar cualquier tipo de solicitud, sugerencia o petición</b> sobre nuestros servicios profesionales que nos formulen las personas interesadas.</li>
                            <li class="list-item"><b>Comunicaciones comerciales​:</b> Tratamiento de sus datos con la finalidad de informarle sobre actividades, artículos de interés e información general sobre nuestros servicios vía correo electrónico.</li>
                            <li class="list-item"><b>Gestionar datos aportados por los candidatos a un puesto de trabajo a través el Currículum Vitae (CV):</b> o en el formulario facilitado en la sección “Trabaja con nosotros”, con la finalidad de proceso de selección y reclutamiento. Usted autoriza expresamente a artinkoo para que proceda al tratamiento de sus datos para la finalidad indicada. artinkoo tratará sus datos e información aportada para los procesos de selección con la más estricta confidencialidad, adoptando para ello las medidas técnicas y organizativas necesarias para evitar la pérdida, mal uso, alteración y/o acceso no autorizado. Conservación de los datos: Asimismo le informamos que artinkoo podrá conservar su Currículum Vitae por el plazo máximo de un año, concluido dicho plazo de procederá automáticamente a su destrucción, en cumplimiento del principio de calidad del dato.</li>
                            <li class="list-item"><b>Remisión de comunicaciones promocionales vía electrónica y de newsletters</b>: Tratamiento de sus datos con la finalidad de informarle sobre nuestros servicios, ofertas, promociones y artículos o contenido (newsletter, e-book), que puedan resultar de su interés, vía electrónica (e-mail, SMS, Whatsapp) y/o telefónica.</li>
                        </ul>
                        <p>Las personas interesadas podrán darse de baja de estas comunicaciones en la siguiente dirección de correo electrónico: lopd@atico34.com.</p>
                    </div>
                    <h3>Legitimación</h3>
                    <div class="text-justify">
                        <p>La base legal para el tratamiento de los datos es el consentimiento de las personas interesadas para la tramitación y gestión de cualquier solicitud de información o consulta sobre nuestros servicios profesionales, así como para el envío de comunicaciones comerciales llevadas a cabo por artinkoo.</p>
                    </div>
                    <h3>¿Cómo obtenemos sus datos?</h3>
                    <div class="text-justify">
                        <p>artinkoo obtiene sus datos por las siguientes fuentes:</p>
                        <ol>
                            <li>La información que Usted nos facilita cuando contrata y mantiene productos y/o servicios con nosotros, tanto de forma directa como indirecta.</li>
                            <li>Fuentes de información externas, como diarios y boletines oficiales, registros públicos, resoluciones de las Administraciones Públicas, guías telefónicas, listas de personas pertenecientes a colegios profesionales, listas oficiales para la prevención del fraude, redes sociales e Internet, así como terceras empresas a las que Ud. haya prestado su consentimiento para la cesión de sus datos a entidades de crédito, financieras y de seguros.</li>
                        </ol>
                        <p>En particular, los datos que trataremos incluyen las siguientes categorías: datos de carácter identificativo, datos referentes a sus características personales y circunstancias sociales, datos académicos y profesionales, información comercial.</p>
                    </div>
                    <h3>¿Durante cuánto tiempo conservaremos sus datos?</h3>
                    <div class="text-justify">
                        <p>Trataremos sus datos personales mientras sean necesarios para la finalidad para la cual fueron recabados. Si cancela todos los contratos, usted podrá:</p>
                        <ol>
                            <li>Mantener el consentimiento para desarrollar acciones comerciales: trataremos sus datos para las acciones comerciales que haya consentido. Consideraremos que ha elegido esta opción si no revoca el consentimiento expresamente.</li>
                            <li>Revocar el consentimiento para desarrollar acciones comerciales: cancelaremos sus datos mediante el bloqueo de los mismos.</li>
                        </ol>
                        <p>Con este bloqueo, artinkoo no tendrá acceso a sus datos y solo los tratará para su puesta a disposición a las Administraciones Públicas competentes, Jueces y Tribunales o el Ministerio Fiscal, para la atención de las posibles responsabilidades relacionadas con el tratamiento de los datos, en particular para el ejercicio y defensa de reclamaciones ante la Agencia Española de Protección de Datos. Conservaremos sus datos bloqueados durante los plazos previstos en las disposiciones aplicables o, en su caso, en las relaciones contractuales mantenidas con artinkoo, procediendo a la supresión física de sus datos una vez transcurridos dichos plazos.</p>
                    </div>
                    <h3>Destinatarios</h3>
                    <div class="text-justify">
                        <p>No se ceden datos de carácter personal a terceros, salvo disposición legal. Tampoco se realizan transferencias internacionales datos a terceros países.</p>
                        <p>Como encargados de tratamiento, tenemos contratados a los siguientes proveedores de servicios, habiéndose comprometido al cumplimiento de las disposiciones normativas, de aplicación en materia de protección de datos, en el momento de su contratación: </p>
                        <p>artinkoo sigue unos criterios estrictos de selección de proveedores de servicios con el fin de dar cumplimiento a sus obligaciones en materia de protección de datos y se compromete a suscribir con ellos el correspondiente contrato de tratamiento de datos mediante el que les impondrá, entre otras, las siguientes obligaciones: aplicar medidas técnicas y organizativas apropiadas; tratar los datos personales para las finalidades pactadas y atendiendo únicamente a las instrucciones documentadas de artinkoo; y suprimir o devolver los datos a artinkoo una vez finalice la prestación de los servicios.</p>
                        <h3>Procedencia</h3>
                        <div class="text-justify">
                            <p>Los datos de carácter personal se obtienen directamente de las personas interesadas y de nuestros colaboradores. Las categorías de datos de carácter personal que nos proporciona nuestros colaboradores son las siguientes: </p>
                            <ul class="circle-list">
                                <li class="list-item">Datos de identificación.</li>
                                <li class="list-item">Direcciones postales o electrónicas.</li>
                                <li class="list-item">Datos bancarios.</li>
                            </ul>
                            <p>No se tratan datos especialmente protegidos.</p>
                        </div>
                        <h3>Derechos</h3>
                        <div class="text-justify">
                            <p><b>Derecho de Acceso, Rectificación y Supresión:</b> Las personas interesadas tienen derecho a obtener confirmación sobre si en artinkoo estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a si acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</p>
                            <p><b>Derecho a la Limitación y Oposición:</b> En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones. En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. artinkoo dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones. Dichos derechos podrán ser ejercitados a través de cualquier medio de comunicación frente a artinkoo en la dirección arriba indicada, adjuntando fotocopia de DNI del titular de los datos o en el e-mail ​lopd@atico34.com</p>
                        </div>
                        <h3>Actualizaciones y modificaciones</h3>
                        <div class="text-justify">
                            <p>artinkoo se reserva el derecho de modificar y/o actualizar la información sobre protección de datos cuando sea necesario para el correcto cumplimiento del Reglamento de Protección de Datos. Si se produjera alguna modificación, el nuevo texto será publicado en esta página, donde podrá tener acceso a la política actual. En cada caso, la relación con los usuarios se regirá por las normas previstas en el momento preciso en que se accede al web.</p>
                        </div>
                        <h3>Canal de comunicación y soporte</h3>
                        <div class="text-justify">
                            <p>Las personas interesadas podrán comunicar cualquier duda sobre el tratamiento de sus datos de carácter personal o interpretación de nuestra política en la siguiente dirección: ​lopd@atico34.com.</p>
                        </div>
                        <h3>Responsabilidad y Obligaciones del prestador</h3>
                        <h5>Responsabilidades con respecto a los contenidos</h5>
                        <div class="text-justify">
                            <p>El contenido de este sitio web es de carácter general, así como tiene una finalidad y efectos exclusivamente informativos de nuestros servicios y de nuestra actividad empresarial.</p>
                            <p>artinkoo se exime de cualquier responsabilidad respecto a cualquier decisión adoptada por el usuario del sitio web como consecuencia de la información contenida en ella, en especial respecto a las características técnicas de los cables.</p>
                            <p>artinkoo rechaza la responsabilidad sobre cualquier información no elaborada por artinkoo o no publicada de forma autorizada por ella bajo su nombre, al igual que la responsabilidad que se derive de la mala utilización de los contenidos, así como se reserva el derecho a actualizarlos, a eliminarlos, limitarlos o impedir el acceso a ellos, de manera temporal o definitiva.</p>
                        </div>
                        <h5>Responsabilidad respecto a los enlaces a otras páginas webs (links)</h5>
                        <div class="text-justify">
                            <p>Los enlaces introducidos en www.atico34.com son de carácter meramente informativo y, por tanto, artinkoo no controla ni verifica ninguna información, contenido, productos o servicios facilitados a través de estos sitios web. En consecuencia, artinkoo declina cualquier tipo de responsabilidad por cualquier aspecto, en especial el contenido, relativo a esa página.</p>
                        </div>
                        <h5>Responsabilidad en el supuesto en que esta página sea el destino del enlace introducido en otra página</h5>
                        <div class="text-justify">
                            <p>Por lo que se refiere a los enlaces establecidos por otras páginas a este sitio, así como si cualquier usuario, entidad o página web deseara establecer algún tipo de enlace con destino al sitio web de artinkoo deberá atenerse a las siguientes estipulaciones:</p>
                            <p>Deberá solicitar autorización previamente a la realización del enlace y deberá constar de forma expresa su otorgamiento. Sólo se podrá dirigir a la página de inicio.</p>
                            <p>El enlace debe ser absoluto y completo, es decir, debe llevar al usuario a la propia dirección de artinkoo debe abarcar completamente toda la extensión de la pantalla de la página inicial. En ningún caso, salvo autorización expresa y por escrito de artinkoo, la página que realice el enlace podrá reproducir de cualquier manera el sitio web de artinkoo, incluirlo como parte de su web o dentro de uno de sus frames o crear un browser sobre cualquiera de las páginas del web.</p>
                            <p>No se dará ningún tipo de indicación errónea o incorrecta acerca de la página de artinkoo.</p>
                            <p>Si quisiera hacer constar algún signo distintivo de artinkoo como marcas, logos, denominación deberá contar con la autorización por escrito.</p>
                            <p>El Titular de la página que ofrece el enlace deberá actuar de buena fe y no pretenderá afectar negativamente a la reputación o buen nombre de artinkoo.</p>
                            <p>Se prohíbe, salvo autorización expresa de artinkoo, dar de alta los elementos de texto de la marca o del logo, el nombre de dominio o la denominación social de artinkoo como palabra clave (metatags o metanames) para la búsqueda de sitios webs realizada a través de buscadores.</p>
                            <p>artinkoo no asume ningún tipo de responsabilidad por cualquier aspecto relativo a la página web que ofrece el enlace. El establecimiento del enlace no implica la existencia de algún tipo de relación, colaboración o dependencia de artinkoo con el titular de esa página web.</p>
                        </div>
                        <h5>Responsabilidad aspectos técnicos</h5>
                        <div class="text-justify">
                            <p>artinkoo no garantiza la continuidad del funcionamiento del sitio web al igual que el mismo se encuentre en todo momento operativo y disponible.</p>
                            <p>artinkoo no se hace responsable de los daños y perjuicios directos o indirectos, incluidos daños a sistemas informáticos e introducción de virus existentes en la red, derivados de la navegación por Internet necesaria para el uso de este sitio web.</p>
                        </div>
                        <h3>Obligación de los usuarios</h3>
                        <div class="text-justify">
                            <p>El usuario responderá de los daños y perjuicios que artinkoo pueda sufrir como consecuencia del incumplimiento de cualquiera de las obligaciones determinadas en esta nota legal.</p>
                            <p>Respecto a la navegación, el usuario se compromete a observar diligente y fielmente las recomendaciones que en su momento establezca artinkoo relativa al uso del sitio. A estos efectos artinkoo se dirigirá a los usuarios mediante cualquier medio de comunicación a través del sitio web.</p>
                        </div>
                        <h3>Duración y Modificación</h3>
                        <div class="text-justify">
                            <p>artinkoo tendrá derecho a modificar los términos y condiciones aquí estipuladas de forma unilateral, total o parcialmente. Cualquier cambio aparecerá en la misma forma en que se encuentran en esta nota legal.</p>
                            <p>La vigencia temporal de esta nota legal coincide, por lo tanto, con el tiempo de su exposición, hasta el momento en que sean modificadas de forma total o parcial por artinkoo.</p>
                            <p>artinkoo podrá dar por terminadas, suspender o interrumpir unilateralmente, la operatividad de este sitio web, sin posibilidad de solicitar indemnización alguna por parte del usuario. Tras dicha extinción, el usuario deberá destruir cualquier información sobre la sociedad artinkoo que posea en cualquier formato y que haya obtenido a través del sitio o a través de las comunicaciones realizadas de forma individual al usuario por la misma.</p>
                        </div>
                        <h3>Legislación y Jurisdicción</h3>
                        <div class="text-justify">
                            <p>Estas condiciones de uso se rigen por la legislación española.</p>
                            <p>Los usuarios y la empresa artinkoo someten todas las interpretaciones o conflictos que pudieran surgir derivados de esta nota legal a los Juzgados y Tribunales de Madrid.</p>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default PoliticaPrivacidad
