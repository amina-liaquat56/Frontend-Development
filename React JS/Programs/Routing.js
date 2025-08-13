index.js
------
import { BrowserRouter } from 'react-router-dom';	
   <BrowserRouter>
        <App />
   </BrowserRouter>	
	
	
center.js
---------
import { Route, Routes } from "react-router";
<Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/aboutus" element={<Aboutus />} />
      <Route exact path="/careers" element={<Careers />} />
      <Route exact path="/products" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>


nav.js
------
<ul class="nav navbar-nav">
	<li class="active"> 
		<Link to="/products">Product</Link>
	</li>
    <li>
		<Link to="/greet">greet</Link>
	</li>                    
	<li>
		<Link to="/http">http</Link>
	</li>
	<li>
		<Link to="/parent">parent</Link>
	</li>
</ul>
