// 리엑트에서는 훅스를 사용하는 것을 권장하지만, 꼭 의무적으로 써야 하는 것이 아니다.
import * as React from 'react';
import { Component } from 'react';

interface  IState {
    first: number;
    second: number;
    value: string;
    result: string;
}

// 제네릭에 대해서 짝을 맞춰 줘야 합니다. 해당 컴포넌트에 마우스 오버를 하거나, go to definition을 활용 할 것.
                                // {} == props에 대한 제네릭, IState : state에 대한 타이핑
class GuGuDan extends Component<{}, IState> {
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
    };

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first * this.state.second) {
            this.setState((prevState) => {
                return {
                    result: '정답: ' + prevState.value,
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: '',
                };
            });
            if (this.input) {
                this.input.focus();
            }
        
        } else {
            this.setState({
                result: '땡',
                value: '',
            });
            if (this.input) {
                this.input.focus();
            }
        }
    };

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.target.value });
    };

    input: HTMLInputElement | null = null;

    onRefInput = (c: HTMLInputElement) => { this.input = c; };

    render() {
        return (
            <>
                <div>{this.state.first} 곱하기 {this.state.second}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input
                        ref={this.onRefInput}
                        type="number"
                        value={this.state.value}
                        onChange={this.onChange}
                    />
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

export default GuGuDan;

