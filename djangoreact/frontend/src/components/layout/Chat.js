import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

var chatSocket = ""

chatSocket = new WebSocket(
  'ws://' + window.location.host +
  `/ws/chat/message/`);
export class Chat extends Component {



  componentDidMount() {


    chatSocket.onmessage = (e) => {
      console.log("Asdadasasadsdasd")
      var data = JSON.parse(e.data);
      var message = data['message'];
      // let mess = this.state.messages.reverse()
      console.log(message)
      // this.setState({
      //   messages: [message, ...mess]
      // })

    }
  }




  onKeyDown = (e) => {

    if (e.keyCode == 13) {
      let message = {
        "name": 'vijay',
        "message": e.target.value
      }

      e.target.value = ""
      chatSocket.send(JSON.stringify({
        'message': message
      }));

    }

  }

  render() {

    const messages = this.props.messages.map((message, index) => {
      return (
        <Fragment key={index}>
          <b>@{message.name}</b>
          <br />
          <p>{message.message}</p>

        </Fragment>
      )
    })


    return (
      <Fragment>
        <h3 className="text-center alert-warning text-dark chatmargin" >Chat</h3>
        <div
          className="text-center pre-scrollable bg-light chatmargin chatmessages">

          {messages}

        </div>
        <div className="row chatmargin" >
          <input
            className="alert-info  form-control col-2 "
            name='content'

            placeholder='Name'
          // onKeyDown={(e) => { this.onKeyDown(e, user) }}

          />
          <input
            className="alert-info form-control col-10 "
            name='content'

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

export default connect(mapStateToProps)(Chat)
