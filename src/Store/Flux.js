export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            users: [],
            fechas: "",
            Reservas: [],
            Lista: [],
            // profile: [],
            superadmin: [],
            userProfile: localStorage.getItem('userLogin') == null ? {} : JSON.parse(localStorage.getItem('userLogin')),
            
            userAdmin: localStorage.getItem('userAdmin') == null ? {} : JSON.parse(localStorage.getItem('userAdmin')),
            
            startDate: new Date(),
            event: []
        },
        actions: {
            setInfo: () => {
                fetch("http://localhost:8080/admin_new_event", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(respuesta => respuesta.json())
                    .then(dato => setStore({ event: dato }))
                    .catch((error) => console.error(error))
            },

            setProfile: (data) => {
                localStorage.setItem("userLogin", JSON.stringify(data));
                const store = getStore();
                setStore({ userProfile: data })
            },
            setAdmin: (data) => {
                localStorage.setItem("userAdmin", JSON.stringify(data));
                const store = getStore();
                setStore({ userAdmin: data })
            },
            setCalendar: (date) => {
                const store = getStore();
                setStore({ startDate: date })
            },
            setUser: (data) => {
                const store = getStore();
                setStore({ users: data.user })
            },
            getLista: (item) => {
                const store = getStore()
                if (store.Lista.includes(item)) {
                    alert("Valor ya incluido")
                } else { setStore({ Lista: store.Lista.concat(item) }) }
            },
            removerlista: (i) => {
                //getActions().getLista("Felipe"). Ejecutar a la funcion GetLista y agregar Felipe a la Lista.
                const store = getStore()
                const nuevoArray = store.Lista.filter((item, indice) => {
                    return indice !== i
                })
                setStore({ Lista: nuevoArray })
            },

            agregarFecha: (fecha) => {
                const store = getStore()
                if (store.fechas === fecha) {
                    alert("Fecha no Disponible")
                } else { setStore({ fechas: fecha }) }
            }
        }
    }
}

