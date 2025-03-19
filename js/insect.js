@import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Press+Start+2P&display=swap');

* {
    box-sizing: border-box;
}

body {
    background-color: #516dff;
    color: #fff;
    font-family: 'Press Start 2P', sans-serif;
    height: 100vh;
    margin: 0;
    text-align: center;
}

h1 {
    line-height: 1.4;
}

.btn {
    border: 0;
    background-color: #fff;
    color: #516dff;
    padding: 15px 20px;
    font-family: inherit;
    cursor: pointer;
}

.btn:hover {
    opacity: 0.9;
}

.screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}

.insects-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0
}

.insects-list li {
    margin: 10px;
}

.choose-insect-btn {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    cursor: pointer;
    font-family: inherit;
    width: 150px;
    height: 150px;
}

.choose-insects-btn img {
    width: 100px;
    height: 100px;
    object-fit: contain;
}

.choose-insect-btn:active {
    background-color: rgba(255, 255, 255, 0.7);
}
