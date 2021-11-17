export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            users: [],
            Lista: [],
            event: [],
            userProfile: localStorage.getItem('userLogin') == null ? {} : JSON.parse(localStorage.getItem('userLogin')),
            userAdmin: localStorage.getItem('userAdmin') == null ? {} : JSON.parse(localStorage.getItem('userAdmin')),
            startDate: new Date(),
        },
        actions: {
            setProfile: (data) => {
                localStorage.setItem("userLogin", JSON.stringify(data));
                const store = getStore();
                setStore({ userProfile: data })
            },
            setCalendar: (date) => {
                const store = getStore();
                JSON.parse(localStorage.getItem('userLogin'))
                setStore({ startDate: date })
            },
            setUser: (data) => {
                localStorage.setItem("userLogin", JSON.stringify(data));
                const store = getStore();
                setStore({ users: data.user })
            },
            setAdmin: (data) => {
                localStorage.setItem("userAdmin", JSON.stringify(data));
                const store = getStore();
                setStore({ userAdmin: data })
            },
            setInfo: () => {
                fetch("http://localhost:8080/admin/new_event", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(respuesta => respuesta.json())
                    .then(dato => setStore({ event: dato }))
                    .catch((error) => console.error(error))
            },




            setEvent: (data) => {
                localStorage.setItem("admEvent", JSON.stringify(data));
                const store = getStore();
                setStore({ eventEdit: data })
            },





            getLista: (item) => {
                const store = getStore()
                if (store.Lista.includes(item)) {
                    alert("Valor ya incluido")
                } else { setStore({ Lista: store.Lista.concat(item) }) }
            },
            removerlista: (i) => {
                const store = getStore()
                const nuevoArray = store.Lista.filter((item, indice) => {
                    return indice !== i
                })
                setStore({ Lista: nuevoArray })
            },
        }
    }
};