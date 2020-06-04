import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import CarteDoctor from './CarteDoctor'
import Information from './Information'
import Service from './Service'
import Articles from './Articles'
import QuestionRepense from './QuestionRespense'
import VideosList from './Videolist'

const Blog = () => {
  const dispatch = useDispatch()
  var counter = ''
  var error = ''

  useEffect(() => {
    axios
      .get('https://ws.med.tn/web/doctorInfos/?api_key=drmateri')
      .then(response => {
        console.log('state.response', response)
        dispatch({
          type: 'SET_POSTS',
          payload: Object.values(response)[0],
        })
      })
      .catch(error => {
        dispatch({ type: 'SET_ERROR', payload: error })
      })
  }, [])

  return (
    <div className="containerGlobal">
      <div className="container">
        {/* // carte1 */}
        <CarteDoctor />
        {/* // carte2  */}
        <Information />
        {/* // carte3  */}
        <Service />
        {/* // carte4  */}
        <Articles />
        {/*carte5*/}
        <QuestionRepense />
        {/* carte6*/}
        <VideosList />
        {/* carte7*/}
        <div className="footer">
          <a>Copyright ©2020 Med.tn</a>
        </div>
      </div>
    </div>
  )
}

export default Blog
