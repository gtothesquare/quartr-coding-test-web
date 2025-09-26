import { companies } from '~/db/companies';

export async function GET() {
  return Response.json(companies);
}
