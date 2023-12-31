#  Frontend - Landing Page
<div  align="center"> 
Este projeto consiste em uma landing page para uma promoção que permite aos usuários se registrarem. O formulário de registro está integrado com uma API fornecida para o envio dos dados do usuário. Após o envio do formulário, um modal de sucesso é exibido.
<br>
<br/>

![Vídeo sem título ‐ Feito com o Clipchamp](https://github.com/LaiFrance/Campanha_Publicitaria/assets/91226847/b8ef560b-e18a-4af2-b682-29137266dcc3)

<div style="display:flex">
  <br>
  
## Início Rápido
Siga estes passos para configurar e executar o projeto em sua máquina local.

### Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados em sua máquina.

 Node.js: [Download Node.js](https://nodejs.org/en/download/)
 npm: (Incluído com o Node.js)

### Instalação
Clone o repositório:
```bash
git clone https://github.com/LaiFrance/Campanha_Publicitaria.git
```
Navegue até o diretório do projeto:
```bash
cd Campanha_Publicitaria/
```
Instale as dependências:
```bash
npm install
```

### Executando a Aplicação
Inicie o servidor de desenvolvimento:
```bash
npm start
```
Isso iniciará a aplicação no modo de desenvolvimento. Abra http://localhost:3000 em seu navegador.


## Estrutura do Formulário
O formulário de registro inclui os seguintes campos:

Campo | Descrição
--- | ---
Nome | Nome do usuário
CPF | Número do CPF
Email | Endereço de e-mail
Senha | Senha de acesso
Confirmar Senha | Confirmação da senha
Empresa | Nome da empresa

Peço desculpas pela confusão. Você está correto. Para iniciar o backend, você deve usar o comando `npm run backend`. Aqui está a documentação corrigida:

# Documentação da API fake do Backend

## Início

Para iniciar a API, você precisa digitar o seguinte comando no terminal:

```bash
npm run backend
```

## Rotas

### /login

A rota `/login` é usada para autenticar usuários. Ela retorna os detalhes dos usuários cadastrados.

## Porta

A API está configurada para rodar na porta `5000`.

## Testes

Para testar a API, você pode usar ferramentas como Postman ou cURL. Aqui está um exemplo de como você pode testar a rota de login usando cURL:

```bash
curl -X GET http://localhost:5000/login
```

Lembre-se de substituir `localhost` pelo endereço IP do servidor onde a API está sendo executada, se necessário. 

## Notas

Esta é uma API fictícia criada para fins de demonstração. Assegure-se de implementar medidas de segurança adequadas (como autenticação e autorização) ao criar uma API real.
## Dependências

Aqui estão as dependências usadas neste projeto:

| Dependência | Versão |
| ----------- | ------ |
| @emotion/react | ^11.11.1 |
| @emotion/styled | ^11.11.0 |
| @mui/material | ^5.14.19 |
| @testing-library/jest-dom | ^5.17.0 |
| @testing-library/react | ^13.4.0 |
| @testing-library/user-event | ^13.5.0 |
| axios | ^1.6.2 |
| formik | ^2.4.5 |
| react | ^18.2.0 |
| react-dom | ^18.2.0 |
| react-input-mask | ^2.0.4 |
| react-modal | ^3.16.1 |
| react-router-dom | ^6.20.1 |
| react-scripts | 5.0.1 |
| styled-components | ^6.1.1 |
| web-vitals | ^2.1.4 |
| yup | ^1.3.2 |

## Scripts

Os scripts disponíveis para este projeto são:

| Script | Descrição |
| ------ | --------- |
| start | Inicia o servidor de desenvolvimento |
| build | Cria a versão de produção do aplicativo |
| test | Executa os testes |
| eject | Ejeta o aplicativo do create-react-app |

