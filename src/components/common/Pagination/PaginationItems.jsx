import "./PaginationItems.css";
import Pagination from 'react-bootstrap/Pagination';

function PaginationItems({ currentPage, totalPages, onPageChange }) {

    let items = [];

    // Calcular el rango visible de páginas para no mostrar 100 botones de golpe
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    for (let number = startPage; number <= endPage; number++) {
        items.push(
            <Pagination.Item 
                key={number} 
                active={number === currentPage}
                onClick={() => onPageChange(number)}
                className="cyber-page-item"
            >
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination className="cyber-pagination">
            <Pagination.First 
                onClick={() => onPageChange(1)} 
                disabled={currentPage === 1} 
            />
            <Pagination.Prev 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1} 
            />
            
            {startPage > 1 && <Pagination.Ellipsis disabled />}
            
            {items}

            {endPage < totalPages && <Pagination.Ellipsis disabled />}

            <Pagination.Next 
                onClick={() => onPageChange(currentPage + 1)} 
                disabled={currentPage === totalPages} 
            />
            <Pagination.Last 
                onClick={() => onPageChange(totalPages)} 
                disabled={currentPage === totalPages} 
            />
        </Pagination>
    );
}

export default PaginationItems;