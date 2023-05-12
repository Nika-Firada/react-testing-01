import { render, screen, act } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'; 

// 'test name', () => {test description}
describe('renders', () => {
    it('app render', () => {
        render(<App />);
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText('Find Course')).toBeInTheDocument();
    });
    it('typing in searchbox works', () => {
        render(<App />);
        expect(screen.queryByDisplayValue(/React/)).toBeNull();
        userEvent.type(screen.getByRole('textbox'), 'React');
        expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
    });
    it('search filter is working', () => {
        render(<App />);
        expect(screen.getByText('vue')).toBeInTheDocument();
        expect(screen.getByText('javascript')).toBeInTheDocument();
        // userEvent.type(screen.getByRole('textbox'), 'script');
        // async
        act(() => {
            userEvent.type(screen.getByRole('textbox'), 'script');
        });
        expect(screen.queryByText(/vue/)).toBeNull();
        expect(screen.queryByText('javascript')).toBeInTheDocument();
    });
    test('App snap', () => {
        const appComponent = render(<App />)
        // creates snapshot
        expect(appComponent).toMatchSnapshot();
    });
});
