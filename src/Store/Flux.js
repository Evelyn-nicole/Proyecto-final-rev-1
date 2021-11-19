// export const getState = ({setStore, getStore, getActions}) => {

//     return {
//         store: {
//             users: [],
//             Lista: [],
//             event: [],
//             Reservas: [],
//             superadmin: [],
//             userProfile: localStorage.getItem('userLogin') == null ? {} : JSON.parse(localStorage.getItem('userLogin')),
//             userAdmin: localStorage.getItem('userAdmin') == null ? {} : JSON.parse(localStorage.getItem('userAdmin')),
//             startDate: new Date(),
//         },
// 		actions: {
//             setProfile:(data)=>{
//                 localStorage.setItem("userLogin", JSON.stringify(data));
//                 setStore({userProfile: data})
//             },
//             setCalendar:(date) =>{
//                 // JSON.parse(localStorage.getItem('userLogin'))
// 				setStore({startDate: date})
// 			},
// 			setUser:(data)=>{
//                 // localStorage.setItem("userLogin", JSON.stringify(data));
//                 setStore({users: data.user})
//             },
//             setAdmin: (data) => {
//                 localStorage.setItem("userAdmin", JSON.stringify(data));
//                 setStore({ userAdmin: data })
//             },
//             setInfo:() => {
//                 fetch("http://localhost:8080/admin/new_event", {
//                     method:"GET",
//                     headers: {
//                         "Content-Type": "application/json"
//                     }
//                 }).then(respuesta => respuesta.json())
//                 .then(dato => setStore({event: dato}))
//                 .catch((error) => console.error(error))
//             },
//             // setEvent:(data)=>{
//             //     localStorage.setItem("admEvent", JSON.stringify(data));
//             //     setStore({eventEdit: data})
//             // },
//             getLista: (item) => {
//                 const store = getStore()
//                 if(store.Lista.includes(item)){
//                     alert("Valor ya incluido")
//                 } else {setStore({Lista: store.Lista.concat(item)})}
//             },
//             removerlista : (i) => {
//                 const store = getStore()
//                 const nuevoArray = store.Lista.filter((item, indice) => {
//                 return indice !== i
//               })
//               setStore({Lista: nuevoArray})
//              },
//              Reservarelem: (item1, item2) => {
//                 const store = getStore()
//                 setStore({ Reservas: store.Reservas.concat(item1, item2) })
//             }
//         }
//     }
// };
import Swal from "sweetalert2";
export const getState = ({ setStore, getStore, getActions }) => {
 
    return {
    store: {
      users: [],
      fechas: "",
      Reservas: [],
      Lista: [],
      superadmin: [],
      userProfile:
        localStorage.getItem("userLogin") == null
          ? {}
          : JSON.parse(localStorage.getItem("userLogin")),

      userAdmin:
        localStorage.getItem("userAdmin") == null
          ? {}
          : JSON.parse(localStorage.getItem("userAdmin")),

      startDate: new Date(),
      event: [],
    },
    actions: {
      setInfo: () => {
        fetch("http://localhost:8080/admin_new_event", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((respuesta) => respuesta.json())
          .then((dato) => setStore({ event: dato }))
          .catch((error) => console.error(error));
      },

      setProfile: (data) => {
        localStorage.setItem("userLogin", JSON.stringify(data));
        const store = getStore();
        setStore({ userProfile: data });
      },
      setAdmin: (data) => {
        localStorage.setItem("userAdmin", JSON.stringify(data));
        const store = getStore();
        setStore({ userAdmin: data });
      },
      setCalendar: (date) => {
        const store = getStore();
        setStore({ startDate: date });
      },
      setUser: (data) => {
        const store = getStore();
        setStore({ users: data.user });
      },
      getLista: (item) => {
        const store = getStore();
        if (store.Lista.includes(item)) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El evento ya existe en tu lista de favoritos',
          })
        } else {
          setStore({ Lista: store.Lista.concat(item) });
          Swal.fire({
            icon: 'success',
            title: 'Evento agregado con Exito',
            text: 'tu evento fue agregado a favoritos',
          })
        }
      },
      removerlista: (i) => {
        const store = getStore();
        const nuevoArray = store.Lista.filter((item, indice) => {
          return indice !== i;
        });
        setStore({ Lista: nuevoArray });
      },

      agregarFecha: (fecha) => {
        const store = getStore();
        if (store.fechas === fecha) {
          alert("Fecha no Disponible");
        } else {
          setStore({ fechas: fecha });
        }
      },
    },
  };
};
