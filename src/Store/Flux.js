export const getState = ({setStore, getStore, getActions}) => {

    return {
        store: {
            users: [],
            // profile: [],
            userProfile: localStorage.getItem('userLogin') == null ? {} : JSON.parse(localStorage.getItem('userLogin')),
            startDate: new Date(),
        },
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
            },

        }
    }
};