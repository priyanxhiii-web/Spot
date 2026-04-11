let play = document.getElementById('play');
let progressBar = document.getElementById('progressBar');
let audio = new Audio('Audio/1.mp3');

let currentSong = 1;

play.addEventListener('click', () => {
    if (audio.paused || audio.currentTime == 0) {
        audio.play();
        play.classList.remove('fa-circle-play')
        play.classList.add('fa-circle-pause')
    }
    else {
        audio.pause();
        play.classList.add('fa-circle-play')
        play.classList.remove('fa-circle-pause')
    }
});



audio.addEventListener('timeupdate', () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    progressBar.style.background = `linear-gradient(to right, #21a600ff ${progress}%, #333 ${progress}%)`;
});
progressBar.addEventListener('input', function () {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #21a600ff ${value}%, #333 ${value}%)`;
    audio.currentTime = (progressBar.value * audio.duration) / 100;
});

let playMusic = Array.from(document.getElementsByClassName('playMusic'));

makeAllPlay = () => {
    playMusic.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

playMusic.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause')

        index = parseInt(e.target.id);
        currentSong = index;
        audio.src = `Audio/${index}.mp3`;
        audio.currentTime = 0;
        audio.play();
        updateNowBar();
    });
});

let allMusic = Array.from(document.getElementsByClassName('music-card'));

songs = [
    { songName: '5-7', songDes: 'Karan Aujla, Mxrci', songsImage: `Images/Trending Songs/01.png`, songsPath: `Audio/1.mp3`},
    { songName: 'Aaja Raja(From "KH x RK Reunion")', songDes: 'Anirudh Ravichandar, Chintu', songsImage: `Images/Trending Songs/02.png`, songPath: `Audio/2.mp3`},
    { songName: 'Bairi', songDes: 'Virat, Pardeep Solanki, Heena', songsImage: `Images/Trending Songs/03.png`, songPath: `Audio/3.mp3`},
    { songName: 'Khat', songDes: 'Navjot Ahuja', songsImage: `Images/Trending Songs/04.png`, songPath: `Audio/4.mp3`},
    { songName: 'Iss Tarah', songDes: 'Chaar Diwaari, Sonu Nigam', songsImage: `Images/Trending Songs/05.png`, songPath: `Audio/5.mp3`},
    { songName: 'Mutta Kalakki(From "Youth")', songDes: 'G.V.Prakash, Ken Karunaas', songsImage: `Images/Trending Songs/06.png`, songPath: `Audio/6.mp3`},
    { songName: 'DOPAMINE', songDes: 'Guru Randhawa, Gurjit Gill, Lavish Dhiman', songsImage: `Images/Trending Songs/07.png`, songPath: `Audio/7.mp3`},
    { songName: 'Bairan', songDes: 'Banjaare', songsImage: `Images/Trending Songs/08.png`, songPath: `Audio/8.mp3`},
    { songName: 'Khat', songDes: 'Navjot Ahuja', songsImage: `Images/Trending Songs/04.png`, songPath: `Audio/4.mp3`},
    { songName: 'Bairi', songDes: 'Virat, Pardeep Solanki, Heena', songsImage: `Images/Trending Songs/03.png`, songPath: `Audio/3.mp3`},
    { songName: '5-7', songDes: 'Karan Aujla, Mxrci', songsImage: `Images/Trending Songs/01.png`, songPath: `Audio/1.mp3`},
    { songName: 'Aaja Raja(From "KH x RK Reunion")', songDes: 'Anirudh Ravichandar, Chintu', songsImage: `Images/Trending Songs/02.png`, songPath: `Audio/2.mp3`},
    { songName: 'Bairan', songDes: 'Banjaare', songsImage: `Images/Trending Songs/08.png`, songPath: `Audio/8.mp3`},
    { songName: 'Iss Tarah', songDes: 'Chaar Diwaari, Sonu Nigam', songsImage: `Images/Trending Songs/05.png`, songPath: `Audio/5.mp3`},
    { songName: 'Mutta Kalakki(From "Youth")', songDes: 'G.V.Prakash, Ken Karunaas', songsImage: `Images/Trending Songs/06.png`, songPath: `Audio/6.mp3`},
    { songName: 'DOPAMINE', songDes: 'Guru Randhawa, Gurjit Gill, Lavish Dhiman', songsImage: `Images/Trending Songs/07.png`, songPath: `Audio/7.mp3`},
    { songName: 'Aaja Raja(From "KH x RK Reunion")', songDes: 'Anirudh Ravichandar, Chintu', songsImage: `Images/Trending Songs/02.png`, songPath: `Audio/2.mp3`},
    { songName: 'DOPAMINE', songDes: 'Guru Randhawa, Gurjit Gill, Lavish Dhiman', songsImage: `Images/Trending Songs/07.png`, songPath: `Audio/7.mp3`},
    { songName: '5-7', songDes: 'Karan Aujla, Mxrci', songsImage: `Images/Trending Songs/01.png`, songPath: `Audio/1.mp3`},
    { songName: 'Bairi', songDes: 'Virat, Pardeep Solanki, Heena', songsImage: `Images/Trending Songs/03.png`, songPath: `Audio/3.mp3`},
    { songName: 'Khat', songDes: 'Navjot Ahuja', songsImage: `Images/Trending Songs/04.png`, songPath: `Audio/4.mp3`},
    { songName: 'Bairan', songDes: 'Banjaare', songsImage: `Images/Trending Songs/08.png`, songPath: `Audio/8.mp3`},
    { songName: 'Iss Tarah', songDes: 'Chaar Diwaari, Sonu Nigam', songsImage: `Images/Trending Songs/05.png`, songPath: `Audio/5.mp3`},
    { songName: 'Mutta Kalakki(From "Youth")', songDes: 'G.V.Prakash, Ken Karunaas', songsImage: `Images/Trending Songs/06.png`, songPath: `Audio/6.mp3`}
]

