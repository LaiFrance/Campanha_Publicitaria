import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Select, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  cpf: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  company: Yup.string().required('Required'),
  classification: Yup.string().required('Required'),
});


function SignupForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        cpf: '',
        email: '',
        password: '',
        confirmPassword: '',
        company: '',
        classification: '', 
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
        // Send data to the API
      }}
    >
      {({ errors, touched }) => (
        <><Form 
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
          backgroundImage: 'url(https://bitbucket.org/ateliedepropaganda/atelie-frontend-teste/raw/c0262b0b69248c521eb2de860705e71e50962035/-%20ASSETS/background-marrom.png)',
          backgroundSize: 'cover'
        }}
        >        
          <Field style={{width:'50%'}} variant="standard" name="name" as={TextField} label="Name" error={touched.name && Boolean(errors.name)} helperText={touched.name && errors.name} fullWidth margin="normal" />
          <Field style={{width:'50%'}} variant="standard" name="cpf" as={TextField} label="CPF" error={touched.cpf && Boolean(errors.cpf)} helperText={touched.cpf && errors.cpf} fullWidth margin="normal" />
          <Field style={{width:'50%'}} variant="standard" name="email" as={TextField} label="Email" error={touched.email && Boolean(errors.email)} helperText={touched.email && errors.email} fullWidth margin="normal" />
          <Field style={{width:'50%'}} variant="standard" name="password" as={TextField} label="Password" type="password" error={touched.password && Boolean(errors.password)} helperText={touched.password && errors.password} fullWidth margin="normal" />
          <Field style={{width:'50%'}} variant="standard" name="confirmPassword" as={TextField} label="Confirm Password" type="password" error={touched.confirmPassword && Boolean(errors.confirmPassword)} helperText={touched.confirmPassword && errors.confirmPassword} fullWidth margin="normal" />
          <Field style={{width:'50%'}} variant="standard" name="company" as={TextField} label="Company" error={touched.company && Boolean(errors.company)} helperText={touched.company && errors.company} fullWidth margin="normal" />
          <InputLabel style={{width:'50%'}} id="demo-simple-select-standard-label">Classification</InputLabel>
          <Field style={{width:'50%'}} name="classification" as={Select} label="Classification" error={touched.classification && Boolean(errors.classification)} helperText={touched.classification && errors.classification} fullWidth margin="normal">
            <MenuItem value="Gerente">Gerente</MenuItem>
            <MenuItem value="Funcionário">Distribuidor</MenuItem>
            <MenuItem value="Revendedor">Revendedor</MenuItem>
          </Field>
          <br />
          <Button type="submit" variant="contained" color="primary">
            Cadastrar
          </Button>
        </Form></>
      )}
    </Formik>
  );
}

export default SignupForm;

