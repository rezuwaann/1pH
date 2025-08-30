document.getElementById('btn-post-comment').addEventListener('click', function () {
    const commentText = document.getElementById('comment-text-box')

    const comment = commentText.value;

    const commentContainer = document.getElementById('comment-container')

    //    create p and set comment
    const newComment = document.createElement('p')
    newComment.innerText = comment;

    newComment.classList.add('comment')

    commentContainer.appendChild(newComment)

    commentText.value = ''
})


