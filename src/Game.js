export const Game = (props) => {
    const { img, title, author, number } = props;
    return (
        <article className="game">
            <img className="game-img" src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <span className="number">{`# ${number}`}</span>
        </article>
    );
};
