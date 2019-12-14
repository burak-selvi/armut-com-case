import React from 'react';
import DetailCard from './../components/DetailCard';
import movie1 from '../data/0001';
import movie2 from '../data/0002';
import movie3 from '../data/0003';


export default function MovieDetail(props) {
  let movie = "";
  const urlId = props.match.params.id
  if (urlId === '0001') {
    movie = movie1;
  }
  if (urlId === '0002') {
    movie = movie2;
  }
  if (urlId === '0003') {
    movie = movie3;
  }
  return (
    <DetailCard key={movie.id} {...movie} />
  );
}
