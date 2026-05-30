import { useState } from "react";

export function Reserva() {
  const [numPersonas, setNumPersonas] = useState(2);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const horas = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
  ];

  return (
    <main className="flex-1 bg-black flex flex-col justify-center">
      {/* Ajuste de padding adaptativo en toda la sección */}
      <section className="py-10 px-4 sm:px-8 md:px-16 min-h-[600px] flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Cabecera del título responsivo */}
          <div className="mb-8 md:mb-12 text-center sm:text-left">
            <div className="bg-red-600 rounded-[50px] inline-block px-8 sm:px-12 py-3 sm:py-4">
              <h1 className="font-['Bebas_Neue',sans-serif] text-[36px] sm:text-[48px] text-white leading-none whitespace-nowrap">
                RESERVA TU MESA
              </h1>
            </div>
          </div>

          {/* Caja principal del formulario */}
          <div className="bg-black border-3 border-white rounded-[24px] md:rounded-[30px] p-6 sm:p-10 md:p-12">
            <div className="space-y-8 md:space-y-10">
              {/* SECCIÓN: NÚMERO DE PERSONAS */}
              <div>
                <label className="font-['Anton',sans-serif] text-[24px] sm:text-[32px] text-white mb-4 block tracking-wide">
                  NÚMERO DE PERSONAS:
                </label>
                {/* Justificado al centro en móvil, a la izquierda en pantallas grandes */}
                <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <button
                      key={num}
                      onClick={() => setNumPersonas(num)}
                      className={`rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-2 transition-all ${
                        numPersonas === num
                          ? "bg-red-600 border-red-600 text-white"
                          : "bg-transparent border-white text-white hover:bg-[#FF9E42] hover:border-[#FF9E42]"
                      }`}
                    >
                      <span className="font-['Bebas_Neue',sans-serif] text-[24px] sm:text-[28px] leading-none">
                        {num}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* SECCIÓN: FECHA */}
              <div>
                <label className="font-['Anton',sans-serif] text-[24px] sm:text-[32px] text-white mb-4 block tracking-wide">
                  FECHA:
                </label>
                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  className="bg-black border-2 border-white rounded-[50px] px-6 sm:px-8 py-3 sm:py-4 text-white font-['Bebas_Neue',sans-serif] text-[20px] sm:text-[24px] w-full max-w-md hover:border-[#FF9E42] focus:border-[#FF9E42] focus:outline-none transition-colors"
                  style={{
                    colorScheme: "dark",
                  }}
                />
              </div>

              {/* SECCIÓN: HORA */}
              <div>
                <label className="font-['Anton',sans-serif] text-[24px] sm:text-[32px] text-white mb-4 block tracking-wide">
                  HORA:
                </label>
                {/* Modificación crucial: Grilla inteligente que añade columnas según el espacio */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {horas.map((h) => (
                    <button
                      key={h}
                      onClick={() => setHora(h)}
                      className={`rounded-full px-4 sm:px-6 py-2 sm:py-3 border-2 transition-all text-center ${
                        hora === h
                          ? "bg-red-600 border-red-600 text-white"
                          : "bg-transparent border-white text-white hover:bg-[#FF9E42] hover:border-[#FF9E42]"
                      }`}
                    >
                      <span className="font-['Bebas_Neue',sans-serif] text-[20px] sm:text-[24px] leading-none">
                        {h}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* SECCIÓN: BOTÓN CONFIRMAR */}
              <div className="pt-4 md:pt-6">
                <button
                  className={`text-white rounded-[50px] px-8 py-4 transition-colors w-full flex items-center justify-center ${
                    !fecha || !hora
                      ? "bg-neutral-800 border-2 border-neutral-700 text-neutral-500 cursor-not-allowed opacity-50"
                      : "bg-red-600 hover:bg-[#FF9E42] cursor-pointer"
                  }`}
                  disabled={!fecha || !hora}
                >
                  <span className="font-['Bebas_Neue',sans-serif] text-[28px] sm:text-[36px] leading-none tracking-wide">
                    CONFIRMAR RESERVA
                  </span>
                </button>

                {(!fecha || !hora) && (
                  <p className="font-sans font-medium text-[14px] sm:text-[16px] text-zinc-400 text-center mt-4 tracking-wide">
                    ⚠️ Selecciona una fecha y hora válidas para
                    poder continuar
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}