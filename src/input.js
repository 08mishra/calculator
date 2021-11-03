import React from 'react';
import './input.css';
import './grid.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.allClear = this.allClear.bind(this);
        this.clear = this.clear.bind(this);
        this.claculate = this.claculate.bind(this);
    }

    handleClick(event) {
        this.setState({
            input: this.state.input.concat(event.target.name)
        });
    }

    allClear() {
        this.setState({
            input: ''
        });
    }

    clear() {
        this.setState({
            input: this.state.input.slice(0, -1)
        });
    }


    claculate() {
        try {
            this.setState({
                input: eval(this.state.input)
            });
        } catch (error) {
            this.setState({
                input: 'Error'
            });
        }
    }


    render() {
        return ( <
            >
            <
            div className = 'input' >
            <
            input type = 'text'
            placeholder = '0'
            value = { this.state.input }

            id = 'value' /
            >
            <
            /
            div >




            <
            div className = 'grid' >
            <
            button id = 'AC'
            className = 'btn'
            onClick = { this.allClear } > AC < /button> <
            button id = 'C'
            className = 'btn'
            onClick = { this.clear } > C < /button > <
            button id = 'percentage'
            className = 'btn'
            name = '%'
            onClick = { this.handleClick } > % < /button> <
            button id = 'division'
            className = 'btn'
            name = '/'
            onClick = { this.handleClick } > /</button >


            <
            button name = '7'
            id = 'btn7'

            className = 'btn'
            onClick = { this.handleClick } > 7 < /button> <
            button id = 'btn8'
            name = '8'
            onClick = { this.handleClick }
            className = 'btn' > 8 < /button> <
            button id = 'btn9'
            className = 'btn'
            name = '9'
            onClick = { this.handleClick } > 9 < /button> <
            button id = 'multiply'
            className = 'btn'
            name = '*'
            onClick = { this.handleClick } > X < /button>


            <
            button id = 'btn4'
            className = 'btn'
            name = '4'
            onClick = { this.handleClick } > 4 < /button> <
            button id = 'btn5'
            className = 'btn'
            name = '5'
            onClick = { this.handleClick } > 5 < /button> <
            button id = 'btn6'
            className = 'btn'
            name = '6'
            onClick = { this.handleClick } > 6 < /button> <
            button id = 'minus'
            className = 'btn'
            name = '-'
            onClick = { this.handleClick } > - < /button>


            <
            button id = 'btn1'
            className = 'btn'
            name = '1'
            onClick = { this.handleClick } > 1 < /button> <
            button id = 'btn2'
            className = 'btn'
            name = '2'
            onClick = { this.handleClick } > 2 < /button> <
            button id = 'btn3'
            className = 'btn'
            name = '3'
            onClick = { this.handleClick } > 3 < /button> <
            button id = 'add'
            className = 'btn'
            name = '+'
            onClick = { this.handleClick } > + < /button>


            <
            button id = 'exponent'
            className = 'btn'
            name = 'e'
            onClick = { this.handleClick } > e < /button> <
            button id = '0'
            className = 'btn'
            name = '0'
            onClick = { this.handleClick } > 0 < /button> <
            button id = 'decimal'
            className = 'btn'
            name = '.'
            onClick = { this.handleClick } > . < /button> <
            button id = 'equal'
            className = 'btn btn-equal'
            onClick = { this.claculate } >=
            <
            /button>  < /
            div >



            <
            />
        );
    }

}

export default Input;