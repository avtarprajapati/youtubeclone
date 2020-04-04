import React from 'react';
import Skeleton from 'react-loading-skeleton';

const CardLoading = () => {
  return Array(5)
    .fill()
    .map((item, i) => {
      return (
        <div className="video-item item" key={i}>
          <Skeleton width={100} height={100} />
          <div className="content">
            <div className="ui header" style={{ marginLeft: '5px' }}>
              <Skeleton width={200} count={3} />
            </div>
          </div>
        </div>
      );
    });
};

const Loading = () => {
  return (
    <div className="ui row">
      <div className="eleven wide column">
        <div>
          <Skeleton height={350} />
          <div className="ui segment">
            <h4 className="ui header">
              <Skeleton />
            </h4>
            <p>
              <Skeleton count={2} />
            </p>
          </div>
        </div>
      </div>
      <div className="five wide column">
        <div className="ui list">{CardLoading()}</div>
      </div>
    </div>
  );
};

export default Loading;
