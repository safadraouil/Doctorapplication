import { useSelector } from 'react-redux'

function Articles() {
  var counter = ''
  var error = ''
  useSelector(state =>
    state && state.posts != undefined
      ? (counter = state.posts)
      : state && (error = state.error)
  )
  return counter ? (
    <span>
      <div className="ArticlesCartes">
        <div className="ArticlesCart">
          <div className="Articles">
            <div>
              <a style={{ fontWeight: 'bold ', color: 'rgb(12, 26, 32)' }}>
                DERNIERS
              </a>
              <a style={{ fontWeight: 'bold ', color: 'rgb(13, 163, 228)' }}>
                ARTICLES
              </a>
            </div>
            <div>
              <p>
                Doctor is responsible for medical and Health Care that can
                helpufl their patiant, and all of humanbig.
              </p>
            </div>
          </div>
          {/*carte5*/}
          <div className="ArticlesInformation">
            {counter[0].articles.map(item => (
              <div className="ArticleDoctor">
                {' '}
                <img src={item.image} className="App-logo" alt="logo" />
                <h3>{item.title}</h3>
                <h5>{item.body}</h5>
                <button className="buttonRead">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </span>
  ) : (
    error != undefined && <p>Something went wrong </p>
  )
}
export default Articles
