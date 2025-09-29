// Simulación de la base de datos (una lista de objetos)
let Football = [
    { id: 1, nombre: 'Balón de Fútbol', precio: 500.00, stock: 15, imagen:"https://m.media-amazon.com/images/I/71bgARSO2EL.jpg"},
    { id: 2, nombre: 'Calzado deportivo futbolista', precio: 1200.00, stock: 25, imagen:"https://ss203.liverpool.com.mx/xl/1163101773.jpg" },
    { id: 3, nombre: 'Jersey', precio: 850.00, stock: 10, imagen:"https://jerseyhubmx.com/cdn/shop/files/AF3AE436-172B-4BBC-9F80-A38E77B354BC.jpg?v=1710908851&width=1946" }
    { id: 4, nombre: 'Espinilleras', precio: 200.00, stock: 13, imagen:"https://ss201.liverpool.com.mx/xl/1144554490.jpg"},
    { id: 5, nombre: 'Medias de fútbol', precio: 300.00, stock: 12, imagen:"https://voit.vtexassets.com/arquivos/ids/162312-800-800?v=638354897410630000&width=800&height=800&aspect=true" },
    { id: 6, nombre: 'Short', precio: 250.00, stock: 9, imagen:"https://unicosmoderna.com/cdn/shop/files/SHORT-ADIDAS-EH4210-HOMBRE-MARINO-156114_1.jpg?v=1745868738&width=2048" },
    { id: 7, nombre: 'Brazalete de capitán', precio: 200.00, stock: 5, imagen:"https://i5.walmartimages.com/asr/7958f91c-5435-43f1-ad78-159844bf87a6.5f50958f353ac49219307055749d94b5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" }
];

let  BasquetBall= [
    { id: 1, nombre: 'Balón de Basquet', precio: 300.00, stock: 35, imagen:"https://contents.mediadecathlon.com/p2942851/k$aa4b15b68d6057beed7b338d3f5c2764/balon-de-basquetbol-adulto-r100-talla-7-naranja-perfecto-iniciacion-y-resistente.jpg"},
    { id: 2, nombre: 'Zapatillas de Basquet', precio: 1800.50, stock: 25, imagen:"https://m.media-amazon.com/images/I/41LgXU9HcLL._SR290,290_.jpg"},
    { id: 3, nombre: 'Camiseta NBA', precio: 900.00, stock: 10, imagen:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d9f55169-72c8-4503-a0a2-b65dc5e1f3ec/SEL+MNK+DF+JSY+V5+DURANT.png"}
    { id: 4, nombre: 'Short de Basquet', precio: 500.00, stock: 15, imagen:"https://ss205.liverpool.com.mx/xl/1163088003.jpg"},
    { id: 5, nombre: 'Muñequeras', precio: 300.0, stock: 25, imagen:"https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/493d7df7-4745-4dee-a113-9b2b4732065d/NIKE+WRISTBANDS+NBA.png"},
    { id: 6, nombre: 'Rodilleras acolchadas', precio: 180.00, stock: 10, imagen:"https://contents.mediadecathlon.com/p2348092/k$64a5d843dcdea5608ae0fcd0f1d386fa/pqt-de-2-rodilleras-de-proteccion-de-basquetbol-adulto.jpg"}
];

let  BaseBall= [
    { id: 1, nombre: 'Pelota de Baseball', precio: 50.00, stock: 15, imagen:"https://chapurmx.vtexassets.com/arquivos/ids/277508-800-auto?v=638348556161870000&width=800&height=auto&aspect=true"},
    { id: 2, nombre: 'Guante de Baseball', precio: 120.50, stock: 25, imagen:"https://i5.walmartimages.com/asr/fe25106d-1d8f-4383-8be2-a6c8de1895df.5e9444b5d614dd257d564dcdc1a1feb6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"},
    { id: 3, nombre: 'Jersey de Baseball', precio: 85.00, stock: 10, imagen:"https://beisbolmania.mx/cdn/shop/files/SERPIENTESCAMISOLATIENDADEBEISBOLBEISBOLSPORTSBEISBOLMANIA_2000x.jpg?v=1694107443"}
    { id: 4, nombre: 'Bate de Baseball', precio: 500.00, stock: 13, imagen:"https://static.wixstatic.com/media/1636a6_ed73c0e079f844f2be24bd6adbcdfe3f~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1636a6_ed73c0e079f844f2be24bd6adbcdfe3f~mv2.jpg"},
    { id: 5, nombre: 'Pantalón de Baseball', precio: 500.00, stock: 12, imagen:"https://beisbolmania.mx/cdn/shop/products/PantalonDeBeisbolSoftbolBeisportCortoGrisAdulto_3333x.jpg?v=1627345292" },
    { id: 6, nombre: 'Máscara protectora', precio: 600.00, stock: 9, imagen:"https://m.media-amazon.com/images/I/713oDSlKxxL._UF894,1000_QL80_.jpg" },
    { id: 7, nombre: 'Peto protector', precio: 1000.00, stock: 5, imagen:"https://m.media-amazon.com/images/I/71+VIC0hsqL.jpg" }
];

module.exports = { Football, BasquetBall, BaseBall };
