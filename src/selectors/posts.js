import moment from 'moment';

const getVisiblePost = (postData , { text, sortBy }) => {
    if (text) {
        const filteredData = postData.filter((post) => {     
            return sortBy === 'title' ? post.title.toLowerCase().includes(text.toLowerCase()) : post;
        });

        return filteredData;
    }
    else {
        return postData;
    }    
}

export default getVisiblePost;