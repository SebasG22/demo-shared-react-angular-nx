import { render } from '@testing-library/react';

import NovatestUi from './novatest-ui';

describe('NovatestUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NovatestUi />);
    expect(baseElement).toBeTruthy();
  });
});
