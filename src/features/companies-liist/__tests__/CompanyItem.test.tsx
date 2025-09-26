import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CompanyItem } from '../CompanyItem';
import { companyMock } from '~/features/company-page/__tests__/__mocks__/companyMock';

test('renders company item', () => {
  render(<CompanyItem company={companyMock} />);
  expect(
    screen.getByRole('heading', { level: 3, name: 'M Vest Water' })
  ).toBeDefined();

  expect(
    screen.getByText(
      'M Vest Water AS develops and sells wastewater treatment solutions. The company offers NorwaCo, an absorbent media used in demountable BOD reduction systems; NorwaFloc, a natural and biodegradable combined flocculant/coagulant; NorwaPol, a polishing reactor; and NorwaMix, a modular and mobile production and dosing unit. It serves upstream and downstream oil and gas, fishing and fish-farming, sludge dewatering, municipal, mining, pulp and paper industries. The company primarily operates in Norway; the Middle East; China, Japan; Malaysia. M Vest Water AS was incorporated in 2017.'
    )
  ).toBeDefined();

  const image = screen.getByAltText('M Vest Water');
  expect(image).toBeDefined();
});
