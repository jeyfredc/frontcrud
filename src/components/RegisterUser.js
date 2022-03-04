import React, { useState } from "react";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import { useDispatch, useSelector } from "react-redux";
import { EditUser } from "./EditUser.js";
import { registerUser } from "./actions/register.js";

const RegisterUser = () => {
  const dispatch = useDispatch();
  const { crudReducer } = useSelector((state) => state);
  const [register, setRegister] = useState({
    nombre: "",
    apellido: "",
    documento: "",
    tipo_documento: "",
    hobbie: "",
  });
  const handleInputChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(registerUser([register]));
  };

  return (
    <div className="wrapper fadeInDown">
      {crudReducer.showPage ? (
        <div id="formContent">
          <h2 className="active"> Crear usuarios</h2>

          <div className="fadeIn first">
            <PersonAddAltSharpIcon />
          </div>
          <input
            type="text"
            className="fadeIn third"
            onChange={handleInputChange}
            name="nombre"
            placeholder="Nombre"
          />
          <input
            type="text"
            className="fadeIn third"
            onChange={handleInputChange}
            name="apellido"
            placeholder="Apellido"
          />
          <input
            type="text"
            className="fadeIn third"
            onChange={handleInputChange}
            name="documento"
            placeholder="Numero Documento"
          />
          <input
            type="text"
            className="fadeIn third"
            onChange={handleInputChange}
            name="tipo_documento"
            placeholder="Tipo Documento"
          />
          <input
            type="text"
            className="fadeIn third"
            onChange={handleInputChange}
            name="hobbie"
            placeholder="Hobbie"
          />
          <input type="submit" value="Registrar" onClick={handleSubmit} />
        </div>
      ) : (
        <EditUser 
        
        handleInputChange= {handleInputChange}/>
      )}
    </div>
  );
};

export default RegisterUser;
