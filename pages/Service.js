import { useSelector } from 'react-redux'

function Service() {
  var counter = ''
  var error = ''
  useSelector(state =>
    state && state.posts != undefined
      ? (counter = state.posts)
      : state && (error = state.error)
  )
  return counter ? (
    <div className="services">
      <div className="cartService">
        <div className="carteServiceborder">
          <i
            className="material-icons"
            style={{ fontSize: '50px ', color: 'white' }}
          >
            medical_services
          </i>

          {counter && counter[0].acts[0] != undefined ? (
            <h2> {counter[0].acts[0]}</h2>
          ) : null}
        </div>
      </div>
      <div className="cartService">
        <div className="carteServiceborder">
          <i
            className="material-icons"
            style={{ fontSize: '50px ', color: 'white' }}
          >
            add_location
          </i>
          {counter && counter[0].acts[1] != undefined ? (
            <h2> {counter[0].acts[1]}</h2>
          ) : null}
        </div>
      </div>
      <div className="cartService">
        <div className="carteServiceborder">
          <i
            className="material-icons"
            style={{ fontSize: '50px ', color: 'white' }}
          >
            local_hospital
          </i>
          {counter && counter[0].acts[2] != undefined ? (
            <h2> {counter[0].acts[2]}</h2>
          ) : null}
        </div>
      </div>
      <div className="cartService">
        <div className="carteServiceborder">
          <i
            className="material-icons"
            style={{ fontSize: '50px ', color: 'white' }}
          >
            local_hotel
          </i>
          {counter && counter[0].acts[3] != undefined ? (
            <h2> {counter[0].acts[3]}</h2>
          ) : null}
        </div>
      </div>
    </div>
  ) : (
    error != undefined && <p>Something went wrong </p>
  )
}
export default Service
