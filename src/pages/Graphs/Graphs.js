import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { get } from "../../util/axios.service";
import axios from "axios";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const data3 = [
  ["Escuela - Ciudad", "Estudiantes"],
  ["VILLA DE LOS NIÑOS, ACATLÁN DE JUÁREZ", 1538],
  ["INSTITUTO DE CIENCIAS, ZAPOPAN", 1152],
  ["JUAN BAUTISTA IGUINIZ, TLAJOMULCO DE ZÚÑIGA", 1088],
  ["JUAN JOSE MARTINEZ, EL SALTO", 1078],
  ["JOSE ANGEL CONCHELLO DAVILA, EL SALTO", 1064],
];

const data4 = [
  ["Tipo de escuela", "Alumnos"],
  ["BÁSICA", 255213],
  ["ESPECIAL", 2136],
  ["INICIAL", 5312],
];

const xd = [
  ["Tipo de escuela", "Alumnos"],
  ["BÁSICA", "255213"],
  ["ESPECIAL", "2136"],
  ["INICIAL", "5312"],
];

const data5 = [
  ["Sector", "Número total"],
  ["PRIVADO", 3635],
  ["PUBLICO", 12266],
];

const options = {
  title: "My Daily Activities",
};

const Graphs = () => {
  const [escuelas_por_colonia, set_escuelas_por_colonia] = useState(null);
  const [nivel_escuelas, set_nivel_escuelas] = useState(null);
  const [negocios_por_colonia, set_negocios_por_colonia] = useState(null);
  const [escuelas_num_estudiantes, set_escuelas_num_estudiantes] = useState(null);
  const [porcentaje, set_porcentaje] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/nivel-escuelas").then((response) => {
      set_nivel_escuelas(response.data);
      console.log("datos:", response.data);
    });

    axios
      .get("http://localhost:5000/escuelas-por-colonia/")
      .then((response) => {
        set_escuelas_por_colonia(response.data);
        console.log("datos:", response.data);
      });
    axios
      .get("http://localhost:5000/negocios-por-colonia/")
      .then((response) => {
        set_negocios_por_colonia(response.data);
        console.log("datos:", response.data);
      });

    axios
      .get("http://localhost:5000/escuelas-num-estudiantes/")
      .then((response) => {
        set_escuelas_num_estudiantes(response.data);
        console.log("datos:", response.data);
      });
     
      axios
      .get("http://localhost:5000/porcentaje_publico_privadas/")
      .then((response) => {
        set_porcentaje(response.data);
        console.log("datos:", response.data);
      });

  }, []);

  return (
    <>
      <h1>Página con vistas</h1>
      <div className="graphs__graph-area">
        <Chart
          chartType="PieChart"
          data={escuelas_por_colonia ? escuelas_por_colonia : data3}
          options={{ title: "Escuelas por colonia" }}
          width={"50%"}
          height={"400px"}
        />
        <Chart
          chartType="PieChart"
          data={negocios_por_colonia}
          options={{ title: "Negocios por colonia" }}
          width={"50%"}
          height={"400px"}
        />
        <Chart
          chartType="PieChart"
          data={escuelas_num_estudiantes}
          options={{ title: "Escuelas con mayor número de estudiantes" }}
          width={"100%"}
          height={"400px"}
        />
        <Chart
          chartType="PieChart"
          data={nivel_escuelas}
          options={{
            title:
              "Numero de alumnos en las escuelas segun su nivel academico por ciudad",
          }}
          width={"50%"}
          height={"400px"}
        />
        <Chart
          chartType="PieChart"
          data={porcentaje}
          options={{
            title:
              "Porcentaje de escuelas de nivel publico contra nivel privado en el estado de jalisco",
          }}
          width={"50%"}
          height={"400px"}
        />
      </div>
    </>
  );
};

export default Graphs;
