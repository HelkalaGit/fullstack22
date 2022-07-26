import { useSelector, useDispatch } from 'react-redux'
import { increaseVotes } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  return (
    <div>
      {
        //anecdotes.sort((a, b) => { return a.votes < b.votes })

        anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(increaseVotes(anecdote.id))}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AnecdoteList
