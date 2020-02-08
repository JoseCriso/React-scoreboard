import React from 'react';
import { render } from '@testing-library/react';
import Player from './Player';

jest.mock('../context', () => ({

}));

describe('Player.js', () => {
    test('Show score will be zero', () => {
       const { getByTestId } = render(
       <Player name="John Doe" score="0" index="0" />
       );
       expect(getByTestId('score').textContent).toBe('0');
    });
});