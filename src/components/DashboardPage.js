import React from 'react';
import PostList  from '../components/PostList';
import PostListFilters from '../components/PostListFilters';

export const DashboardPage = () => (
  <div>
    <PostList />
    <PostListFilters />
  </div>
);

export default DashboardPage;
