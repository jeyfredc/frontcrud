import {types}  from '../reducers/types/types.js';
import {peticion, peticionGET} from '../../helpers/fetch.js'
import Swal from 'sweetalert2';

  
export const registerUser = (register) => {
  return async (dispatch) => {
    const endpoint = `createUsers`;
    const resp = await peticion(endpoint, "POST", { register });
    const body = await resp.json();
    console.log(body.error)
    if (body.error) {
      dispatch({
        type: types.show,
        payload: true,
      });
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${body.message}`,
        confirmButtonColor: 'red'
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: `${body.message}`,
        confirmButtonColor: '#2778c4',
      }).then((result)=>{
        if(result.isConfirmed) {
          dispatch({
            type: types.show,
            payload: false,
          });
        }
      })
      
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    const endpoint = `getUsers`;
    const resp = await peticionGET(endpoint, "GET");
    const body = await resp.json();
    dispatch({
      type: types.getUsers,
      payload: body,
    });
  };
};

export const editUser = (updateUser,documento) => {
  return async (dispatch) => {
    const endpoint = `editUsers/${Number(documento)}`;
    const resp = await peticion(endpoint, "PUT", { updateUser });
    const body = await resp.json();
    console.log(body.message)
    if (body.error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${body.message}`,
        confirmButtonColor: 'red'
      })
      
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: `${body.message}`,
        confirmButtonColor: '#2778c4',
      })
    }
  };
};


export const deleteUser = (documento) => {
  return async (dispatch) => {
    const endpoint = `delete/${Number(documento)}`;
    const resp = await peticion(endpoint, "PUT");
    const body = await resp.json();
    console.log(body.message)
    if (body.error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${body.message}`,
        confirmButtonColor: 'red'
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: `${body.message}`,
        confirmButtonColor: '#2778c4',
      })
    }
  };
};