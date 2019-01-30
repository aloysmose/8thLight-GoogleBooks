import React from 'react';

const PageNav = props => {
  const { pageIdx, getNewPage } = props;
  return (
    <div id="pageNav">
      {pageIdx !== 0 ? (
        <button
          id="prev"
          onClick={() => {
            getNewPage('prev');
          }}
        >
          Back
        </button>
      ) : null}

      <button
        id="next"
        onClick={() => {
          getNewPage('next');
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PageNav;
