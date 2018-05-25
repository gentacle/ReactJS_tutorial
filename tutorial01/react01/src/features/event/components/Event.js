import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Event extends Component {
  render() {
    return (
      <div>
        {
            this.props.loading ? "loading..." : null
        }
        {
            this.props.loading ? null : this.props.title
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      title: state.event.title,
      loading: state.event.pending
    }
  }

Event = connect(mapStateToProps, null )(Event);
export default Event;
