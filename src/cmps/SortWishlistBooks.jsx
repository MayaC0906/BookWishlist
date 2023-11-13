

export function SortWishlistBooks({ sortByTitle, sortByNumber }) {
    return (
        <section className="book-sortby">
            <button onClick={sortByTitle}>Title</button>
            <button onClick={() => sortByNumber('price')}>Price</button>
            <button onClick={() => sortByNumber('rating')}>Rating</button>
        </section>
    )
}

