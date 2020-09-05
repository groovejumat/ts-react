import * as React from 'react';
import { useState, useRef } from 'react';

// <> === React.Fragment
// 이게 이제 hooks 문법을 활용한 사례
const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => { // 따로 때놓는 경우에는 타입을 명시해주어야 한다.
        e.preventDefault();
        const input = inputEl.current;
        if (parseInt(value) === first * second) { //정답을 맞췄을 때에 대한 처리
            setResult('정답');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            if (input) {
                input.focus();
            }

        } else {
            setResult('땡');
            setValue('');
            if (input) {
                input.focus();
            }
        }
    }

    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} // 같이쓰면 타입추론을 해준다.
                />
            </form>
            <div>{result}</div>
        </>
    )

}

export default GuGuDan;