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
    return (
      <div>
        Add Your Current Subscriptions
      </div>
    )
  } else {
    return (
      <div className="profileSubscriptionsList">
        {subs.map((sub, i) =>
          <div className="subscribedProviders" key={i}>
            <img className="providerLogo" src={`/providers/${sub}.jpeg`}></img>
            <div className="userSubscribed">{sub}</div>
          </div>
        )}
      </div>
    )
  }

}

export default Subscriptions;