order = [...songs];

allMusic.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].songsImage;
    element.getElementsByClassName('img-title')[0].innerText = songs[i].songName;
    element.getElementsByClassName('img-description')[0].innerText = songs[i].songDes;
});

let shuffle = document.getElementById('shuffle');
let repeat = document.getElementById('repeat');
let nowBar = document.querySelector('.now-bar');

let songOnRepeat = false;
let songOnShuffle = false;

function shuffleSongs(originalOrder) {
    let order = [...originalOrder];
    for(let i=order.length - 1; i>0; i--){
        let j = Math.floor((Math.random) * (i+1));
        [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
}
shuffle.addEventListener('click', () => {
    if(!songOnShuffle) {
        songOnShuffle = true;
        songOnRepeat = false;
        shuffle.classList.add('active');
        repeat.classList.remove('active');
    }
    else{
        songOnShuffle = false;
        shuffle.classList.remove('active');
    }
})

repeat.addEventListener('click', () => {
    if(!songOnRepeat) {
        songOnRepeat = true;
        songOnShuffle = false;
        repeat.classList.add('active');
        shuffle.classList.remove('active');

        order = shuffleSongs(songs);
    }
    else{
        songOnRepeat = false;
        repeat.classList.remove('active');

        order = songs;
    }
})

playNextSong = () => {
    // let nextSong = (currentSong + 1) % playMusic.length ;
    // currentSong = nextSong == 0 ? 21 : nextSong;
    if(!songOnRepeat){

    currentSong = (currentSong % songs.length) + 1;
    audio.src = order[currentSong-1].songPath;
    audio.currentTime = 0;
    audio.play();
    updateNowBar();
    }
    else{
    audio.src = order[currentSong-1].songPath;
    audio.currentTime = 0;
    audio.play();
    updateNowBar();
    }
}

playPrevSong = () => {
    // let prevSong = (currentSong - 1);
    // currentSong = prevSong == 0 ? 18 : prevSong;
    currentSong = currentSong-1 <= 0 ? 8: currentSong-1
    audio.src = `Audio/${currentSong}.mp3`;
    audio.currentTime = 0;
    audio.play();
    updateNowBar();
};

function updateNowBar () {
    nowBar.getElementsByTagName('img')[0].src = order[currentSong-1].songsImage;
    nowBar.getElementsByClassName('img-title-info')[0].innerText = order[currentSong-1].songName;
    nowBar.getElementsByClassName('img-des-info')[0].innerText = order[currentSong-1].songDes;
}

forward = document.getElementById('forward');
backward = document.getElementById('backward');

forward.addEventListener('click', () => {
    playNextSong();
});

audio.addEventListener('ended', () => {
    playNextSong();
});

backward.addEventListener('click', () => {
    playPrevSong();
});
