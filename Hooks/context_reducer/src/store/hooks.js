import Context from "./Context";
import { useContext } from "react";


export const useStore = () => {
    //Lấy và trả ra state và dispatch
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
};
