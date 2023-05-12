import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import Search from './Search';

const onChange = jest.fn();
//I have a dream 
describe("Search component", () => {
    test('renders search component with children', () => {
        render(<Search onChange={onChange} children={'Find'} value="" />)
        expect(screen.getByText(/find/i)).toBeInTheDocument();    
    });
    test('renders search component without chldren', () => {
        render(<Search onChange={onChange} value="" />)
        expect(screen.getByText(/search/i)).toBeInTheDocument();    
    });
    test('renders with placeholder', () => {
        render(<Search onChange={onChange} children={'Find'} value="" placeholder={'Hello'} />)
        expect(screen.getByPlaceholderText(/hello/i)).toBeInTheDocument();    
    });
    test('renders without placeholder', () => {
        render(<Search onChange={onChange} value="" />)
        expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();    
    });
    // fireEvent და useEvent ი პრინციპში ერთსა და იმავე საქმეს აკეთებენ
    test('onChange should work', () => {
        render(
            <Search value="" onChange={onChange} />
        );
        // მოველით რომ onChange გამოიძახება 5 ჯერ  ანუ 'React' = 5 ასო
        userEvent.type(screen.getByRole('textbox'), 'React');
        expect(onChange).toHaveBeenCalledTimes(5);
    })
    // Test styles
    it('dynamic styles work', () => {
        render(<Search value='abv' onChange={onChange} />);
        // ველით რომ ექნება ასეთი კლასი 
        // toHaveStyle თუ ინლაინად გვაქ style გამოყენებული
        expect(screen.getByRole('textbox')).toHaveClass('input')
        expect(screen.getByRole('textbox')).toHaveClass('filled')
        expect(screen.getByText('Search')).toHaveClass('label')
    })
    // snapshot
    it('Search snapshot', () => {
        const search = render(
            <Search children='Find: ' onChange={onChange} value=""/>
        );
        expect(search).toMatchSnapshot();
    })
})