import "./styles/style.css";

function App() {
  return (
    <div id="content">
    <section id="cart">
        <h3>Din handlevogn</h3>
        <div id="cart-products">
            <article class="cart-product">
                <span class="title">Dragon Zane</span>
                <span class="price">89,-</span>
                <span class="quantity">x<span class="quantity-number">1</span></span>
                <button class="delete">x</button>
            </article>
            <article class="cart-product">
                <span class="title">Master Wu MMM MMMMM MMMMMM mMm MMMMMMM MMMMMMM</span>
                <span class="price">999,-</span>
                <span class="quantity">x<span class="quantity-number">9</span></span>
                <button class="delete">x</button>
            </article>
            <article class="cart-product">
                <span class="title">Vengestone Warrior</span>
                <span class="price">89,-</span>
                <span class="quantity">x<span class="quantity-number">3</span></span>
                <button class="delete">x</button>
            </article>
        </div>
        <p>Totalt: Kr. <span id="cart-total">99999</span>,-</p>
    </section>
    <header>
        <a href="index.html" id="logo"><img src="website_images/LD_logo.svg" alt="Legodudes" /></a>
        <button id="shoppingcart">
            <span id="cartcount">99</span>
            <img src="website_images/legocart.svg" alt="Handlevogn" />
        </button>
        <nav>
            <ul>
                <li><a href="#">City</a></li>
                <li><a href="#">Ninjago</a></li>
                <li><a href="#">Castles and Knights</a></li>
                <li><a href="#">Marine and Pirates</a></li>
                <li><a href="#">Movie Characters</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Ninjago</h2>
        <div id="productlist"></div>
        {/*<!--
        <article class="product-card">
            <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
            <a href="#KATEGORISIDE">Ninjago</a>
            <h3>Dragon Zane</h3>
            <p>Kr. 89,-</p>
            <button>Legg i handlekurv</button>
        </article>
        <article class="product-card">
            <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
            <a href="#KATEGORISIDE">Ninjago</a>
            <h3>Dragon Zane</h3>
            <p>Kr. 89,-</p>
            <button>Legg i handlekurv</button>
        </article>
        <article class="product-card">
            <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
            <a href="#KATEGORISIDE">Ninjago</a>
            <h3>Dragon Zane</h3>
            <p>Kr. 89,-</p>
            <button>Legg i handlekurv</button>
        </article>
        <article class="product-card">
            <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
            <a href="#KATEGORISIDE">Ninjago</a>
            <h3>Dragon Zane</h3>
            <p>Kr. 89,-</p>
            <button>Legg i handlekurv</button>
        </article>
        <article class="product-card">
            <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
            <a href="#KATEGORISIDE">Ninjago</a>
            <h3>Dragon Zane</h3>
            <p>Kr. 89,-</p>
            <button>Legg i handlekurv</button>
        </article>
        <article class="product-card">
            <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
            <a href="#KATEGORISIDE">Ninjago</a>
            <h3>Dragon Zane</h3>
            <p>Kr. 89,-</p>
            <button>Legg i handlekurv</button>
        </article>
        <article class="product-card">
            <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
            <a href="#KATEGORISIDE">Ninjago</a>
            <h3>Dragon Zane</h3>
            <p>Kr. 89,-</p>
            <button>Legg i handlekurv</button>
        </article>
        -->*/}
    </main>
    <footer>
        <p>2025 &copy; Legodudes</p>
    </footer>
</div>
  )
}

export default App
