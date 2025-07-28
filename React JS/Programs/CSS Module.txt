DashedBox.module.css
-------------------
.container {
  margin: 40px;
  border: 5px dashed pink;
}
.content {
  font-size: 15px;
  text-align: center;
}
.error {
  color: red;
}

-------------
DashedBox2.css
--------------
.error{
	background-color:yellow;
}

-------------
import React from 'react';
import styles from './DashedBox.module.css';
import './DashedBox2.css';

const DashedBox = () => (
	console.log(styles)
    <div className={styles.container}>
     <p className={styles.content}>Get started with CSS Modules style</p>
	 <div className={styles.error}>this is a div</div>
    </div>
);
export default DashedBox;
