import { companies } from '~/db/companies';

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(companies);
}
