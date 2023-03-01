let postsContainer = document.querySelector(".posts");
let input = document.querySelector(".search input");
let submitbtn = document.querySelector(".search .submit");

submitbtn.onclick = function () {
  postsContainer.innerHTML = "";

  let postCommentNeeded = input.value;
  let postt = document.createElement("div");
  postt.className = "post";
  postsContainer.appendChild(postt);
  let postInfo = document.createElement("div");
  postInfo.className = "p-info";
  postInfo.innerHTML = `Post No.${postCommentNeeded}`;
  console.log(postCommentNeeded);
  postt.appendChild(postInfo);
  returnNeededPostComment();
};

function returnNeededPostComment() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((resValue) => {
      return resValue.json();
    })
    .then((posts) => {
      posts.forEach((pos) => {
        let neededpostComments = [];

        let postt = document.querySelector(".post");
        if (pos.postId == input.value) {
          neededpostComments.push(pos);
          console.log(neededpostComments);
          neededpostComments.forEach((elepos) => {
            let userInfo = document.createElement("div");
            userInfo.className = "user-info";
            let userName = document.createElement("div");
            userName.className = "name";
            userName.innerHTML = `Name: ${elepos.name}`;

            let userMail = document.createElement("div");
            userMail.className = "mail";
            userMail.innerHTML = ` ${elepos.email}`;
            userInfo.appendChild(userName);
            userInfo.appendChild(userMail);
            postt.appendChild(userInfo);

            let userComment = document.createElement("div");
            userComment.className = "comment";
            userComment.innerHTML = `${elepos.body}`;
            postt.appendChild(userComment);
          });
        } else {
        }
      });
    });
}

// function returnNeededPostComment() {
//   postsContainer.innerHTML = "";
//   fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((resValue) => {
//       return resValue.json();
//     })
//     .then((posts) => {
//       posts.forEach((pos) => {
//         if (pos.postId == input.value) {
//           let postt = document.createElement("div");
//           postt.className = "post";
//           postsContainer.appendChild(postt);
//           let postInfo = document.createElement("div");
//           postInfo.className = "p-info";
//           let commentNo = document.createElement("span");
//           commentNo.className = "commsno";
//           let PostTitle = document.createElement("span");
//           PostTitle.className = "p-title";
//           PostTitle.innerHTML = `Post No. ${pos.postId}`;
//           postInfo.appendChild(commentNo);
//           postInfo.appendChild(PostTitle);
//           postt.appendChild(postInfo);

//           let userInfo = document.createElement("div");
//           userInfo.className = "user-info";
//           let userName = document.createElement("div");
//           userName.className = "name";
//           userName.innerHTML = `UserName: ${pos.name}`;

//           let userMail = document.createElement("div");
//           userMail.className = "mail";
//           userMail.innerHTML = `UserMail: ${pos.email}`;
//           userInfo.appendChild(userName);
//           userInfo.appendChild(userMail);
//           postt.appendChild(userInfo);

//           let userComment = document.createElement("div");
//           userComment.className = "comment";
//           userComment.innerHTML = `Post No. ${pos.body}`;
//           postt.appendChild(userComment);
//         } else {
//         }
//       });
//     });
// }
