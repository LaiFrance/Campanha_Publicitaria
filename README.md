#  Frontend - Landing Page

Este projeto consiste em uma landing page para uma promoção que permite aos usuários se registrarem. O formulário de registro está integrado com uma API fornecida para o envio dos dados do usuário. Após o envio do formulário, um modal de sucesso é exibido.

## Início Rápido
Siga estes passos para configurar e executar o projeto em sua máquina local.

### Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados em sua máquina.

- Node.js: [Download Node.js](https://nodejs.org/en/download/)
- npm: (Incluído com o Node.js)

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

### Configuração
Crie um arquivo .env na raiz do projeto e adicione o seguinte endpoint da API:
```dotenv
REACT_APP_API_URL=https://documenter.getpostman.com/view/9196190/UzQsw7Mg
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
