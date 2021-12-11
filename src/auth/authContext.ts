import {createContext} from "react";

type IContext = {
    user?: any;
}

export const AuthContext = createContext<IContext>({});
