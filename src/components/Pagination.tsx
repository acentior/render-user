import React from 'react';
import classnames from 'classnames';
import './Pagination.scss';
import { PaginationProps } from '../types/components';

const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    currentPage,
    className,
    disableNext
  } = props;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item', {
          disabled: currentPage <= 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      <span className='pageNum'>{ currentPage }</span>
      <li
        className={classnames('pagination-item', {
          disabled: disableNext
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
