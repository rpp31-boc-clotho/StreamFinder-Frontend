import React, { useState, useEffect } from 'react';




const Subscriptions = (props) => {

  let providers;
  const subs = [];

  if (props.providersList) {
    providers = Object.keys(props.providersList);
    for (let i = 0; i < providers.length; i++) {
      if (props.providersList[providers[i]]) {
        subs.push(providers[i])
      }
    }
  }

  if (subs.length === 0) {
    subs.push('Add Subs')
  }

  return (
    <div>
      {subs.map((sub, i) =>
        <div key={i}>{sub}</div>
      )}
    </div>
  )

}

export default Subscriptions;