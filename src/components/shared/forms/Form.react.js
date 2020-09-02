import React, { Children, Component } from 'react'
import PropTypes from 'prop-types'

import FormTypes from './FormTypes'


export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {formData: {}, errors: []}
  }

  onSubmit(e) {
    e.preventDefault()
    if (this.props.onSubmit) this.props.onSubmit()
  }

  render() {
    return <form action='#' className='forms' {...this.props} onSubmit={this.onSubmit.bind(this)}>{this.props.children}</form>
  }

  getChildContext() {
    return {setFormValue: this.setFormValue.bind(this), errors: this.errors.bind(this)}
  }

  setFormValue(key, value) {
    var formData = this.state.formData
    formData[key] = value
    this.setState(formData)
  }

  formData() { return this.state.formData }

  // key detail here-- this only does a shallow crawl, so top level form components
  // need to supply their own validators. THis is open for discussion.
  getValidators(children) {
    return Children.toArray(children).map((child) => {
      if (child.props && child.props.validator)
        return {name: child.props.name, validator: child.props.validator}
    }).filter((validator) => { return typeof validator !== 'undefined' })
  }

  // not sure how I feel about this. There's something nice about it being
  // stateless and just looking at the errors array from the validate function
  isValid() {
    return !(this.state.errors && this.state.errors.length > 0)
  }

  errors() {
    var errors = this.props.errors ? this.props.errors : []
    return errors.concat(this.state.errors)
  }

  validate() {
    var validators = this.getValidators(this.props.children)
    var errors = validators.map((validator) => {
      return validator.validator(validator.name, this.formData())
    }).filter((v) => { return typeof v !== 'undefined' })
    this.setState({errors})
    return errors
  }
}

Form.childContextTypes = FormTypes.contextTypes

Form.propTypes = {
  errors: PropTypes.array,
  onSubmit: PropTypes.func
}