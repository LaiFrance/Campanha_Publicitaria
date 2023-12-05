import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button, Select, TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Axios from 'axios'
import React from 'react'
import { useState } from 'react'
import BasicModal from '../Modal/BasicModal'

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

  // function SenhasNaoConferem( password, password_confirmation) {
  //   if (password !== password_confirmation) {
  //     return
  //     alert ('senhas não conferem')
  //   }
  // }

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
          console.log(values)
          Axios.post(
            'https://api.teste-frontend.ateliedepropaganda.com.br/v1/register',
            {
              name: values.name,
              email: values.email,
              tax_id: values.tax_id,
              password: values.password,
              password_confirmation: values.password_confirmation,
              company: values.company,
              segment: values.segment,
            },
          )
            .then((response) => {
              response.status === 200 ? changeProp() : console.log('nao foi')
            })
            .catch((error) => {
              console.log(error.response)
            })
        }}
      >
        {({ errors, touched }) => (
          <Form
            style={{
              fontStyle: 'white',
              display: 'flex',
              color: 'white',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              padding: '20px',
              alignSelf: 'center',
              backgroundImage:
                'url(https://bitbucket.org/ateliedepropaganda/atelie-frontend-teste/raw/c0262b0b69248c521eb2de860705e71e50962035/-%20ASSETS/background-marrom.png)',
              backgroundSize: 'cover',
            }}
          >
            <h1>Cadastre-se</h1>
            <h4>
              {' '}
              Preencha os campos abaixo para validar sua participação <br />
              na campanha e concorrer a prêmios.
            </h4>

            <Field
              style={{ width: '45%' }}
              variant="standard"
              name="name"
              as={TextField}
              label="Name"
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              margin="normal"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Field
                style={{ width: '50%' }}
                variant="standard"
                name="tax_id"
                as={TextField}
                label="CPF"
                error={touched.tax_id && Boolean(errors.tax_id)}
                helperText={touched.tax_id && errors.tax_id}
                margin="normal"
              />

              <Field
                style={{ width: '45%' }}
                variant="standard"
                name="email"
                as={TextField}
                label="Email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                margin="normal"
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Field
                style={{ width: '45%' }}
                variant="standard"
                name="password"
                as={TextField}
                label="Password"
                type="password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                margin="normal"
              />

              <Field
                style={{ width: '45%' }}
                variant="standard"
                name="password_confirmation"
                as={TextField}
                label="Confirm Password"
                type="password"
                error={
                  touched.password_confirmation &&
                  Boolean(errors.password_confirmation)
                }
                helperText={
                  touched.password_confirmation && errors.password_confirmation
                }
                margin="normal"
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '20px',
              }}
            >
              <Field
                style={{ width: '45%' }}
                variant="standard"
                name="company"
                as={TextField}
                label="Company"
                error={touched.company && Boolean(errors.company)}
                helperText={touched.company && errors.company}
                margin="normal"
              />

              <InputLabel id="demo-simple-select-standard-label"></InputLabel>
              <Field
                style={{ width: '45%' }}
                variant="standard"
                name="segment"
                as={Select}
                label="segment"
                error={touched.segment && Boolean(errors.segment)}
                helperText={touched.segment && errors.segment}
                margin="normal"
              >
                <MenuItem value="Gerente">Gerente</MenuItem>
                <MenuItem value="Funcionário">Distribuidor</MenuItem>
                <MenuItem value="Revendedor">Revendedor</MenuItem>
              </Field>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SignupForm
