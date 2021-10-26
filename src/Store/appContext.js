import React, { useState } from 'react';
import { getState } from './flux';

export const Context = React.createContext(null)

const injectContext = PassedComponent => {
    const Storewrapper = (props) => {
        const [state, setState] = useState(
            getState({
                getActions: () => state.actions,
                getStore: () => state.store,
                setStore: updatedStore => setState({
                    store: Object.assign(state.store, updatedStore),
                    actions: {...state.actions}
                })
            })
        )

        return (
            <Context.Provider value = {state}>
                <PassedComponent {...props}/>
            </Context.Provider>
        )
    }

    return Storewrapper
}
export default injectContext