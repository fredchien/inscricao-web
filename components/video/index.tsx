import styles from './video.module.css';

export default function VideoComponent() {

    const playAndPause = () => {
        var video = document.getElementById("myVideo");
        var btn = document.getElementById("play-video");
        
        if ((video as HTMLVideoElement).paused) {
            (video as HTMLVideoElement).play();
            btn.classList.add('d-none')
          } else {
            (video as HTMLVideoElement).pause();
            btn.classList.remove('d-none')
          }
    }

    return (
        <section className={styles.banner_home} onClick={playAndPause}>
            <video loop id='myVideo'>
                <source src="../assets/video/WiligentBG.mp4" type='video/mp4' />
                Your browser does not support HTML5 video.
            </video>
            <div className={`container ${styles.content_play}`}>
                <div className="row">
                    <div className="col-12">
                        <div className={styles.banner_content}>
                            <div className="btn-header" id="play-video">
                                <h2>Aperte o PLAY</h2>
                                <i className="fa-solid fa-play"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}