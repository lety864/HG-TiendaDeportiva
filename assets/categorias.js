// Simulación de la base de datos (una lista de objetos)
let Football = [
    { id: 1, nombre: 'Balón de Fútbol Adidas', precio: 50.00, stock: 15, imagen:"https://m.media-amazon.com/images/I/71bgARSO2EL.jpg"},
    { id: 2, nombre: 'Zapatillas Running Nike', precio: 120.50, stock: 25, imagen:"https://ss203.liverpool.com.mx/xl/1163101773.jpg" },
    { id: 3, nombre: 'Camiseta NBA Lakers', precio: 85.00, stock: 10, imagen:"https://images.stockx.com/images/Nike-NBA-Lakers-Anthony-Davis-Swingman-Jersey-Black.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color&updated_at=1683145290" }
];

let  BasquetBall= [
    { id: 1, nombre: 'Balón de Basquet', precio: 50.00, stock: 15, imagen:"https://contents.mediadecathlon.com/p2942851/k$aa4b15b68d6057beed7b338d3f5c2764/balon-de-basquetbol-adulto-r100-talla-7-naranja-perfecto-iniciacion-y-resistente.jpg"},
    { id: 2, nombre: 'Zapatillas Basquet', precio: 120.50, stock: 25, imagen:"https://m.media-amazon.com/images/I/41LgXU9HcLL._SR290,290_.jpg"},
    { id: 3, nombre: 'Camiseta', precio: 85.00, stock: 10, imagen:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d9f55169-72c8-4503-a0a2-b65dc5e1f3ec/SEL+MNK+DF+JSY+V5+DURANT.png"}
];

let  BaseBall= [
    { id: 1, nombre: 'Pelota de Baseball', precio: 50.00, stock: 15, imagen:"https://chapurmx.vtexassets.com/arquivos/ids/277508-800-auto?v=638348556161870000&width=800&height=auto&aspect=true"},
    { id: 2, nombre: 'Guante de Baseball', precio: 120.50, stock: 25, imagen:"https://i5.walmartimages.com/asr/fe25106d-1d8f-4383-8be2-a6c8de1895df.5e9444b5d614dd257d564dcdc1a1feb6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"},
    { id: 3, nombre: 'Jersey de Baseball', precio: 85.00, stock: 10, imagen:"https://beisbolmania.mx/cdn/shop/files/SERPIENTESCAMISOLATIENDADEBEISBOLBEISBOLSPORTSBEISBOLMANIA_2000x.jpg?v=1694107443"}
];

module.exports = { Football, BasquetBall, BaseBall };
