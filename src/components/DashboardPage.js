import React from 'react';
import PostList  from '../components/PostList';
import PostListFilters from '../components/PostListFilters';
import { Link } from 'react-router-dom';

export const DashboardPage = () => (
  <div>
    <PostListFilters />
    <div className="page-header__actions content-container">
    <Link className="button" to="add">Add Post</Link>
</div>
    <PostList />
  </div>
);

export default DashboardPage;
