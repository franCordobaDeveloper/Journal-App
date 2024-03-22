
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout.'
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ ( value ) => value.includes('@'), 'El correo debe tener un @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener mas de 6 letras' ],
  displayName: [ (value ) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted ] = useState(false);

  const { 
    displayName, email, password, onInputChange, formState,
    isFormValid, emailValid, passwordValid, displayNameValid
    } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setformSubmitted(true);

    if( !isFormValid ) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
    // console.log( formState );
  }

  return (
    <AuthLayout title='Crea cuenta'>
       <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder="Nombre Completo"
                fullWidth  
                name='displayName'
                value={ displayName }
                onChange={ onInputChange }
                error= { !!displayNameValid && formSubmitted }
                helperText={ displayNameValid }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@gmail.com"
                fullWidth
                name='email'
                value={ email }
                onChange={ onInputChange }  
                error= { !!emailValid && formSubmitted }
                helperText={ emailValid }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}> 
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña"
                fullWidth
                name='password'
                value={ password }
                onChange={ onInputChange }
                error= { !!passwordValid && formSubmitted }
                helperText={ passwordValid}  
              />
            </Grid>

            <Grid container spacing={ 2 }  sx={{ mb: 2, mt: 1}}>
              <Grid item xs={ 12 } sm={ 6 }> 
                <Button
                  type='submit'
                  variant="contained"
                  fullWidth
                >
                  Crear cuenta
                </Button>
                </Grid>
            </Grid>

            <Grid 
              container
              direction='row'
              justifyContent='end'
            >
              <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                Ingresar
              </Link>
              
            </Grid>

          </Grid>
        </form>

    </AuthLayout>
  )
}