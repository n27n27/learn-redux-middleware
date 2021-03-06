type counterProps = {
    onIncrease: any,
    onDecrease: any,
    number: number
}

const Counter = ({ onIncrease, onDecrease, number }: counterProps) => {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;