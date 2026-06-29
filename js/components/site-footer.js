class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="rodape">
            <div class="coluna">
                <h4>
                    <strong>Daily Sentinel</strong>
                </h4>
                <p>Garantindo a noticia</p>
            </div>
            <div class="coluna">
            <h4>Editoriais</h4>
                <a href="#">Política</a>
                <a href="#">Ciência & Tecnologia</a>
                <a href="#">Celebridades & Fofocas</a>
                <a href="#">Esportes</a>
            </div>
            <div class="coluna">
            <h4>Institucional</h4>
                <a href="#">Termos de Uso</a>
                <a href="#">Privacidade</a>
                <a href="#">Quem somos</a>
                <a href="#">Contatos</a>
            </div>
        </footer>`;
  }
}

customElements.define("site-footer", SiteFooter);
