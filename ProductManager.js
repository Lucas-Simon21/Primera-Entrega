class ProductManager {
    constructor() {
        this.products= []; 
    }


getProducts = () => {
    return this.products;
}

addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
        title,
        description,    
        price,      
        thumbnail, 
        code,   
        stock,  
        products: [],

    }

    if (this.products.length === 0) {
        product.id = 1
      } else {
        product.id = this.products [this.products.length - 1].id+1 
      }
      this.products.push(product)

}

getProductbyId = (idProduct) => {

    const productIndex = this.products.findIndex(product => product.id === idProduct);
     if (productIndex === -1) {
        console.log("Not Found");
        return;
    }

    const productAdd = this.products [productIndex].products.includes(idProduct);
    if (productAdd) {
        console.log ("El producto fue agregado correctamente");
        return;
    }
    this.products[productIndex].products.push(idProduct)
}
};
const product = new ProductManager ();
product.addProduct ('Gorra F1', 'Compact', 80, 'sin imagen', 'BerCompact', 40 );
product.addProduct ('Remera F1', 'XT', 180, 'sin imagen', 'BerXT', 40 );
product.addProduct ('Buzo F1', 'Thunder', 70, 'sin imagen', 'BerThunder', 40 );
product.addProduct ('Taza F1', 'Thunder', 70, 'sin imagen', 'BerThunder', 40 );
product.addProduct ('Sweater F1', 'Thunder', 70, 'sin imagen', 'BerThunder', 40 );

product.getProductbyId(1);
product.getProductbyId(2);
product.getProductbyId(3);
product.getProductbyId(4);
product.getProductbyId(5);

console.log(product.getProducts());