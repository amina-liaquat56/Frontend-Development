Program-2 : Nested Element Without Create-react-app
***************************************************
<html>
<head>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</head>
<body>
    <div id="example"></div>
    <script>
        const title = React.createElement('h1', {}, 'My First React Code');
        const paragraph = React.createElement('p', {}, 'Writing some more HTML');
        const containerDiv = React.createElement('div', {id:myDiv1}, [title, paragraph]);
		
        const domEle = document.getElementById('example');
        const root = ReactDOM.createRoot(domEle); 
        root.render(containerDiv);
    </script>
</body>
</html>
