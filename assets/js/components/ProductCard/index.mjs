import { Component } from "../../Component.mjs";

const imageSrc = (code) => `https://github.com/fd-freshjs/serve-json/raw/main/assets/images/mebel/${code}.png`;


class ProductCard extends Component {
  heartHTML = `<svg>
    <rect width="10" height="10" fill="white" />
  </svg>`;

  buyBtnHandler() {
    
  }

  favBtnHandler() {
    
  }

  render() {
    const { product: { name, code, price } } = this.props;

    return this.html`
      <card class="product-card d-flex flex-column">
        <a href="${`/product/?code=${code}`}">
          <img src="${imageSrc(code)}" />
        </a>
        <h6>
          
            ${name}
          </a>
        </h6>
        <p>
          <span>${price.old} руб.</span>
          <span>${price.current} руб.</span>
        </p>
        <div>
          <button onclick="${this.buyBtnHandler}">купить</button>
          <button onclick="${this.favBtnHandler}">
            ${{ html: this.heartHTML }}
          </button>
        </div>
      </card>
    `;
  }
}

export default ProductCard;
