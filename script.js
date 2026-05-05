let carrinho = [];

/* LISTA DE PRODUTOS */
const products = [
  { nome: "Ignite Blueberry Ice", preco: 80, img: "https://cdn.paradisevape.com.br/upload/product/41461/ignite-v150-blueberry-ice.jpg" },
  { nome: "Ignite Watermelon Ice", preco: 80, img: "https://www.starcompany-py.com/2736-large_default/ignite-v150-pro-strawberry-watermelon-ice.jpg" },
  { nome: "Ignite Mango Peach Watermelon", preco: 75, img: "https://mundovape.net/wp-content/uploads/2025/09/V400-Peach-Mango-Watermelon-768x768.jpg" },
  { nome: "Ignite Strawberry Banana", preco: 75, img: "https://cdn.awsli.com.br/2500x2500/2455/2455278/produto/379866595/strawberry-banana-fh0f49x2ci.png" },
  { nome: "Ignite Grape Ice", preco: 70, img: "https://mundovape.net/wp-content/uploads/2024/12/Grape-Ice-12k.png" },

  { nome: "Oxbar Blue Razz Ice", preco: 70, img: "https://apotecario.cl/wp-content/uploads/2025/02/Oxbar-Liso-Blue-Razz-Ice.jpg" },
  { nome: "Oxbar Strawberry Watermelon", preco: 80, img: "https://oxbarofficialsite.com/wp-content/uploads/2025/03/strawberry-watermelon-dragonfruit-pod-juice-oxbar-nic-switch-1-768x768.jpg" },
  { nome: "Oxbar Peach Ice", preco: 70, img: "https://www.vapeluv.com/cdn/shop/files/OXBAR-TRI-FUSION-30ML-DISPOSABLE-VAPE-PeachIce.jpg?v=1753819297&width=1206" },
  { nome: "Oxbar Watermelon Bubblegum", preco: 60, img: "https://fruitsvapor.com.br/wp-content/uploads/2025/01/Watermelon-Bubble-Gum.jpg" },
  { nome: "Oxbar Cool Mint", preco: 50, img: "https://tse1.mm.bing.net/th/id/OIP.2E1r7MD5KkeKXeHackPQAAHaHa?pid=Api&P=0&h=180" },

  { nome: "Elfbar Blue Razz Ice", preco: 65, img: "https://res.cloudinary.com/www180smokeca/image/upload/c_lpad,dpr_2.0,f_auto,g_auto:subject,q_auto/v1/media/catalog/product/e/l/elfbar_gh2000_0000s_0001_blue_razz_ice.jpg" },
  { nome: "Elfbar Strawberry Banana", preco: 75, img: "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD754/2411/28/products/StrawberryBananaElfbarGH23000Flavor-b4fa.png" },
  { nome: "Elfbar Watermelon Ice", preco: 75, img: "https://www.vapebro.in/cdn/shop/files/ELFBAR-RAYA-D3-DISPOSABLE-VAPE-25000-PUFFS-WATERMELON-ICE-VapeBro.jpg?v=1725522517&width=1100" },
  { nome: "Elfbar Peach Mango Watermelon", preco: 65, img: "https://shopelfbar.ca/cdn/shop/files/ELFBAR-GH20000-Peach-Mango-Watermelon-Disposable-Vape-Nic-Salts-Canada-1.jpg?v=1734083263&width=1445" },
  { nome: "Elfbar Grape Ice", preco: 90, img: "https://ueeshop.ly200-cdn.com/u_file/UPBF/UPBF242/2505/06/products/d18dfa0c1b.jpg" }
];

/* RENDERIZAR PRODUTOS */
function renderProdutos() {
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";

  products.forEach(produto => {
    grid.innerHTML += `
      <div class="card">
        <img src="${produto.img}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="adicionarCarrinho('${produto.nome}', ${produto.preco})">
          Adicionar
        </button>
      </div>
    `;
  });
}

/* ADICIONAR AO CARRINHO */
function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });

  document.getElementById("cart-count").innerText = carrinho.length;

  const cart = document.querySelector(".cart");
  cart.classList.add("pulse");

  setTimeout(() => {
    cart.classList.remove("pulse");
  }, 400);
}

/* ABRIR MODAL */
function abrirPagamento() {
  document.getElementById("modalPagamento").style.display = "flex";
  atualizarCarrinho();
}

/* FECHAR MODAL */
function fecharPagamento() {
  document.getElementById("modalPagamento").style.display = "none";
}

/* ATUALIZAR CARRINHO */
function atualizarCarrinho() {
  const lista = document.getElementById("listaCarrinho");
  const total = document.getElementById("totalCarrinho");

  lista.innerHTML = "";
  let soma = 0;

  carrinho.forEach((produto, index) => {
    soma += produto.preco;

    lista.innerHTML += `
      <div class="itemCarrinho">
        <span>${produto.nome} - R$ ${produto.preco.toFixed(2)}</span>
        <button onclick="removerItem(${index})">Excluir</button>
      </div>
    `;
  });

  total.innerText = soma.toFixed(2);
}

/* REMOVER ITEM */
function removerItem(index) {
  carrinho.splice(index, 1);
  document.getElementById("cart-count").innerText = carrinho.length;
  atualizarCarrinho();
}

/* TROCAR MÉTODO */
function mostrarMetodo() {
  const metodo = document.getElementById("metodoPagamento").value;

  document.getElementById("cartaoBox").style.display =
    metodo === "cartao" ? "block" : "none";

  document.getElementById("pixBox").style.display =
    metodo === "pix" ? "block" : "none";
}

/* FINALIZAR COMPRA */
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  alert("Pagamento confirmado com sucesso!");

  carrinho = [];
  document.getElementById("cart-count").innerText = 0;

  atualizarCarrinho();
  fecharPagamento();
}

/* ROLETA PROMOCIONAL */
function girarRoleta() {
  let sorteados = [];
  let resultado = document.getElementById("resultadoRoleta");

  resultado.innerHTML = "<p>🎰 Girando a roleta...</p>";

  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      let aleatorio = products[Math.floor(Math.random() * products.length)];
      sorteados.push(aleatorio);
    }

    carrinho.push({
      nome: "Promoção Roleta (5 Pods Aleatórios)",
      preco: 180
    });

    document.getElementById("cart-count").innerText = carrinho.length;

    resultado.innerHTML = `
      <h4>Pods sorteados:</h4>
      ${sorteados.map(p => `<p>${p.nome}</p>`).join("")}
      <p><strong>Adicionado ao carrinho por R$ 180,00</strong></p>
    `;
  }, 1500);
}

/* INICIAR */
renderProdutos();function formatarValidade(input) {
                     let valor = input.value.replace(/\D/g, '');

                     if (valor.length > 4) {
                         valor = valor.slice(0, 4);
                     }

                     if (valor.length > 2) {
                         valor = valor.slice(0, 2) + '/' + valor.slice(2);
                     }

                     input.value = valor;
                 }