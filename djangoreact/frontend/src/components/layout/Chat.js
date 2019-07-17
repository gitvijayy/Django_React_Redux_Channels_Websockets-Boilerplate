import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getMessages, addMessage } from '../../actions/chat'

var chatSocket = ""
var roomname = "default"

chatSocket = new WebSocket(
  'ws://' + window.location.host +
  `/ws/chat/${roomname}/`);
class Chat extends Component {

  state = {
    name: ''
  }


  componentDidUpdate() {

    document.getElementById("scrollToBottom").scrollIntoView({ behavior: "smooth" });
  }


  componentDidMount() {

    this.props.getMessages()

    chatSocket.onmessage = (e) => {

      var data = JSON.parse(e.data);
      var message = data['message'];
      this.props.addMessage(message)
      // let mess = this.state.messages.reverse()
      // console.log(message)
      // this.setState({
      //   messages: [message, ...mess]
      // })

    }
  }




  onKeyDown = (e) => {

    if (e.target.name === 'name') {
      this.setState({ name: e.target.value })
      return
    }

    if (e.keyCode == 13) {
      let message = {
        "name": !this.state.name ? 'Guest' : this.state.name,
        "message": e.target.value
      }

      e.target.value = ""
      chatSocket.send(JSON.stringify({
        'message': message
      }));

    }

  }

  render() {
    let messages;

    if (this.props.messages) {
      console.log("am here")
      messages = this.props.messages.map((message, index) => {
        return (
          <Fragment key={index}>
            <b>@{message.name}</b>
            <br />
            <p>{message.message}</p>

          </Fragment>
        )
      })
    }



    return (
      <Fragment>
        <h3 className="text-center alert-warning text-dark chatmargin" >Chat</h3>
        <div
          className="text-center pre-scrollable bg-light chatmargin chatmessages">

          {messages}
          <div id="scrollToBottom"></div>
        </div>
        <div className="row chatmargin" >
          <input
            className="alert-info  form-control col-2 "
            name='name'

            placeholder='Name'
            onBlur={(e) => { this.onKeyDown(e) }}

          />
          <input
            className="alert-info form-control col-10 "
            name='message'

            placeholder='Message - ENTER to Submit'
            onKeyDown={(e) => { this.onKeyDown(e) }}

          />
        </div>


      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.chat.messages
})

export default connect(mapStateToProps, { getMessages, addMessage })(Chat)
