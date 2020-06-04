import { useSelector } from 'react-redux'
import YouTube from 'react-youtube'

function Videolist() {
  var counter = ''
  var error = ''
  useSelector(state =>
    state && state.posts != undefined
      ? (counter = state.posts)
      : state && (error = state.error)
  )
  const opts = {
    playerVars: {
      // https: developers.google.com / youtube / player_parameters,
      autoplay: false,
    },
  }
  return counter ? (
    <div className="videolist">
      {/* */}
      <div>
        <div className="videolistCartes">
          <div className="videolistInformation">
            {counter[0].videos.map(item => (
              <YouTube
                className="video"
                videoId={item.url.substr(item.url.indexOf('?v=') + 3)}
                opts={opts}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    error != undefined && <p>Something went wrong </p>
  )
}
export default Videolist
