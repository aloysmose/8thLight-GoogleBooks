import axios from 'axios';
import { formatQuery } from './utilFunctions';

export async function handleSubmit(event) {
  event.preventDefault();
  const { query } = this.state;
  const response = await handleRequest(query, 0);
  this.setState({
    results: response,
    query: '',
    currSearch: query,
    pageIdx: 0,
  });
}

export function handleChange(event) {
  this.setState({
    query: event.target.value,
  });
}

export async function getNewPage(direction) {
  let pageDiff;
  direction === 'next' ? (pageDiff = 1) : (pageDiff = -1);
  const newIdx = this.state.pageIdx + pageDiff;
  const query = this.state.currSearch;
  const response = await handleRequest(query, newIdx);
  this.setState({
    pageIdx: newIdx,
    results: response,
  });
  window.scrollTo(0, 0);
}

export let handleRequest = async function(query, idx) {
  try {
    let response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${formatQuery(
        query
      )}&startIndex=${idx}`
    );
    return response.data.items;
  } catch (error) {
    return 'error';
  }
};
