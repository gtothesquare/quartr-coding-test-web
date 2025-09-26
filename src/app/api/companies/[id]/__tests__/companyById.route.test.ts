import { GET } from '../route';
import { describe, expect, it } from 'vitest';
import { companiesMock } from './__mocks__/companiesMock';
import { NextRequest } from 'next/server';
import { getParams } from './__mocks__/getParams';

describe('companyById', () => {
  it('should return data with status 200', async () => {
    const requestObjMock = new NextRequest('https://localhost/api/companies/1');
    const response = await GET(requestObjMock, getParams('1'));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toStrictEqual(companiesMock[0]);
  });

  it('should return data with status 404', async () => {
    const requestObjMock = new NextRequest(
      'https://localhost/api/companies/10'
    );
    const response = await GET(requestObjMock, getParams('10'));
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body).toStrictEqual({ error: 'Not Found' });
  });
});
