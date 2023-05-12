import { render, screen } from "@testing-library/react";
import List from "./List";

const data = ['html', 'css', 'js'];


describe('List component', () => {
    test('List renders', () => {
        render(<List items={data} />)
        // get -  when you 100% expect
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText(/css/)).toBeInTheDocument();
    });
    test('List render without data', () => {
        render(<List />)
        // query - when you didnt expect or maybe expect
        expect(screen.queryByRole('list')).toBeNull();
    });

    // თუ სადმე კომპონენტში ცვლილებას შევიტან ერორი ამოვარდება, სისტემა გვეტყვის, რომ შეიცვალა...
    test('List snapshot', () => {
        const list = render(<List items={data} />)
        // creates snapshot
        expect(list).toMatchSnapshot();
    });
    test('List empty snapshot', () => {
        const list = render(<List />)
        // creates snapshot
        expect(list).toMatchSnapshot();
    });
})