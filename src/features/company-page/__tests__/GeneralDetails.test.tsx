import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GeneralDetails } from '../GeneralDetails';
import { companyMock } from './__mocks__/companyMock';

test('renders company general details', () => {
  render(<GeneralDetails company={companyMock} />);
  expect(
    screen.getByRole('heading', { level: 2, name: 'General' })
  ).toBeDefined();

  expect(screen.getByText('Company')).toBeDefined();
  expect(screen.getByText('M Vest Water')).toBeDefined();
  expect(screen.getByText('Description')).toBeDefined();

  expect(
    screen.getByText(
      'M Vest Water AS develops and sells wastewater treatment solutions. The company offers NorwaCo, an absorbent media used in demountable BOD reduction systems; NorwaFloc, a natural and biodegradable combined flocculant/coagulant; NorwaPol, a polishing reactor; and NorwaMix, a modular and mobile production and dosing unit. It serves upstream and downstream oil and gas, fishing and fish-farming, sludge dewatering, municipal, mining, pulp and paper industries. The company primarily operates in Norway; the Middle East; China, Japan; Malaysia. M Vest Water AS was incorporated in 2017.'
    )
  ).toBeDefined();
  expect(screen.getByText('Company ticker')).toBeDefined();
  expect(screen.getByText('MVW')).toBeDefined();
  expect(screen.getByText('Reporting currency')).toBeDefined();
  expect(screen.getByText('NOK')).toBeDefined();
  expect(screen.getByText('Country')).toBeDefined();
  expect(screen.getByText('NO')).toBeDefined();
});
