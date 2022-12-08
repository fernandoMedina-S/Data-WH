import React, { useEffect, useState } from "react";
import isAdmin from "../../util/users";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDropzone } from "react-dropzone";
import { TextField } from "@mui/material";
import axios from "axios";

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Button from "@mui/material/Button";

const Upload = () => {
  const { logout, user } = useAuth();
  const admin = user ? isAdmin(user.uid) : null;
  const navigate = useNavigate();
  const [consulta, set_consulta] = useState("");
  const [cargando, set_cargando] = useState(false);
  const [modal_open, set_modal_open] = useState(false);
  const [respuesta, set_respuesta] = useState(null);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  useEffect(() => {
    if (!admin) {
      navigate("/graphs");
    }
  }, []);

  const subir_consulta = () => {
    set_cargando(true);
    set_modal_open(true);
    console.log(consulta.target.value)
    axios.get("http://localhost:5000/nueva_consulta/", {params: {consulta: consulta.target.value}}).then((response)=>{
      console.log(response);
      set_respuesta(response.data)
      set_cargando(false);
    })
  }

  const abrir_modal = () => {
    set_modal_open(true);
  }

  const cerrar_modal = () => {
    set_modal_open(false);
  }

  return (
    <>
      <h1>Consulta manual</h1>

      <div className="upload__text">
        <TextField label="Consulta" variant="standard" onChange={(valor)=>set_consulta(valor)}/>
        <Button variant="contained" onClick={subir_consulta} >
          Enviar
        </Button>
      </div>

      <Modal
        isOpen={modal_open}
        onRequestClose={cerrar_modal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Consulta</h1>
        {cargando ? <h1>Cargando...</h1> : <p>{respuesta}</p>}

      </Modal>

    </>
  );
};

export default Upload;
