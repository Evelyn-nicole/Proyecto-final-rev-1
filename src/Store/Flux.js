<<<<<<< HEAD
export const getState = ({ setStore, getStore, getActions }) => {
=======
export const getState = ({setStore, getStore, getActions}) => {
>>>>>>> 3799222c0924da87fe467a12605aae194c433704

    return {
        store: {
            users: [],
            // profile: [],
            userProfile: localStorage.getItem('userLogin') == null ? {} : JSON.parse(localStorage.getItem('userLogin')),
            startDate: new Date(),
        },
<<<<<<< HEAD
        actions: {
            setProfile: (data) => {
                localStorage.setItem("userLogin", JSON.stringify(data));
                const store = getStore();
                setStore({ userProfile: data })
            },

            setCalendar: (date) => {
                const store = getStore();
                setStore({ startDate: date })
            },


            setUser: (data) => {
                const store = getStore();
                setStore({ users: data.user })
=======
		actions: {
            setProfile:(data)=>{
                localStorage.setItem("userLogin", JSON.stringify(data));
                const store = getStore();
                setStore({userProfile: data})
            },

            setCalendar:(date) =>{
				const store = getStore();
				setStore({startDate: date})
			},
            

			setUser:(data)=>{
				const store = getStore();
                setStore({users: data.user})
>>>>>>> 3799222c0924da87fe467a12605aae194c433704
            },

        }
    }
<<<<<<< HEAD
};
=======
};
>>>>>>> 3799222c0924da87fe467a12605aae194c433704
