import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function RepoCard() {

  const result = useSelector(state => state.result);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  return (
    <div>
      THIS IS CARD COMP
    </div>
  )
}
