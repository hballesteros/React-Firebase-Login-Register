import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    // Cada vez que cambia el formState se dispara el useEffect 
    // y se vuelve a ejecutar createValidators
    useEffect(() => {
      createValidators();
    }, [ formState ])
    
    
    // Cada vez que cambia el formValidation se dispara el useMemo
    // que cumple la funcion de recordar el estado del formulario ( si es valido o no)  
    // con que una propiedad tenga no tenga el valor null salimos del ciclo
    // quiero memorizar el valor que retorna la funcion
    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null) return false;
        }
       return true; 
    }, [ formValidation ])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        
        const formCheckedValues = {};   
        
        for (const formField of Object.keys( formValidations )) {
            
            const [ fn, errorMessage ] = formValidations[formField];
            
            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;

        }

        setFormValidation( formCheckedValues );


    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}