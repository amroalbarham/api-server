test('add 1 +2 to equal 3',()=>{
  expect(1+2).toBe(3);
});

'use strict';

const supertest=require('supertest');
const server=require('../server');
const request=supertest(server.app);


describe('api server',()=>{
  it('handler invalid request',async ()=>{
    const response=await request.get('/fooo');
    expect(response.status).toEqual(404);
  });
  it('handler errors',async ()=>{
    const response=await request.get('/bad');
    expect(response.status).toEqual(500);
  });
  it('correct work',async ()=>{
    const response=await request.get('/');
    expect(response.status).toEqual(200);
  });
});