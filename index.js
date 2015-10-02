import React from 'react';
import ReactDOM from 'react-dom';

let rootElement = document.getElementById('root');

class Square extends React.Component {
    onClick() {
        this.props.onClick(this.props.x, this.props.y);
    }
   render() {
      let squareColor = (this.props.x % 2) === (this.props.y % 2) ? 'white' : 'black';

      let styles = {
       fontSize: 24,
       textAlign: 'center',
        backgroundColor: squareColor,
        color: squareColor === 'white' ? 'black' : 'white',
        width: '12.5%',
        height: '12.5%'
      };

      return <div style={styles} onClick={::this.onClick}>{this.props.piece}</div>;
   }
}

class ChessBoard extends React.Component {
   constructor() {
        super(...arguments);

        this.state = { pieces: [] };
   }

  renderSquares() {
    let squares = [];

    for (let i = 0; i < 64; i++) {
      let y = Math.floor(i / 8),
          x = i % 8;

      squares.push(
        <Square
            key={i}
            x={x}
            y={y}
            piece={this.state.pieces[i]}
            onClick={::this.addPiece} />);
    }

    return squares;
  }

  addPiece(x, y) {
    let pieces = this.state.pieces,
        index = y * 8 + x;

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
      display: 'flex',
      flexWrap: 'wrap',
      width: 300,
      height: 300
    };

    let squares = this.renderSquares();

    return (
        <div>
            <button onClick={::this.onReset}>Reset</button>
            <div style={styles}>
              {squares}
            </div>
        </div>
    );
  }
}



ReactDOM.render(<ChessBoard />, rootElement);
