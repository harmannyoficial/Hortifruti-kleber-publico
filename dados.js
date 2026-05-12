// USUÁRIO DO ADMINISTRADOR
const ADMIN_USUARIO = "admin";
// SENHA DO ADMINISTRADOR
const ADMIN_SENHA = "admin";

// USUÁRIO MASTER PARA AÇÕES CRÍTICAS
const MASTER_USUARIO = "master";
// SENHA MASTER PARA AÇÕES CRÍTICAS
const SENHA_MASTER = "master123";

// USUÁRIO RESET PARA REINICIAR LOJA (CRIADOR/PROGRAMADOR)
const RESET_USUARIO = "criador";
// SENHA RESET PARA REINICIAR LOJA
const RESET_SENHA = "reiniciar123";

// =========================================================
// CATEGORIAS
// Adicione mais categorias se quiser
// =========================================================
const CATEGORIAS = [
  { id: "frutas", nome: "🍎 Frutas", cor: "#e8533a" },
  { id: "verduras", nome: "🥬 Verduras", cor: "#3aad5e" },
  { id: "legumes", nome: "🥕 Legumes", cor: "#f0a500" },
  { id: "temperos", nome: "🌿 Temperos", cor: "#7cb87a" },
  { id: "organicos", nome: "🌱 Orgânicos", cor: "#5ab88e" },
];

// =========================================================
// PRODUTOS
//
// COMO ADICIONAR UM NOVO PRODUTO:
//
// Copie um bloco { ... } e cole abaixo.
//
// CAMPOS:
// id                = número único
// nome              = nome do produto
// categoria         = categoria cadastrada acima
// preco             = preço
// unidade           = kg, unidade, caixa, etc
// foto              = link da imagem
// desconto          = porcentagem
// descontoAtivo     = mostra desconto para cliente
// estoque           = quantidade em estoque
// estoqueUnidade    = medida do estoque
// vendas            = quantidade vendida
//
// NOVA FUNÇÃO:
// quantidadeMinima  = quantidade inicial no carrinho
//
// Exemplo:
// quantidadeMinima: 1
//
// Todos os novos produtos já terão quantidade automática.
// =========================================================

let PRODUTOS = [

  {
    id: 1,
    nome: "Banana Prata",
    categoria: "frutas",
    preco: 5.99,
    unidade: "kg",
    foto: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400",
    desconto: 0,
    descontoAtivo: true,
    estoque: 50,
    estoqueUnidade: "caixa",
    vendas: 42,
    quantidadeMinima: 1,
    custoFornecedor: 3.50
  },

  {
    id: 2,
    nome: "Maçã Gala",
    categoria: "frutas",
    preco: 8.99,
    unidade: "kg",
    foto: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400",
    desconto: 0,
    descontoAtivo: false,
    estoque: 30,
    estoqueUnidade: "caixa",
    vendas: 28,
    quantidadeMinima: 1,
    custoFornecedor: 5.00
  },

  {
    id: 3,
    nome: "Alface Crespa",
    categoria: "verduras",
    preco: 3.49,
    unidade: "unidade",
    foto: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400",
    desconto: 0,
    descontoAtivo: false,
    estoque: 80,
    estoqueUnidade: "unidade",
    vendas: 35,
    quantidadeMinima: 1,
    custoFornecedor: 1.80
  },

  {
    id: 4,
    nome: "Cenoura",
    categoria: "legumes",
    preco: 4.29,
    unidade: "kg",
    foto: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400",
    desconto: 0,
    descontoAtivo: true,
    estoque: 60,
    estoqueUnidade: "kg",
    vendas: 20,
    quantidadeMinima: 1,
    custoFornecedor: 2.50
  },

  {
    id: 5,
    nome: "Morango",
    categoria: "frutas",
    preco: 12.99,
    unidade: "caixa",
    foto: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=400",
    desconto: 0,
    descontoAtivo: true,
    estoque: 25,
    estoqueUnidade: "caixa",
    vendas: 58,
    quantidadeMinima: 1,
    custoFornecedor: 8.00
  },

  {
    id: 6,
    nome: "Tomate Italiano",
    categoria: "legumes",
    preco: 6.49,
    unidade: "kg",
    foto: "https://th.bing.com/th/id/OIP.8RA07Nclxpk1xYCRJWLCIwHaE8?w=237&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    desconto: 0,
    descontoAtivo: false,
    estoque: 40,
    estoqueUnidade: "kg",
    vendas: 31,
    quantidadeMinima: 1,
    custoFornecedor: 4.00
  },

  {
    id: 7,
    nome: "Laranja-pêra",
    categoria: "frutas",
    preco: 6.49,
    unidade: "kg",
    foto: "https://tse1.mm.bing.net/th/id/OIP.rUIS4y2729OMOzkoakfqagHaJI?rs=1&pid=ImgDetMain&o=7&rm=3",
    desconto: 0,
    descontoAtivo: false,
    estoque: 40,
    estoqueUnidade: "kg",
    vendas: 31,
    quantidadeMinima: 1,
    custoFornecedor: 3.80
  },

];

// =========================================================
// WHATSAPP DA LOJA
// Apenas números
// Exemplo:
// 5511999999999
// =========================================================
const WHATSAPP_LOJA = "5511959175925";

// =========================================================
// TAXA DE ENTREGA
// =========================================================
const TAXA_ENTREGA = 5.00;

// =========================================================
// NOME DA LOJA
// =========================================================
const NOME_LOJA = "Frutaria Dona Tônia";

// PRODUTOS
// Para adicionar um produto, copie um bloco { ... } e cole abaixo
// foto: URL de imagem (pode usar link do Google, iFood, etc.)
// unidade: "kg", "unidade", "caixa", "grama", "maço"
// estoque: quantidade atual
// desconto: 0 = sem desconto, 10 = 10%, etc.
// descontoAtivo: true = aparece pro cliente, false = escondido