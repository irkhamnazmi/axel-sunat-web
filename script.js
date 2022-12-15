fetch('https://axelle-khitan.vercel.app/data.json')
    .then(res => {
        return res.json()
    })
    .then(data =>
        get(data)
    )

function get(data) {

    profile(data.profile)
    event(data.event)
    timer(data.timer)
}

function profile(data) {
    const full = data.fullname
    const nick = data.nickname
    const img = data.img_profile
    const wa = data.img_whatsapp
    onYouTubePlayerAPIReady(data.song)
    document.getElementById('title').innerHTML = `${nick} | Walimatul Khitan`
    document.getElementById('nama').innerHTML = full
    document.getElementById('copyright').innerHTML = `© ${full}. All rights reserved.`
    document.getElementById('imgProfile').setAttribute('src', img)
    document.getElementById('wa').setAttribute('data', wa)

}

function event(data) {
    const bismillah = data.img_bismillah
    const subhan = data.img_subhan
    const day = data.day
    const date = data.date
    const address = data.address
    const location = data.location

    document.getElementById('bismillah').setAttribute('data', bismillah)
    document.getElementById('subhan').setAttribute('src', subhan)
    document.getElementById('day').innerHTML = day
    document.getElementById('date').innerHTML = date
    document.getElementById('address').innerHTML = address
    document.getElementById('location').innerHTML = location

}

function timer(data) {
    var countdown = function() {
        let dayBox = document.getElementById("day-box");
        let hrBox = document.getElementById("hr-box");
        let minBox = document.getElementById("min-box");
        let secBox = document.getElementById("sec-box");

        // let endDate = new Date(`"19 dec 2022 8:12:00"`);
        let endDate = new Date(`${data.day} ${data.month} ${data.year} ${data.hour}:${data.minute}:00`);
        let endTime = endDate.getTime();

        let todayDate = new Date();
        //Output value in milliseconds
        let todayTime = todayDate.getTime();
        let remainingTime = endTime - todayTime;
        //60sec => 1000 milliseconds
        let oneMin = 60 * 1000;
        //1hr => 60 minutes
        let oneHr = 60 * oneMin;
        //1 day => 24 hours
        let oneDay = 24 * oneHr;

        let addZeroes = (num) => (num < 10 ? `0${num}` : num);

        if (endTime < todayTime) {
            clearInterval(i);
            dayBox.innerHTML = 0
            hrBox.innerHTML = 0
            minBox.innerHTML = 0
            secBox.innerHTML = 0
        } else {
            let daysLeft = Math.floor(remainingTime / oneDay)
            let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr)
            let minsLeft = Math.floor((remainingTime % oneHr) / oneMin)
            let secsLeft = Math.floor((remainingTime % oneMin) / 1000)

            dayBox.innerHTML = addZeroes(daysLeft);
            hrBox.innerHTML = addZeroes(hrsLeft);
            minBox.innerHTML = addZeroes(minsLeft);
            secBox.innerHTML = addZeroes(secsLeft);


        }
    }
    let i = setInterval(countdown, 1000)
    countdown()
}

function eventDetail() {
    const element = document.getElementById("event-detail");
    element.scrollIntoView();
}

// function onYouTubePlayerAPIReady(data) {
//     var player = new YT.Player('player', {
//         videoId: '6EAD74vCj9o', // this is the id of the video at youtube (the stuff after "?v=")
//         loop: true,
//         events: {
//             onReady: function(e) {
//                 // info.innerHTML = 'video is loaded';
//                 e.target.playVideo();
//             },
//             onStateChange: function(event) {
//                 if (event.data === 1) {
//                     // info.innerHTML = 'video started playing';
//                 }
//             }
//         }
//     });
//     // you can do more stuff with the player variable
// }