// Program-3 : Nested Element using JSX (Babel)

<html>
<head>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
	<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="example"></div>
    <script type="text/babel">
        const reactEle = <div>
            <h1>Hello World</h1>
            <p>This is a paragraph</p>
            <div>This is a div</div>
          </div>
        const domEle = document.getElementById('example');

        const root = ReactDOM.createRoot(domEle);
        root.render(reactEle)
    </script>
</body>
</html>
