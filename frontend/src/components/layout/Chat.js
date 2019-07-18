import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getMessages, addMessage, socketMessage } from '../../actions/chat'

// var chatSocket = ""
// var roomname = "default"
// chatSocket = new WebSocket(
//   'ws' + process.env.REACT_APP_SERVER +
//   `/ws/chat/${roomname}/`);

// class Chat extends Component {

//   state = {
//     name: ''
//   }

//   componentDidUpdate() {
//     chatSocket.onmessage = (e) => {
//       var data = JSON.parse(e.data);
//       var message = data['message'];
//       this.props.socketMessage(message)
//     }
//     document.getElementById("scrollToBottom").scrollIntoView({ behavior: "smooth" });
//   }

//   componentDidMount() {
//     this.props.getMessages()
//   }

//   onKeyDown = (e) => {
//     if (e.target.name === 'name') {
//       this.setState({ name: e.target.value })
//       return
//     }
//     if (e.keyCode === 13) {
//       let message = {
//         "name": !this.state.name ? 'Guest' : this.state.name,
//         "message": e.target.value
//       }
//       this.props.addMessage(message, (response) => {
//         chatSocket.send(JSON.stringify({
//           'message': response
//         }));
//       })
//       e.target.value = ""
//     }
//   }

//   render() {

//     let messages;
//     if (this.props.messages) {
//       messages = this.props.messages.map((message) => {
//         return (
//           <Fragment key={message.id}>
//             <b>@{message.name}</b>
//             <br />
//             <p>{message.message}</p>
//           </Fragment>
//         )
//       })
//     }

//     return (

//       <Fragment>

//         <h3 className="text-center alert-warning text-dark chatmargin" >Chat</h3>

//         <div className="text-center pre-scrollable bg-light chatmargin chatmessages">
//           {messages}
//           <div id="scrollToBottom"></div>
//         </div>

//         <div className="row chatmargin" >
//           <input
//             className="alert-info  form-control col-2 "
//             name='name'
//             placeholder='Name'
//             onBlur={(e) => { this.onKeyDown(e) }}
//           />
//           <input
//             className="alert-info form-control col-10 "
//             name='message'
//             placeholder='Message - ENTER to Submit'
//             onKeyDown={(e) => { this.onKeyDown(e) }}
//           />
//         </div>

//       </Fragment>

//     )
//   }
// }


function Chat() {
  const [name, setName] = useState("")
  // eslint-disable-next-line
  const [room, setRoom] = useState("default")
  // eslint-disable-next-line
  const [socket, setSocket] = useState(new WebSocket(
    'ws' + process.env.REACT_APP_SERVER +
    `/ws/chat/${room}/`))

  useEffect(() => {
    this.props.getMessages()
  }, [room]);

  useEffect(() => {
    socket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      var message = data['message'];
      this.props.socketMessage(message)
    }
    document.getElementById("scrollToBottom").scrollIntoView({ behavior: "smooth" });
  });

  let messages;
  if (this.props.messages) {
    messages = this.props.messages.map((message) => {
      return (
        <Fragment key={message.id}>
          <b>@{message.name}</b>
          <br />
          <p>{message.message}</p>
        </Fragment>
      )
    })
  }

  const onKeyDown = (e) => {
    if (e.target.name === 'name') {
      // this.setState({ name: e.target.value })
      setName(e.target.value)

      return
    }
    if (e.keyCode === 13) {
      let message = {
        "name": !name ? 'Guest' : name,
        "message": e.target.value
      }
      this.props.addMessage(message, (response) => {
        socket.send(JSON.stringify({
          'message': response
        }));
      })
      e.target.value = ""
    }
  }

  return (

    <Fragment>

      <h3 className="text-center alert-warning text-dark chatmargin" >Chat</h3>

      <div className="text-center pre-scrollable bg-light chatmargin chatmessages">
        {messages}
        <div id="scrollToBottom"></div>
      </div>

      <div className="row chatmargin" >
        <input
          className="alert-info  form-control col-2 "
          name='name'
          placeholder='Name'
          onBlur={(e) => { onKeyDown(e) }}
        />
        <input
          className="alert-info form-control col-10 "
          name='message'
          placeholder='Message - ENTER to Submit'
          onKeyDown={(e) => { onKeyDown(e) }}
        />
      </div>

    </Fragment>

  )

}


const mapStateToProps = state => ({
  messages: state.chat.messages
})

export default connect(mapStateToProps, { getMessages, addMessage, socketMessage })(Chat)
