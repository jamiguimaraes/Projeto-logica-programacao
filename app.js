function salvar(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
}

function carregar(chave) {
    return JSON.parse(localStorage.getItem(chave)) || [];
}

let usuarios = carregar("usuarios");
let livros = carregar("livros");
let emprestimos = carregar("emprestimos");

const usuariosPadrao = [
    { id: 1763848142851, nome: "Ana Beatriz Oliveira", email: "ana.oliveira@email.com" },
    { id: 1763848142852, nome: "Marcos Vinícius Souza", email: "marcos.souza@email.com" },
    { id: 1763848142853, nome: "Caroline Mendes Lima", email: "carol.mendes@email.com" },
    { id: 1763848142854, nome: "Ricardo Batista", email: "ricardo.batista@email.com" },
    { id: 176384814285, nome: "Júlia Fernandes", email: "julia.fernandes@email.com" }
];
if (usuarios.length === 0) {
    usuarios = usuariosPadrao;
    salvar("usuarios", usuarios);
}
function validarCampo(campoId, errorId) {
    const campo = document.getElementById(campoId);
    const erro = document.getElementById(errorId);
    const valor = campo.value.trim();
    
    if (!valor) {
        erro.textContent = "Campo obrigatório";
        return false;
    } else {
        erro.textContent = "";
        return true;
    }
}

function addUsuario() {
    const nome = document.getElementById("userNome").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    
    const nomeValido = validarCampo("userNome", "errorNome");
    const emailValido = validarCampo("userEmail", "errorEmail");
    
    if (!nomeValido || !emailValido) {
        return;
    }

    const novo = {
        id: Date.now(),
        nome,
        email
    };

    usuarios.push(novo);
    salvar("usuarios", usuarios);
    listarUsuarios();

    document.getElementById("userNome").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("errorNome").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("userNome").focus();
}

