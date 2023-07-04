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
product.addProduct ('Gorra F1', 'Gorra precurvada Oracle Red Bull Racing 2023 New Era Max Verstappen 9FIFTY', 57, '#', 'GF1', 50 );
product.addProduct ('Remera F1', 'Camiseta Scuderia Ferrari 2023 Equipo Charles Leclerc', 95, '#', 'RF1', 65 );
product.addProduct ('Buzo F1', 'Chaqueta Softshell del equipo Scuderia Ferrari 2023', 152, '#', 'BF1', 30 );
product.addProduct ('Taza F1', 'Taza Mercedes AMG Petronas F1', 20, '#', 'TF1', 120 );
product.addProduct ('Sweater F1', 'Sudadera Mercedes AMG Petronas George Russell 2023 Edición especial', 160, '#', 'SF1', 55 );

product.getProductbyId(1);
product.getProductbyId(2);
product.getProductbyId(3);
product.getProductbyId(4);
product.getProductbyId(5);

console.log(product.getProducts());