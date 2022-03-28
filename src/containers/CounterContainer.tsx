import { connect } from 'react-redux';
import { increase, decrease } from '../modules/Counter';
import Counter from '../components/Counter';

type counterContainerProps = {
    number: number,
    increase?: any,
    decrease?: any,
}

const CounterContainer = ({ number, increase, decrease }: counterContainerProps) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

export default connect(
    (state: any) => ({
        number: state.Counter
    }), {
        increase,
        decrease
    }
)(CounterContainer);