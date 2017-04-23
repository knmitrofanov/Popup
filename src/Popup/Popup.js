import React, { Component } from 'react';
import userImg from './avatar.png';
import './Popup.css';


// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

  let userComment = 'fiki';
   let commentElement = (
      <div className="comment-wall">
        <div className="user">
          <img src={userImg} alt="user-img" />
          <h3 className="username">Stoyan Daskaloff <span className="comment-date">march 7, 2017 at 7:30 pm</span></h3>
        </div>
        <div className="comment">{userComment}
          <ul className="comment-links">
            <li>
              <a href="/#" className="like-link activity-link">Like</a>
            </li>
            <li>
              <a href="/#" className="share-link activity-link">Share</a>
            </li>
            <li>
              <a href="/#" className="comment-link activity-link">Comment</a>
            </li>
            <li>
              <a href="/#" className="report-link activity-link">Report</a>
            </li>
          </ul>
        </div>
        <div className="reply">
          <ul>
            <li>Comment</li>
            <li>Photo</li>
            <li>Feedback</li>
          </ul>
          <span className="arrow">&#9650;</span>
          <input className="reply-box" type="text" placeholder="Reply..." />
        </div>
      </div>);

class Popup extends Component {

  showHide(event) {
 
    let modal = document.getElementById('modal');

    // if(event.target.id === 'showModal') {
    //  modal = document.getElementById('modal');
    // } else {
      
    // }

    if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  }

  showModalContent() {
    let youtubeLink = document.getElementById('youtubeLink').value;
    let video = document.getElementById('video');
    video.setAttribute("src", youtubeLink);

    let input = document.getElementById("link-input");
    input.style.display = "none";

    let modalContent = document.getElementById('modal-content');
    modalContent.style.display = "block";
  }

  addComment(event) {

    const enterKey = 13;
    let key = event.which || event.keyCode;
    if (key === enterKey) {
      let comment = document.getElementById('commentInput');
      let addComment = document.getElementById('c');
      
      userComment = comment.value;
   
    
      comment.value = '';

    }

  }

render() {
    return (

<div className="container">

  

  <button id="showModal" className="btn-show" onClick={this.showHide}>Add Video</button>

  <div id="modal" className="modal">

    <div className="modal-body">
      <span className="close" onClick={this.showHide}>&times;</span>

      <div id="link-input"> 
        <input type="text" id="youtubeLink" className="youtube-link" placeholder="Paste embed youtube link"/>
        <button id="showContent" className="btn-show-content" onClick={this.showModalContent}>Add link</button>
      </div>

      <div className="modal-content" id="modal-content">
          
      <iframe className="video" id="video" width="808" height="413" src="" frameBorder="0" allowFullScreen></iframe>
      <ul className="video-links">
        <li>
          <a href="/#" className="like-link activity-link">Like</a>
        </li>
        <li>
          <a href="/#" className="share-link activity-link">Share</a>
        </li>
        <li>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </li>
      </ul>
      <input className="comment-box" onKeyPress={this.addComment} id="commentInput" type="text" placeholder="comment..." />
      <div className="comment-wall" id="c">
        <div className="user">
          <img src={userImg} alt="user-img" />
          <h3 className="username">Stoyan Daskaloff <span className="comment-date">march 7, 2017 at 7:30 pm</span></h3>
        </div>
        <div className="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque saepe quod alias sunt ex, tempora nobis doloribus
          magni repellendus quaerat magnam quos? Labore numquam incidunt voluptatum iure, itaque, totam.
          <ul className="comment-links">
            <li>
              <a href="/#" className="like-link activity-link">Like</a>
            </li>
            <li>
              <a href="/#" className="share-link activity-link">Share</a>
            </li>
            <li>
              <a href="/#" className="comment-link activity-link">Comment</a>
            </li>
            <li>
              <a href="/#" className="report-link activity-link">Report</a>
            </li>
          </ul>
        </div>
        <hr/>
        <div className="reply">
          <ul>
            <li>Comment</li>
            <li>Photo</li>
            <li>Feedback</li>
          </ul>
          <span className="arrow">&#9650;</span>
          <input className="reply-box" type="text" placeholder="Reply..." />
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
      );
    }
}




export default Popup;