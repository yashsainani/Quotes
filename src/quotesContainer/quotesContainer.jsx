import QuoteCard from '../quoteCard/quoteCard';
import styles from './quotesContainer.module.css';
import data from '../data';

const QuotesContainer = () => {
    return (
        <section className={styles['quotes-container']}>
            {
                data.map((ele, idx) => <QuoteCard key={`${ele.author}_${idx}`} quote={ele.quote} author={ele.author} />)
            }
        </section>
    );
};

export default QuotesContainer;