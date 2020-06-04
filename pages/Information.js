import { useSelector } from 'react-redux'

function Information() {
  var counter = ''
  var error = ''
  useSelector(state =>
    state && state.posts != undefined
      ? (counter = state.posts)
      : state && (error = state.error)
  )
  return counter ? (
    <div className="information">
      <div className="informationDoctor">
        <div className="presentation">
          {counter && counter[0].speciality != undefined ? (
            <span>
              <span className="nameDoctor">
                <a className="about ">About the</a>
                <a className="doctor"> Doctor</a>
              </span>
              <p>{counter[0].diploma}</p>

              <button className="button1">Read More</button>
              <button className="button2">Export Service</button>
            </span>
          ) : null}
        </div>
        <div className="Appointment">
          <h2>Appointment Schedule.</h2>

          <div>
            <table key={'w'}>
              <tbody key={'x'}>
                <td key={'a'}>
                  <th key={'b'}>
                    <a>Day</a>
                  </th>
                  <span key={'c'}>
                    <tr key={'d'}>
                      <a key={'e'}>Mon-Tues</a>
                    </tr>
                    <tr key={'f'}>
                      <a>Wednesday</a>
                    </tr>
                    <tr key={'g'}>
                      <a>Thursday</a>
                    </tr>
                    <tr key={'h'}>
                      <a key={'i'}>Friday</a>
                    </tr>
                    <tr key={'j'}>
                      <a key={'k'}>saturday</a>
                    </tr>
                  </span>
                </td>
                <td key={'l'}>
                  <th key={'m'}>
                    <a key={'n'}>Hour</a>
                  </th>
                  {counter && counter[0].winter != undefined ? (
                    <div key={'o'}>
                      {Object.values(counter[0].winter).map((item, index) =>
                        item[0] != undefined &&
                        item[0].start != undefined &&
                        item[1] &&
                        item[1].end ? (
                          <div key={'o'} className="hourColumn">
                            <tr key={index}>
                              <a key={index}>
                                {item[0].start + '-' + item[1].end}{' '}
                              </a>
                            </tr>
                          </div>
                        ) : null
                      )}
                    </div>
                  ) : null}
                </td>
              </tbody>
            </table>
          </div>
          <div>
            {' '}
            <button className="button3">Export Service</button>
          </div>
        </div>
        <div className="cartdoc">
          <div className="cartimg">
            <div className="img">
              <img src={counter[0].photos[4]} className="App-logo" alt="logo" />
            </div>

            {counter && counter[0].firstname != undefined ? (
              <span className="nameDoctor">
                <a className="nameD ">
                  {counter[0].firstname + ' ' + counter[0].lastname + ' -'}
                </a>
                <a className="specialtyD"> {counter[0].speciality.title}</a>{' '}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : (
    error != undefined && <p>Something went wrong </p>
  )
}
export default Information
