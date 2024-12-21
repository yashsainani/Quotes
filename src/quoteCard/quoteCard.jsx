import styles from './quoteCard.module.css';

const QuoteCard = ({quote, author}) => {
    return (
        <div className={styles['quote-div']}>
            <p>{quote}</p>
            <span>{author}</span>
        </div>
    );
};

export default QuoteCard;