import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/Counter';
import Counter from '../components/Counter';

type counterContainerProps = {
    number: number,
    increaseAsync?: any,
    decreaseAsync?: any,
}

const CounterContainer = ({ number, increaseAsync, decreaseAsync }: counterContainerProps) => {
    return (
        <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />
    );
};

export default connect(
    (state: any) => ({
        number: state.Counter
    }), {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer);