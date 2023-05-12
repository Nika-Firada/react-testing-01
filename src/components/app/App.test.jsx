import { render, screen } from '@testing-library/react';
import App from './App';


// 'test name', () => {test description}
describe('renders', () => {
    it('app render', () => {
        render(<App />);
        // screen.debug();
        expect(screen.getByRole('list')).toBeInTheDocument;
    })
});
