
import React, { Component } from 'react'
export default class Conditional extends Component {
    render() {
       <div>
		  <h1>Hello!</h1>
		  {unreadMessages.length > 0 &&
			<h2>
			  You have {unreadMessages.length} unread messages.
			</h2>
		  }
      </div>
    }
}
