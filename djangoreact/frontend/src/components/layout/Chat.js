import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

// var chatSocket = ""

// chatSocket = new WebSocket(
//   'ws://' + window.location.host +
//   `/ws/games/chatbox/`);
export class Chat extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     messages: [],
  //     currentMessage: "",
  //     mount: this.props.messages
  //   }

  // }

  // componentDidUpdate() {
  //   chatSocket.onmessage = (e) => {
  //     var data = JSON.parse(e.data);
  //     var message = data['message'];
  //     let mess = this.state.messages.reverse()

  //     this.setState({
  //       messages: [message, ...mess]
  //     })

  //   }


  //   // document.getElementById("scrollToBottom").scrollIntoView({ behavior: "smooth" });
  // }

  // componentDidMount() {


  //   chatSocket = new WebSocket(
  //     'ws://' + window.location.host +
  //     `/ws/games/chatbox/`);
  // }




  // onKeyDown = (e, user) => {

  //   this.setState({
  //     currentMessage: e.target.value
  //   })

  //   console.log(this.state.currentMessage)

  //   if (e.keyCode == 13) {
  //     let message = {
  //       "name": user,
  //       "message": e.target.value
  //     }

  //     e.target.value = ""
  //     chatSocket.send(JSON.stringify({
  //       'message': message
  //     }));

  //   }

  // }

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
        <h3 className="text-center text-dark alert-danger chatmargin" >Chat</h3>
        <div
          className="text-center pre-scrollable bg-light chatmargin chatmessages">

          {messages}

        </div>
        <div className="row chatmargin" >
          <input
            className="bg-dark text-light form-control col-2 "
            name='content'

            placeholder='Name'
          // onKeyDown={(e) => { this.onKeyDown(e, user) }}

          />
          <input
            className="bg-dark text-light form-control col-10 "
            name='content'

            placeholder='Message - ENTER to Submit'
          // onKeyDown={(e) => { this.onKeyDown(e, user) }}

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
