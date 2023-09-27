import {useState} from 'react'

function useForm (initialValue, cb) {
    const [values, setValues] = useState(initialValue, cb);

    const clearForm = () => {
        setValues(initialValue)
        localStorage.clear();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cb();
    }
    const handleChanges = (e) => {
        localStorage.setItem([e.target.name], e.target.value)
        setValues({...values, [e.target.name]: e.target.value});    
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