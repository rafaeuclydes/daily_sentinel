class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="cabecalho">
            <img class="logo" src="/assets/logo.png" alt="Logo do Daily Sentinel" />
            <nav class="menu">
                <a href="#">Política</a>
                <a href="#">Ciência & Tecnologia</a>
                <a href="#">Celebridades & Fofocas</a>
                <a href="#">Esportes</a>
            </nav>
        </header>`;
  }
}

customElements.define("site-header", SiteHeader);
