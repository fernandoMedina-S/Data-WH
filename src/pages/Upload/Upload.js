import React, { useEffect } from "react";
import isAdmin from "../../util/users";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDropzone } from "react-dropzone";

import Button from '@mui/material/Button';

const Upload = () => {
  const { logout, user } = useAuth();
  const admin = user ? isAdmin(user.uid) : null;
  const navigate = useNavigate();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  useEffect(() => {
    if (!admin) {
      navigate("/graphs");
    }
  }, []);

  return (
    <>
      <h1>Subir archivos</h1>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Subir archivos</p>
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </section>

      <Button variant="contained" href="#contained-buttons">
        Enviar
      </Button>

    </>
  );
};

export default Upload;
