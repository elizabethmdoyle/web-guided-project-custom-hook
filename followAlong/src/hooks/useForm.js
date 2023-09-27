import { useLocalStorage } from './useLocalStorage';

function useForm (key, initialValue, cb) {
   // const [values, setValues] = useState(initialValue, cb);
   const [values, setValue] = useLocalStorage(key, initialValue)

    const clearForm = () => {
        setValue(initialValue)
        localStorage.clear();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cb();
    }
    const handleChanges = (e) => {
      //  localStorage.setItem([e.target.name], e.target.value)
        setValue({...values, [e.target.name]: e.target.value});    
    }
    return [values, clearForm, handleChanges, handleSubmit]
}

// export const useForm = (initialValue) => {
//     const [value, setValue] = useState(initialValue);

//     const updateInput = (newValue) => {
//         setValue(newValue)
//     }
//     return [value, updateInput]
// }

export default useForm