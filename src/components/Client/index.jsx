import React from "react";
import faker, { internet } from 'faker'
import Phone from '../UI/Phone'
import Email from '../UI/Email'


class Client extends React.Component {
  render () {
    const { firstName } = this.props
    const { lastName } = this.props
    const { phone } = this.props
    const { avatar } = this.props
    const { job } = this.props
    return(
      <>
        <div class="card mt-3" >
          <img class="img-card-top" src={avatar} alt="avatar" style={{width: "20em"}}></img>
          <div class='card-body'>
            <strong>{firstName + " " + lastName}</strong><br></br>
            <i>-{job}</i>
          </div>
          <div class='card-footer d-flex justify-content-between'>
            <Email firstName={firstName} lastName={lastName}/>
            <Phone phoneNumber={phone}/>
          </div>
        </div>
      </>
    )
  }
}

class Clients extends React.Component {
  render() {
    let clientList = [];
    let i = 0;

    for (i; i < 100; i++) {
      let data = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        job: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
      };
      clientList.push(data);
    }
    console.log(clientList);

    return (
      <>
        {clientList.map((client)=>{
          return <Client job={client.job} avatar={client.avatar} firstName={client.firstName} lastName={client.lastName} phone={client.phone} />
        })}
      </>
    )
  }
}


export default Clients;