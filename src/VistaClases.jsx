import React from "react";

export default function VistaClases() {
  const dias = ["L", "M", "X", "J", "V"];
  const clases = [
    {
      dia: "L",
      hora_inicio: "17:00",
      nombre: "INICIACION",
      tipo_grupo: "A",
      cantidad: "8",
    },
    {
      dia: "L",
      hora_inicio: "18:00",
      nombre: "INTERMEDIOS",
      tipo_grupo: "A",
      cantidad: "8",
    },
    {
      dia: "L",
      hora_inicio: "19:30",
      nombre: "AVANZADOS",
      tipo_grupo: "A",
      cantidad: "8",
    },
    {
      dia: "X",
      hora_inicio: "17:00",
      nombre: "INICIACION",
      tipo_grupo: "A",
      cantidad: "8",
    },
    {
      dia: "X",
      hora_inicio: "18:00",
      nombre: "INTERMEDIOS",
      tipo_grupo: "A",
      cantidad: "8",
    },
    {
      dia: "X",
      hora_inicio: "19:30",
      nombre: "AVANZADOS",
      tipo_grupo: "A",
      cantidad: "8",
    },

    {
      dia: "M",
      hora_inicio: "14:00",
      nombre: "RECREATIVO",
      tipo_grupo: "A",
      cantidad: "8",
    },
    {
      dia: "J",
      hora_inicio: "14:00",
      nombre: "RECREATIVO",
      tipo_grupo: "A",
      cantidad: "8",
    },

    {
      dia: "L",
      hora_inicio: "09:00",
      nombre: "PRIMER SAQUE",
      tipo_grupo: "M",
      cantidad: "7",
    },
    {
      dia: "V",
      hora_inicio: "09:00",
      nombre: "PRIMER SAQUE",
      tipo_grupo: "M",
      cantidad: "7",
    },

    {
      dia: "M",
      hora_inicio: "09:00",
      nombre: "PRIMER SAQUE",
      tipo_grupo: "M",
      cantidad: "7",
    },
    {
      dia: "M",
      hora_inicio: "15:00",
      nombre: "ESCUELITA",
      tipo_grupo: "M",
      cantidad: "7",
    },
    {
      dia: "V",
      hora_inicio: "18:00",
      nombre: "ESCUELITA",
      tipo_grupo: "M",
      cantidad: "8",
    },
    {
      dia: "X",
      hora_inicio: "15:00",
      nombre: "PERSONAL X4",
      tipo_grupo: "D",
      cantidad: "84",
    },
    {
      dia: "X",
      hora_inicio: "16:00",
      nombre: "PERSONAL X2",
      tipo_grupo: "A",
      cantidad: "2",
    },
  ];

  clases.sort((a, b) => {
    if (a.dia < b.dia) return -1;
    if (a.dia > b.dia) return 1;
    if (a.hora_inicio < b.hora_inicio) return -1;
    if (a.hora_inicio > b.hora_inicio) return 1;
    return 0;
  });

  function devTipoGrupo(tipo) {
    switch (tipo) {
      case "A":
        return "Adultos";
      case "M":
        return "Menores";
      case "D":
        return "Damas";
      case "C":
        return "Competicion";
      default:
        return "";
    }
  }

  function devTipoGrupoColor(tipo) {
    switch (tipo) {
      case "A":
        return "bg-blue-300";
      case "M":
        return "bg-green-300";
      case "D":
        return "bg-pink-200";
      case "C":
        return "bg-red-200";
      default:
        return "";
    }
  }
  return (
    <div className="p-4">
      <table className="w-full table-fixed border-collapse border border-gray-300 text-center text-sm">
        <thead>
          <tr className="bg-gray-100">
            {dias.map((dia) => (
              <th key={dia} className="w-1/5 border border-gray-300 px-4 py-2">
                {dia}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {dias.map((dia) => (
              <td
                key={dia}
                className="w-1/5 border border-gray-300 px-4 py-2 align-top"
              >
                {clases
                  .filter((clase) => clase.dia === dia)
                  .map((clase, index) => (
                    <div
                      key={index}
                      className={`mb-2 p-2 rounded-2xl ${devTipoGrupoColor(clase.tipo_grupo)}`}
                    >
                      {clase.hora_inicio} <br></br> {clase.nombre} <br></br> (
                      {devTipoGrupo(clase.tipo_grupo)})<br></br> [
                      {clase.cantidad}]
                    </div>
                  ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
