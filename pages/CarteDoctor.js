import { useSelector } from 'react-redux'

function CarteDoctor() {
  var counter = ''
  var error = ''
  useSelector(state =>
    state && state.posts != undefined
      ? (counter = state.posts)
      : state && (error = state.error)
  )
  return counter ? (
    <div className="carte">
      <div className="img">
        {counter && counter[0].photos[4] != undefined ? (
          <img src={counter[0].photos[4]} className="App-logo" alt="logo" />
        ) : null}
      </div>
      <div className="name">
        {counter && counter[0].firstname != undefined ? (
          <h4>
            {counter[0].type.title +
              ' ' +
              counter[0].firstname +
              ' ' +
              counter[0].lastname}
          </h4>
        ) : null}
        {counter && counter[0].speciality != undefined ? (
          <h6> {counter[0].speciality.title}</h6>
        ) : null}
        <div className="arrow">
          <i className="material-icons">keyboard_arrow_down</i>
          <i className="material-icons">expand_more</i>
        </div>
      </div>
    </div>
  ) : (
    error != undefined && <p>Something went wrong </p>
  )
}
export default CarteDoctor
