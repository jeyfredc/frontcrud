import ReactTooltip from "react-tooltip";
import EditIcon from "@mui/icons-material/Edit";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, editUser, deleteUser } from "./actions/register.js";
import { useEffect, useState } from "react";
import { types } from "./reducers/types/types.js";

export const EditUser = () => {
  const { crudReducer } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const [copyUser, setCopyUser] = useState([]);
  const [edit, setEdit] = useState({});

  useEffect(() => {
    if (!crudReducer.showPage) {
      dispatch(getUsers());
    }
  }, [crudReducer.showPage, dispatch]);

  useEffect(() => {
    if (crudReducer.usersList) {
      setUser(crudReducer.usersList.usuarios);
      setCopyUser(crudReducer.usersList.usuarios);
    }
  }, [crudReducer.usersList]);

  useEffect(() => {
    if (Object.keys(edit).length !== 0) {
      let newArray = [];
      user.map((x, i) => {
        newArray.push({
          ...x,
          nombre: edit["nombre" + i],
          apellidos: edit["apellidos" + i],
          tipo_documento: edit["tipo_documento" + i],
          hobbie: edit["hobbie" + i],
        });
      });
      setUser(newArray);
    }
  }, [edit]);

  const showInput = (index) => {
    const nombre = document.getElementById(`nombre${index}`);
    const apellidos = document.getElementById(`apellidos${index}`);
    const tipo_documento = document.getElementById(`tipo_documento${index}`);
    const documento = document.getElementById(`documento${index}`);
    const hobbie = document.getElementById(`hobbie${index}`);
    const inputNombre = document.getElementById(`inputNombre${index}`);
    const inputApellidos = document.getElementById(`inputApellidos${index}`);
    const inputTipo_documento = document.getElementById(
      `inputTipo_documento${index}`
    );
    const inputDocumento = document.getElementById(`inputDocumento${index}`);
    const inputHobbie = document.getElementById(`inputHobbie${index}`);
    if (index >= 0) {
      nombre.hidden = true;
      apellidos.hidden = true;
      tipo_documento.hidden = true;
      documento.hidden = true;
      hobbie.hidden = true;
      inputNombre.hidden = false;
      inputApellidos.hidden = false;
      inputTipo_documento.hidden = false;
      inputDocumento.hidden = false;
      inputHobbie.hidden = false;
    }
  };

  const handleInputEdit = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (index) => {
    const userData = {
      nombre:
        user[index].nombre === undefined
          ? copyUser[index].nombre
          : user[index].nombre,
      apellidos:
        user[index].apellidos === undefined
          ? copyUser[index].apellidos
          : user[index].apellidos,
      tipo_documento:
        user[index].tipo_documento === undefined
          ? copyUser[index].tipo_documento
          : user[index].tipo_documento,
      hobbie:
        user[index].hobbie === undefined
          ? copyUser[index].hobbie
          : user[index].hobbie,
    };
    console.log(userData);
    dispatch(editUser([userData], user[index].documento));

    const nombre = document.getElementById(`nombre${index}`);
    const apellidos = document.getElementById(`apellidos${index}`);
    const tipo_documento = document.getElementById(`tipo_documento${index}`);
    const documento = document.getElementById(`documento${index}`);
    const hobbie = document.getElementById(`hobbie${index}`);
    const inputNombre = document.getElementById(`inputNombre${index}`);
    const inputApellidos = document.getElementById(`inputApellidos${index}`);
    const inputTipo_documento = document.getElementById(
      `inputTipo_documento${index}`
    );
    const inputDocumento = document.getElementById(`inputDocumento${index}`);
    const inputHobbie = document.getElementById(`inputHobbie${index}`);
    if (index >= 0) {
      nombre.hidden = false;
      apellidos.hidden = false;
      tipo_documento.hidden = false;
      documento.hidden = false;
      hobbie.hidden = false;
      inputNombre.hidden = true;
      inputApellidos.hidden = true;
      inputTipo_documento.hidden = true;
      inputDocumento.hidden = true;
      inputHobbie.hidden = true;
    }
    setEdit({});
  };

  const handleDelete = (index) => {
    dispatch(deleteUser(user[index].documento));
    setUser(
      user.filter((documento) => documento.documento !== user[index].documento)
    );
  };

  const handleReturn = (index) => {
      dispatch({
        type: types.show,
        payload: true,
      });
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContentTwo">
        <h2 className="active" style={{ maxWidth: "64%" }}>
          Listar usuarios
        </h2>
        <div>
          <button
            id={`back`}
            data-tip
            type="button"
            data-for={`back`}
            className="tooltip"
            onClick={handleReturn}
          >
            <ArrowBackIcon className="back" />
          </button>
          <ReactTooltip id={`back`} place="top" effect="solid">
            REGRESAR
          </ReactTooltip>
        </div>

        <div style={{ textAlign: "-webkit-center" }}>
          <table id="datos" className="tableThead" border="1" width="110%">
            <thead className="tableConciliaciones text-center">
              <tr>
                <th className="text-center tableConciliacion">Nombre</th>
                <th className="text-center tableConciliacion">Apellido</th>
                <th className="text-center tableConciliacion">
                  Tipo Documento
                </th>
                <th className="text-center tableConciliacion">
                  Numero documento
                </th>
                <th className="text-center tableConciliacion">Hoobie</th>

                <th className="text-center tableConciliacion">Acciones</th>
              </tr>
            </thead>
            {user !== undefined &&
              user.map((data, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td id={`nombre${index}`}>
                        <span>
                          {data.nombre === undefined
                            ? copyUser[index].nombre
                            : data.nombre}
                        </span>
                      </td>
                      <td id={`apellidos${index}`}>
                        <span>
                          {data.apellidos === undefined
                            ? copyUser[index].apellidos
                            : data.apellidos}
                        </span>
                      </td>
                      <td id={`tipo_documento${index}`}>
                        <span>
                          {data.tipo_documento === undefined
                            ? copyUser[index].tipo_documento
                            : data.tipo_documento}
                        </span>
                      </td>
                      <td id={`documento${index}`}>
                        <span>
                          {data.documento === undefined
                            ? copyUser[index].documento
                            : data.documento}
                        </span>
                      </td>
                      <td id={`hobbie${index}`}>
                        <span>
                          {data.hobbie === undefined
                            ? copyUser[index].hobbie
                            : data.hobbie}
                        </span>
                      </td>

                      {/* Inputs ocultos */}
                      <td id={`inputNombre${index}`} hidden={true}>
                        <input
                          type="text"
                          style={{ padding: "0" }}
                          name={`nombre${index}`}
                          value={data.nombre}
                          onChange={(e) => handleInputEdit(e, index)}
                        />
                      </td>
                      <td id={`inputApellidos${index}`} hidden={true}>
                        <input
                          type="text"
                          style={{ padding: "0" }}
                          name={`apellidos${index}`}
                          value={data.apellidos}
                          onChange={(e) => handleInputEdit(e, index)}
                        />
                      </td>
                      <td id={`inputTipo_documento${index}`} hidden={true}>
                        <input
                          type="text"
                          style={{ padding: "0" }}
                          name={`tipo_documento${index}`}
                          value={data.tipo_documento}
                          onChange={(e) => handleInputEdit(e, index)}
                        />
                      </td>
                      <td id={`inputDocumento${index}`} hidden={true}>
                        <span>{data.documento}</span>
                      </td>
                      <td id={`inputHobbie${index}`} hidden={true}>
                        <textarea
                          type="text"
                          style={{ padding: "0" }}
                          name={`hobbie${index}`}
                          value={data.hobbie}
                          onChange={(e) => handleInputEdit(e, index)}
                        />
                      </td>
                      <td style={{ display: "flex" }}>
                        <button
                          id={`editar`}
                          data-tip
                          type="button"
                          data-for={`edit`}
                          className="tooltip"
                          onClick={() => showInput(index)}
                        >
                          <EditIcon className="edit" />
                        </button>
                        <ReactTooltip id={`edit`} place="top" effect="solid">
                          EDITAR
                        </ReactTooltip>

                        <button
                          id={`cancelar`}
                          data-tip
                          type="button"
                          data-for={`cancel`}
                          className="tooltip"
                          onClick={() => handleDelete(index)}
                        >
                          <DeleteSharpIcon className="clean" />
                        </button>
                        <ReactTooltip id={`cancel`} place="top" effect="solid">
                          ELIMINAR
                        </ReactTooltip>

                        <button
                          id={`aceptar`}
                          data-tip
                          type="button"
                          data-for={`success`}
                          className="tooltip"
                          onClick={() => handleSubmit(index)}
                        >
                          <CheckIcon className="submit" />
                        </button>
                        <ReactTooltip id={`success`} place="top" effect="solid">
                          ACEPTAR
                        </ReactTooltip>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
};
