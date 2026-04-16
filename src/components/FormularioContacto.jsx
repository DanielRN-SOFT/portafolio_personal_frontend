import FondoFormulario from "./FondoFormulario";
import RedesSociales from "./RedesSociales";

const FormularioContacto = () => {
  return (
    <div className="relative z-10 overflow-hidden py-12 sm:py-20 lg:py-20 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="mx-4 flex flex-wrap justify-center lg:justify-between">
          {/* { <!-- Contact Form --> */}
          <div className="order-2 w-full px-4 lg:order-1 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg p-4 shadow-xl sm:p-12 bg-gray-50  transition-colors duration-300">
              <form
                className="rounded-xl bg-gray-100 p-5 transition-colors duration-300"
                id="contactForm"
              >
                {/* <!-- Name --> */}
                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fas fa-user text-gray-500 dark:text-gray-400"></i>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300  bg-white  text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* <!-- Email --> */}
                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fas fa-envelope text-gray-500 dark:text-gray-400"></i>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Dirección de correo electronico"
                      className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 bg-white text-gray-900  placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* <!-- Message --> */}
                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <i className="fas fa-comment text-gray-500"></i>
                    </div>
                    <textarea
                      rows="6"
                      name="message"
                      placeholder="Mensaje"
                      className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 bg-white text-gray-900  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* <!-- Submit --> */}
                <div>
                  <button
                    type="submit"
                    className="w-full p-3 bg-primary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                  >
                    Enviar correo
                  </button>
                </div>
              </form>

              {/* <!-- Decorative elements --> */}
              <FondoFormulario />
            </div>
          </div>

          {/* { <!-- Contact Information --> */}
          <div className="order-1 w-full px-4 lg:order-2 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 px-5 pt-3 sm:max-w-142.5 lg:mb-0">
              <h2 className="text-gray-900 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                Contacta conmigo
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                If you have any question and feedback contact with us
              </p>
              <p className="mb-9 text-base leading-relaxed text-gray-600">
                We're here to help and answer any questions you might have. We
                look forward to hearing from you.
              </p>

              {/* { <!-- GitHub --> */}
              <RedesSociales
                titulo={"GitHub"}
                ClasesIcono={"fa-brands fa-square-github"}
                enlace={"https://github.com/DanielRN-SOFT"}
              />

              {/* WhatsApp */}
              <RedesSociales
                titulo={"WhatsApp"}
                enlace={"573215052083"}
                ClasesIcono={"fa-brands fa-whatsapp"}
                enlaceWhatsApp={true}
              />

              {/* { <!-- Correo electronico --> */}
              <RedesSociales
                titulo={"Correo electronico"}
                enlace={"daniel20ramirez06@gmail.com"}
                enlaceEmail={true}
                ClasesIcono={"fas fa-envelope"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioContacto;
