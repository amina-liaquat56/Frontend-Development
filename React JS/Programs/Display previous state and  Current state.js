export default function CounterDemo3() {
    let [counter, updateCounter] = useState(0);
    let prevValue = useRef(0);

    let increment = () => {
        updateCounter(counter + 1);
    }
    useEffect(() => {
        prevValue.current = counter;
    }, [counter]);
    return <>
        <p>Current value - {counter} , previous Value is-{prevValue.current}</p>
        <button onClick={increment}>Increment</button>
    </>
}
