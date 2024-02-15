document.addEventListener('DOMContentLoaded', function() {
    const smileys = [
        { emoji: '😀', votes: 0 },
        { emoji: '😂', votes: 0 },
        { emoji: '😎', votes: 0 },
        { emoji: '😍', votes: 0 },
        { emoji: '😢', votes: 0 }
    ];

    const votingContainer = document.getElementById('votingContainer');

    smileys.forEach((smiley, index) => {
        const button = document.createElement('button');
        button.innerHTML = smiley.emoji;
        button.classList.add('smiley-button');
        button.onclick = function() {
            smiley.votes++;
            document.getElementById(`voteCount-${index}`).innerText = smiley.votes;
        };

        const voteCount = document.createElement('span');
        voteCount.id = `voteCount-${index}`;
        voteCount.innerText = smiley.votes;
        voteCount.classList.add('vote-count');

        votingContainer.appendChild(button);
        votingContainer.appendChild(voteCount);
    });
});
        
    