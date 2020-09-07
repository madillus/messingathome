import PropTypes from 'prop-types'
import React from 'react'

const Header = props => ( <
  header id = "header"
  style = {
    props.timeout ? {
      display: 'none'
    } : {}
  } >
  <
  div className = "logo" >
  <
  span className = "icon fa-diamond" > < /span> < /
  div > <
  div className = "content" >
  <
  div className = "inner" >
  <
  h1 > Aidan Gilmore < /h1> <
  p >
  A fully trained web developer by {
    '@'
  } <
  a href = "https://upleveled.io/" > Upleveled < /a> and prepared <
  br / >
  to work
  for free under the {
    ' '
  } <
  a href = "https://www.ams.at/" > AMS < /a> protocol. < /
  p > <
  /div> < /
  div > <
  nav >
  <
  ul >
  <
  li >
  <
  button onClick = {
    () => {
      props.onOpenArticle('intro')
    }
  } >
  Intro <
  /button> < /
  li > <
  li >
  <
  button onClick = {
    () => {
      props.onOpenArticle('work')
    }
  } >
  Work <
  /button> < /
  li > <
  li >
  <
  button onClick = {
    () => {
      props.onOpenArticle('about')
    }
  } >
  About <
  /button> < /
  li > <
  li >
  <
  button onClick = {
    () => {
      props.onOpenArticle('contact')
    }
  } >
  Contact <
  /button> < /
  li > <
  /ul> < /
  nav > <
  /header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header