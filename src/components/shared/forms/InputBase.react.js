import React from 'react'
import PropTypes from 'prop-types'
import validate from 'validate.js'
import FormTypes from './FormTypes'

export default class InputBase extends React.PureComponent {
  constructor(props) {
    super(props)
    this.setInitialState(props)
  }

  setInitialState(props) {
    this.state = {formValue: props.value}
  }

  componentDidMount() {
    if (this.props.defaultValue)
      this.context.setFormValue(this.props.name, this.props.defaultValue)
  }

  static getDerivedStateFromProps(props, state) {
    //necessary for forms that change in real time, but re-use components...
    if (props.name != state.name) {
      return {
        formValue: props.value
      }
    }
    return null
  }

  name() {
    return this.props.name ? this.props.name : this.props.label.replace(/\s/g, '_')
  }

  onFormElementChange(event) {
    var valueType = (this.props.type === 'checkbox' ? event.target.checked : event.target.value)
    this.setState({formValue: valueType}) //possibly don't need this anymore
    this.context.setFormValue(this.props.name, valueType)
    if (this.props.onChange)
      this.props.onChange(event)
  }

  formValue() {
    var data = {}
    data[this.props.name] = this.state.formValue
    return data
  }

  formRawValue() {
    return this.state.formValue
  }

  clearFormValue(name) {
    this.context.setFormValue(name, undefined)
  }

  validate() {
    if (this.props.required === true) {
      var errors = validate(this.formValue(), {presence: true}, {format: 'flat'})
      this.setState({errors})
    }
  }

  errors(name) {
    // var name = name ? name : this.props.name
    return this.context.errors().filter(error => error.name === this.props.name)
            .reduce((errors, error) => errors.concat(error.errors), [])
  }
}

InputBase.contextTypes = FormTypes.contextTypes
InputBase.propTypes = {
  name: PropTypes.string,
  validator: PropTypes.func
}
InputBase.defaultProps = {defaultValue: null, errors: [], required: false, value: null}
