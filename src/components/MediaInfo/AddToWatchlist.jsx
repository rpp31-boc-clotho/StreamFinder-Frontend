import React from 'react';

const AddToWatchlist = function(props) {
  let inWatchlist = false;
  let pluralType = props.type + 's';

  if (pluralType === 'tvs') {
    pluralType = 'shows';
  }

  console.log('watchlist:', props.watchList);
  console.log('just this type?', props.watchList[pluralType]);

  if (props.watchList[pluralType] !== undefined && props.watchList[pluralType].includes(parseInt(props.id))) {
    let thisButton = document.querySelector('.addToWatchlist');
    thisButton.classList.add('added');
  }

  return (
    <div className="addToWatchlist" onClick={function() {
      let thisButton = document.querySelector('.addToWatchlist');
      thisButton.classList.add('added');

      let data = {
        username: props.email,
        watchType: pluralType,
        watchId: parseInt(props.id)
      };
      console.log('attempting to add:', data);
      props.addWatchList(data);
    }}>
      <span></span>
      <p>watchlist</p>
    </div>
  )
}

export default AddToWatchlist;