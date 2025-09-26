import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LogoBanner } from '../LogoBanner';
import { companyMock } from './__mocks__/companyMock';

test('renders company logo baner', () => {
  render(<LogoBanner company={companyMock} />);
  const image = screen.getByAltText('M Vest Water');
  expect(image).toBeDefined();
});
