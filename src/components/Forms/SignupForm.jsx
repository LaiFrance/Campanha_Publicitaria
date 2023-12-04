// SignupForm.js
import * as React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button, Select, TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Axios from 'axios'
import { useState } from 'react'
import BasicModal from '../Modal/BasicModal'
import {
  formContainerStyle,
  formLabelStyle,
} from './style.css/SignupForm.styles'

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  tax_id: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  password_confirmation: Yup.string().required('Required'),
  company: Yup.string().required('Required'),
  segment: Yup.string().required('Required'),
})

function SignupForm() {
  const [open, setOpen] = useState(false)

  const changeProp = () => {
    setOpen(true)
  }

  return (
    <>
      <BasicModal open={open} setOpen={setOpen} />
      <Formik
        initialValues={{
          name: '',
          email: '',
          tax_id: '',
          password: '',
          password_confirmation: '',
          company: '',
          segment: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          Axios.post(
            'http://api.teste-frontend.ateliedepropaganda.com.br/v1/register',
            values,
          )
            .then((response) => {
              response.status === 200
                ? changeProp()
                : alert('Erro ao cadastrar')
            })
            .catch((error) => {
              console.log(error.response)
            })
        }}
      >
        {({ errors, touched }) => (
          <Form style={formContainerStyle}>
            <h1>Cadastre-se</h1>
            <h4>
              Preencha os campos abaixo para validar sua participação na
              campanha e concorrer a prêmios.
            </h4>

            <Field
              style={{ width: '50%' }}
              variant="standard"
              name="name"
              as={TextField}
              label="Name"
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              fullWidth
              margin="normal"
            />

            <Field
              style={{ width: '50%' }}
              variant="standard"
              name="email"
              as={TextField}
              label="Email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
              margin="normal"
            />

            <Field
              style={{ width: '50%' }}
              variant="standard"
              name="tax_id"
              as={TextField}
              label="CPF/CNPJ"
              error={touched.tax_id && Boolean(errors.tax_id)}
              helperText={touched.tax_id && errors.tax_id}
              fullWidth
              margin="normal"
            />

            <Field
              style={{ width: '50%' }}
              variant="standard"
              name="password"
              as={TextField}
              label="Senha"
              type="password"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              fullWidth
              margin="normal"
            />

            <Field
              style={{ width: '50%' }}
              variant="standard"
              type="password"
              name="password_confirmation"
              as={TextField}
              label="Confirmar Senha"
              error={
                touched.password_confirmation &&
                Boolean(errors.password_confirmation)
              }
              helperText={
                touched.password_confirmation && errors.password_confirmation
              }
              fullWidth
              margin="normal"
            />

            <Field
              style={{ width: '50%' }}
              variant="standard"
              name="company"
              as={TextField}
              label="Empresa"
              error={touched.company && Boolean(errors.company)}
              helperText={touched.company && errors.company}
              fullWidth
              margin="normal"
            />

            <InputLabel
              style={formLabelStyle}
              id="demo-simple-select-standard-label"
            >
              Classificação
            </InputLabel>
            <Field
              style={{ width: '25%', marginBottom: '20px' }}
              variant="standard"
              name="segment"
              as={Select}
              label="segment"
              error={touched.segment && Boolean(errors.segment)}
              helperText={touched.segment && errors.segment}
              fullWidth
              margin="normal"
            >
              <MenuItem value="Gerente">Gerente</MenuItem>
              <MenuItem value="Funcionário">Distribuidor</MenuItem>
              <MenuItem value="Revendedor">Revendedor</MenuItem>
            </Field>

            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SignupForm
