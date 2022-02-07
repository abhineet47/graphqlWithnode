import React, { Component } from 'react';
import { companies } from './fake-data';
import { loadCompany } from './request';

export class CompanyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {company:null};
  }
  async componentDidMount(){
    const {companyId} = this.props.match.params;
    const company= await loadCompany(companyId)
    this.setState({company})
  }

  render() {
    const {company} = this.state;
    return (
      <div>
        <h1 className="title">{company?.name}</h1>
        <div className="box">{company?.description}</div>
      </div>
    );
  }
}
