import React from "react";

const UsersList = (props) => {
  //   const users = props.users.map((user) => (
  //     <div>
  //       {/* <h4>
  //         <strong>
  //           {user.name.first} {user.name.last}
  //         </strong>
  //       </h4> */}
  //       {/* <img src={user.img}/>   */}
  //     </div>
  //   ));
  const users = props.users.map((user) => (
    <div key={user.id.value}>
      <h4>{user.name.first}</h4>
      <img src={user.picture.large} />
    </div>
  ));

  return <>{users}</>;
};

export default UsersList;
