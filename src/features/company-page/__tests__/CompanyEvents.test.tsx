import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CompanyEvents } from '../CompanyEvents';
import { eventsMock } from './__mocks__/companyEventMock';

test('renders company events', () => {
  render(<CompanyEvents events={eventsMock} />);
  const reportLink = screen.getByRole('link', { name: 'reportlink' });
  expect(
    screen.getByRole('heading', { level: 2, name: 'Company events' })
  ).toBeDefined();
  expect(screen.getByText('Event title')).toBeDefined();
  expect(screen.getByText('Q3 2022')).toBeDefined();
  expect(screen.getByText('Report')).toBeDefined();
  expect(reportLink.getAttribute('href')).toBe(
    'https://files.quartr.com/reports/9aae0-2022-12-14-09-52-59.pdf'
  );
  expect(screen.getByText('Event date')).toBeDefined();
  expect(screen.getByText('2022-10-26')).toBeDefined();
  expect(screen.getByText('Fiscal period')).toBeDefined();
  expect(screen.getByText('Q3')).toBeDefined();
  expect(screen.getByText('Fiscal year')).toBeDefined();
  expect(screen.getByText('2022')).toBeDefined();
});
