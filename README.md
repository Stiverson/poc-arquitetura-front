# POC Arquitetura Front-end

(POC) focada em arquitetura escalável e limpa para Front-end, utilizando princípios de Software Craftsmanship.

## Tecnologias
- **React + Vite**
- **TypeScript** (Strict Mode)
- **React Query** (Gerenciamento de Server State e Cache)
- **Vitest + Testing Library** (TDD & Acessibilidade)
- **CSS Modules** (Escopo local e Alta Coesão)

## Princípios de Arquitetura Aplicados
- **Clean Architecture:** Separação clara entre UI, Hooks customizados e Services.
- **Component-Driven:** Estrutura Organizada, com cada componente possuindo seu próprio estilo e teste.
- **Test-First (TDD):** Serviços e Hooks construídos e testados antes da interface gráfica para garantir o comportamento.
- **Single Responsibility Principle (SRP):** Componentes de apresentação focados apenas na renderização, recebendo estados e callbacks de um orquestrador.
## Como rodar o projeto

```bash
# Instalar as dependências
npm install

# Rodar a aplicação
npm run dev

### Como testar o projeto

```bash

npm run test