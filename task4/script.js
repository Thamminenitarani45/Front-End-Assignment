
// Follow and Unfollow Functionality
const followBtn = document.getElementById("followBtn");

let isFollowing = false;

followBtn.addEventListener("click", function () {

    if (isFollowing === false) {

        isFollowing = true;

        followBtn.textContent = "Following";

        followBtn.style.backgroundColor = "#64748b";

    } else {

        isFollowing = false;

        followBtn.textContent = "Follow";

        followBtn.style.backgroundColor = "#0788c9";

    }
});
// Message Button Functionality
const messageBtn = document.getElementById("messageBtn");

messageBtn.addEventListener("click", function () {

    alert("Welcome! You can now connect with Maya Sharma.");

});
