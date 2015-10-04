import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {
    let { x, y, piece } = props;

    let styles = {
        width: '12.5%',
        height: '12.5%',

        backgroundColor: 'black',
        color: 'white',

        fontSize: 24,
        textAlign: 'center'
    };

    if (x % 2 === y % 2) {
        styles.WebkitFilter = 'invert(100%)';
    }

    let clickHandler = () => props.onClick(x, y);

    return <div style={styles} onClick={clickHandler}>{piece}</div>;
}

class ChessBoard extends React.Component {
    constructor() {
        super(...arguments);

        this.state = { pieces: [] };
    }

    renderSquares() {
        let squares = [];

        for (let i = 0; i < 64; i++) {
            squares.push(
                <Square
                    key={i}
                    x={i % 8}
                    y={Math.floor(i / 8)}
                    piece={this.state.pieces[i]}
                    onClick={::this.addPiece}
                />
            );
        }

        return squares;
    }

    addPiece(x, y) {
        let { pieces } = this.state,
            index = (y * 8) + x;

        if (pieces[index]) {
            delete pieces[index];
        } else {
            pieces[index] = '♕';
        }

        this.setState({ pieces });
    }

    onReset() {
        this.setState({ pieces: [] });
    }

    render() {
        let styles = {
            WebkitUserSelect: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            width: 300,
            height: 300
        };

        return (
            <div>
                <button onClick={::this.onReset} style={{ marginBottom: 10 }}>Reset</button>

                <div style={styles}>
                    {this.renderSquares()}
                </div>
            </div>
        );
    }
}

let rootElement = document.getElementById('root');
ReactDOM.render(<ChessBoard />, rootElement);
