export default function RemainingChar() {
  const [remaining, setRemaining] = useState(100);
  const keyUpHandler = (e) => {
    const msg = e.target.value;
    setRemaining(100-msg.length)
  };
  return (
    <>
      <textarea onKeyUp={keyUpHandler} maxLength={100} className="m-1"></textarea>
      <p>remaining char: {remaining}</p>
    </>
  );
}
