import React, { Component } from 'react'
import { Link } from 'react-router'
import homeIcon from '../Images/home_4.png'
import creditIcon from '../Images/credit_4.png'
import { graphql } from 'react-apollo'

import { queryKid } from '../graphql'

@graphql(...queryKid({
  options: props => ({ variables: { id: props.params.id } })
}))
class ChildScreen extends Component {
  kidHeader () {
    if (this.props.queryKid.loading) return '...'
    console.log(this.props.queryKid)
    return this.props.queryKid.Kid.name
  }

  render () {
    return <div>
      <header className='childHeader'>
        <h2>{ this.kidHeader() }</h2>
        <section className='home'>
          <Link to='/'>
            <img src={homeIcon} height='55px' width='55px' />
          </Link>
        </section>
        <section className='credits'>
          <Link to='/bank'>
            <img src={creditIcon} height='55px' width='55px' />
          </Link>
        </section>
      </header>
      <h3 className='choresRemaining'>4/7</h3>
      <section className='choreList'>
        <table>
          <tbody>
            <tr>
              <td>
                <input type='checkBox' value='Check' />
              </td>
              <td className='chore'>Chore</td>
              <td className='choreValue'>$$</td>
            </tr>
            <tr>
              <td>
                <input type='checkBox' value='Check' />
              </td>
              <td className='chore'>Chore 2</td>
              <td className='choreValue'>$$</td>
            </tr>
            <tr>
              <td>
                <input type='checkBox' value='Check' />
              </td>
              <td className='chore'>Chore 3</td>
              <td className='choreValue'>$$</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  }
}

export default ChildScreen
