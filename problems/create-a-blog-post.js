// Blog Post object w/ title, body, author, views, comments
//comments should have author and body
//isLive

const blog = {}

blog.title = 'New Title';
blog.body = 'this is the body of the blog post';
blog.author = 'davis forester';
blog.views = '22';
blog.comments = [
    {
        body: 'this is my comment',
        author: 'David Jenkins'
    },
]
blog.isLive = 'True'

console.log(blog)

//Moshs solution to using an objject literal to do a blog post

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'a', body: 'b' },
        { author: 'c', body: 'd' },
    ],
    isLive: true

};

console.log(post)
