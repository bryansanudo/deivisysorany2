import React from "react";

const ContactForm = () => {
  return (
    <div className="p-4 text-left  mx-auto">
      <form action="https://getform.io/f/b9b0b425-a00e-410e-8505-5569e8413ed6" method="POST">
        <div className="grid lg:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col col-span-2 ">
            <label className="capitalize text-sm py-2 font-semibold">Nombre Completo</label>
            <input
              type="text"
              name="Nombre"
              className="border-2 text-gray-900 rounded-lg p-2 flex shadow-md shadow-thPrimary focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 ">
            <label className="capitalize text-sm py-2 font-semibold">
              Celular
            </label>
            <input
              type="text"
              name="Celular"
              className="border-2 text-gray-900 rounded-lg p-2 flex shadow-md shadow-thPrimary focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 ">
            <label className="capitalize text-sm py-2 font-semibold">Ciudad de Residencia</label>
            <input
              type="text"
              name="Ciudad"
              className="border-2 text-gray-900 rounded-lg p-2 flex shadow-md shadow-thPrimary focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 ">
            <label className="capitalize text-sm py-2 font-semibold">EPS</label>
            <input
              type="text"
              name="EPS"
              className="border-2 text-gray-900 rounded-lg p-2 flex shadow-md shadow-thPrimary focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 ">
            <label className="capitalize text-sm py-2 font-semibold">Alergias Alimentarias</label>
            <input
              type="text"
              name="Alergias"
              className="border-2 text-gray-900 rounded-lg p-2 flex focus:outline-none shadow-md shadow-thPrimary"
            />
          </div>
         
        </div>
        <div className="flex items-center justify-center hover:scale-105 duration-200 ">
          <button className=" rounded-lg shadow-xl shadow-thPrimary p-4 mt-5 w-40 text-black font-semibold">
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