function listarUsuarios() {
    const tabela = document.getElementById("listaUsuarios");
    if (!tabela) return;

    tabela.innerHTML = "";

    usuarios.forEach(u => {
        tabela.innerHTML += `
            <tr data-user-id="${u.id}">
                <td>${u.id}</td>
                <td>${u.nome}</td>
                <td>${u.email}</td>
                <td>
                    <button onclick="editarUsuario(${u.id})">Editar</button>
                    <button onclick="deleteUsuario(${u.id})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

function editarUsuario(id) {
    const linha = document.querySelector(`tr[data-user-id="${id}"]`);
    if (!linha) return;

    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) return;

    linha.setAttribute('data-editing-id', id);

    const celulaNome = linha.cells[1];
    const celulaEmail = linha.cells[2];
    const celulaAcoes = linha.cells[3];

    celulaNome.innerHTML = `<input type="text" id="editNome_${id}" value="${usuario.nome}">`;
    celulaEmail.innerHTML = `<input type="email" id="editEmail_${id}" value="${usuario.email}">`;
    celulaAcoes.innerHTML = `
        <button onclick="salvarUsuario(${id})">Salvar</button>
        <button onclick="deleteUsuario(${id})">Excluir</button>
    `;
}

function salvarUsuario(id) {
    const nome = document.getElementById(`editNome_${id}`).value;
    const email = document.getElementById(`editEmail_${id}`).value;

    if (!nome || !email) {
        alert("Preencha todos os campos!");
        return;
    }

    const usuario = usuarios.find(u => u.id === id);
    if (usuario) {
        usuario.nome = nome;
        usuario.email = email;
        salvar("usuarios", usuarios);
        listarUsuarios();
    }
}

function deleteUsuario(id) {
    usuarios = usuarios.filter(u => u.id !== id);
    salvar("usuarios", usuarios);
    listarUsuarios();
}

const livrosPadrao = [
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, genero: "Romance", disponivel: true },
    { id: 2, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, genero: "Fábula", disponivel: true },
    { id: 3, titulo: "Capitães da Areia", autor: "Jorge Amado", ano: 1937, genero: "Romance", disponivel: true },
    { id: 4, titulo: "1984", autor: "George Orwell", ano: 1949, genero: "Ficção Científica", disponivel: true },
    { id: 5, titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945, genero: "Satira Política", disponivel: true },
    { id: 6, titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997, genero: "Fantasia", disponivel: true },
    { id: 7, titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, genero: "Fantasia", disponivel: true },
    { id: 8, titulo: "Senhor dos Anéis – A Sociedade do Anel", autor: "J.R.R. Tolkien", ano: 1954, genero: "Fantasia", disponivel: true },
    { id: 9, titulo: "Percy Jackson e o Ladrão de Raios", autor: "Rick Riordan", ano: 2005, genero: "Aventura", disponivel: true },
    { id: 10, titulo: "O Código Da Vinci", autor: "Dan Brown", ano: 2003, genero: "Suspense", disponivel: true },
    { id: 11, titulo: "Biblioteca da Meia Noite", autor: "Matt Haig", ano: 2019, genero: "Ficção", disponivel: true },
    { id: 12, titulo: "A Hora da Estrela", autor: "Clarice Lispector", ano: 1977, genero: "Romance", disponivel: true},
    { id: 13, titulo: "Entendendo Algoritmos", autor: " Aditya Y. Bhargava", ano: 2017, genero: "Didático", disponivel: true },
    { id: 14, titulo: "Contos de Fadas em suas Versões Originais", autor: "Jacob e Wilhelm Grimm, Hans Christian Andersen & mais", ano: 2019, genero: "Ficção", disponivel: true },
    { id: 15, titulo: "Os miseráveis", autor: "Victor Hugo", ano: 2014, genero: "Ficção", disponivel: true },
    { id: 16, titulo: "A Metamorfose", autor: "Franz Kafka", ano: 2019, genero: "Ficção", disponivel: true },
    { id: 17, titulo: "A natureza da mordida", autor: "Carla Madeira", ano: 2022, genero: "Ficção", disponivel: true },
    { id: 18, titulo: "O Conde de Monte-Cristo", autor: "Alexandre Dumas", ano: 2017, genero: "Ficção", disponivel: true },
    { id: 19, titulo: "O corcunda de Notre-Dame", autor: "Victor Hugo", ano: 2022, genero: "Ficção", disponivel: true },
    { id: 20, titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", ano: 2025, genero: "Ficção", disponivel: true },
    { id: 21, titulo: "Cidade da Lua Crescente: Casa de chama e sombra", autor: "Sarah J. Maas", ano: 2024, genero: "Ficção", disponivel: true },
    { id: 22, titulo: "O despertar da lua caída – Edição especial", autor: "Sarah A. Parker", ano: 2024, genero: "Ficção", disponivel: true },
    { id: 23, titulo: "Quarta Asa", autor: "Rebecca Yarros", ano: 2024, genero: "Ficção", disponivel: true },
    { id: 24, titulo: "Trono de vidro", autor: "Sarah J. Maas", ano: 2013, genero: "Ficção", disponivel: true }
];
if (livros.length === 0) {
    livros = livrosPadrao;
    salvar("livros", livros);
}

function addLivro() {
    const titulo = document.getElementById("livroTitulo").value.trim();
    const autor = document.getElementById("livroAutor").value.trim();
    const ano = document.getElementById("livroAno").value.trim();
    const genero = document.getElementById("livroGenero").value.trim();
    
    const tituloValido = validarCampo("livroTitulo", "errorTitulo");
    const autorValido = validarCampo("livroAutor", "errorAutor");
    const anoValido = validarCampo("livroAno", "errorAno");
    const generoValido = validarCampo("livroGenero", "errorGenero");
    
    if (!tituloValido || !autorValido || !anoValido || !generoValido) {
        return;
    }

    const novo = {
        id: Date.now(),
        titulo,
        autor,
        ano,
        genero,
        disponivel: true
    };

    livros.push(novo);
    salvar("livros", livros);
    listarLivros();

    document.getElementById("livroTitulo").value = "";
    document.getElementById("livroAutor").value = "";
    document.getElementById("livroAno").value = "";
    document.getElementById("livroGenero").value = "";
    document.getElementById("errorTitulo").textContent = "";
    document.getElementById("errorAutor").textContent = "";
    document.getElementById("errorAno").textContent = "";
    document.getElementById("errorGenero").textContent = "";
    document.getElementById("livroTitulo").focus();
}

function listarLivros() {
    const tabela = document.getElementById("listaLivros");
    if (!tabela) return;

    tabela.innerHTML = "";

    livros.forEach(l => {
        tabela.innerHTML += `
            <tr data-livro-id="${l.id}">
                <td>${l.id}</td>
                <td>${l.titulo}</td>
                <td>${l.autor}</td>
                <td>${l.ano}</td>
                <td>${l.genero}</td>
                <td>${l.disponivel ? "Disponível" : "Emprestado"}</td>
                <td>
                    <button onclick="editarLivro(${l.id})">Editar</button>
                    <button onclick="deleteLivro(${l.id})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

function editarLivro(id) {
    const linha = document.querySelector(`tr[data-livro-id="${id}"]`);
    if (!linha) return;

    const livro = livros.find(l => l.id === id);
    if (!livro) return;

    linha.setAttribute('data-editing-id', id);

    const celulaTitulo = linha.cells[1];
    const celulaAutor = linha.cells[2];
    const celulaAno = linha.cells[3];
    const celulaGenero = linha.cells[4];
    const celulaAcoes = linha.cells[6];

    celulaTitulo.innerHTML = `<input type="text" id="editTitulo_${id}" value="${livro.titulo}">`;
    celulaAutor.innerHTML = `<input type="text" id="editAutor_${id}" value="${livro.autor}">`;
    celulaAno.innerHTML = `<input type="number" id="editAno_${id}" value="${livro.ano}">`;
    celulaGenero.innerHTML = `<input type="text" id="editGenero_${id}" value="${livro.genero}">`;
    celulaAcoes.innerHTML = `
        <button onclick="salvarLivro(${id})">Salvar</button>
        <button onclick="deleteLivro(${id})">Excluir</button>
    `;
}

function salvarLivro(id) {
    const titulo = document.getElementById(`editTitulo_${id}`).value;
    const autor = document.getElementById(`editAutor_${id}`).value;
    const ano = document.getElementById(`editAno_${id}`).value;
    const genero = document.getElementById(`editGenero_${id}`).value;

    if (!titulo || !autor || !ano || !genero) {
        alert("Preencha todos os campos!");
        return;
    }

    const livro = livros.find(l => l.id === id);
    if (livro) {
        livro.titulo = titulo;
        livro.autor = autor;
        livro.ano = Number(ano);
        livro.genero = genero;
        salvar("livros", livros);
        listarLivros();
        carregarSelects();
    }
}

function deleteLivro(id) {
    livros = livros.filter(l => l.id !== id);
    salvar("livros", livros);
    listarLivros();
}

carregar("emprestimos");
if (emprestimos.length === 0) {
    emprestimos = [];
    salvar("emprestimos", emprestimos);
}

function carregarSelects() {
    const selectUser = document.getElementById("selectUsuarios");
    const selectLivro = document.getElementById("selectLivros");
    const dataEmprestimo = document.getElementById("dataEmprestimo");

    if (selectUser) {
        selectUser.innerHTML = '<option value="">Selecione um usuário</option>' + 
            usuarios.map(u => `<option value="${u.id}">${u.nome}</option>`).join("");
    }

    if (selectLivro) {
        const livrosDisponiveis = livros.filter(l => l.disponivel);
        selectLivro.innerHTML = '<option value="">Selecione um livro</option>' + 
            livrosDisponiveis.map(l => `<option value="${l.id}">${l.titulo}</option>`).join("");
    }

    if (dataEmprestimo && !dataEmprestimo.value) {
        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const dia = String(hoje.getDate()).padStart(2, '0');
        dataEmprestimo.value = `${ano}-${mes}-${dia}`;
    }
}

function addEmprestimo() {
    const userId = Number(document.getElementById("selectUsuarios").value);
    const livroId = Number(document.getElementById("selectLivros").value);
    const dataInput = document.getElementById("dataEmprestimo").value;

    if (!userId || !livroId) {
        alert("Selecione um usuário e um livro!");
        return;
    }

    const livro = livros.find(l => l.id === livroId);

    if (!livro) {
        alert("Livro não encontrado!");
        return;
    }

    if (!livro.disponivel) {
        alert("Livro indisponível!");
        return;
    }

    livro.disponivel = false;

    let dataFormatada;
    if (dataInput) {
        const partes = dataInput.split('-');
        dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;
    } else {
        dataFormatada = new Date().toLocaleDateString();
    }

    const novo = {
        id: Date.now(),
        userId,
        livroId,
        data: dataFormatada,
        ativo: true
    };

    emprestimos.push(novo);
    salvar("emprestimos", emprestimos);
    salvar("livros", livros);

    listarEmprestimos();
    carregarSelects();
    
    document.getElementById("selectUsuarios").value = "";
    document.getElementById("selectLivros").value = "";
    document.getElementById("dataEmprestimo").value = "";
}

function calcularDiasAtrasado(emprestimo) {
    try {
        const partes = emprestimo.data.split('/');
        const dataEmprestimo = new Date(partes[2], partes[1] - 1, partes[0]);
        const hoje = new Date();
        
        const diferenca = hoje - dataEmprestimo;
        
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        
        return dias;
    } catch (e) {
        return 0;
    }
}

function listarEmprestimos() {
    const tabela = document.getElementById("tabela-emprestimos");
    if (!tabela) return;

    tabela.innerHTML = "";

    const emprestimosOrdenados = [...emprestimos].sort((a, b) => {
        try {
            const partesA = a.data.split('/');
            const partesB = b.data.split('/');
            const dataA = new Date(partesA[2], partesA[1] - 1, partesA[0]);
            const dataB = new Date(partesB[2], partesB[1] - 1, partesB[0]);
            return dataB - dataA;
        } catch (e) {
            return 0;
        }
    });

    if (emprestimosOrdenados.length === 0) {
        tabela.innerHTML = `<tr><td colspan="7" style="text-align: center;">Nenhum empréstimo registrado</td></tr>`;
        return;
    }

    emprestimosOrdenados.forEach(e => {
        const user = usuarios.find(u => u.id === e.userId);
        const livro = livros.find(l => l.id === e.livroId);

        const diasAtrasado = calcularDiasAtrasado(e);
        const estaAtrasado = diasAtrasado > 7 && e.ativo;
        const alertaTexto = estaAtrasado 
            ? `<span style="color: red; font-weight: bold;">⚠️ Atrasado ${diasAtrasado} dias</span>` 
            : (e.ativo ? "✅ No prazo" : "-");

        tabela.innerHTML += `
            <tr ${estaAtrasado ? 'style="background-color: #ffe6e6;"' : ''}>
                <td>${user?.nome || "Usuário não encontrado"}</td>
                <td>${livro?.titulo || "Livro não encontrado"}</td>
                <td>${e.data}</td>
                <td>${e.dataDevolucao || "-"}</td>
                <td>${e.ativo ? "Emprestado" : "Devolvido"}</td>
                <td>${alertaTexto}</td>
                <td>
                    ${e.ativo ? `<button onclick="devolver(${e.id})">Devolver</button>` : "-"}
                </td>
            </tr>
        `;
    });
}

function devolver(id) {
    const emp = emprestimos.find(e => e.id === id);
    if (!emp) return;

    emp.ativo = false;
    emp.dataDevolucao = new Date().toLocaleDateString();

    const livro = livros.find(l => l.id === emp.livroId);
    if (livro) {
        livro.disponivel = true;
    }

    salvar("emprestimos", emprestimos);
    salvar("livros", livros);

    listarEmprestimos();
    carregarSelects();
}

listarUsuarios();
listarLivros();
listarEmprestimos();
carregarSelects();
