export default function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>Now The Time is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}
setInterval(tick, 1000);
