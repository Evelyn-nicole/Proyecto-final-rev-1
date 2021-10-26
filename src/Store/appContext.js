import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { getState } from './Flux';
=======
import { getState } from './flux';
>>>>>>> 3799222c0924da87fe467a12605aae194c433704


export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
<<<<<<< HEAD

        const [state, setState] = useState(
            getState({
                getActions: () => state.actions,
                getStore: () => state.store,
                setStore: updatedStore =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            })
        );
        useEffect(() => {

        }, [])

        return (
=======
       
        const [ state, setState] = useState(
            getState({
                getActions:() => state.actions,
                getStore:() =>  state.store,
                setStore: updatedStore => 
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions:{ ...state.actions}
              })
            })
        );
        useEffect (() => {

        },[])

        return(
>>>>>>> 3799222c0924da87fe467a12605aae194c433704
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;