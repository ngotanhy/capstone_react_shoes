import { toast } from 'react-toastify';


export const notify = (content, type) => {
    switch (type) {
        case 'error':{
            toast.error(content);
            break;
        }
        case 'success':{
            toast.success(content);
            break;
        }case 'warning':{
            toast.warn(content);
            break;
        }
        default: return
    }
}
