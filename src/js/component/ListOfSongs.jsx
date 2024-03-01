import { useState } from "react";
import React from "react";
import Songs from "./playbar.jsx";


//create your first component
const Listofsongs = () => {
    let songChoices = [
        {
            title: "South Park",
            id: "south-park",
            author: "Kyle",
            url:
                "https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
        },
        {
            title: "Thunder Cats",
            id: "thundercats",
            author: "Moonra",
            url:
                "https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
        },
        {
            title: "X-Men",
            id: "x-men",
            author: "Profesor",
            url:
                "https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
        }
    ]



    const [songPlaying, setSongPlaying] = useState(0)
    const [togglePlay, setPlayPause] = useState(false)
    const [volume, setVolume] = useState (1.0)
    const [loop,setLoop] = useState (false)

    let audioPlay = null;


    const hovertoPlay = (songNum) => {


    
        //SETS HOVER
        // let onoff = setPlayPause(!togglePlay)
        var songInd;

        if( songChoices[songNum]&&songChoices[songNum].url.length > 1) songInd = songNum;
        else songInd = 0;

        audioPlay.src = songChoices[songInd].url;
        audioPlay.pause();
        audioPlay.play();
        setSongPlaying(songInd)
        setPlayPause(true)
    }

    const volumeUp =()=>{ 
        audioPlay.volume = volume + 0.1
        setVolume(audioPlay.volume);
    }
    const volumeDown =()=>{
       
        audioPlay.volume = volume - 0.1
        setVolume(audioPlay.volume)
    }

    const pause = () => {
        audioPlay.pause()
        setPlayPause(false)
    }
    const mute =()=>{
       if(volume != 0) {
       audioPlay.volume = 0;
        setVolume(audioPlay.volume)}
        if(volume == 0) {
            audioPlay.volume = volume+1;
             setVolume(audioPlay.volume)}
        
    }

    const loopSong =()=>{
        if (loop == false){
        audioPlay.loop = true;
        setLoop(true)}
        else{
            audioPlay.loop = false;
            setLoop(false)

        }
    }

    // let playbarPausePlay = () =>{
    //     setPlayPause(!togglePlay)
    //     audioPlay.src = url;
    //     if (togglePlay == true){
    //         audioPlay.play();
    //         setPlayPause(false)
    //     }else{
    //         audioPlay.pause()
    //         setPlayPause(true)
    //     }
    // }









    return (
        <>
            <ol className="list-group list-group-numbered">
                {songChoices.map((songs, ind) => {
                    return (
                        <li key={ind} className={`list-group-item d-flex justify-content-between align-items-start ${songPlaying == ind ? "active" : ""}`} onClick={(e) => { hovertoPlay(ind, songs.url) }}>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{songs.title}</div>
                                {songs.author}
                            </div>
                        </li>)
                })}
                <>
                        <div className="col d-flex justify-content-center p-2"> 
                        <button className="btn btn-primary m-1" type="button" onClick={(e) => { hovertoPlay(songPlaying-1) }}><i className="fas fa-step-backward"></i> </button>
                            {
                             togglePlay ? <span>
                                <button className="btn btn-primary m-1" type="button"onClick={(e) => { pause() }}><i className="fas fa-pause"></i></button>
                                </span>:
                              <button className="btn btn-primary m-1" type="button" onClick={(e) => { hovertoPlay(songPlaying) }}><i className="fas fa-play"></i></button>
                            }
                            <button className="btn btn-primary m-1" type="button"onClick={(e) => { hovertoPlay(songPlaying+1) }}><i className="fas fa-step-forward"></i></button>
                            <button className="btn btn-primary m-1" type="button"onClick={(e) => { hovertoPlay(songPlaying+Math.floor(Math.random()*2)) }}><i className="fas fa-random"></i></button>
                            <button className="btn btn-primary m-1" type="button" onClick={(e) => { hovertoPlay(songPlaying) }}><i className="fas fa-history"></i></button>
                            <button className="btn btn-primary m-1" type="button"onClick={(e) => {volumeUp()}}><i className="fas fa-volume-up"></i></button>
                            <button className="btn btn-primary m-1" type="button" onClick={(e) => {volumeDown()}}><i className="fas fa-volume-down"></i></button>
                            <button className="btn btn-primary m-1 disabled" type="button">{Math.floor(volume*100)}%</button>
                            <button className={`${loop==false?"btn btn-primary m-1":"btn btn-primary m-1 active"}`} type="button" onClick={(e) => {loopSong()}}><i class="fas fa-volume-off"></i></button>

                            
                        </div>
                </>
            </ol>
            <audio ref={(el) => (audioPlay = el)}></audio>
        </>
    );
};

export default Listofsongs;
