const { resolve } = require('path')
export default {
    plugins: [],
    server: {
        open: '/index.html',
        port: 3116,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                billingInformation: resolve(__dirname, 'billingInformation.html'),
                productWithSidebar: resolve(__dirname, 'productWithSidebar.html'),
                productDetails: resolve(__dirname, 'productDetails.html'),
                productGrid: resolve(__dirname, 'productGrid.html'),
                productListWithSidebar: resolve(__dirname, 'productListWithSidebar.html'),
                shopingCart: resolve(__dirname, 'shopingCart.html'),
                signIn: resolve(__dirname, 'signIn.html'),
                signUp: resolve(__dirname, 'signUp.html'),
                thankYou: resolve(__dirname, 'thankYou.html')
            }
        }
    }
}