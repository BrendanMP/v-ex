<template>
  <div class="home">
    <div class="product d-none">
      <div class="row no-gutters">
        <div class="col-lg-6 product__image">
          <div>
            <img src="../assets/chair.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product__panel">
            <div class="product__details">
              <main>
                <h5>Details</h5>
                <p>{{ product.details }}</p>
              </main>
              <footer>
                <h2 class="price">${{ product.price }}</h2>
              </footer>
            </div>
          </div>
          <div class="product__panel">
            <div class="row product__variations">
              <div class="col-md-6">
                <h5>Colors</h5>
              </div>
              <div class="col-md-6">
                <h5 class="price">Quantity</h5>
              </div>
            </div>
            <div class="row product__actions">
              <div class="col-md-6">
                <button class="btn btn--large btn--outline">Add to List</button>
              </div>
              <div class="col-md-6">
                <button class="btn btn--large btn--block">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Proto',
      product: {
        name: 'Lada',
        price: '196.89',
        categories: ['Living Room', 'Home Decor'],
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit eros purus, sed volutpat augue semper a. Vivamus mollis elit et finibus gravida. Vivamus in justo nec nunc elementum finibus eget non eros.'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  @import "../styles/vars";

  .home {
    > .row {
      height: 100vh;
    }
  }

  .product {
    &__panel {
      display: flex;
      flex-direction: column;
      padding: 3rem;
      background: $color-white;
      min-height: 50vh;
      border-bottom: 1px solid $color-light-gray;
      &:last-of-type {
        border-bottom: 0;
      }
    }
    &__variations {
      flex: 1 1 auto;
    }
    &__actions {
      flex: 0 1 auto;
    }
    &__details {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      main {
        flex: 1 1 auto;
        p {
          max-width: 30em;
        }
      }
    }
    &__image {
      flex: 1 1 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid $color-light-gray;
      img {
        max-width: 40rem;
      }
    }
  }
</style>
