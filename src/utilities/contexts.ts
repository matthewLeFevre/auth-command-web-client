import { createContext, useContext } from "react";

export const UserContext: any = createContext({});
export const AppsContext: any = createContext({});
export const ClientContext: any = createContext({});

export const useUserCTX: any = (): any => useContext(UserContext);
export const useAppsCTX: any = (): any => useContext(AppsContext);
export const useClientCTX: any = (): any => useContext(ClientContext);
