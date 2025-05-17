# 🚀 TypeScript + Docker Starter

[![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-4.x-blue)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/docker-ready-blue)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

> Setup inicial para projetos Node.js utilizando TypeScript e Docker. Feito para quem quer iniciar rápido com um ambiente pronto para desenvolvimento e produção.

---

## 📖 Sobre

Este repositório é um template para iniciar aplicações backend com:

- Node.js + TypeScript
- Docker e Docker Compose
- Ambiente de desenvolvimento com auto-reload (ts-node-dev)
- Configuração básica de ESLint
- Scripts para build e execução

Você pode clonar ou usar como template diretamente para iniciar seu próximo projeto.

---

## 📦 Tecnologias

- ✅ Node.js
- ✅ TypeScript
- ✅ Docker
- ✅ Docker Compose
- ✅ ESLint
- ✅ ts-node-dev

---

## 🧰 Estrutura de Pastas

.
├── src/ # Código-fonte TypeScript
│ └── index.ts # Arquivo principal
├── .dockerignore
├── .eslintrc.json
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md


---

## 🚀 Como usar

### ✅ Pré-requisitos

- Docker e Docker Compose instalados
- Node.js (caso queira rodar sem Docker)

### 🧪 Desenvolvimento com Docker

```bash
# Subir o container em modo dev (com auto-reload)
docker-compose up --build
```

### A aplicação estará disponível em http://localhost:3000

##📄 Scripts disponíveis
- npm run dev — roda com ts-node-dev

- npm run build — compila TypeScript em JavaScript

- npm start — roda o build com Node
