import { useSelector } from 'react-redux'

function QuestionRepense() {
  var counter = ''
  var error = ''
  useSelector(state =>
    state && state.posts != undefined
      ? (counter = state.posts)
      : state && (error = state.error)
  )
  return counter ? (
    <div className="questionRep">
      <div
        className="Articles"
        style={{ backgroundColor: 'rgb(231, 232, 238)' }}
      >
        <div>
          <a style={{ fontWeight: 'bold ', color: 'rgb(12, 26, 32)' }}>
            QUESTION
          </a>
          <a style={{ fontWeight: 'bold ', color: 'rgb(13, 163, 228)' }}>
            REPONSE
          </a>
        </div>
        <div>
          <p>
            the Doctor puts stock in conveying the most elevated quality
            administration with quality sympathy every day.
          </p>
        </div>
      </div>
    </div>
  ) : (
    error != undefined && <p>Something went wrong </p>
  )
}
export default QuestionRepense
