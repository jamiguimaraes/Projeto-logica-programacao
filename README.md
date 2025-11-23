# Sistema de Gerenciamento de Biblioteca

Um sistema web simples e funcional para gerenciamento de biblioteca, desenvolvido com HTML, CSS e JavaScript puro. O projeto permite gerenciar usuários, livros e empréstimos de forma intuitiva, utilizando o LocalStorage do navegador para persistência de dados.

## 📋 Funcionalidades

### 👤 Gerenciamento de Usuários
- **Cadastro de usuários**: Adicionar novos usuários com nome e e-mail
- **Listagem**: Visualizar todos os usuários cadastrados em formato de tabela
- **Edição**: Editar informações de usuários existentes diretamente na tabela
- **Exclusão**: Remover usuários do sistema
- **Validação**: Validação de campos obrigatórios (nome e e-mail)

### 📚 Gerenciamento de Livros
- **Cadastro de livros**: Adicionar livros com título, autor, ano de publicação e gênero
- **Listagem**: Visualizar todos os livros cadastrados
- **Status de disponibilidade**: Controle automático de disponibilidade (Disponível/Emprestado)
- **Edição**: Editar informações de livros existentes
- **Exclusão**: Remover livros do sistema
- **Dados padrão**: O sistema vem pré-carregado com 24 livros de exemplo

### 🔄 Gerenciamento de Empréstimos
- **Registro de empréstimos**: Criar novos empréstimos vinculando usuário e livro
- **Controle de disponibilidade**: Apenas livros disponíveis podem ser emprestados
- **Histórico completo**: Visualizar todos os empréstimos realizados
- **Devolução**: Registrar devolução de livros emprestados
- **Alertas de atraso**: Sistema identifica automaticamente empréstimos com mais de 7 dias e destaca em vermelho
- **Ordenação**: Empréstimos ordenados por data (mais recentes primeiro)
- **Status**: Controle de empréstimos ativos e devolvidos

## 🗂️ Estrutura do Projeto

```
Projeto-logica-programacao/
│
├── Index.html          # Página inicial com menu de navegação
├── usuarios.html       # Página de gerenciamento de usuários
├── livros.html         # Página de gerenciamento de livros
├── emprestimos.html    # Página de gerenciamento de empréstimos
├── app.js              # Lógica JavaScript principal
├── style.css           # Estilos CSS do projeto
└── README.md           # Documentação do projeto
```

## 🚀 Como Usar

1. **Abrir o projeto**: Abra o arquivo `Index.html` em um navegador web moderno
2. **Navegação**: Use o menu de navegação para acessar as diferentes seções:
   - 👤 Usuários
   - 📚 Livros
   - 🔄 Empréstimos
3. **Cadastrar dados**: Preencha os formulários e clique em "Cadastrar" para adicionar novos registros
4. **Gerenciar**: Use os botões "Editar" e "Excluir" nas tabelas para gerenciar os dados

## 💾 Armazenamento de Dados

O projeto utiliza o **LocalStorage** do navegador para persistir os dados. Isso significa que:
- Os dados são salvos automaticamente no navegador
- Os dados persistem mesmo após fechar o navegador
- Cada navegador mantém seus próprios dados (não são compartilhados entre navegadores)
- Os dados são armazenados em três chaves principais:
  - `usuarios`: Lista de usuários cadastrados
  - `livros`: Lista de livros cadastrados
  - `emprestimos`: Lista de empréstimos realizados

## 🎨 Características Técnicas

- **Frontend puro**: HTML, CSS e JavaScript vanilla (sem frameworks)
- **Responsivo**: Interface adaptável com navegação intuitiva
- **Validação de formulários**: Validação em tempo real de campos obrigatórios
- **Edição inline**: Edição de registros diretamente na tabela
- **Feedback visual**: Mensagens de erro e alertas de status
- **Dados padrão**: Sistema pré-populado com usuários e livros de exemplo

## 📝 Dados Padrão

O sistema vem com dados de exemplo para facilitar os testes:

- **5 usuários** pré-cadastrados
- **24 livros** pré-cadastrados de diversos gêneros (Romance, Fantasia, Ficção, etc.)

## 🔧 Funções Principais (app.js)

### Funções de Armazenamento
- `salvar(chave, dados)`: Salva dados no LocalStorage
- `carregar(chave)`: Carrega dados do LocalStorage

### Funções de Usuários
- `addUsuario()`: Adiciona novo usuário
- `listarUsuarios()`: Lista todos os usuários
- `editarUsuario(id)`: Habilita edição de usuário
- `salvarUsuario(id)`: Salva alterações do usuário
- `deleteUsuario(id)`: Remove usuário

### Funções de Livros
- `addLivro()`: Adiciona novo livro
- `listarLivros()`: Lista todos os livros
- `editarLivro(id)`: Habilita edição de livro
- `salvarLivro(id)`: Salva alterações do livro
- `deleteLivro(id)`: Remove livro

### Funções de Empréstimos
- `addEmprestimo()`: Cria novo empréstimo
- `listarEmprestimos()`: Lista todos os empréstimos
- `devolver(id)`: Registra devolução de livro
- `calcularDiasAtrasado(emprestimo)`: Calcula dias de atraso
- `carregarSelects()`: Carrega opções dos selects de usuários e livros

### Funções Auxiliares
- `validarCampo(campoId, errorId)`: Valida campos obrigatórios

## 🎯 Requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- JavaScript habilitado
- Não requer servidor ou instalação de dependências

## 📌 Observações

- Os dados são armazenados localmente no navegador
- Para limpar os dados, use as ferramentas de desenvolvedor do navegador (F12) > Application > Local Storage
- O sistema calcula automaticamente atrasos considerando 7 dias como prazo padrão
- Livros emprestados não aparecem na lista de seleção para novos empréstimos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas
- **CSS3**: Estilização e layout
- **JavaScript (ES6+)**: Lógica de negócio e manipulação do DOM
- **LocalStorage API**: Persistência de dados

---

Desenvolvido como projeto de exercício de Lógica de Programação.

