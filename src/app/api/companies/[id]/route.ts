import type { NextRequest } from 'next/server';
import { companies } from '~/db/companies';

const notFoundResponse = Response.json({ error: 'Not Found' }, { status: 404 });

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<'/api/companies/[id]'>
) {
  const { id } = await ctx.params;

  if (!id) {
    return notFoundResponse;
  }
  const companyId = parseInt(id);

  const company = companies.find((company) => company.companyId === companyId);

  if (!company) {
    return notFoundResponse;
  }

  return Response.json(company);
}
