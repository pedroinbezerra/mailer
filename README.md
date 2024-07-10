# Uma API para envio de e-mail

## Descrição

Este projeto é uma API simples para envio de e-mail. A API possui um endpoint para envio de e-mail, que recebe um JSON com os dados do e-mail a ser enviado.

## Tecnologias Utilizadas
- Node.js (versão 18.15.11)
- NestJS
- Docker
- TypeScript

## Estrutura do Projeto

- **Backend**: Desenvolvido em NestJS

## Pré-requisitos

- Node.js (versão 18.15.11)
- npm (Node Package Manager)
- Nest CLI (versão 9.0.0)
- Docker e Docker Compose

### Instalação do Node.js e Nest CLI

Para instalar o Node.js e o Nest CLI, execute os seguintes comandos:
```bash
# Instale o Node.js (caso não tenha)
# Para sistemas baseados em Debian/Ubuntu:
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Para sistemas baseados em Red Hat/CentOS:
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Instale o Nest CLI globalmente
npm install -g @nestjs/cli@^9.0.0

# Instale as dependências:
npm install
```

Atualize o arquivo mail.service.ts, substituindo os locais onde estiver escrito YOUR_EMAIL_HERE e YOUR_PASSWORD_HERE por um e-mail e senha válidos.

## Comandos Úteis

Para rodar o projeto em modo de desenvolvimento:
```bash
npm run start:dev
```

Para fazer o build do projeto:
```bash
npm run build
```

Para rodar o projeto em produção:
```bash
npm run start:prod
```

