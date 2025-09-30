const request=require('supertest');
const app = require('../scripts/server');

describe("Probando el método GET de football", () => {
    test("Debe de responder con un código 200 y devolver un array con todos los artículos", async ()=>{
        const response=await request(app).get('/Football');
        expect(response.statusCode).toBe(200);
         expect(response.body[0]).toHaveProperty('nombre', 'Balón de Fútbol');
    })
})


describe('Probando el método GET de Basquetball', () => {
  test('Debe responder con un código 200 y devolver un arreglo de artículos de Basquetball', async () => {
    const response = await request(app).get('/Basquetball');
    expect(response.statusCode).toBe(200); 
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toHaveProperty('nombre', 'Balón de Basquet');
    expect(typeof response.body[0].precio).toBe('number');
  });
});

describe('Probando el método GET de Baseball', () => {
  test('Debe responder con un código 200 y devolver un arreglo de artículos de Baseball', async () => {
    const response = await request(app).get('/Baseball');
    expect(response.statusCode).toBe(200); 
    expect(Array.isArray(response.body)).toBe(true);
    expect(typeof response.body[0].precio).toBe('number'); 
  });
});
