import { getByTestId, render, screen } from "@testing-library/react";
import MyStore from "./MyStore";

describe('MyStore', () => {
    test('renders title', () => {
        // Arrange
        const { container } = render(<MyStore />);
        
        // Act
        const title = getByTestId(container, 'title');

        // Assert
        expect(title).toBeInTheDocument();
    });

    test('renders buttons', () => {
        render(<MyStore />);
        const incrementBtn = screen.queryByText('Increment');
        const decrementBtn = screen.queryByText('Decrement');
        expect(incrementBtn).toBeInTheDocument();
        expect(decrementBtn).toBeInTheDocument();
    });

    test('renders data from api', () => {
        window.fetch = jest.fn();
        // window.fetch.mockResolvedValueOnce(
        //     {
        //         json: async () => [1, 2, 3]
        //     }
        // );
        render(<MyStore />);
    });
});