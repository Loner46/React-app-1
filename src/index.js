import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { games } from "./games";
import { Game } from "./Game";

const GameList = () => {
    return (
        <>
            <h1>Best Games on 2023</h1>
            <section className="gamelist">
                {games.map((game, index) => {
                    return <Game {...game} key={game.id} number={index + 1} />;
                })}
            </section>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<GameList />);
